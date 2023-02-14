import{_ as z}from"./WithGithub.ec61f0d6.js";import{d as $,r as y,v as j,y as M,u as I,q as N,s as D,$ as G,z as W,E as B,a as J,A as Q,B as X,o as L,c as Y,i as E,b as n,w as c,t as V,e as r,m as Z,f as U,k as C,C as F,g as R}from"./index.54956955.js";import{c as P,v as ee}from"./validate.4816d201.js";function A(){return A=Object.assign?Object.assign.bind():function(u){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(u[a]=t[a])}return u},A.apply(this,arguments)}var te=function(){var e=!1,t=[],a=function(){if(!e){e=!0;for(var i=0,v=t.length;i<v;i++)t[i]()}},o=function(i){if(!e){t.push(i);return}i()},d={resolved:function(){return e},resolve:a,promise:{then:o}};return d},q=Object.prototype.hasOwnProperty;function re(){var u=te();return{notify:function(){u.resolve()},wait:function(){return u.promise},render:function(t,a,o){this.wait().then(function(){o(window.grecaptcha.render(t,a))})},reset:function(t){typeof t>"u"||(this.assertLoaded(),this.wait().then(function(){return window.grecaptcha.reset(t)}))},execute:function(t){typeof t>"u"||(this.assertLoaded(),this.wait().then(function(){return window.grecaptcha.execute(t)}))},checkRecaptchaLoad:function(){q.call(window,"grecaptcha")&&q.call(window.grecaptcha,"render")&&this.notify()},assertLoaded:function(){if(!u.resolved())throw new Error("ReCAPTCHA has not been loaded")}}}var k=re();typeof window<"u"&&(window.vueRecaptchaApiLoaded=k.notify);var ae=$({name:"VueRecaptcha",props:{sitekey:{type:String,required:!0},theme:{type:String},badge:{type:String},type:{type:String},size:{type:String},tabindex:{type:String},loadRecaptchaScript:{type:Boolean,default:!0},recaptchaScriptId:{type:String,default:"__RECAPTCHA_SCRIPT"},recaptchaHost:{type:String,default:"www.google.com"},language:{type:String,default:""}},emits:["render","verify","expired","error"],setup:function(e,t){var a=t.slots,o=t.emit,d=y(null),s=y(null),i=function(b){o("verify",b)},v=function(){o("expired")},p=function(){o("error")};return j(function(){if(k.checkRecaptchaLoad(),e.loadRecaptchaScript&&!document.getElementById(e.recaptchaScriptId)){var f=document.createElement("script");f.id=e.recaptchaScriptId,f.src="https://"+e.recaptchaHost+"/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl="+e.language,f.async=!0,f.defer=!0,document.head.appendChild(f)}var b=A({},e,{callback:i,"expired-callback":v,"error-callback":p}),x=d.value,_=a.default?x.children[0]:x;k.render(_,b,function(g){s.value=g,o("render",g)})}),{root:d,widgetId:s,reset:function(){k.reset(s.value)},execute:function(){k.execute(s.value)}}},render:function(){var e=this.$slots.default,t;return typeof e=="function"?t=e():t=e,M("div",{ref:"root"},t)}});function oe(u,e){const{t}=I(),a=D(),o=N(),d=y(!1),s=y(!0);function i(){u.value.validate(async v=>{if(v){o.serverURL=e.serverURL,G.defaults.baseURL=e.serverURL,d.value=!0;try{const p=await W({email:e.email,password:e.password,recaptchaV3:e.recaptchaV3},s.value);p&&p.data&&p.data.token?(o.url=p.data.url,s.value&&(o.token=p.data.token,o.email=e.email),a.push("/dashboard"),B.success({message:t("message.login_success"),showClose:!0})):B.error({message:`${p.errno?`${p.errno}: `:""}${p.errmsg||"\u672A\u77E5\u9519\u8BEF"}`,showClose:!0})}catch{o.token=""}d.value=!1}})}return{loading:d,handleLogin:i}}const ne={class:"max-w-300px m-auto"},le={class:"login-container"},se={class:"title-container"},ie={text:"2xl",p:"10"},ce={class:"flex justify-between"},fe=$({__name:"login",setup(u){const{t:e}=I(),t=N(),a=J({serverURL:t.serverURL,code:"",email:t.email,password:"",recaptchaV3:"",recaptchaV3Key:""}),o=y(),d=y(),s=y(),{handleLogin:i,loading:v}=oe(o,a),b={email:[{required:!0,trigger:"blur",validator:(g,l,m)=>{ee(l)?m():m(new Error(e("error.username")))}}],password:[{required:!0,trigger:"blur",validator:(g,l,m)=>{l.length<6?m(new Error(e("error.password"))):m()}}]};j(()=>{a.email===""?d.value.focus():a.password===""&&s.value.focus()});const x=g=>{!g||(a.recaptchaV3=g,i())},_=Q(X("enableRecaptcha"),P.enableRecaptcha);return(g,l)=>{const m=R("el-input"),w=R("el-form-item"),O=R("el-checkbox"),S=R("el-button"),H=R("el-form"),K=R("router-link"),T=z;return L(),Y("main",ne,[E("div",le,[n(H,{ref_key:"loginFormEl",ref:o,model:r(a),rules:b,"status-icon":"",autocomplete:"on","label-position":"left"},{default:c(()=>[E("div",se,[E("h2",ie,V(r(e)("login.title")),1)]),n(w,{prop:"serverURL",required:""},{default:c(()=>[n(m,{ref:"serverURLEl",modelValue:r(a).serverURL,"onUpdate:modelValue":l[0]||(l[0]=h=>r(a).serverURL=h),placeholder:r(e)("placeholder.server_url"),name:"serverURL",type:"text",autocomplete:"on"},null,8,["modelValue","placeholder"])]),_:1}),n(w,{prop:"email",required:""},{default:c(()=>[n(m,{ref_key:"emailEl",ref:d,modelValue:r(a).email,"onUpdate:modelValue":l[1]||(l[1]=h=>r(a).email=h),placeholder:r(e)("placeholder.email"),name:"email",type:"text",autocomplete:"on"},null,8,["modelValue","placeholder"])]),_:1}),n(w,{prop:"password"},{default:c(()=>[n(m,{ref_key:"passwordEl",ref:s,modelValue:r(a).password,"onUpdate:modelValue":l[2]||(l[2]=h=>r(a).password=h),placeholder:r(e)("placeholder.password"),name:"password",type:"password",autocomplete:"on"},null,8,["modelValue","placeholder"])]),_:1}),n(w,null,{default:c(()=>[n(O,{modelValue:r(_),"onUpdate:modelValue":l[3]||(l[3]=h=>Z(_)?_.value=h:null)},{default:c(()=>[U(V(r(e)("login.use_recaptcha")),1)]),_:1},8,["modelValue"])]),_:1}),r(_)?(L(),C(w,{key:0,prop:"serverURL",required:""},{default:c(()=>[n(m,{ref:"serverURLEl",modelValue:r(a).recaptchaV3Key,"onUpdate:modelValue":l[4]||(l[4]=h=>r(a).recaptchaV3Key=h),placeholder:r(e)("placeholder.recaptcha_v3_key"),name:"serverURL",type:"text",autocomplete:"on"},null,8,["modelValue","placeholder"])]),_:1})):F("",!0),n(w,null,{default:c(()=>[r(_)?(L(),C(r(ae),{key:0,class:"w-full",size:"invisible",sitekey:r(P).recaptchaV3Key,onVerify:x},{default:c(()=>[n(S,{type:"primary",class:"block w-full",loading:r(v)},{default:c(()=>[U(V(r(e)("button.login")),1)]),_:1},8,["loading"])]),_:1},8,["sitekey"])):(L(),C(S,{key:1,type:"primary",class:"block w-full",loading:r(v),onClick:r(i)},{default:c(()=>[U(V(r(e)("button.login")),1)]),_:1},8,["loading","onClick"]))]),_:1})]),_:1},8,["model"]),E("div",ce,[n(K,{to:"/register"},{default:c(()=>[n(S,null,{default:c(()=>[U(V(r(e)("button.register")),1)]),_:1})]),_:1}),n(T)])])])}}});export{fe as default};
