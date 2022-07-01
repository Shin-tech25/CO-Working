(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{319:function(t,e,a){"use strict";a.r(e);var s=a(5),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"writing-a-vuepress-theme"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#writing-a-vuepress-theme"}},[t._v("#")]),t._v(" Writing a VuePress theme")]),t._v(" "),e("p",[t._v("To write a theme, create a "),e("code",[t._v(".vuepress/theme")]),t._v(" directory in your docs root, and then create a "),e("code",[t._v("Layout.vue")]),t._v(" file:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(".\n└─ .vuepress\n   └─ `theme`\n       └─ Layout.vue\n")])])]),e("p",[t._v("From there it's the same as developing a normal Vue application. It is entirely up to you how to organize your theme.")]),t._v(" "),e("h2",{attrs:{id:"content-outlet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#content-outlet"}},[t._v("#")]),t._v(" Content Outlet")]),t._v(" "),e("p",[t._v("The compiled content of the current "),e("code",[t._v(".md")]),t._v(" file being rendered will be available as a special "),e("code",[t._v("<Content/>")]),t._v(" global component. You will need to render it somewhere in your layout in order to display the content of the page. The simplest theme can be just a single "),e("code",[t._v("Layout.vue")]),t._v(" component with the following content:")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("theme-container"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Content")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[e("strong",[t._v("Also see:")])]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/guide/markdown-slot.html"}},[t._v("Markdown Slot")])],1)]),t._v(" "),e("h2",{attrs:{id:"directory-structure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#directory-structure"}},[t._v("#")]),t._v(" Directory Structure")]),t._v(" "),e("p",[t._v("Just one "),e("code",[t._v("Layout.vue")]),t._v(" might not be enough, and you might also want to define more layout components in the theme for using on different pages. You may also want to customize the "),e("RouterLink",{attrs:{to:"/config/#palette-styl"}},[t._v("palette")]),t._v(", and even apply some plugins.")],1),t._v(" "),e("p",[t._v("So it's time to reorganize your theme, an agreed theme directory structure is as follows:")]),t._v(" "),e("p",[t._v("::: vue\ntheme\n├── "),e("code",[t._v("global-components")]),t._v("\n│   └── xxx.vue\n├── "),e("code",[t._v("components")]),t._v("\n│   └── xxx.vue\n├── "),e("code",[t._v("layouts")]),t._v("\n│   ├── Layout.vue "),e("em",[t._v("("),e("strong",[t._v("Mandatory")]),t._v(")")]),t._v("\n│   └── 404.vue\n├── "),e("code",[t._v("styles")]),t._v("\n│   ├── index.styl\n│   └── palette.styl\n├── "),e("code",[t._v("templates")]),t._v("\n│   ├── dev.html\n│   └── ssr.html\n├── "),e("code",[t._v("index.js")]),t._v("\n├── "),e("code",[t._v("enhanceApp.js")]),t._v("\n└── package.json\n:::")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("theme/global-components")]),t._v(": Components under this directory will be automatically registered as global components. For details, please refer to "),e("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-register-components",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/plugin-register-components"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[e("code",[t._v("theme/components")]),t._v(": Your components.")]),t._v(" "),e("li",[e("code",[t._v("theme/layouts")]),t._v(": Layout components of the theme, where "),e("code",[t._v("Layout.vue")]),t._v(" is required.")]),t._v(" "),e("li",[e("code",[t._v("theme/styles")]),t._v(": Global style and palette.")]),t._v(" "),e("li",[e("code",[t._v("theme/templates")]),t._v(": Modify default template.")]),t._v(" "),e("li",[e("code",[t._v("theme/index.js")]),t._v(": Entry file of theme configuration.")]),t._v(" "),e("li",[e("code",[t._v("theme/enhanceApp.js")]),t._v(": Theme level enhancements.")])]),t._v(" "),e("p",[t._v("::: warning Note\nWhen you publish your theme as an NPM package, if you don't have any theme configuration, that means you don't have "),e("code",[t._v("theme/index.js")]),t._v(", you'll need to set the "),e("code",[t._v('"main"')]),t._v(" field  to "),e("code",[t._v("layouts/Layout.vue")]),t._v(" in "),e("code",[t._v("package.json")]),t._v(", only in this way VuePress can correctly resolve the theme.")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ...\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"main"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"layouts/Layout.vue"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ...\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("h2",{attrs:{id:"layout-component"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#layout-component"}},[t._v("#")]),t._v(" Layout Component")]),t._v(" "),e("p",[t._v("Suppose your theme layouts folder is as follows:")]),t._v(" "),e("p",[t._v("::: vue\ntheme\n└── "),e("code",[t._v("layouts")]),t._v("\n   ├── Layout.vue\n   ├── AnotherLayout.vue\n   └── 404.vue\n:::")]),t._v(" "),e("p",[t._v("Then, all the pages will use "),e("code",[t._v("Layout.vue")]),t._v(" as layout component by default, while the routes not matching will use "),e("code",[t._v("404.vue")]),t._v(".")]),t._v(" "),e("p",[t._v("If you want to switch the layout of some pages to "),e("code",[t._v("AnotherLayout.vue")]),t._v(", you just need to update the frontmatter of this page:")]),t._v(" "),e("div",{staticClass:"language-markdown extra-class"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[e("span",{pre:!0,attrs:{class:"token front-matter-block"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token front-matter yaml language-yaml"}},[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("layout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" AnotherLayout")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])])]),e("p",[t._v("::: tip\nEach layout component may render distinct pages. If you want to apply some global UI (e.g. global header), consider using "),e("RouterLink",{attrs:{to:"/_posts/option-api.html#globallayout"}},[t._v("globalLayout")]),t._v("。\n:::")],1),t._v(" "),e("h2",{attrs:{id:"apply-plugins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apply-plugins"}},[t._v("#")]),t._v(" Apply plugins")]),t._v(" "),e("p",[t._v("You can apply some plugins to the theme via "),e("code",[t._v("theme/index.js")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/pwa'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n      "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("serviceWorker")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("updatePopup")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"site-and-page-metadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#site-and-page-metadata"}},[t._v("#")]),t._v(" Site and Page Metadata")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("Layout")]),t._v(" component will be invoked once for every "),e("code",[t._v(".md")]),t._v(" file in "),e("code",[t._v("docs")]),t._v(", and the metadata for the entire site and that specific page will be exposed respectively as "),e("code",[t._v("this.$site")]),t._v(" and "),e("code",[t._v("this.$page")]),t._v(" properties which are injected into every component in the app.")]),t._v(" "),e("p",[t._v("This is the value of "),e("code",[t._v("$site")]),t._v(" of this very website:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VuePress"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue-powered Static Site Generator"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"base"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pages"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lastUpdated"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1524027677000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VuePress"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"frontmatter"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ...\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[e("code",[t._v("title")]),t._v(", "),e("code",[t._v("description")]),t._v(" and "),e("code",[t._v("base")]),t._v(" are copied from respective fields in "),e("code",[t._v(".vuepress/config.js")]),t._v(". "),e("code",[t._v("pages")]),t._v(" contains an array of metadata objects for each page, including its path, page title (explicitly specified in "),e("RouterLink",{attrs:{to:"/guide/markdown.html#front-matter"}},[t._v("YAML front matter")]),t._v(" or inferred from the first header on the page), and any YAML front matter data in that file.")],1),t._v(" "),e("p",[t._v("This is the "),e("code",[t._v("$page")]),t._v(" object for this page you are looking at:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lastUpdated"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1524847549000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/guide/custom-themes.html"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Custom Themes"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"headers"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"frontmatter"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("If the user provided "),e("code",[t._v("themeConfig")]),t._v(" in "),e("code",[t._v(".vuepress/config.js")]),t._v(", it will also be available as "),e("code",[t._v("$site.themeConfig")]),t._v(". You can use this to allow users to customize behavior of your theme - for example, specifying categories and page order. You can then use these data together with "),e("code",[t._v("$site.pages")]),t._v(" to dynamically construct navigation links.")]),t._v(" "),e("p",[t._v("Finally, don't forget that "),e("code",[t._v("this.$route")]),t._v(" and "),e("code",[t._v("this.$router")]),t._v(" are also available as part of Vue Router's API.")]),t._v(" "),e("p",[t._v("::: tip\n"),e("code",[t._v("lastUpdated")]),t._v(" is the UNIX timestamp of this file's last git commit, for more details, refer to "),e("RouterLink",{attrs:{to:"/theme/default-theme-config.html#last-updated"}},[t._v("Last Updated")]),t._v(".\n:::")],1),t._v(" "),e("h2",{attrs:{id:"content-excerpt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#content-excerpt"}},[t._v("#")]),t._v(" Content Excerpt")]),t._v(" "),e("p",[t._v("If a markdown file contains a "),e("code",[t._v("\x3c!-- more --\x3e")]),t._v(" comment, any content above the comment will be extracted and exposed as "),e("code",[t._v("$page.excerpt")]),t._v(". If you are building custom theme for blogging, this data can be used to render a post list with excerpts.")]),t._v(" "),e("h2",{attrs:{id:"app-level-enhancements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#app-level-enhancements"}},[t._v("#")]),t._v(" App Level Enhancements")]),t._v(" "),e("p",[t._v("Themes can enhance the Vue app that VuePress uses by exposing an "),e("code",[t._v("enhanceApp.js")]),t._v(" file at the root of the theme. The file should "),e("code",[t._v("export default")]),t._v(" a hook function which will receive an object containing some app-level values. You can use this hook to install additional Vue plugins, register global components, or add additional router hooks:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Vue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the version of Vue being used in the VuePress app")]),t._v("\n  options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the options for the root Vue instance")]),t._v("\n  router"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the router instance for the app")]),t._v("\n  siteData "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// site metadata")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...apply enhancements to the app")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);