(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a(47)},34:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(25),o=a.n(r),c=a(3),s=a(4),u=a(6),l=a(2),p=a(5),m=(a(34),a(12)),d=a.n(m),h=a(16),v=a(28),f=a(18),w=new window.verovio.toolkit,b=(a(36),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={show:"svg"},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.renderMusic(this.props.notatedMusic.querySelector("tei-ptr").getAttribute("target"))}},{key:"forwardTeiAttributes",value:function(){return Array.from(this.props.notatedMusic.attributes).reduce(function(e,t){return e[t.name]=t.value,e},{})}},{key:"renderMusic",value:function(){var e=Object(h.a)(d.a.mark(function e(t){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("data/".concat(t)).then(function(e){return e.text()});case 2:a=e.sent,w.loadData(a),w.setOptions({pageWidth:800,adjustPageHeight:!0,scale:50}),this.setState({meiData:a,svg:w.renderPage(1)});case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"show",value:function(e){this.setState({show:e})}},{key:"render",value:function(){var e=this,t=this.props.notatedMusic.querySelector("tei-ptr").getAttribute("target"),a=i.a.createElement(E,{teiDomElement:this.props.notatedMusic.querySelector("tei-label")}),n="";this.state.svg&&"svg"===this.state.show?n=i.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.svg}}):"jpg"===this.state.show&&(n=i.a.createElement(E,{teiDomElement:this.props.notatedMusic.querySelector("tei-graphic")}));var r="svg"===this.state.show?"MTabActive":"",o="jpg"===this.state.show?"MTabActive":"",c=i.a.createElement("div",{className:"MusicTabs"},a,"\xa0",i.a.createElement("span",{onClick:function(){return e.show("svg")},className:r},"Engraved")," |\xa0",i.a.createElement("span",{onClick:function(){return e.show("jpg")},className:o},"Facsimile")," |\xa0",i.a.createElement("a",{href:"data/".concat(t)},"MEI"));return i.a.createElement(this.props.notatedMusic.tagName.toLowerCase(),Object(f.a)({},this.forwardTeiAttributes()),[c,n])}}]),t}(i.a.Component)),E=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"forwardTeiAttributes",value:function(){return Array.from(this.props.teiDomElement.attributes).reduce(function(e,t){return e[t.name]=t.value,e},{})}},{key:"render",value:function(){if("tei-notatedmusic"===this.props.teiDomElement.tagName.toLowerCase())return i.a.createElement(b,{notatedMusic:this.props.teiDomElement});var e=Array.from(this.props.teiDomElement.childNodes).map(function(e,a){switch(e.nodeType){case 1:return i.a.createElement(t,{teiDomElement:e,key:"".concat(e.tagName,"_").concat(a)});case 3:return e.nodeValue;default:return null}});return i.a.createElement(this.props.teiDomElement.tagName.toLowerCase(),Object(f.a)({},this.forwardTeiAttributes()),e)}}]),t}(i.a.Component),j=(a(37),a(38),a(39),a(40),a(41),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={},a.allowedViews=a.props.allowedViews.map(function(e){return e.url}),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getTEI()}},{key:"getTEI",value:function(){var e=Object(h.a)(d.a.mark(function e(){var t,a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new v.a).addBehavior("tei","teiHeader",void 0),e.next=4,t.getHTML5("data/example.xml");case 4:a=e.sent,this.setState({teiData:a});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.defaultView;this.allowedViews.indexOf(this.props.view)>-1&&(e=this.props.view);var t=this.state.teiData?i.a.createElement(E,{teiDomElement:this.state.teiData}):"Loading ...",a=e.charAt(0).toUpperCase()+e.substr(1).toLowerCase();return i.a.createElement("div",{className:"Tei ".concat(a)},t)}}]),t}(i.a.Component)),O=(a(42),a(17)),g=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("nav",{className:"Nav"},i.a.createElement("ul",null,this.props.views.map(function(t,a){var n="";return(!e.props.activeView&&t.url===e.props.defaultView||e.props.activeView===t.url)&&(n="active"),i.a.createElement("li",{key:"l-".concat(a),className:n},i.a.createElement(O.b,{to:"/".concat(t.url)},t.label))})))}}]),t}(i.a.Component),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).views=[{url:"diplomatic",label:"Diplomatic"},{url:"diplomatic2",label:"Diplomatic 2"},{url:"edited",label:"Edited"},{url:"modernized",label:"Modernized"}],a.defaultView="diplomatic",a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(g,{views:this.views,activeView:this.props.view,defaultView:this.defaultView}),i.a.createElement(j,{defaultView:this.props.defaultView,view:this.props.view,allowedViews:this.views}))}}]),t}(i.a.Component),k=a(10),D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).views=[{url:"diplomatic",label:"Diplomatic"},{url:"diplomatic2",label:"Diplomatic 2"},{url:"edited",label:"Edited"},{url:"modernized",label:"Modernized"}],a.defaultView="diplomatic",a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(O.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(k.a,{path:"/:view?",exact:!0,component:function(t){return i.a.createElement(y,{defaultView:e.defaultView,view:t.match.params.view})}})))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.7df6e09e.chunk.js.map