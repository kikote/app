(this.webpackJsonpkikote=this.webpackJsonpkikote||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),s=n(3),i=n.n(s),c=n(4),o=n(2),l=n(11),d=n(13),u="SET_LAYERS",j={layers:[]},f=function(e,t){return e.layers=e.layers.concat(t.payload),e},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0,n=Object(d.a)({},e);switch(t.type){case u:return f(n,t);default:return n}},m=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,O=Object(o.d)(b,m(Object(o.a)(l.a))),p=n(12),h=(n(25),function(e){var t=Object(r.useState)(!1),n=Object(p.a)(t,2),s=n[0],i=n[1];return Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("span",{className:"menu-switcher",onClick:function(){var e=document.getElementsByClassName("menu-switcher")[0],t=document.getElementsByClassName("sidebar-container")[0];s?(t.style.display="none",i(!1),e.innerHTML="&#9776;"):(t.style.display="grid",t.style.opacity=1,t.style.visibility="visible",i(!0),e.innerHTML="&#10799;")},children:"\u2630"}),Object(a.jsx)("div",{className:"header-title",children:Object(a.jsx)("h1",{children:"Kikote"})})]})}),y=(n(26),Object(c.b)((function(e){return{layers:e.layers}}))((function(e){console.log("RENDERING LayersList");var t=e.layers.map((function(e,t){return Object(a.jsx)("li",{draggable:"true",children:e.name},t)}));return Object(a.jsx)("ul",{children:t})}))),v=(n(27),function(){return Object(a.jsx)("div",{className:"sidebar-header-addlayer",onClick:function(){return console.log("Open modal")},children:"\u271a Add Layer"})}),g=(n(28),function(e){return console.log("RENDERING SideBar"),Object(a.jsxs)("div",{className:"sidebar-container",children:[Object(a.jsx)("div",{className:"sidebar-header",children:Object(a.jsx)(v,{})}),Object(a.jsx)("div",{className:"sidebar-body",children:Object(a.jsx)(y,{})}),Object(a.jsxs)("div",{className:"sidebar-footer",children:["Version: ","0.0.1"]})]})}),x=n(5),N=n.n(x),E=function(e){if(e.target.style.opacity=1,e.preventDefault(),e.dataTransfer.items){for(var t=0;t<e.dataTransfer.items.length;t++)if("file"===e.dataTransfer.items[t].kind){var n=e.dataTransfer.items[t].getAsFile();console.log("... file["+t+"].name = "+n.name),console.log(n);var a=new FileReader;a.addEventListener("loadend",w(n,a)),a.readAsText(n)}}else for(var r=0;r<e.dataTransfer.files.length;r++)console.log("... file["+r+"].name = "+e.dataTransfer.files[r].name)},T=function(e){e.target.style.opacity=.6,e.preventDefault()},w=function(e,t){var n,a,r,s;O.dispatch((n={name:(a=e.name,r=".",s=0,a.split(r)[s]),data:JSON.parse(t.result)},console.log(n.name),{type:u,payload:n}))},k=(n(29),function(e){return Object(r.useEffect)((function(){var e=N.a.map("map",{zoomControl:!1}).setView([18,0],3);N.a.control.zoom({position:"bottomright"}).addTo(e),N.a.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(e)}),[]),Object(a.jsx)("div",{id:"map",onDrop:E,onDragOver:T})}),L=(n(30),function(e){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(g,{}),Object(a.jsx)(k,{})]})});n(31);var S=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(h,{}),Object(a.jsx)(L,{})]})};n(32),n(33);i.a.render(Object(a.jsx)(c.a,{store:O,children:Object(a.jsx)(S,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.09536834.chunk.js.map