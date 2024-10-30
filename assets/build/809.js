"use strict";(globalThis.webpackChunkhelpgent=globalThis.webpackChunkhelpgent||[]).push([[809],{88282:(e,t,n)=>{n.d(t,{i:()=>s,s:()=>r});var a=n(51609),i=n(86087);const l=(0,i.createContext)(),r=()=>(0,i.useContext)(l),s=({children:e})=>{const[t,n]=(0,i.useState)({prefix:"",fields:{},menus:[],fieldComponents:{}});return(0,a.createElement)(l.Provider,{value:{settingsState:t,setSettingsState:n}},e)}},44428:(e,t,n)=>{n.d(t,{Gv:()=>s,Sw:()=>r,Tq:()=>h,Ui:()=>l,nN:()=>d,u1:()=>c,vn:()=>g,vo:()=>i});var a=n(27723);function i(e,t){const n=new RegExp(`(.+${t})/?$`),a=e.match(n);if(a)return a[1];const i=new RegExp(`(.+${t})/`),l=e.match(i);return l?l[1]:""}function l(e){return e.replace(/\/+$/,"")}const r=(e,t)=>{let n=[];if(!Array.isArray(e))return n;const a=e=>e.toLowerCase().replace(/\s/g,"-");return e.forEach((e=>{if(s(e)){if("menu"===e.type){let i=e.label?a(e.label):"";t&&t.label&&(i=`${a(t.label)}/${i}`),e.path=i,n.push({...e,path:i})}if("submenu"===e.type&&Array.isArray(e.submenu)){const t=r(e.submenu,e);e.path=e.label?a(e.label):"",e.grandChildPath=t.length?t[0].path:"",n=[...n,...t]}}})),n},s=e=>!!e&&"object"==typeof e&&!Array.isArray(e),o=e=>e.charAt(0).toUpperCase()+e.substring(1).toLowerCase(),p=e=>e.split("-").map(o).join(" "),g=e=>e.replace(/^\/+/,"").replace(/\/+$/,""),h=e=>e.split("/").map(p).join(" > "),d=(e,t)=>!!e.split(" ").filter((e=>!!e&&t.toLowerCase().split(" ").map((t=>t.match(e))).filter((e=>e)).length)).length;function c(e,t,n){const{formState:{errors:i}}=t;if(void 0===i[e])return"";const l=i[e],r=n[l.type]?n[l.type]:"",s={required:(0,a.__)("The input is required","helpgent"),min:(0,a.sprintf)((0,a.__)("The input must be at least %s","helpgent"),r),max:(0,a.sprintf)((0,a.__)("The input must not greater then %s","helpgent"),r),minLength:(0,a.sprintf)((0,a.__)("The input length must be at least %s","helpgent"),r),maxLength:(0,a.sprintf)((0,a.__)("The input length must not greater then %s","helpgent"),r),pattern:(0,a.__)("The input has invalid data","helpgent"),validate:(0,a.__)("The input has invalid data","helpgent")};return s[l.type]?s[l.type]:""}},93809:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var a=n(51609),i=n(88282),l=n(86087),r=n(49785),s=n(68357);const o=n(38267).Ay.div`
    &.helpgent-settings-panel {
        border-radius: 20px;
        overflow: hidden;
        max-width: 1200px;
        margin: 0 auto 30px auto;
    }
    .helpgent-settings-panel-header,
    .helpgent-settings-panel-footer {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        background: var(--helpgent-color-dark);
        padding: 15px 30px 15px 25px;
        gap: 15px;
    }

    .helpgent-settings-panel-footer {
        justify-content: end;
    }

    .helpgent-settings-panel-search {
        position: relative;
        z-index: 8;
    }

    .helpgent-settings-panel-search-input {
        min-width: 250px;
        padding: 0 20px;
        color: #fff;
        border: none;
        background: rgba(255,255,255, 0.2);
        min-height: 40px;
        border-radius: 8px;
    }

    .helpgent-settings-panel-search-results {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        transform: translate(0px, 100%);
        box-shadow: 0 0 20px -8px rgba(0,0,0,0.3);
        background: #fff;
    }

    .helpgent-settings-panel-search-result-link {
        text-decoration: none;
        padding: 10px 10px;
        display: block;
        transition: all ease-in-out 300ms;

        &:hover {
            background: #e8e8e8;
        }
    }

    .helpgent-settings-panel-search-result-label {
        margin: 0;
        color: var(--helpgent-color-dark);
    }

    .helpgent-settings-panel-search-result-breadcrumb {
        margin: 0;
        color: gray;
    }

    .helpgent-settings-panel-field-item {
        margin-bottom: 30px;
        .helpgent-form-group input,
        input[type="password"]{
            background-color: var(--helpgent-color-bg-light);
            border: 2px solid transparent;
            border-radius: 6px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            color: var(--helpgent-color-dark);
            font-size: 14px;
            font-weight: 500;
            line-height: 1.57;
            margin: 0;
            min-height: 44px;
            padding: 7px 16px;
            width: 100%;
        }
        .helpgent-btn-success{
            min-height: 44px;
            border-radius: 6px;
        }
    }

    .helpgent-settings-panel-user_dashboard_page-field-item{
        .helpgent-select .helpgent-select__control{
            border-radius: 6px;
            padding-top: 7px;
            padding-bottom: 7px;
        }
    }

    .helpgent-settings-panel-license_key-field-item{
        .helpgent-form-row-right{
            display: flex;
            justify-content: flex-end;
            @media only screen and (max-width: 575px){
                justify-content: flex-start;
            }
        }
        input[type="password"]{
            min-width: 380px;
            @media only screen and (max-width: 767px){
                min-width: 100%;
            }
        }
    }

    .helpgent-form-input-error-message {
        padding: 10px 0;
        color: red;
    }

    .helpgent-settings-panel-body {
        display: flex;
        background: #ffffff;
        @media only screen and (max-width: 575px){
            flex-wrap: wrap;
        }
    }

    .helpgent-settings-panel-nav {
        min-height: 500px;
        background: #E6E6E6;
        @media only screen and (max-width: 575px){
            min-height: auto;
            width: 100%;
        }
    }

    .helpgent-settings-panel-nav-menu {

    }

    .helpgent-settings-panel-nav-menu-item {
        min-width: 250px;
        position: relative;
        @media only screen and (max-width: 767px){
            min-width: 200px;
        }
        &.--has-dropdown {
            display: block;
            > .helpgent-settings-panel-nav-menu-link.--is-active {
                z-index: 2;
                .helpgent-settings-panel-nav-menu-action{
                    svg{
                        transform: rotate(180deg);
                        path{
                            fill: #030308;
                        }
                    }
                }
            }
        }
    }

    .helpgent-settings-panel-nav-menu-link {
        display: flex;
        align-items: center;
        position: relative;
        text-decoration: none;
        color: #030308;
        padding: 15px 25px;
        box-shadow: none;
        outline: none;
        font-size: 14px;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 15px;
        &.--is-active {
            border-left: 2px solid var(--helpgent-primary-button-bg );
            box-shadow: 0 5px 20px rgba(161, 168, 198 , 0.2);
            background: #ffffff;
            + .helpgent-settings-panel-nav-menu-dropdown {
                display: block;
            }
        }
    }

    .helpgent-settings-panel-nav-menu-icon {
        line-height: 0;
        svg{
            width: 18px;
        }
    }

    .helpgent-settings-panel-nav-menu-action {
        line-height: 0;
        margin-left: auto;
    }

    .helpgent-settings-panel-nav-menu-dropdown {
        display: none;
        .helpgent-settings-panel-nav-menu-link {
            padding-left: 55px;
            &.--is-active {
                border-left: unset;
                box-shadow: unset;
                color: var(--helpgent-primary-button-bg );
            }

        }
    }

    .helpgent-settings-panel-contents {
        flex-grow: 1;
        padding: 20px;
        @media only screen and (max-width: 575px){
            padding: 10px 0;
        }
    }

    .helpgent-settings-panel-action {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .helpgent-settings-panel-save-action {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .helpgent-settings-panel-save-status {
        padding: 0 30px;
        color: #fff;
        &.--has-success {
            color: #86f224;
        }
        &.--has-error {
            color: #ff6060;
        }
    }

    .helpgent-settings-panel-breadcrumb {
        color: #fff;
        font-size: 14px;
        font-weight: 500;
        display: flex;
    }

    .helpgent-breadcrumb-label {
        display: inline-block;
        color: rgba( 255,255,255, 0.6 );
        &.--is-active {
            color: #fff;
        }
    }

    .helpgent-breadcrumb-separator {
        padding: 0 5px;
    }

    .helpgent-settings-panel-field-group {
        // border: 1px solid #E3E6EF;
        border-radius: 10px;
        margin-bottom: 30px;
    }

    .helpgent-settings-panel-field-group-header {
        padding: 20px;
        // border-bottom: 1px solid #E3E6EF;

        h1, h2, h3, h4, h5, h5 {
            margin: 0;
        }
        h2{
            font-size: 20px;
            font-weight: 600;
            color: var(--helpgent-color-dark);
        }
    }

    .helpgent-settings-panel-field-group-contents {
        padding: 10px 20px;
    }

    .helpgent-form-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 16px;
        &.helpgent-form-row--email-throttle{
            align-items: flex-start;
        }
    }

    .helpgent-form-row-left {
        flex-basis: calc(34% - 8px);
        @media only screen and (max-width: 991px){
            flex-basis: calc(50% - 8px);
        }
        @media only screen and (max-width: 767px){
            flex-basis: 100%;
        }

    }

    .helpgent-form-row-right {
        flex-basis: calc(66% - 8px);
        @media only screen and (max-width: 991px){
            flex-basis: calc(50% - 8px);
        }
        @media only screen and (max-width: 767px){
            flex-basis: 100%;
        }
        .helpgent-select{
            .helpgent-select__control{
                padding-top: 7px;
                padding-bottom: 7px;
                border-radius: 6px;
            }
        }
    }

    .helpgent-form__label {
        display: block;
        font-size: 15px;
        font-weight: 500;
        color: #272b41;
        margin-bottom: 0;
    }

    .helpgent-icon {
        &.icon-primary svg path {
            fill: var(--helpgent-color-primary);
        }

        &.icon-warning-deep svg path {
            fill: var(--helpgent-color-warning-deep);
        }
    }

    .helpgent-title {
        display: block;
    }

    .helpgent-user-profile {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

    .helpgent-user-profile-thumbnail {
        height: 50px;
        width: 50px;
        overflow: hidden;
        border-radius: 50%;
        margin-right: 15px;
        background: #A2A2A2;
    }

    .helpgent-user-profile-thumbnail-img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .helpgent-user-profile-meta {
        flex-grow: 1;
    }

    .helpgent-user-profile-meta-title {
        margin: 0 0 5px 0;
        font-size: 16px;
        font-weight: 600;
        color: var(--helpgent-color-dark);
    }

    .helpgent-user-profile-meta-subtitle {
        color: var(--helpgent-color-gray);
        font-size: 14px;
        margin: 0;
    }
    .helpgent-storage-status-bar-label{
        color: var(--helpgent-color-gray);
        font-size: 13px;
        font-weight: 500;
    }
    .helpgent-storage-status-bar {
        position: relative;
        height: 8px;
        background: #D5D5D5;
        border-radius: 10px;
        overflow: hidden;
    }

    .helpgent-storage-status-bar-fill {
        width: 0%;
        height: 100%;
        background: var(--helpgent-color-primary);
        transition: all ease-in-out 300ms;
    }

    .helpgent-dropdown__content li a.helpgent-danger {
        color: var(--helpgent-color-danger);

        .helpgent-dropdown-item-icon svg path {
            fill: var(--helpgent-color-danger);
        }
    }

    .helpgent-danger svg path {
        fill: var(--helpgent-color-danger);
    }

    .helpgent-dropdown-btn.helpgent-btn-dark {
        svg path {
            fill: #fff;
        }

        &:hover {
            svg path {
                fill: var(--helpgent-color-dark);
            }
        }
    }
`;var p=n(44428),g=n(27723);function h(){return(0,a.createElement)("div",{className:"helpgent-loader"},(0,g.__)("Loading...","helpgent"))}const d=(0,l.lazy)((()=>n.e(206).then(n.bind(n,63206)))),c=(0,l.lazy)((()=>n.e(783).then(n.bind(n,2783)))),u=(0,l.lazy)((()=>n.e(974).then(n.bind(n,27974)))),m=(0,l.lazy)((()=>n.e(870).then(n.bind(n,45870)))),f=(0,l.lazy)((()=>n.e(417).then(n.bind(n,17798))));function x(e){const{menus:t,prefix:n,fields:g,fieldComponents:x,data:b,isLoading:v,loader:y,rootRoutePath:w,onSave:k,Route:E,Routes:S,routeLocation:_,navigate:z}=e,{settingsState:R}=(0,i.s)(),{routeList:C,rootRoutePath:L}=function({menus:e,prefix:t,fields:n,fieldComponents:a,rootRoutePath:r,routeLocation:s,navigate:o}){const{settingsState:g,setSettingsState:h}=(0,i.s)();r=r?"/"+r:"/";const d=s.pathname,c=(0,p.Sw)(e);return(0,l.useEffect)((()=>{if(!c.length)return;let i=g;i.rootRoutePath=r,i.routeLocation=s,i.navigate=o,Array.isArray(e)&&(i={...i,menus:e}),"string"==typeof t&&(i={...i,prefix:t}),(0,p.Gv)(n)&&(i={...i,fields:n}),(0,p.Gv)(a)&&(i={...i,fieldComponents:a}),h(i);const l=e=>e.replace(/^\/+/,"").replace(/\/+$/,"");l(r)===l(d)&&o(c[0].path)}),[]),{routeList:c,rootRoutePath:r,currentRoutePath:d}}({menus:t,prefix:n,fields:g,fieldComponents:x,rootRoutePath:w,routeLocation:_,navigate:z});if(!C.length)return"";let A=y||h;A="string"==typeof A?()=>A:A;const P=(0,r.mN)({mode:"onChange"}),{isSaving:j,message:T,buttonRef:$,submit:N,onSubmit:G}=function(e){const t=(0,l.useRef)(),[n,a]=(0,l.useState)({success:null,message:"",isSaving:!1}),{isSaving:i,message:r,success:s}=n;return{isSaving:i,message:r,success:s,buttonRef:t,onSubmit:function(t){!async function(t){if("function"!=typeof e)return;if(i)return;a({...n,isSaving:!0,success:null,message:""});const l=await e(t);a({...n,isSaving:!1,success:l.success,message:l.message}),new Promise((e=>setTimeout(e,5e3))).then((()=>{a({...n,success:null,message:""})}))}(t)},submit:function(){t.current&&t.current.click()}}}(k);return(0,l.useEffect)((()=>{!function(e){e=(0,p.Gv)(e)?e:{};const t=Object.keys(R.fields).map((t=>{const n=`${R.prefix}${t}`,a=void 0!==R.fields[t].value?R.fields[t].value:"";return{key:n,value:e.hasOwnProperty(n)?e[n]:a}})).reduce(((e,t)=>({...e,[t.key]:t.value})),e);P.reset(t)}(b)}),[b]),(0,a.createElement)(o,{className:"helpgent-settings-panel"},v?(0,a.createElement)(A,null):(0,a.createElement)(l.Suspense,{fallback:(0,a.createElement)(s.A,null)},(0,a.createElement)("form",{onSubmit:P.handleSubmit(G)},(0,a.createElement)("div",{className:"helpgent-settings-panel-header"},(0,a.createElement)(m,{routeLocation:_,routeList:C,rootRoutePath:L}),(0,a.createElement)(f,null),(0,a.createElement)("div",{className:"helpgent-settings-panel-action"},(0,a.createElement)(d,{buttonRef:$,isSaving:j,message:T}))),(0,a.createElement)("div",{className:"helpgent-settings-panel-body"},(0,a.createElement)(c,null),(0,a.createElement)("div",{className:"helpgent-settings-panel-contents"},(0,a.createElement)(S,null,C.map(((e,t)=>(0,a.createElement)(E,{key:t,path:`${e.path}/*`,element:(0,a.createElement)(u,{menu:e,form:P,save:N,onSubmit:G})})))))),(0,a.createElement)("div",{className:"helpgent-settings-panel-footer"},(0,a.createElement)("div",{className:"helpgent-settings-panel-action"},(0,a.createElement)(d,{buttonRef:$,isSaving:j,message:T}))))))}function b(e){return(0,a.createElement)(i.i,null,(0,a.createElement)(x,{...e}))}}}]);