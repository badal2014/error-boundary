(window["webpackJsonpcomponent-life-cycle"]=window["webpackJsonpcomponent-life-cycle"]||[]).push([[0],{23:function(e,t,n){e.exports=n(36)},28:function(e,t,n){},29:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},30:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),o=n.n(c),i=(n(28),n(5)),l=n(6),u=n(8),s=n(7),h=n(9),m=(n(29),n(30),n(20)),f=n(10),b=n(13),d=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("h3",null,"Extra Component")}}]),t}(r.a.Component),j=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={hasError:!1},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something Went Wrong"):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(r.a.Component),O=r.a.lazy((function(){return n.e(3).then(n.bind(null,37))})),p=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={counter:0},n.handleClick=n.handleClick.bind(Object(b.a)(n)),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(){this.setState((function(e){return{counter:e.counter+1}}))}},{key:"render",value:function(){if(5===this.state.counter)throw new Error("I crashed!");return r.a.createElement("h1",{onClick:this.handleClick},this.state.counter)}}]),t}(r.a.Component),E=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleSomething=function(){n.incrementCount(),n.incrementCount(),n.incrementCount()},n.state={count:0,ref:0},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"incrementCount",value:function(){this.setState((function(e){return{count:e.count+1}})),console.log(this.state.count)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"In Home"),r.a.createElement(j,null,r.a.createElement(p,null)),r.a.createElement("button",{type:"button","data-letter":"badal","data-getasdf":"huria",onClick:this.handleClick},"Letter"),r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(d,null)},r.a.createElement(O,null)))}}]),t}(r.a.Component),k=function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).call(this,e))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(f.c,null,r.a.createElement(j,null,r.a.createElement(f.a,{exact:!0,path:"/",component:E}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.0e74cfe6.chunk.js.map