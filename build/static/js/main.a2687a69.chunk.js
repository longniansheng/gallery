(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){},27:function(e,t,n){e.exports=n(53)},53:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),o=n.n(c),i=n(5),l=n(21),s=n(23),m=n(2),u=n(3);function f(e,t){if(t<0||t>e.length)return e;var n=e[t];if(n.center)return[].concat(Object(u.a)(e.slice(0,t)),[Object(m.a)({},n,{reverse:!n.reverse,center:!0})],Object(u.a)(e.slice(t+1)));var a=function(){var e={w:document.body.clientWidth,h:600},t={w:260,h:320},n={left:{x:[],y:[]},right:{x:[],y:[]},wrap:e,photo:t};return n.left.x=[0,e.w/2-3*t.w/2],n.left.y=[0,e.h-t.h/2],n.right.x=[e.w/2+t.w/2,e.w-t.w/2],n.right.y=n.left.y,n}();e.splice(t,1);var r=e.splice(0,Math.floor(e.length/2)).map(function(e){return Object(m.a)({},e,{reverse:!1,center:!1,left:d(a.left.x),top:d(a.left.y),transform:"rotate(".concat(d([-45,45]),"deg) scale(1)")})}),c=e.map(function(e){return Object(m.a)({},e,{reverse:!1,center:!1,left:d(a.right.x),top:d(a.right.y),transform:"rotate(".concat(d([-45,45]),"deg) scale(1)")})}),o=[].concat(Object(u.a)(r),Object(u.a)(c));return[].concat(Object(u.a)(o.slice(0,t)),[Object(m.a)({},n,{center:!0,left:void 0,top:void 0,transform:void 0})],Object(u.a)(o.slice(t)))}function d(e){var t=Math.max(e[0],e[1]),n=Math.min(e[0],e[1]),a=t-n;return Math.ceil(Math.random()*a+n)}var p=n(22),v=n.n(p);function h(){var e=Object(a.useState)(),t=Object(i.a)(e,2),n=t[0],r=void 0===n?[]:n,c=t[1],o=Object(a.useCallback)(function(e,t){var n=f(t||r,e);c(n)},[r]);return Object(a.useEffect)(function(){v.a.get("/images.json").then(function(e){return e.data.map(function(e){return Object(m.a)({},e,{center:!1,reverse:!1})})}).then(function(e){var t=Math.floor(Math.random()*e.length);o(t,e)})},[]),[r,o]}n(19);var b=n(4),g=n.n(b);function j(e){var t=e.item,n=e.onHandleImageCick,a=e.idx;return r.a.createElement("div",{className:g()("photo",{photo_front:!t.reverse,photo_back:t.reverse,photo_center:t.center}),style:{left:t.left,top:t.top,transform:t.transform},onClick:function(){return n(a)}},r.a.createElement("div",{className:"photo_wrap"},r.a.createElement("div",{className:"side side_front"},r.a.createElement("p",{className:"image"},r.a.createElement("img",{src:"/images/".concat(t.filePath),alt:""})),r.a.createElement("p",{className:"caption"},t.title)),r.a.createElement("div",{className:"side side_back"},r.a.createElement("p",{className:"desc"},t.desc))))}function w(e){var t=e.items,n=e.onHandleImageCick;return r.a.createElement("div",{className:"nav"},t.map(function(e,t){return r.a.createElement("span",{className:g()("i",{i_current:e.center,i_back:e.reverse}),onClick:function(){return n(t)}})}))}function E(){var e=Object(l.a)(["\n  width: 100%;\n  height: 600px;\n  position: absolute;\n  top: 50%;\n  margin-top: -300px;\n  background-color: #333;\n  overflow: hidden;\n  perspective: 800px;\n"]);return E=function(){return e},e}var O=s.a.div(E());var k=function(){var e=h(),t=Object(i.a)(e,2),n=t[0],a=t[1],c=n,o=a;return r.a.createElement(O,null,c.map(function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{key:t,idx:t,item:e,onHandleImageCick:o}),r.a.createElement(w,{items:c,onHandleImageCick:o}))}))};o.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.a2687a69.chunk.js.map