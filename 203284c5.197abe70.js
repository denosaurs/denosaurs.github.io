(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(6),r=(n(0),n(87)),i=n(92),l=n(93),c={title:"Templates"},s={unversionedId:"denon/configuration/templates",id:"denon/configuration/templates",isDocsHomePage:!1,title:"Templates",description:"Denon is designed to be simple but also extremely configurable to fit your project needs. It supports JSON, YAML, and Typescript configuration file. Example in this page are provided in all three formats.",source:"@site/docs/denon/configuration/templates.md",permalink:"/docs/denon/configuration/templates",editUrl:"https://github.com/denosaurs/website/edit/master/docs/denon/configuration/templates.md",sidebar:"denon",previous:{title:"Usage",permalink:"/docs/denon/usage"},next:{title:"Script Options",permalink:"/docs/denon/configuration/script"}},p=[],u={rightToc:p};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Denon")," is designed to be simple but also extremely configurable to fit your project needs. It supports ",Object(r.b)("inlineCode",{parentName:"p"},"JSON"),", ",Object(r.b)("inlineCode",{parentName:"p"},"YAML"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"Typescript")," configuration file. Example in this page are provided in all three formats."),Object(r.b)("p",null,"to create a basic configuration in the root directory of your project you can run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"denon --init\n")),Object(r.b)("p",null,"this will create a basic ",Object(r.b)("inlineCode",{parentName:"p"},"denon.json")," file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "start": "app.js"\n  }\n}\n')),Object(r.b)("p",null,"you can also initialize from a custom template\n(see the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/denosaurs/denon/tree/master/templates"}),Object(r.b)("inlineCode",{parentName:"a"},"templates"))," folder for all the available templates)"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"denon --init <template>\n")),Object(r.b)(i.a,{groupId:"configuration-format",defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YML",value:"yaml"},{label:"Typescript",value:"typescript"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"json",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="template for denon.json"',title:'"template',for:!0,'denon.json"':!0}),'{\n  "$schema": "https://deno.land/x/denon/schema.json",\n  "scripts": {\n    "start": {\n      "cmd": "deno run app.ts",\n      "desc": "run my app.ts file"\n    }\n  }\n}\n'))),Object(r.b)(l.a,{value:"yaml",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml",metastring:'title="template for denon.yml"',title:'"template',for:!0,'denon.yml"':!0}),'scripts:\n  start:\n    cmd: "deno run app.ts"\n    desc: "run my app.ts file"\n'))),Object(r.b)(l.a,{value:"typescript",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="template for denon.config.ts"',title:'"template',for:!0,'denon.config.ts"':!0}),'import { DenonConfig } from "https://deno.land/x/denon/mod.ts";\n// ^ imports will be removed for semplicity in the next examples\nexport default <DenonConfig>{\n  scripts: {\n    start: {\n      cmd: "deno run app.ts",\n      desc: "run my app.ts file",\n    },\n  },\n};\n')))))}b.isMDXComponent=!0},92:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(95),i=n(85),l=n(51),c=n.n(l),s=37,p=39;t.a=function(e){var t=e.block,n=e.children,l=e.defaultValue,u=e.values,b=e.groupId,m=Object(r.a)(),d=m.tabGroupChoices,f=m.setTabGroupChoices,j=Object(a.useState)(l),O=j[0],g=j[1];if(null!=b){var y=d[b];null!=y&&y!==O&&u.some((function(e){return e.value===y}))&&g(y)}var v=function(e){g(e),null!=b&&f(b,e)},h=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},u.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return h.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(h,e.target,e)},onFocus:function(){return v(t)},onClick:function(){return v(t)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===O}))[0]))}},93:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);