(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{102:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(99),c=n(96),i=n(47),s=n.n(i);const l=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:i,values:p,groupId:b}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(o.a)(),[m,g]=Object(r.useState)(i);if(null!=b){const e=d[b];null!=e&&e!==m&&p.some(t=>t.value===e)&&g(e)}const y=e=>{g(e),null!=b&&f(b,e)},O=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":m===e,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":m===e}),key:e,ref:e=>O.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(O,e.target,e),onFocus:()=>y(e),onClick:()=>y(e)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===m)[0]))}},103:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),o=(n(0),n(94)),c=n(102),i=n(103),s={title:"Usage"},l={unversionedId:"denon/usage",id:"denon/usage",isDocsHomePage:!1,title:"Usage",description:"Denon is designed to work as a drop-in replacement for the deno cli. It also supports configuration files if you want to create shorcuts for your most used commands or you want to fine tune the file watcher.",source:"@site/docs/denon/usage.md",permalink:"/docs/denon/usage",editUrl:"https://github.com/denosaurs/website/edit/master/website/docs/denon/usage.md",lastUpdatedBy:"Qu4k",lastUpdatedAt:1596119060,sidebar:"denon",previous:{title:"Installation",permalink:"/docs/denon/installation"},next:{title:"Templates",permalink:"/docs/denon/configuration/templates"}},u=[{value:"Working with the CLI",id:"working-with-the-cli",children:[]},{value:"Working with configuration files",id:"working-with-configuration-files",children:[]}],p={rightToc:u};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Denon")," is designed to work as a ",Object(o.b)("strong",{parentName:"p"},"drop-in replacement")," for the deno cli. It also supports configuration files if you want to create shorcuts for your most used commands or you want to fine tune the file watcher."),Object(o.b)("h2",{id:"working-with-the-cli"},"Working with the CLI"),Object(o.b)("p",null,"Every command that you usually run with the deno cli works with denon out of the box:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"denon run app.ts\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"denon run --allow-net app.ts\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"denon run --allow-net app.ts --port=3000\n")),Object(o.b)("h2",{id:"working-with-configuration-files"},"Working with configuration files"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Denon")," also supports scripts inside configurations in your local directory, allowing you to declare script once and then run them just by calling their name."),Object(o.b)("p",null,"You can create a configuration as a JSON, YAML, or Typescript file:"),Object(o.b)(c.a,{groupId:"configuration-format",defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YML",value:"yaml"},{label:"Typescript",value:"typescript"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:'title="denon.json"',title:'"denon.json"'}),'{\n  "scripts": {\n    "start": "deno run app.ts",\n    "test": "deno test --allow-read"\n  }\n}\n'))),Object(o.b)(i.a,{value:"yaml",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml",metastring:'title="denon.yml"',title:'"denon.yml"'}),'scripts:\n  start: "deno run app.ts"\n  test: "deno test --allow-read"\n'))),Object(o.b)(i.a,{value:"typescript",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="denon.config.ts"',title:'"denon.config.ts"'}),'import { DenonConfig } from "https://deno.land/x/denon/mod.ts";\n\nconst config: DenonConfig = {\n  scripts: {\n    start: "deno run app.ts",\n    test: "deno test --allow-read",\n  },\n};\n\nexport default config;\n')))),Object(o.b)("p",null,"In the same directory as the configuration you can then run your application by simply typing:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"denon start\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"denon test\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Denon")," configuration is very powerful, you can learn how to tweak script options and file watcher parameters in the Advanced configuration"))}b.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(f,i(i({ref:t},l),{},{components:n})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},98:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},99:function(e,t,n){"use strict";var r=n(0),a=n(98);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}}}]);