(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{20:function(e,t,n){e.exports=n(52)},29:function(e,t,n){},49:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),i=n(9),s=n(16),l=n(17),u=n(6);n(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=n(2),p=n(3),d=n(4),b=n(5),m=n(8),E=n(18),f=n.n(E),O=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={isFlipped:!1},a.handleClick=a.handleClick.bind(Object(m.a)(a)),a}return Object(p.a)(n,[{key:"handleClick",value:function(e){e.preventDefault(),this.setState((function(e){return{isFlipped:!e.isFlipped}}))}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.name,a=e.email,o=e.phone;return r.a.createElement("div",{className:"dib"},r.a.createElement(f.a,{isFlipped:this.state.isFlipped,flipDirection:"horizontal",cardZIndex:t},r.a.createElement("div",{className:"bg-light-green br3 pa3 ma2 grow bw2 shadow-5 tc",onClick:this.handleClick},r.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(t,"?200x200")}),r.a.createElement("h2",null,n),r.a.createElement("p",null,"Email: ",a)),r.a.createElement("div",{className:"bg-light-green br3 pa3 ma2 grow bw2 shadow-5 tc",onClick:this.handleClick},r.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(t,"?200x200")}),r.a.createElement("h2",null,n),r.a.createElement("p",null,"Phone: ",o))))}}]),n}(a.Component),g=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props.robots;return r.a.createElement("div",null,e.map((function(e,t){return r.a.createElement(O,{key:t,id:e.id,name:e.name,email:e.email,phone:e.phone})})))}}]),n}(a.Component),v=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:e}))}}]),n}(a.Component),j=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},this.props.children)}}]),n}(a.Component),y=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(p.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h3",null,"Ooops... Something go wrong!"):this.props.children}}]),n}(a.Component),C=n(19),S=n.n(C),R=(n(49),n(50),function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,a=e.robots,o=e.isPending,c=a.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?r.a.createElement("div",{className:"tc"},r.a.createElement("h3",{className:"f2"},"LOADING..."),r.a.createElement(S.a,{type:"Triangle",color:"#DBD65C",height:100,width:100,timeout:0})):r.a.createElement("div",{className:"tc"},r.a.createElement("h3",{className:"f2"},"ROBOFRIENDS"),r.a.createElement(v,{searchChange:n}),r.a.createElement(j,null,r.a.createElement(y,null,r.a.createElement(g,{robots:c}))))}}]),n}(a.Component)),k=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAIL",payload:t})}))}))}}}))(R),w=(n(51),{searchField:""}),N={isPending:!1,robots:[],error:""},_=Object(s.createLogger)(),F=Object(u.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAIL":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),T=Object(u.d)(F,Object(u.a)(l.a,_));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:T},r.a.createElement(k,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.d8cd0ff0.chunk.js.map