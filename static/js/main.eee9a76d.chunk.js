(this.webpackJsonpsocalnetwork=this.webpackJsonpsocalnetwork||[]).push([[0],{113:function(e,t,a){e.exports=a(177)},122:function(e,t,a){},159:function(e,t,a){},177:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(37),l=a(38),u=a(23),i={users:[]},p={fetchedPost:[]},m={loading:!1},d=a(57),E={comments:[]},O=Object(s.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USERS":return Object(u.a)(Object(u.a)({},e),{},{users:t.payload});default:return e}},posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST/FETCH_POSTS":return Object(u.a)(Object(u.a)({},e),{},{fetchedPost:t.payload});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SHOW_LOADER":return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case"APP/HIDE_LOADER":return Object(u.a)(Object(u.a)({},e),{},{loading:!1});default:return e}},comments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST/FETCH_COMMENTS":var a=e.comments.filter((function(e){return e.postId!==t.payload[0].postId}));return Object(u.a)(Object(u.a)({},e),{},{comments:[].concat(Object(d.a)(a),Object(d.a)(t.payload))});default:return e}}}),f=(a(122),a(48)),b=a(18),h=a(182),v=a(178),j=a(179),S=a(181),y=a(94),_=a.n(y);a(77);var w=h.a.Panel,T=function(e){var t=Object(l.b)(),a=Object(l.c)((function(t){return t.comments.comments.filter((function(t){return t.postId===e.user.id}))}));return r.a.createElement("div",{className:"user__field"},r.a.createElement(j.a,{author:r.a.createElement(f.b,{to:"/user/"+e.user.id},r.a.createElement("p",null,e.user.username)),avatar:r.a.createElement(f.b,{to:"/user/"+e.user.id},r.a.createElement(S.a,{src:"./avatar.jpg",alt:e.user.username})),content:r.a.createElement("p",null,e.post.body)}),r.a.createElement(h.a,{accordion:!0,onChange:function(){return t({type:"POST/REQUEST_COMMENTS",id:e.user.id})}},r.a.createElement(w,{header:"\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438",key:e.user.id},a.map((function(e){return r.a.createElement(j.a,{key:e.id,author:e.email,avatar:"./avatar.jpg",content:e.name,datetime:_()().subtract(1,"days").fromNow()})})))))},P=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.posts.fetchedPost})),a=Object(l.c)((function(e){return e.users.users}));Object(n.useEffect)((function(){e({type:"POST/REQUEST_POSTS"}),e({type:"REQUEST_USERS"})}),[e]);for(var c=[],o=0;o<10;o++){var s=Math.floor(10*Math.random())+10*o;c=[].concat(Object(d.a)(c),[t[s]])}return t.length&&a.length?r.a.createElement("div",null,c.map((function(e){var t=a.filter((function(t){return t.id===e.userId}));return r.a.createElement("div",{key:e.id},r.a.createElement(T,{user:t[0],post:e}))}))):r.a.createElement(v.a,null)},x=a(180),g=h.a.Panel,k=function(){var e=Object(l.c)((function(e){return e.users.users})),t=Object(b.f)().id,a=e.filter((function(e){return e.id===+t}))[0];return r.a.createElement("div",{className:"user__field"},r.a.createElement(x.a,{title:a.name,style:{width:600}},r.a.createElement("p",null,"\u041f\u0441\u0435\u0432\u0434\u043e\u043d\u0438\u043c: ",a.username),r.a.createElement("p",null,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d: ",a.phone),r.a.createElement("p",null,"Email: ",r.a.createElement("a",{href:"mailto:"+a.email},a.email)),r.a.createElement("p",null,"Website: ",r.a.createElement("a",{href:"http://".concat(a.website)},a.website)),r.a.createElement(h.a,{accordion:!0},r.a.createElement(g,{header:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",key:"1"},r.a.createElement("p",null,"\u0410\u0434\u0440\u0435\u0441 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f:"),r.a.createElement("p",null,"\u0413\u043e\u0440\u043e\u0434: ",a.address.city),r.a.createElement("p",null,"\u0423\u0434\u0438\u0446\u0430: ",a.address.street),r.a.createElement("p",null,"\u0414\u043e\u043c: ",a.address.suite),r.a.createElement("p",null,"\u041f\u043e\u0447\u0442\u043e\u0432\u044b\u0439 \u0438\u043d\u0434\u0435\u043a\u0441: ",a.address.zipcode),r.a.createElement("hr",null),r.a.createElement("p",null,"\u041c\u0435\u0441\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u044b:"),r.a.createElement("p",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438: ",a.company.name),r.a.createElement("p",null,"\u0421\u0444\u0435\u0440\u0430 \u0434\u0435\u0439\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438: ",a.company.catchPhrase),r.a.createElement("p",null,"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c: ",a.company.bs)))))};a(159);var R=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,null,r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/"},r.a.createElement(P,null)),r.a.createElement(b.a,{path:"/user/:id"},r.a.createElement(k,null)))))},A=a(109),D=a(106),H=a(35),N=a.n(H),U=a(24),C=a(107),I=a.n(C),M=N.a.mark(W),L=N.a.mark(X),F=N.a.mark(B),Q=N.a.mark(J);function W(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.c)("POST/REQUEST_POSTS",B);case 2:return e.next=4,Object(U.c)("REQUEST_USERS",J);case 4:return e.next=6,Object(U.c)("POST/REQUEST_COMMENTS",X);case 6:case"end":return e.stop()}}),M)}function X(e){var t;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(U.a)(V,"https://jsonplaceholder.typicode.com/comments?postId=".concat(e.id));case 3:return t=a.sent,a.next=6,Object(U.b)({type:"POST/FETCH_COMMENTS",payload:t.data});case 6:a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),alert("\u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 11:case"end":return a.stop()}}),L,null,[[0,8]])}function B(){var e;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(U.b)({type:"APP/SHOW_LOADER"});case 3:return t.next=5,Object(U.a)(V,"https://jsonplaceholder.typicode.com/posts");case 5:return e=t.sent,t.next=8,Object(U.b)({type:"POST/FETCH_POSTS",payload:e.data});case 8:return t.next=10,Object(U.b)({type:"APP/HIDE_LOADER"});case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),alert("\u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 15:case"end":return t.stop()}}),F,null,[[0,12]])}function J(){var e;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(U.b)({type:"APP/SHOW_LOADER"});case 3:return t.next=5,Object(U.a)(V,"https://jsonplaceholder.typicode.com/users");case 5:return e=t.sent,t.next=8,Object(U.b)({type:"FETCH_USERS",payload:e.data});case 8:return t.next=10,Object(U.b)({type:"APP/HIDE_LOADER"});case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),alert("\u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 15:case"end":return t.stop()}}),Q,null,[[0,12]])}function V(e){return z.apply(this,arguments)}function z(){return(z=Object(D.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",I.a.get(t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var $=Object(A.a)(),q=Object(s.a)($),G=Object(s.e)(O,window.__REDUX_DEVTOOLS_EXTENSION__?Object(s.d)(q,window.__REDUX_DEVTOOLS_EXTENSION__()):q);$.run(W),o.a.render(r.a.createElement(l.a,{store:G},r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},77:function(e,t,a){}},[[113,1,2]]]);
//# sourceMappingURL=main.eee9a76d.chunk.js.map