(this.webpackJsonpmovie_app_2019=this.webpackJsonpmovie_app_2019||[]).push([[0],{47:function(e,t,r){},48:function(e,t,r){"use strict";r.r(t);var s=r(0),a=r(3),n=r.n(a),i=r(16),c=r.n(i),o=r(4),u=r.n(o),m=r(6),d=r(17),l=r(18),j=r(20),v=r(19),p=r(7),h=r.n(p),b=r(2),g=r.n(b);r(47);function y(e){var t=e.year,r=e.title,a=e.summary,n=e.poster,i=e.genres;return Object(s.jsxs)("div",{className:"movie",children:[Object(s.jsx)("img",{src:n,alt:r,title:r}),Object(s.jsxs)("div",{className:"movie__data",children:[Object(s.jsx)("h3",{className:"movie__title",children:r}),Object(s.jsx)("h3",{className:"movie__year",children:t}),Object(s.jsx)("ul",{className:"genres",children:i.map((function(e,t){return Object(s.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(s.jsx)("p",{className:"movie__summary",children:a})]})]})}y.prototype={id:g.a.number.isRequired,year:g.a.number.isRequired,title:g.a.string.isRequired,summary:g.a.string.isRequired,poster:g.a.string.isRequired,genres:g.a.arrayOf(g.a.string).isRequired};var O=y,x=function(e){Object(j.a)(r,e);var t=Object(v.a)(r);function r(){var e;Object(d.a)(this,r);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(u.a.mark((function t(){var r,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:r=t.sent,s=r.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e.getStatus=function(){var e=Object(m.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(t).then((function(e){return e.status}));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e}return Object(l.a)(r,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,r=e.movies;return Object(s.jsx)("section",{className:"container",children:t?Object(s.jsx)("div",{className:"loader",children:Object(s.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(s.jsx)("div",{className:"movies",children:r.map((function(e){return Object(s.jsx)(O,{id:e.id,year:e.year,title:e.title,summary:e.summary.length>120?"".concat(e.summary.slice(0,120),"..."):e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),r}(n.a.Component);c.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.3606e0ea.chunk.js.map