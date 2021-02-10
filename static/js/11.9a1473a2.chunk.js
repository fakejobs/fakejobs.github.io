(this["webpackJsonpfakejobs-react"]=this["webpackJsonpfakejobs-react"]||[]).push([[11],{227:function(e,a){e.exports={GET_FAKE_JOBS:"fake-jobs-data?is_fake_job=true",GET_NEW_FAKE_JOBS:"fake-jobs-data?is_fake_job=true&_limit=10&_sort=published_at:DESC",GET_FAKE_JOB:"fake-jobs-data/{id}",POST_FAKE_JOBS:"fake-jobs-data",GET_SEARCH_FAKE_JOBS:"fake-jobs-data/search/fakejobs/{keyword}"}},229:function(e,a,n){"use strict";n.d(a,"b",(function(){return o})),n.d(a,"a",(function(){return l})),n.d(a,"c",(function(){return u})),n.d(a,"d",(function(){return j}));var t=n(233),i=n.n(t),r=n(227),c=n.n(r),s=i.a.create({baseURL:"https://fakejobs-strapi-api.herokuapp.com"});function o(){return new Promise((function(e,a){s.get(c.a.GET_NEW_FAKE_JOBS).then((function(a){e(a.data)})).catch((function(e){a(e)}))}))}function l(e){return new Promise((function(a,n){s.get(c.a.GET_FAKE_JOB.replace(/{(id)}/,e)).then((function(e){a(e.data)})).catch((function(e){n(e)}))}))}function u(e){return new Promise((function(a,n){s.get(c.a.GET_SEARCH_FAKE_JOBS.replace(/{(keyword)}/,e)).then((function(e){a(e.data)})).catch((function(e){n(e)}))}))}function j(e){return new Promise((function(a,n){s.post(c.a.POST_FAKE_JOBS,e).then((function(e){a(e.data)})).catch((function(e){n(e)}))}))}},383:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return h}));var t=n(85),i=n(0),r=n(17),c=n(254),s=n(387),o=n(303),l=n(386),u=n(378),j=n(219),d=n(229),b=n(7),m=c.a.Option;function h(){var e=Object(i.useState)(!1),a=Object(t.a)(e,2),n=a[0],h=a[1],f=Object(i.useRef)(),O=Object(r.f)();Object(i.useEffect)((function(){document.title="Fakejobs - Laporkan Lowongan Mencurigakan"}),[]);return Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(s.a.Title,{children:"Laporkan Lowongan Bodong"}),Object(b.jsx)(s.a.Text,{children:"Silahkan isi form berikut, data yang kamu isi akan sangat membantu pencari kerja lain."}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(o.a,{size:"large",spinning:n,children:Object(b.jsxs)(l.a,{layout:"vertical",ref:f,onFinish:function(e){h(!0),d.d(e).then((function(){return O.push("/report-success")})).catch((function(){return O.push("/report-failed")}))},size:"medium",children:[Object(b.jsx)(l.a.Item,{label:"Judul Lowongan",name:"job_title",rules:[{required:!0,message:"Tolong masukan judul lowongan!"}],children:Object(b.jsx)(u.a,{})}),Object(b.jsx)(l.a.Item,{label:"Nama Perusahaan",name:"company_name",rules:[{required:!0,message:"Tolong masuka nama perusahaan!"}],children:Object(b.jsx)(u.a,{})}),Object(b.jsx)(l.a.Item,{label:"Alamat Kantor/Interview",name:"company_location",rules:[{required:!0,message:"Tolong masukkan alamat kantor/interview"}],children:Object(b.jsx)(u.a,{})}),Object(b.jsx)(l.a.Item,{name:"job_qualifications",label:"Kualifikasi Pendidikan",rules:[{required:!0,message:"Tolong pilih kualifikasi pendidikan!"}],children:Object(b.jsxs)(c.a,{placeholder:"Pilih Kualifikasi Pendidikan",children:[Object(b.jsx)(m,{value:"All",children:"All"}),Object(b.jsx)(m,{value:"S1",children:"S1"}),Object(b.jsx)(m,{value:"S2",children:"S2"}),Object(b.jsx)(m,{value:"S3",children:"S3"}),Object(b.jsx)(m,{value:"SMA",children:"SMA/SMK/MA"}),Object(b.jsx)(m,{value:"SMP",children:"SMP"})]})}),Object(b.jsx)(l.a.Item,{label:"Email Perusahaan",name:"company_email",extra:Object(b.jsx)(s.a.Text,{type:"secondary",children:"Tolog isi jika kamu mendapatkan lowongan bodong dari email"}),children:Object(b.jsx)(u.a,{type:"email"})}),Object(b.jsx)(l.a.Item,{label:"Url Lowongan",name:"job_url",extra:Object(b.jsx)(s.a.Text,{type:"secondary",children:"Jika anda mendapatkan lowongan dari situs, silahkan lampirkan linknya"}),children:Object(b.jsx)(u.a,{type:"url"})}),Object(b.jsx)(l.a.Item,{label:"Deskripsi Pekerjaan",name:"job_description",children:Object(b.jsx)(u.a.TextArea,{})}),Object(b.jsx)(l.a.Item,{label:"Syarat Pekerjaan",name:"job_requirements",children:Object(b.jsx)(u.a.TextArea,{})}),Object(b.jsx)(l.a.Item,{label:"Your Email",name:"sender_email",extra:Object(b.jsx)(s.a.Text,{type:"secondary",children:"Kami akan menginfokan anda status lowongan bodong yang akan anda posting"}),rules:[{required:!0,message:"Please input your email!"}],children:Object(b.jsx)(u.a,{type:"email"})}),Object(b.jsx)(l.a.Item,{children:Object(b.jsx)(j.a,{type:"primary",htmlType:"submit",children:"Laporkan"})})]})})]})}}}]);
//# sourceMappingURL=11.9a1473a2.chunk.js.map