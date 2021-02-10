(this["webpackJsonpfakejobs-react"]=this["webpackJsonpfakejobs-react"]||[]).push([[9],{227:function(e,t){e.exports={GET_FAKE_JOBS:"fake-jobs-data?is_fake_job=true",GET_NEW_FAKE_JOBS:"fake-jobs-data?is_fake_job=true&_limit=10&_sort=published_at:DESC",GET_FAKE_JOB:"fake-jobs-data/{id}",POST_FAKE_JOBS:"fake-jobs-data",GET_SEARCH_FAKE_JOBS_BY_EMAIL:"fake-jobs-data/search/email/{email}"}},229:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return u}));var a=n(233),c=n.n(a),i=n(227),o=n.n(i),r=c.a.create({baseURL:"https://fakejobs-strapi-api.herokuapp.com"});function s(){return new Promise((function(e,t){r.get(o.a.GET_NEW_FAKE_JOBS).then((function(t){e(t.data)})).catch((function(e){t(e)}))}))}function l(e){return new Promise((function(t,n){r.get(o.a.GET_FAKE_JOB.replace(/{(id)}/,e)).then((function(e){t(e.data)})).catch((function(e){n(e)}))}))}function j(e){return new Promise((function(t,n){r.get(o.a.GET_SEARCH_FAKE_JOBS_BY_EMAIL.replace(/{(email)}/,e)).then((function(e){t(e.data)})).catch((function(e){n(e)}))}))}function u(e){return new Promise((function(t,n){r.post(o.a.POST_FAKE_JOBS,e).then((function(e){t(e.data)})).catch((function(e){n(e)}))}))}},242:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n(387),c=n(381),i=n(389),o=n(219),r=n(255),s=n(380),l=n(392),j=n(36),u=n(267),b=n.n(u),d=n(7),f=a.a.Title;function O(e){var t,n,a=e.item;return Object(d.jsx)(c.a,{className:"jobItem",author:Object(d.jsx)(j.b,{to:"/job/"+a.id,children:Object(d.jsxs)(f,{level:4,style:{color:"#fff"},children:["Lowongan ",a.job_title]})}),avatar:Object(d.jsx)(i.a,{src:Object(d.jsx)(s.a,{}),alt:"Ico"}),content:Object(d.jsxs)("div",{className:"fakeJobDescription",children:[Object(d.jsx)("p",{children:(t=a.job_description,n=60,t.split(" ").splice(0,n).join(" "))}),Object(d.jsx)(o.a,{style:{marginTop:10},children:Object(d.jsx)(j.b,{to:"/job/"+a.id,children:"Read More"})})]}),datetime:Object(d.jsxs)(r.a,{title:b()(a.published_at).format("YYYY-MM-DD HH:mm:ss"),children:[Object(d.jsx)(l.a,{style:{marginRight:5}}),Object(d.jsx)("span",{children:b()(a.published_at).fromNow()})]})})}},391:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var a=n(85),c=n(0),i=n(387),o=n(219),r=n(4),s=n(2),l=n(3),j=n.n(l),u=n(218),b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n},d=function(e){return c.createElement(u.a,null,(function(t){var n,a=t.getPrefixCls,i=t.direction,o=e.prefixCls,l=e.type,u=void 0===l?"horizontal":l,d=e.orientation,f=void 0===d?"center":d,O=e.className,h=e.children,p=e.dashed,m=e.plain,x=b(e,["prefixCls","type","orientation","className","children","dashed","plain"]),_=a("divider",o),E=f.length>0?"-".concat(f):f,k=!!h,g=j()(_,"".concat(_,"-").concat(u),(n={},Object(s.a)(n,"".concat(_,"-with-text"),k),Object(s.a)(n,"".concat(_,"-with-text").concat(E),k),Object(s.a)(n,"".concat(_,"-dashed"),!!p),Object(s.a)(n,"".concat(_,"-plain"),!!m),Object(s.a)(n,"".concat(_,"-rtl"),"rtl"===i),n),O);return c.createElement("div",Object(r.a)({className:g},x,{role:"separator"}),h&&c.createElement("span",{className:"".concat(_,"-inner-text")},h))}))},f=n(388),O=n(36),h=n(257),p=n(229),m=n(242),x=n(7),_=i.a.Title,E=i.a.Text;function k(){return Object(c.useEffect)((function(){document.title="Fakejobs - Cek Lowongan Palsu"}),[]),Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"topContentHome",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)(_,{children:"Database Lowongan Palsu"}),Object(x.jsx)(E,{style:{fontSize:"1.3em"},type:"secondary",children:"Lowongan Palsu merupakan hal yang merugikan. Laporkan lowongan tersebut di situs ini agar Jobseeker lain tidak tertipu."})]}),Object(x.jsxs)("div",{className:"topContentHomeAction",children:[Object(x.jsx)(O.b,{to:"/report",className:"btnPrimary",children:"Laporkan Lowongan Mencurigakan"}),Object(x.jsx)(O.b,{to:"/search",children:Object(x.jsx)(o.a,{icon:Object(x.jsx)(h.a,{}),className:"btnLink",type:"link",size:"large",children:"Cek Lowongan Palsu"})})]})]}),Object(x.jsx)(d,{orientation:"left",children:Object(x.jsx)(_,{level:2,children:"Laporan Terbaru"})}),Object(x.jsx)(g,{})]})}function g(){var e=Object(c.useState)(!0),t=Object(a.a)(e,2),n=t[0],i=t[1],o=Object(c.useState)([]),r=Object(a.a)(o,2),s=r[0],l=r[1];return Object(c.useEffect)((function(){p.b().then((function(e){l(e),i(!1)}))}),[]),Object(x.jsx)(f.b,{loading:n,className:"container",itemLayout:"horizontal",dataSource:s,renderItem:function(e){return Object(x.jsx)(f.b.Item,{children:Object(x.jsx)(m.a,{item:e})})}})}}}]);
//# sourceMappingURL=9.4e0512f2.chunk.js.map