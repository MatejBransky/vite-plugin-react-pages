---
title: Advanced FS Routing
sort: 5
---

## Advanced Filesystem Routing: findPages API

> The "Basic Filesystem Routing Convention" should satisfy most users' needs. **You probably don't need to read this advanced guide**.

For advanced users, vite-pages let you implement your own filesystem routing convention: you can **teach vite-pages how to collect pages from your project**.

When [configuring vite-plugin-react-pages](https://github.com/vitejs/vite-plugin-react-pages/blob/master/fixtures/custom-find-pages/vite.demos.ts), you can pass the `findPages` option.

Here is the definition of the vite-plugin-react-pages config function:

```ts
function pluginFactory(
  opts: {
    pagesDir?: string
    findPages?: (helpers: IFindPagesHelpers) => Promise<void>
    useHashRouter?: boolean
    staticSiteGeneration?: {}
  } = {}
): VitePlugin

interface IFindPagesHelpers {
  /**
   * readFile util with cache
   */
  readFile: (filePath: string) => Promise<string>
  /**
   * Read the static data from a file.
   */
  extractStaticData: (
    filePath: string
  ) => Promise<{
    [key: string]: any
    sourceType: string
  }>
  /**
   * Glob utils. Return matched file paths.
   */
  globFind: (
    baseDir: string,
    glob: string
  ) => Promise<
    {
      relative: string
      absolute: string
    }[]
  >
  /**
   * Use the basic filesystem routing convention to find pages.
   */
  defaultFindPages: (baseDir: string) => Promise<IPageData[]>
  /**
   * Register page data.
   * User who custom findPages should use it to register the data he/she finds.
   */
  addPageData: (pageData: IPageData) => void
}

interface IPageData {
  /**
   * The page route path.
   * User can register multiple page data with same pageId,
   * as long as they have different keys.
   * Page data with same pageId will be merged.
   *
   * @example '/posts/hello-world'
   */
  pageId: string
  /**
   * The data key.
   * If it conflicts with an already-registered data,
   * error will be thrown.
   *
   * @default 'main'
   */
  key?: string
  /**
   * The path to the runtime data module
   */
  dataPath?: string

  staticData?: any
}
```

You can implement your own filesystem routing convention with the `findPages` API. It provides some useful helper functions to you. It even let you create a page with runtime data that is composed of multiple files.

### Composed Pages

Normal filesystem routing mechanism assumes that one page must have a single entry file. But vite-pages doesn't force that rule! **Vite-pages let you create a page with runtime data that is composed of multiple files.** This is a very powerful feature of vite-pages's filesystem routing mechanism.

While collecting pages data with `addPageData`, you can register multiple data with same `pageId`. Page data with same `pageId` will be merged.

#### Example

For example, suppose you are developing a React component library. Your project have file structure like this:

```text
src
├── Button
│   ├── demos
│   │   ├── demo1.tsx
│   │   └── demo2.tsx
│   ├── index.tsx
│   └── style.module.css
├── Card
│   ├── demos
│   │   ├── demo1.tsx
│   │   └── demo2.tsx
│   ├── index.tsx
│   └── style.module.css
└── index.ts
```

You want to use Vite as your local demo development environment. How to collect demos of all components from this project? The file structure doesn't follow our "Basic Filesystem Routing Convention".

Answer: use `findPages` API to implement your own filesystem routing convention! Here is an example of the vite-plugin-react-pages config function:

```ts
pages({
  pagesDir: path.join(__dirname, 'pages'),
  findPages: async (helpers) => {
    const pagesByComponent: { [comp: string]: any } = {}
    const demosBasePath = path.join(__dirname, 'src')
    // find all demo modules
    let demoPaths = await helpers.globFind(
      demosBasePath,
      '*/demos/**/*.{[tj]sx,md?(x)}'
    )

    await Promise.all(
      demoPaths.map(async ({ relative, absolute }) => {
        const match = relative.match(/(.*)\/demos\/(.*)\.([tj]sx|mdx?)$/)
        if (!match) throw new Error('unexpected file: ' + absolute)
        const [_, componentName, demoPath] = match
        const publicPath = `/${componentName}`

        // register the demo module as page daga
        helpers.addPageData({
          pageId: publicPath,
          key: demoPath,
          dataPath: absolute,
          staticData: await helpers.extractStaticData(absolute),
        })

        if (!pagesByComponent[componentName]) {
          pagesByComponent[componentName] = {
            publicPath,
          }
        }
      })
    )

    // add static data(title) for each component page
    Object.entries(pagesByComponent).forEach(
      ([componentName, { publicPath }]) => {
        helpers.addPageData({
          pageId: publicPath,
          key: 'title',
          staticData: componentName + ' Title',
        })
      }
    )

    // we also want to collect pages from `/pages` with basic filesystem routing convention
    const defaultPages = await helpers.defaultFindPages(
      path.join(__dirname, 'pages')
    )
    defaultPages.forEach(helpers.addPageData)
  },
}),
```

Checkout the complete example in [the custom-find-pages fixture](https://github.com/vitejs/vite-plugin-react-pages/tree/master/fixtures/custom-find-pages).
