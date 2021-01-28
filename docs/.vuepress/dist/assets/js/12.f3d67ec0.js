(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{329:function(t,e,r){"use strict";r.r(e);var o=r(38),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("table",[r("thead",[r("tr",[r("th",[t._v("Tables")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("Are")]),t._v(" "),r("th",{staticStyle:{"text-align":"right"}},[t._v("Cool")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("col 3 is")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("right-aligned")]),t._v(" "),r("td",{staticStyle:{"text-align":"right"}},[t._v("$1600")])]),t._v(" "),r("tr",[r("td",[t._v("col 2 is")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("centered")]),t._v(" "),r("td",{staticStyle:{"text-align":"right"}},[t._v("$12")])]),t._v(" "),r("tr",[r("td",[t._v("zebra stripes")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("are neat")]),t._v(" "),r("td",{staticStyle:{"text-align":"right"}},[t._v("$1")])])])]),t._v(" "),r("p",[t._v("🎉 💯")]),t._v(" "),r("h1",{attrs:{id:"content-management-and-auto-deployment-for-vuepress"}},[t._v("Content management and auto deployment for VuePress")]),t._v(" "),r("p",[t._v("Let's check out how we can automatically deploy our VuePress sites and manage the content from within Forestry.")]),t._v(" "),r("h3",{attrs:{id:"preparing-our-vuepress-site"}},[t._v("Preparing our VuePress site")]),t._v(" "),r("p",[t._v("We need to create a "),r("code",[t._v("package.json")]),t._v(" file in the root of our project, this will include the "),r("code",[t._v("build")]),t._v(" and "),r("code",[t._v("dev")]),t._v(" command and list VuePress as a dependency.")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v('{\n  "name": "portfolio-vuepress",\n  "scripts": {\n    "site:build": "vuepress build portfolio",\n    "site:develop": "vuepress dev portfolio"\n  },\n  "author": "Nichlas W. Andersen",\n  "license": "MIT",\n  "dependencies": {\n    "vuepress": "^1.2.0"\n  }\n}\n')])])]),r("p",[t._v("Now, push it up to your remote git repository.")]),t._v(" "),r("h3",{attrs:{id:"deploying-with-netlify"}},[t._v("Deploying with Netlify")]),t._v(" "),r("ol",[r("li",[t._v("Create a new site in Netlify and import your repository.")]),t._v(" "),r("li",[t._v("Set the build command to: "),r("code",[t._v("npm run site:build")])]),t._v(" "),r("li",[t._v("Set the publish directory to "),r("code",[t._v("portfolio/.vuepress/dist")])])]),t._v(" "),r("h3",{attrs:{id:"manage-your-content-with-forestry"}},[t._v("Manage your content with Forestry")]),t._v(" "),r("p",[t._v("Well, not much to do here really, this theme is pre-configured and works out of the box with Forestry. Create an account at "),r("a",{attrs:{href:"https://forestry.io",title:"Forestry",target:"_blank",rel:"noopener noreferrer"}},[t._v("Forestry"),r("OutboundLink")],1),t._v(" and import your repository.")]),t._v(" "),r("p",[t._v("That's it, that's all. Enjoy your new site!")])])}),[],!1,null,null,null);e.default=n.exports}}]);