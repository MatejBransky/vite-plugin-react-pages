var e=Object.prototype.hasOwnProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.propertyIsEnumerable,o=Object.assign;import{c as n,L as i}from"./clientRender.02544690.js";const r={};function l(l){var{components:p}=l,s=((o,n)=>{var i={};for(var r in o)e.call(o,r)&&n.indexOf(r)<0&&(i[r]=o[r]);if(null!=o&&t)for(var r of t(o))n.indexOf(r)<0&&a.call(o,r)&&(i[r]=o[r]);return i})(l,["components"]);return n("wrapper",o(o(o({},r),s),{components:p,mdxType:"MDXLayout"}),n("h1",null,"📘 vite-plugin-react-page"),n("p",null,n("a",o({parentName:"p"},{href:"https://github.com/vitejs/vite-plugin-react-pages"}),"vite-plugin-react-page")," (vite-pages) is a React app framework powered by ",n("a",o({parentName:"p"},{href:"https://github.com/vitejs/vite"}),"vite"),". It is very suitable for:"),n("ul",null,n("li",{parentName:"ul"},"blog site"),n("li",{parentName:"ul"},"documentation site for your library or product"),n("li",{parentName:"ul"},"stories/demos/playgrounds for your React components or libs(like ",n("a",o({parentName:"li"},{href:"https://storybook.js.org/"}),"storybook"),")")),n("p",null,"It provides many features that help developers ",n("strong",{parentName:"p"},"build a React App quickly"),":"),n("ul",null,n("li",{parentName:"ul"},n("strong",{parentName:"li"},"Fantastic development experience"),". Start the local development server in a blink, even when you have many pages. Hot module replacement works with React and Mdx, so you can get instant feedback when you edit your code."),n("li",{parentName:"ul"},n("strong",{parentName:"li"},"Filesystem based routing"),". By following a ",n(i,{to:"/fs-routing",mdxType:"Link"},"simple filesystem routing convention"),", It is easy to create, locate and develop pages. You don't need to worry about routing configuration. For advanced users, you can ",n(i,{to:"/advanced-fs-routing",mdxType:"Link"},"tell vite-pages how to find page files"),", so that vite-pages can work with any project file structure."),n("li",{parentName:"ul"},n("strong",{parentName:"li"},"Support Mdx"),'. You can write content with either "normal React" or ',n("a",o({parentName:"li"},{href:"https://mdxjs.com/"}),"Mdx"),". Normal Reactjs is more flexible and composable. While Mdx is more readable and easier to edit. You can choose the proper format for your task. These formats can import each other like normal esModules."),n("li",{parentName:"ul"},n("strong",{parentName:"li"},"Powerful ",n(i,{to:"/theme",mdxType:"Link"},"theme customization")),". Vite-pages itself doesn't render any concrete DOM node. You can customize ",n("strong",{parentName:"li"},"anything")," on the page with theme. It is easy to write a theme that is sharable and configurable. If you use typescript, the users of your theme will get type-check and intelliSense."),n("li",{parentName:"ul"},n("strong",{parentName:"li"},"Automatic code splitting based on pages"),". Visitors don't need to download the whole app, they only load page data as needed."),n("li",{parentName:"ul"},n("strong",{parentName:"li"},"Support static site generation out of the box"),". By pre-rendering your app into HTML at buildtime, users can see the content before any JS is loaded. With this feature, you can deploy your single page apps on GitHub Pages(which ",n("a",o({parentName:"li"},{href:"https://www.google.com/search?q=github+pages+single+page+apps&oq=github+pages+single+page+apps"}),"doesn't natively support single page apps"),").")),n("h2",null,"Getting stated"),n("ol",null,n("li",{parentName:"ol"},"Initialize a vite-pages project:",n("ul",{parentName:"li"},n("li",{parentName:"ul"},"execute ",n("inlineCode",{parentName:"li"},"npm init vite-pages app-demo --template app")," to initialize an app project, or"),n("li",{parentName:"ul"},"execute ",n("inlineCode",{parentName:"li"},"npm init vite-pages library-demo --template lib")," to initialize a library project, or"),n("li",{parentName:"ul"},"execute ",n("inlineCode",{parentName:"li"},"npm init vite-pages library-monorepo-demo --template lib-monorepo")," to initialize a library project."))),n("li",{parentName:"ol"},n("inlineCode",{parentName:"li"},"npm install")),n("li",{parentName:"ol"},n("inlineCode",{parentName:"li"},"npm run dev")," and play with the local dev envirenment."),n("li",{parentName:"ol"},n("inlineCode",{parentName:"li"},"npm run build"),"."),n("li",{parentName:"ol"},n("inlineCode",{parentName:"li"},"npm run ssr"),". You can ",n("a",o({parentName:"li"},{href:"https://developers.google.com/web/tools/chrome-devtools/javascript/disable"}),"disable javascript in your browser"),", to verify if it can still render.")))}l.isMDXComponent=!0;var p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:l});const s={};s.main=p;export default s;