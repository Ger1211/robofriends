(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{18:function(e,t,n){e.exports=n(31)},28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),i=n(8),s=n(15),l=n(16),u=n(5);n(28),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=n(1),p=n(2),d=n(3),b=n(4),m=n(7),E=n(17),f=n.n(E),O=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={isFlipped:!1},a.handleClick=a.handleClick.bind(Object(m.a)(a)),a}return Object(p.a)(n,[{key:"handleClick",value:function(e){e.preventDefault(),this.setState((function(e){return{isFlipped:!e.isFlipped}}))}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.name,a=e.email,o=e.phone;return r.a.createElement("div",{className:"dib"},r.a.createElement(f.a,{isFlipped:this.state.isFlipped,flipDirection:"horizontal",cardZIndex:t},r.a.createElement("div",{className:"bg-light-green br3 pa3 ma2 grow bw2 shadow-5 tc",onClick:this.handleClick},r.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(t,"?200x200")}),r.a.createElement("h2",null,n),r.a.createElement("p",null,"Email: ",a)),r.a.createElement("div",{className:"bg-light-green br3 pa3 ma2 grow bw2 shadow-5 tc",onClick:this.handleClick},r.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(t,"?200x200")}),r.a.createElement("h2",null,n),r.a.createElement("p",null,"Phone: ",o))))}}]),n}(a.Component),g=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props.robots;return r.a.createElement("div",null,e.map((function(e,t){return r.a.createElement(O,{key:t,id:e.id,name:e.name,email:e.email,phone:e.phone})})))}}]),n}(a.Component),v=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:e}))}}]),n}(a.Component),j=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},this.props.children)}}]),n}(a.Component),y=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(p.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h3",null,"Ooops... Something go wrong!"):this.props.children}}]),n}(a.Component),C=(n(29),function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,a=e.robots,o=e.isPending,c=a.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?r.a.createElement("h3",{className:"tc f2"},"LOADING..."):r.a.createElement("div",{className:"tc"},r.a.createElement("h3",{className:"f2"},"ROBOFRIENDS"),r.a.createElement(v,{searchChange:n}),r.a.createElement(j,null,r.a.createElement(y,null,r.a.createElement(g,{robots:c}))))}}]),n}(a.Component)),S=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAIL",payload:t})}))}))}}}))(C),R=(n(30),{searchField:""}),k={isPending:!1,robots:[],error:""},w=Object(s.createLogger)(),N=Object(u.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAIL":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),_=Object(u.d)(N,Object(u.a)(l.a,w));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:_},r.a.createElement(S,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.b2e8c63b.chunk.js.map