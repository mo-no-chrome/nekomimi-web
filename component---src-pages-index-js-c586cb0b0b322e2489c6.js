(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(148),o=(a(54),a(144)),l=a(142),c=function(e){var t=e.post;return r.a.createElement(l.Link,{to:t.fields.slug},r.a.createElement(u,null,r.a.createElement(s,null,t.frontmatter.date),r.a.createElement(m,null,t.frontmatter.title),r.a.createElement(d,null,t.excerpt)))},u=o.a.article.withConfig({displayName:"postItem__Wrapper",componentId:"sc-1btmjyb-0"})(["display:flex;flex-direction:column;padding:1.5rem;box-shadow:0 0 5px rgba(0,0,0,0.1);border-radius:3px;transition:box-shadow 0.2s ease-out;&:hover{box-shadow:0 0 20px rgba(0,0,0,0.2);}"]),s=o.a.div.withConfig({displayName:"postItem__Date",componentId:"sc-1btmjyb-1"})(["color:#999;font-size:0.8rem;"]),m=o.a.h3.withConfig({displayName:"postItem__Title",componentId:"sc-1btmjyb-2"})(["margin:0.25rem 0 0;"]),d=o.a.p.withConfig({displayName:"postItem__Excerpt",componentId:"sc-1btmjyb-3"})(["margin-top:1rem;font-size:0.9rem;color:#fb251b;overflow:hidden;"]),p=function(e){var t=e.posts;return r.a.createElement(f,null,t.map(function(e){var t=e.post;return r.a.createElement(y,{key:t.id},r.a.createElement(c,{post:t}))}))},f=o.a.ul.withConfig({displayName:"postList__List",componentId:"sc-14ejrys-0"})(["list-style:none;margin:0;"]),y=o.a.li.withConfig({displayName:"postList__ListItem",componentId:"sc-14ejrys-1"})(["margin:0 0 1.5rem;"]);a.d(t,"query",function(){return g});t.default=function(e){var t=e.data;return r.a.createElement(i.a,null,r.a.createElement(p,{posts:t.allMarkdownRemark.posts}))};var g="3831037539"},142:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return y}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(141),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var u=a(27);a.d(t,"waitForRouteChange",function(){return u.c});var s=a(143),m=a.n(s);a.d(t,"PageRenderer",function(){return m.a});var d=a(38);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function y(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},143:function(e,t,a){var n;e.exports=(n=a(145))&&n.default||n},145:function(e,t,a){"use strict";a.r(t);a(39);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(53),c=a(1),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},146:function(e){e.exports={data:{site:{siteMetadata:{title:"Nekomimi Web"}}}}},147:function(e){e.exports={data:{ogp:{publicURL:"/nekomimi-web/static/ogp-e79827b65977aada40f326cc8271f38b.png"},site:{siteMetadata:{title:"Nekomimi Web",siteUrl:"https://mo-no-chrome.github.io/nekomimi-web",description:"Nekomimi Webはネコミミの魅力を伝えるサイトです！"}}}}},148:function(e,t,a){"use strict";var n=a(146),r=a(0),i=a.n(r),o=a(142),l=a(144),c=a(147),u=a(149),s=function(e){var t=e.data,a=t.site.siteMetadata,n=a.title,r=a.siteUrl,o=a.description,l=""+r+t.ogp.publicURL;return i.a.createElement(u.Helmet,null,i.a.createElement("html",{lang:"ja",prefix:"og: http://ogp.me/ns#"}),i.a.createElement("title",null,n),i.a.createElement("meta",{name:"description",content:o}),i.a.createElement("meta",{property:"og:description",content:o}),i.a.createElement("meta",{property:"og:image",content:l}),i.a.createElement("meta",{property:"og:site_name",content:n}),i.a.createElement("meta",{property:"og:title",content:n}),i.a.createElement("meta",{property:"og:type",content:"article"}),i.a.createElement("meta",{property:"og:url",content:r}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))},m=function(){return i.a.createElement(o.StaticQuery,{query:"1902316602",render:function(e){return i.a.createElement(s,{data:e})},data:c})},d=function(e){var t=e.data,a=e.children;return i.a.createElement(p,null,i.a.createElement(m,null),i.a.createElement(f,null,i.a.createElement("h1",null,t.site.siteMetadata.title),i.a.createElement(y,null,i.a.createElement(g,null,i.a.createElement(o.Link,{to:"/"},"Home")),i.a.createElement(g,null,i.a.createElement(o.Link,{to:"/about"},"About")))),i.a.createElement("main",null,a))},p=l.a.div.withConfig({displayName:"layout__Wrapper",componentId:"sc-4dh0yk-0"})(["max-width:1070px;margin:0 auto;padding:0 1rem;"]),f=l.a.header.withConfig({displayName:"layout__Header",componentId:"sc-4dh0yk-1"})(["display:flex;align-items:baseline;justify-content:space-between;"]),y=l.a.ul.withConfig({displayName:"layout__LinkList",componentId:"sc-4dh0yk-2"})(["list-style:none;display:flex;margin:0;"]),g=l.a.li.withConfig({displayName:"layout__LinkItem",componentId:"sc-4dh0yk-3"})(["margin-right:1rem;&:last-of-type{margin-right:0;}"]);t.a=function(e){var t=e.children;return i.a.createElement(o.StaticQuery,{query:"1097489062",render:function(e){return i.a.createElement(d,{data:e},t)},data:n})}}}]);
//# sourceMappingURL=component---src-pages-index-js-c586cb0b0b322e2489c6.js.map