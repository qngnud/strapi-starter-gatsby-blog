(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{GuQN:function(e,a,t){"use strict";var c=t("q1tI"),r=t.n(c),n=(t("f3/d"),t("Wbzz")),i=function(e){var a=e.article;return r.a.createElement(n.Link,{to:"/article/"+a.node.strapiId,className:"uk-link-reset"},r.a.createElement("div",{className:"uk-card uk-card-muted"},r.a.createElement("div",{className:"uk-card-media-top"},r.a.createElement("img",{src:a.node.image.publicURL,alt:a.node.image.publicURL,height:"100"})),r.a.createElement("div",{className:"uk-card-body"},r.a.createElement("p",{id:"category",className:"uk-text-uppercase"},a.node.category.name),r.a.createElement("p",{id:"title",className:"uk-text-large"},a.node.title))))};a.a=function(e){var a=e.articles,t=Math.ceil(a.length/5),c=a.slice(0,t),n=a.slice(t,a.length);return r.a.createElement("div",null,r.a.createElement("div",{className:"uk-child-width-1-2","data-uk-grid":!0},r.a.createElement("div",null,c.map((function(e,a){return r.a.createElement(i,{article:e,key:"article__"+e.node.id})}))),r.a.createElement("div",null,r.a.createElement("div",{className:"uk-child-width-1-2@m uk-grid-match","data-uk-grid":!0},n.map((function(e,a){return r.a.createElement(i,{article:e,key:"article__"+e.node.id})}))))))}},KINe:function(e){e.exports=JSON.parse('{"data":{"allStrapiArticle":{"edges":[{"node":{"strapiId":1,"title":"Thanks for giving this Starter a try!","category":{"name":"news"},"image":{"publicURL":"/static/97946100dffa92e22ac9b57dd6166ac5-c38526f373348e0911a5f206607d97ce.jpeg"}}},{"node":{"strapiId":2,"title":"Enjoy!","category":{"name":"trends"},"image":{"publicURL":"/static/7c44bf8e7b581ab45d85c94bca7823a1-361b52ac53007bfdf1dc18f65a828c56.jpeg"}}}]}}}')},RXBc:function(e,a,t){"use strict";t.r(a);var c=t("KINe"),r=t("q1tI"),n=t.n(r),i=t("Wbzz"),l=t("Bl7J"),d=t("GuQN");t("WurN");a.default=function(){return n.a.createElement(l.a,null,n.a.createElement(i.StaticQuery,{query:"1827546619",render:function(e){return n.a.createElement("div",{className:"uk-section"},n.a.createElement("div",{className:"uk-container uk-container-large"},n.a.createElement("h1",null,"Strapi blog"),n.a.createElement(d.a,{articles:e.allStrapiArticle.edges})))},data:c}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-80ea53ed094876d149d2.js.map