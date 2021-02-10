(this["webpackJsonpfakejobs-react"]=this["webpackJsonpfakejobs-react"]||[]).push([[10],{227:function(e,n){e.exports={GET_FAKE_JOBS:"fake-jobs-data?is_fake_job=true",GET_NEW_FAKE_JOBS:"fake-jobs-data?is_fake_job=true&_limit=10&_sort=published_at:DESC",GET_FAKE_JOB:"fake-jobs-data/{id}",POST_FAKE_JOBS:"fake-jobs-data",GET_SEARCH_FAKE_JOBS_BY_EMAIL:"fake-jobs-data/search/email/{email}"}},229:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return d})),t.d(n,"c",(function(){return b})),t.d(n,"d",(function(){return l}));var c=t(233),s=t.n(c),a=t(227),i=t.n(a),j=s.a.create({baseURL:"https://fakejobs-strapi-api.herokuapp.com"});function r(){return new Promise((function(e,n){j.get(i.a.GET_NEW_FAKE_JOBS).then((function(n){e(n.data)})).catch((function(e){n(e)}))}))}function d(e){return new Promise((function(n,t){j.get(i.a.GET_FAKE_JOB.replace(/{(id)}/,e)).then((function(e){n(e.data)})).catch((function(e){t(e)}))}))}function b(e){return new Promise((function(n,t){j.get(i.a.GET_SEARCH_FAKE_JOBS_BY_EMAIL.replace(/{(email)}/,e)).then((function(e){n(e.data)})).catch((function(e){t(e)}))}))}function l(e){return new Promise((function(n,t){j.post(i.a.POST_FAKE_JOBS,e).then((function(e){n(e.data)})).catch((function(e){t(e)}))}))}},390:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u}));var c=t(85),s=t(387),a=t(302).a,i=t(272).a,j=t(221),r=t(0),d=t(17),b=t(229),l=t(7),o=s.a.Title;s.a.Text;function u(){var e=Object(r.useState)(null),n=Object(c.a)(e,2),t=n[0],s=n[1],u=Object(d.g)().id;return Object(r.useEffect)((function(){document.title="Fakejobs - Detail Lowongan Palsu",b.a(u).then((function(e){s(e)}))}),[]),Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(o,{level:3,children:"Job Detail"}),t?Object(l.jsxs)("div",{children:[Object(l.jsxs)(a,{children:[Object(l.jsx)(i,{xs:8,sm:8,md:6,children:Object(l.jsx)("b",{children:"Judul Lowongan/Pekerjaan"})}),Object(l.jsxs)(i,{xs:16,sm:16,md:18,children:[": ",t.job_title]})]}),Object(l.jsxs)(a,{children:[Object(l.jsx)(i,{xs:8,sm:8,md:6,children:Object(l.jsx)("b",{children:"Nama Perusahaan"})}),Object(l.jsxs)(i,{xs:16,sm:16,md:18,children:[": ",t.company_name]})]}),Object(l.jsxs)(a,{children:[Object(l.jsx)(i,{xs:8,sm:8,md:6,children:Object(l.jsx)("b",{children:"Alamat Kantor/Perusahaan"})}),Object(l.jsxs)(i,{xs:16,sm:16,md:18,children:[": ",t.company_location]})]}),Object(l.jsxs)(a,{children:[Object(l.jsx)(i,{xs:8,sm:8,md:6,children:Object(l.jsx)("b",{children:"Email Perusahaan"})}),Object(l.jsxs)(i,{xs:16,sm:16,md:18,children:[": ",t.company_email]})]}),Object(l.jsxs)(a,{children:[Object(l.jsx)(i,{xs:8,sm:8,md:6,children:Object(l.jsx)("b",{children:"Kualifikasi Pendidikan"})}),Object(l.jsxs)(i,{xs:16,sm:16,md:18,children:[": ",t.job_qualifications]})]}),Object(l.jsx)("br",{}),Object(l.jsx)(a,{children:Object(l.jsx)(i,{span:24,children:Object(l.jsx)("b",{children:"Deskripsi Pekerjaan"})})}),Object(l.jsx)(a,{children:Object(l.jsx)(i,{span:24,children:Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:t.job_description}})})}),Object(l.jsx)("br",{}),Object(l.jsx)(a,{children:Object(l.jsx)(i,{span:24,children:Object(l.jsx)("b",{children:"Syarat Pekerjaan"})})}),Object(l.jsx)(a,{children:Object(l.jsx)(i,{span:24,children:Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:t.job_requirements}})})}),Object(l.jsx)("br",{}),Object(l.jsxs)(a,{children:[Object(l.jsx)(i,{xs:8,sm:8,md:6,children:Object(l.jsx)("b",{children:"Url Lowongan"})}),Object(l.jsxs)(i,{xs:16,sm:16,md:18,children:[": ",null!==t.job_url?Object(l.jsx)("a",{href:t.job_url,children:"Open"}):"Tidak ada"]})]})]}):Object(l.jsx)(j.a,{})]})}}}]);
//# sourceMappingURL=10.8e4b0634.chunk.js.map