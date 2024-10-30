"use strict";(globalThis.webpackChunkhelpgent=globalThis.webpackChunkhelpgent||[]).push([[865],{13475:(e,t,n)=>{n.d(t,{A:()=>i}),n(51609);const i="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNy45OTkiIHZpZXdCb3g9IjAgMCAxOCAxNy45OTkiPgogIDxwYXRoIGlkPSJyb2NrZXQtbHVuY2giIGQ9Ik0zLjk3NiwxNC4wMjZhMS44LDEuOCwwLDAsMSwwLDIuNTQ2LDkuNiw5LjYsMCwwLDEtMy4xNTksMS40MS42NjUuNjY1LDAsMCwxLS44LS43OTQsOS42LDkuNiwwLDAsMSwxLjQwOC0zLjE2MSwxLjgsMS44LDAsMCwxLDIuNTUsMFpNMTIuMDM1LDEzLjIxWk00LjY5Myw2LjFoMEM0LjcxOCw2LjA3LDQuNzA1LDYuMDg3LDQuNjkzLDYuMVptOC44MDguMjcxQTEuODc1LDEuODc1LDAsMSwwLDExLjYyNiw4LjI1LDEuODc1LDEuODc1LDAsMCwwLDEzLjUsNi4zNzVabS0xLjQ4Miw2Ljg0Ny4wMDYsMGE5LjA4LDkuMDgsMCwwLDEtLjYxNywxLjU4Myw2LjUzNSw2LjUzNSwwLDAsMS0yLjg4NiwzLjA1M0ExLjgyLDEuODIsMCwwLDEsNiwxNi4xNjZWMTQuMjUxQTIuMjYxLDIuMjYxLDAsMCwwLDMuNzUxLDEySDEuNzk0QTEuNzgsMS43OCwwLDAsMSwuMTQ0LDkuNTM1LDYuMzg5LDYuMzg5LDAsMCwxLDMuMTMsNi43MTMsOC45MTEsOC45MTEsMCwwLDEsNC42OTMsNi4xYy0uMDEyLjAxNy0uMDIzLjAzMywwLDBDNy41NjcsMi4xLDEwLjg1My4xMjgsMTUuMzQ1LDBBMi42MzUsMi42MzUsMCwwLDEsMTgsMi42MjVjLS4xMjgsNC41MjQtMS45NjksNy43Mi01Ljk3NiwxMC41OTNaTTE1Ljc1MSwyLjU5NGEuMzcuMzcsMCwwLDAtLjM3NS0uMzQ0Yy0zLjc3Ny4xMDgtNi4yMjUsMS41LTguNzA5LDQuOTYxYTIxLjAyOSwyMS4wMjksMCwwLDAtMS42MTUsMi43M0E0LjUxNCw0LjUxNCwwLDAsMSw4LjA0LDEyLjg4M2wxLjYyMi0uODA3Yy4zOC0uMjI1Ljc2NC0uNDc2LDEuMTI5LS43MzdDMTQuMjUxLDguODUsMTUuNjQzLDYuNCwxNS43NTEsMi41OTRaTTEyLjAyNSwxMy4yMThsLjAwOC0uMDA1LS4wMDcuMDA1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMDAxIDApIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo="},68357:(e,t,n)=>{n.d(t,{A:()=>l});var i=n(51609),o=n(4286);function l({style:e}){const t={minHeight:"500px",maxHeight:"550px"};return e=e?{...t,...e}:t,(0,i.createElement)(o.vY,{style:e,className:"helpgent-content-loading"},(0,i.createElement)("span",{className:"helpgent-shimmer-effect"}),(0,i.createElement)("span",{className:"helpgent-shimmer-effect"}),(0,i.createElement)("span",{className:"helpgent-shimmer-effect"}))}},78242:(e,t,n)=>{n.d(t,{A:()=>p});var i=n(51609),o=n(56427),l=n(4286),r=n(27723);function p(e){const{children:t,title:n,className:p,AlertContent:a,onCancel:g,onFooterCancel:h,onSubmit:d,hasCancelButton:s,hasSubmitButton:c,isDisableAction:x,submitText:m,cancelText:f,cancelBtnType:b,submitBtnType:u="danger",isDismissible:v}=e;return(0,i.createElement)(o.Modal,{title:n,overlayClassName:`helpgent-modal helpgent-modal-default ${p}`,onRequestClose:g,isDismissible:v},(0,i.createElement)(l.jN,null,t,!x&&(0,i.createElement)("div",{className:`helpgent-modal-action ${p}-action`},s&&(0,i.createElement)("a",{href:"#",className:`helpgent-btn helpgent-btn-${b||"light"} helpgent-btn-md helpgent-modal-action__cancel`,onClick:e=>{e.preventDefault(),h?h():g()}},f||(0,r.__)("Cancel","helpgent")),c&&(0,i.createElement)("a",{href:"#",className:`helpgent-btn helpgent-btn-md helpgent-modal-action__btn helpgent-btn-${u}`,onClick:e=>{e.preventDefault(),d()}},m))))}},68360:(e,t,n)=>{n.d(t,{A:()=>l});var i=n(1455),o=n.n(i);async function l(e,t){return await o()({path:e,...t}).then((e=>e)).catch((e=>{throw e}))}},90212:(e,t,n)=>{n.d(t,{A:()=>o});var i=n(27723);function o(e){let t="";switch(e){case 404:t=(0,i.__)("Resource not found","helpgent");break;case 400:t=(0,i.__)("Invalid Request","helpgent");break;case 422:t=(0,i.__)("Invalid data","helpgent");break;case 500:t=(0,i.__)("Internal server error","helpgent");break;default:t=(0,i.__)("Technical error","helpgent")}return t}},67571:(e,t,n)=>{n.d(t,{Y:()=>o});var i=n(6945);function o(e){const t=e.elements.filter((e=>"welcome"===e.element_type||"end"===e.element_type))[0];if(!e?.global?.corner&&(0,i.U9)(e,"corner",(0,i.xn)(e.elements[0])),!e?.global?.element_size&&(0,i.U9)(e,"element_size",(0,i.uE)(e.elements[0],"general")),!e?.global?.specialElement_size&&(0,i.U9)(e,"specialElement_size",(0,i.uE)(t,"special")),!e?.global?.font_family&&(0,i.U9)(e,"font_family","Inter"),!e?.global?.background_image&&(0,i.U9)(e,"background_image",null),!e?.global?.background_color&&(0,i.U9)(e,"background_color","#ffffff"),!e?.global?.color_style){let t={title:{value:e?.elements[0]?.controls?.fieldDesign?.labelStyle?.text_color?.value},description:{value:e?.elements[0]?.controls?.fieldDesign?.descriptionStyle?.text_color?.value},button:{value:e.elements[0].controls.fieldDesign.buttonStyle.btn_color.value},button_text:{value:e?.elements[0]?.controls?.fieldDesign?.buttonStyle?.btn_text_color?.value}};const n=e.elements.filter((e=>"open_ended"===e.element_type));n.length>0&&(t={...t,chat_title_color:{value:n[0]?.controls?.fieldDesign?.chatTitleStyle?.text_color?.value},footer_text_color:{value:n[0]?.controls?.fieldDesign?.footerTextStyle?.text_color?.value}}),e.global={...e.global,color_style:{...t}}}if(e?.global?.color_style?.icon||(e.global={...e.global,color_style:{icon:{value:"#3c3c3c"},...e.global.color_style}}),e?.global?.color_style?.options_color||(e.global={...e.global,color_style:{...e.global.color_style,options_color:{value:"#3c3c3c"}}}),!e?.global?.background_style){const t=e?.elements.filter((e=>"end"!==e.element_type)),n={background_overlay:{isActive:t[0]?.controls?.fieldDesign?.mediaStyle?.video_overlay?.isActive},overlay_color:{value:t[0]?.controls?.fieldDesign?.mediaStyle?.overlay_color?.value},overlay_opacity:{value:t[0]?.controls?.fieldDesign?.mediaStyle?.overlay_opacity?.value}};e.global={...e.global,background_style:{...n}}}e?.global?.progress_count||(e.global={...e.global,progress_count:{isActive:"1"}});const n=e.elements.map((e=>("user_validation"!==e.element_type||e?.guest_field?.acceptance||(e.guest_field={...e.guest_field,acceptance:{label:"I agree to......",isVisible:"0"}}),"statement"!==e.element_type||e?.controls?.general?.btn_text||(e.controls.general={...e.controls.general,btn_text:{value:"Continue"}}),delete e?.controls?.fieldDesign?.labelStyle,delete e?.controls?.fieldDesign?.descriptionStyle,delete e?.controls?.fieldDesign?.buttonStyle,delete e?.controls?.fieldDesign?.chatTitleStyle,delete e?.controls?.fieldDesign?.footerTextStyle,e)));return e.elements=n,e}},29016:(e,t,n)=>{n.d(t,{d:()=>o});var i=n(86087);function o(e,t){const[n,o]=(0,i.useState)(e);return(0,i.useEffect)((()=>{const n=setTimeout((()=>{o(e)}),t);return()=>clearTimeout(n)}),[e,t]),n}},64943:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(9421),o=n(68360),l=n(90212);function r(e,t,n){const{data:r,isLoading:p,error:a,isError:g,isFetching:h,isSuccess:d,isRefetching:s}=(0,i.I)(e,(async()=>{const e=await(0,o.A)(t,n?.parser||{});return n&&"function"==typeof n.afterLoadedData&&n.afterLoadedData(e),e}),n?.queryConfig||{refetchOnWindowFocus:!1,keepPreviousData:!0,staleTime:1e4});return{data:a||p?null:r,isLoading:p,errorMessage:a?(0,l.A)(a?a?.data?.status:""):"",isError:!!g,isFetching:h,isSuccess:d,isRefetching:s}}},94091:(e,t,n)=>{n.d(t,{Dd:()=>r,Kh:()=>o,xk:()=>l});var i=n(38267);const o=i.Ay.div`
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    position: relative;
    @media only screen and (max-width: 1500px){
        gap: 30px;
        padding-bottom: 30px;
    }

    .helpgent-bubble-preview{
        flex: 1;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        + .helpgent-content-loading{
            width: 340px !important;
            flex: none !important;
        }
    }
    .helpgent-bubble-preview__content{
        max-width: 1000px;
        @media only screen and (max-width: 1550px){
            max-width: 850px;
            .helpgent-bubble-preview__wrapper{
                svg{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        @media only screen and (max-width: 1550px){
            max-width: 700px;
        }
        @media only screen and (max-width: 1399px){
            max-width: 600px;
        }
        @media only screen and (max-width: 1199px){
            max-width: 500px;
        }
    }
    .helpgent-screen-setting-wrap{
        position: relative;
        height: 100%;
        overflow-x: hidden;
        &::-webkit-scrollbar {
            width: 5px;
        }
        &::-webkit-scrollbar-track {
            background: #fff;
            border-radius: 3px;
        }
        &::-webkit-scrollbar-thumb {
            background: var(--helpgent-color-bg-deep);
            transition: var(--helpgent-transition);
            border-radius: 3px;
        }
        &::-webkit-scrollbar-thumb:hover {
            background: var(--helpgent-color-primary);
        }
        .helpgent-btn-save-settings{
            position: absolute;
        }
    }
    .helpgent-preview-top{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
        margin-bottom: 20px;
        svg{
            margin-inline-end: 10px;
        }
    }
    .helpgent-bubble-preview__wrapper{
        position: relative;
        margin-bottom: 30px;
        margin-right: 15px;
        overflow: hidden;
        svg{
            max-width: 100%;
        }
    }

    .helpgent-notification-empty{
        width: 1000px;
        height: 600px;
        background: #fff;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 60px auto 0;
        &__content{
            width: 100%;
            max-width: 450px;
            height: 100%;
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;
            text-align:center;
            h5{
                margin: 30px 0 20px;
                font-size: 18px;
                font-weight: 600;
                color: var(--helpgent-color-gray);
            }
            p{
                margin: 0;
                font-size: 14px;
                color: var(--helpgent-color-light-gray);
            }
        }
    }
    .helpgent-email-settings-content{
        flex: 1;
        .helpgent-selected-email-content-notice{
            width: 390px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            background: var(--helpgent-color-bg-deep);
            color: var(--helpgent-color-gray);
            gap: 8px;
            margin: 0 auto 20px;
            padding: 9px 15px;
            box-sizing: border-box;
            span{
                font-weight: 500;
                color: var(--helpgent-color-dark);
            }
            @media only screen and (max-width: 575px){
                width: 100%;
            }
        }
        .helpgent-email-template-settings{
            max-width: 1000px;
            background: #fff;
            border-radius: 20px;
            margin: 0 auto 34px;
            @media only screen and (max-width: 1550px){
                max-width: 700px;
            }
            &__tab{
                margin: 0;
                padding: 0;
                border-bottom: 1px solid var(--helpgent-color-border-light);
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 20px;
                li{
                    padding: 20px 0;
                    margin: 0;
                    border-bottom: 2px solid transparent;
                    cursor: pointer;
                    color: var(--helpgent-color-gray);
                    font-weight: 500;
                    font-size: 14px;
                    &.helpgent-active{
                        border-color: var(--helpgent-color-primary);
                        color: var(--helpgent-color-primary):
                    }
                }
            }
            &__contents{
                padding: 30px 100px 50px;
                @media only screen and (max-width: 1500px){
                    padding: 30px 42px 50px;
                }
                @media only screen and (max-width: 575px){
                    padding: 20px;
                }
            }
            .helpgent-email-placeholder-list,
            .helpgent-email-body-content,
            .helpgent-email-template-styles,
            .helpgent-email-template-preview{
                max-width: 800px;
                border-radius: 18px;
                padding: 30px 100px;
                @media only screen and (max-width: 1550px){
                    max-width: 100%;
                    padding: 30px;
                }
                @media only screen and (max-width: 1366px){
                    padding: 30px;
                }
                @media only screen and (max-width: 575px){
                    padding: 20px;
                }
            }
            .helpgent-email-placeholder-list{
                background: #F3F1FE;
                h5{
                    font-size: 15px;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    color: var(--helpgent-color-page-bg);
                    margin: 0 0 20px;
                }
                ul{
                    margin: 0;
                    padding: 0;
                    li{
                        margin: 0;
                        padding: 0;
                        &:not(:last-child){
                            margin-bottom: 10px;
                        }
                        font-size: 13px;
                        font-weight: 500;
                        color: var(--helpgent-color-gray);
                        span{
                            font-weight: 600;
                            color: var(--helpgent-color-primary);
                        }
                    }
                }
            }
            .helpgent-email-body-content{
                background: var(--helpgent-color-bg-light);
                margin-top: 30px;
                .helpgent-form-group__element{
                    background: #fff;
                }
                .helpgent-form-group__label{
                    margin-bottom: 12px;
                    span{
                        background: var(--helpgent-color-bg-deep);
                        font-size: 13px;
                        font-weight: 500;
                        border-radius: 4px;
                        padding: 2px 6px 4px;
                        display: inline-block;
                        margin-left: 8px;
                    }
                }
                .helpgent-form-group{
                    &:not(:last-child){
                        margin-bottom: 30px;
                    }
                }
            }
            .helpgent-email-template-styles,
            .helpgent-email-template-preview{
                background: var(--helpgent-color-bg-light);
            }
            .helpgent-email-template-preview-message{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                font-size: 14px;
                font-weight: 500;
                color: var(--helpgent-color-light-gray);
                text-align: center;
                margin-bottom: 18px;
            }
            .helpgent-email-template-styles{
                margin-bottom: 40px;
                .helpgent-form-group{
                    width: 400px;
                    margin: 0 auto 20px;
                    @media only screen and (max-width: 575px){
                        width: 100%;
                    }
                    .helpgent-toggle{
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                    .helpgent-toggle__label{
                        font-size: 15px;
                        font-weight: 500;
                        color: var(--helpgent-color-dark);
                        cursor: pointer;
                    }
                    .helpgent-field-element__label{
                        display: flex;
                        align-items: center;
                        font-size: 14px;
                        font-weight: 400;
                        color: var(--helpgent-color-gray);
                        .helpgent-badge{
                            margin-left: 8px;
                        }
                    }
                    .helpgent-form-group__element{
                        margin-top: 12px;
                        background: #fff;
                    }
                    &--inline{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 10px;
                        .helpgent-color-picker{
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            background: #fff;
                            padding: 7px 16px;
                            border-radius: 8px;
                            width: 143px;
                        }
                    }
                }
                .helpgent-email-template-styles__footer{
                    margin-bottom: 0;
                }
            }
            .helpgent-email-template-preview{
                &__content{
                    width: 520px;
                    margin: 0 auto 30px;
                    border-radius: 18px;
                    overflow: hidden;
                    @media only screen and (max-width: 1550px){
                        width: 100%;
                    }
                }
                &__header{
                    padding: 20px 30px;
                    background: var(--helpgent-email-header-bg);
                    h2{
                        color: #fff;
                        font-size: 18px;
                        font-weight: 600;
                        margin: 0;
                    }
                }
                &__body{
                    padding: 30px 30px 35px;
                    background: #fff;
                    p{
                        margin: 0;
                        font-size: 14px;
                        font-weight: 500;
                        color: var(--helpgent-color-gray);
                    }
                }
                &__footer{
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--helpgent-color-gray);
                    text-align: center;
                    width: 520px;
                    padding: 0 30px;
                    margin: 0 auto;
                    box-sizing: border-box;
                    @media only screen and (max-width: 1550px){
                        width: 100%;
                    }
                }
            }
        }

    }
    .helpgent-email-template-styles__footer{
        .helpgent-toggle__label{
            display: flex;
            align-items: center;
        }
        .helpgent-badge{
            margin-left: 8px;
        }
    }
`,l=(i.Ay.div`
    .helpgent-message-error{
        font-size: 15px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .components-spinner {
        position: absolute;
        inset-inline-start: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
`,i.Ay.div`
    position: relative;
    width: 340px;
    border-radius: 14px;
    background-color: var(--helpgent-color-white);
    height: calc(100vh - 150px);
    overflow: hidden;
    @media screen and (max-width: 1367px) {
        width: 300px;
    }
    &.helpgent-email-settings-sidebar{
        position: sticky;
        top: 116px;
        .helpgent-screen-setting-wrap .helpgent-toggle__label{
            flex: 1;
            padding-right: 10px;
        }
    }
    .helpgent-screen-setting-header{
        border-bottom: 1px solid var(--helpgent-color-bg-gray);
    }
    .helpgent-screen-setting-content{
        height: calc(100% - 80px);
        box-sizing: border-box;
        overflow: auto;
        &--global{
            height: calc(100% - 114px);
            .helpgent-screen-setting-block{
                .helpgent-field-element--inline .helpgent-field-element__label{
                    width: 150px;
                    @media screen and (min-width: 1199px) and (max-width: 1367px) {
                        width: 130px;
                    }
                }
            }
        }
    }
    .helpgent-btn-save-settings{
        border-radius: 0;
        min-height: 54px;
        &:hover{
            border-color: #3e2db6;
            background: #3e2db6;
            color: #fff;
        }
    }
    .helpgent-screen-setting-element__label{
        font-size: 14px;
        font-weight: 500;
        margin: 0 0 10px;
        color: var(--helpgent-color-dark);
    }
    .helpgent-verification-group{
        margin: 0 0 30px;
        .helpgent-field-element__label{
            margin-bottom: 15px;
            overflow: unset !important;
        }
    }
    .helpgent-field-element__label{
        .helpgent-tooltip-toggle{
            position: relative;
            top: 2px;
            margin-left: 10px;
        }
    }
    .helpgent-screen-setting-element__content{
        position: relative;
        .helpgent-mega-dropdown{
            //inset-inline-start: auto;
            //inset-inline-end: 0;
        }
        .helpgent-mega-dropdown__content{
            height: min(80vh, 520px);
            overflow-y: auto;
        }
    }
    .helpgent-screen-setting-list{
        display: flex;
        align-items: center;
        gap: 0 30px;
        padding: 10px 25px 0 25px;
        margin: 0;
        @media screen and (min-width: 1199px) and (max-width: 1367px) {
            padding: 10px 15px 0 15px;
        }
        @media only screen and (max-width: 400px){
            padding: 0 15px 0 15px;
        }
        li{
            padding: 15px 0;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            color: var(--helpgent-color-gray);
            margin: 0;
            border-bottom: 2px solid transparent;
            transition: var(--helpgent-transition);
            &.helpgent-active{
                border-color: var(--helpgent-color-primary);
                color: var(--helpgent-color-primary);
                font-weight: 600;
            }
            &:hover{
                color: var(--helpgent-color-primary);
            }
        }
    }

    .helpgent-settings-back-btn{
        min-height: 60px;
        display: flex;
        align-items: center;
        border: 0 none;
        box-shadow: none;
        font-size: 15px;
        font-weight: 600;
        background: none;
        width: 100%;
        gap: 8px;
        padding: 0 25px;
        color: var(--helpgent-color-dark);
        cursor: pointer;
        transition: var(--helpgent-transition);
        svg{
            width: 12px;
            height: 12px;
            path{
                fill: var(--helpgent-color-dark);
                transition: var(--helpgent-transition);
            }
        }
        &:hover{
            color: var(--helpgent-color-primary);
            svg path{
                fill: var(--helpgent-color-primary);
            }
        }
    }
    .helpgent-screen-setting-block{
        padding: 20px 25px;
        &--content{
            transform: translateX(100%);
            transition: transform 0.3s ease;
        }
        &.helpgent-screen-setting-block--slide-in {
            transform: translateX(0);
        }
        &:not(:last-child){
            border-bottom: 1px solid var(--helpgent-color-bg-gray);
        }
        &.helpgent-settings-item-wrap{
            padding: 0;
        }
        .helpgent-settings-item{
            border: 0 none;
            background: none;
            box-shadow: none;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 14px;
            font-weight: 500;
            color: var(--helpgent-color-dark);
            width: 100%;
            cursor: pointer;
            padding: 20px 25px;
            margin: 0;
            svg{
                width: 10px;
                height: 10px;
                path{
                    fill: var(--helpgent-color-light-gray);
                }
            }
        }
        .helpgent-button-text-block{
            h3{
                font-size: 15px;
                margin: 0 0 15px;
            }
            .helpgent-field-element__label{
                width: 170px;
            }
            .helpgent-form-group{
                margin-bottom: 15px;
            }
        }
        .helpgent-form-group__text-selection{
            margin-left: -3px;
            border-radius: 0 6px 6px 0;
            border: 2px solid var(--helpgent-color-bg-deep);
            .helpgent-select__control{
                border-radius: 0;
                min-height: 36px;
                min-width: 58px;
                padding: 4px 8px 6px 8px;
                background-color: var(--helpgent-color-bg-deep);
                &.helpgent-select__control--is-focused{
                    border-radius: 0 6px 6px 0;
                }
            }
            .helpgent-select__value-container{
                padding: 0;
            }
            .helpgent-select__indicator{
                padding-inline-end: 0;
                svg{
                    width: 16px;
                    height: 16px;
                }
            }
            .helpgent-select__option{
                padding: 8px 6px;
            }
        }
        .helpgent-field-element{
            position: relative;
            &:last-child{
                .helpgent-field-element__content--inline:not(.helpgent-field-element__content--yesNo){
                    margin-bottom: 0;
                }
            }
            .helpgent-field-element__content--yesNo{
                margin-bottom: 10px;
            }
            .helpgent-bubble-bg-types{
                position: absolute;
                right: 0;
                top: 48px;
                width: 290px;
                height auto;
                background: #fff;
                border-radius: 10px;
                box-shadow: 0 5px 30px rgba(0,0,0,0.15);
                z-index: 999;
                &__list{
                    border-bottom: 1px solid var(--helpgent-color-border-light);
                    padding: 0 20px;
                    display: flex;
                    align-items: center;
                    gap: 10px 20px;
                    span{
                        display: flex;
                        align-items: center;
                        gap: 6px;
                        color: var(--helpgent-color-light-gray);
                        transition: var(--helpgent-transition);
                        border-bottom: 2px solid transparent;
                        padding: 19px 0 15px;
                        cursor: pointer;
                        font-size: 13px;
                        font-weight: 500;
                        svg{
                            width: 14px;
                            height: 14px;
                            path{
                                fill: var(--helpgent-color-light-gray);
                                transition: var(--helpgent-transition);
                            }
                        }
                        &.helpgent-active{
                            color: var(--helpgent-color-dark);
                            border-color: var(--helpgent-color-dark);
                            svg path{
                                fill: var(--helpgent-color-dark);
                            }
                        }
                    }
                }
                &__content{
                    padding: 16px 20px 20px;
                    max-height: 270px;
                    overflow: auto;
                    .helpgent-element-single{
                        border-radius: 8px;
                        background: var(--helpgent-color-bg-light);
                        display: flex;
                        gap: 10px;
                        align-items: center;
                        padding: 5px;
                        cursor: pointer;
                        &:not(:last-child){
                            margin-bottom: 8px;
                        }
                        &__icon{
                            width: 30px;
                            height: 30px;
                            border-radius: 50%;
                            background: #fff;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            flex: none;
                            svg{
                                width: 14px;
                                height: 14px;
                                path{
                                    fill: var(--helpgent-color-light-gray);
                                }
                            }
                        }
                        &__label{
                            color: var(--helpgent-color-light-gray);
                            font-size: 14px;
                            font-weight: 400;
                            p{
                                margin: 0;
                                font-size: inherit;
                                line-height: inherit;
                            }
                        }
                        &__selected{
                            width: 20px;
                            height: 20px;
                            border-radius: 50%;
                            margin-left: auto;
                            background: var(--helpgent-color-primary);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            svg{
                                width: 9px;
                                height: 9px;
                            }
                        }
                    }
                    .helpgent-element-single--active{
                        .helpgent-element-single__icon{
                            svg path{
                                fill: var(--helpgent-color-primary);
                            }
                        }
                        .helpgent-element-single__label{
                            font-weight: 500;
                            color: var(--helpgent-color-dark);
                        }
                    }
                    .helpgent-bubble-color-picker{
                        .components-color-picker{
                            width: 100%;
                            .react-colorful{
                                width: 100%;
                                .react-colorful__hue,
                                .react-colorful__alpha{
                                    width: 97%;
                                }
                            }
                            .components-input-control__container{
                                width: 100%;
                                border-radius: 8px;
                                .components-input-control__backdrop{
                                    border: 1px solid var(--helpgent-color-border-light);
                                }
                            }
                            .components-range-control__thumb-wrapper span,
                            .components-range-control__track{
                                background: var(--helpgent-color-primary);
                            }

                        }
                    }
                    .helpgent-element-media-uploader{
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        .helpgent-btn{
                            flex: 1;
                            svg path{
                                fill: var(--helpgent-color-light-gray);
                                transition: var(--helpgent-transition);
                            }
                            &.helpgent-btn-remove{
                                &:hover{
                                    color: var(--helpgent-color-danger);
                                    svg path{
                                        fill: var(--helpgent-color-danger);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            &__right{
                &.helpgent-active{
                    .helpgent-bubble-bg-types{
                        display: block;
                    }
                }
            }
            .helpgent-bubble-shapes{
                display: flex;
                align-items: center;
                gap: 20px;
                margin: 0;
                padding: 0;
                .helpgent-bubble-shape{
                    padding: 0;
                    margin: 0;
                    background: var(--helpgent-color-bg-deep);
                    border-radius: 8px;
                    width: 40px;
                    height: 40px;
                    position: relative;
                    cursor: pointer;
                    span{
                        position: absolute;
                        right: 4px;
                        bottom: 4px;
                        background: #fff;
                        display: block;
                        pointer-events: none;
                    }
                    &--circle{
                        span{
                            width: 16px;
                            height: 16px;
                            border-radius: 50%;
                        }
                    }
                    &--boxed-horizontal{
                        span{
                            width: 22px;
                            height: 16px;
                            border-radius: 4px;
                        }
                    }
                    &--boxed-vertical{
                        span{
                            width: 16px;
                            height: 22px;
                            border-radius: 4px;
                        }
                    }
                    &.helpgent-active{
                        background: var(--helpgent-color-primary);
                    }
                }
            }
            .helpgent-bubble-border{
                display: flex;
                align-items: center;
                gap: 10px;
                margin: 0;
                li{
                    margin: 0;
                }
                &__color{
                    .helpgent-color-picker__text{
                        display: none;
                    }
                }
                &__visibility{
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    background: #fff;
                    box-shadow: 0 0 4px rgba(0,0,0,0.15);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    svg{
                        width: 14px;
                        height: 14px;
                    }
                    span{
                        line-height: 0;
                    }
                }
            }
            .helpgent-bubble-position{
                display: flex;
                align-items: center;
                gap: 10px;
                margin: 0;
                li{
                    padding: 0;
                    margin: 0;
                    background: var(--helpgent-color-bg-deep);
                    border-radius: 8px;
                    width: 40px;
                    height: 40px;
                    position: relative;
                    cursor: pointer;
                    span{
                        position: absolute;
                        bottom: 4px;
                        background: #fff;
                        display: block;
                        width: 16px;
                        height: 16px;
                        border-radius: 50%;
                        pointer-events: none;
                    }
                    &.helpgent-active{
                        background: var(--helpgent-color-primary);
                    }
                }
                .helpgent-bubble-position__left{
                    span{
                        left: 4px;
                    }
                }
                .helpgent-bubble-position__right{
                    span{
                        right: 4px;
                    }
                }
            }
            .helpgent-picture-single{
                width: 246px;
                height: 150px;
                margin-top: 10px;
                margin-left: 9px;
                position: relative;
                @media screen and (min-width: 1199px) and (max-width: 1367px) {
                    width: 210px;
                }
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 12px;
                }
                .helpgent-picture-select-action{
                    position: absolute;
                    left: 50%;
                    bottom: 10px;
                    transform: translateX(-50%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    &--upload{
                        width: calc(100% - 4px);
                        height: calc(100% - 4px);
                        left: 0;
                        top: 0;
                        transform: none;
                        z-index: 1;
                        border: 2px dashed var(--helpgent-color-extra-light);
                        border-radius: 12px;
                        button{
                            svg{
                                width: 16px;
                            }
                        }
                    }
                    .helpgent-btn-hover-danger{
                        width: 34px;
                        height: 34px;
                        padding: 0;
                        justify-content: center;
                    }
                }
            }
            .helpgent-btn-add-picture-field{
                margin-left: 9px;
                width: 246px;
                justify-content: center;
                font-size: 13px;
                font-weight: 500;
                color: var(--helpgent-color-gray);
                @media screen and (min-width: 1199px) and (max-width: 1367px) {
                    width: 210px;
                }
                svg path{
                    fill: var(--helpgent-color-gray);
                }
            }
            .helpgent-btn-email-template{
                width: 48px;
                max-width: 48px;
                background: var(--helpgent-color-bg-light);
                padding-left: 0;
                padding-right: 0;
                justify-content: center;
                margin-left: auto;
                flex: none;
                border-color: var(--helpgent-color-bg-light);
            }
        }

        .helpgent-field-element--wrap{
            flex-wrap: wrap;
            .helpgent-field-element__right{
                width: auto;
            }
            .helpgent-selected-screen{
                flex: 0 0 100%;
                display: flex;
                align-items: center;
                margin-top: 20px;
                gap: 10px;
                .helpgent-element-single{
                    &__icon{
                        width: 30px;
                        height: 30px;
                        background: var(--helpgent-color-bg-gray);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex: none;
                        svg{
                            width: 14px;
                            height: 14px;
                        }
                        video,
                        img{
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            border-radius: 50%;
                        }
                    }
                    &__label{
                        font-size: 14px;
                        font-weight: 500;
                        color: var(--helpgent-color-gray);
                        max-width: 205px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    &__remove{
                        width: 30px;
                        height: 30px;
                        background: var(--helpgent-color-bg-light);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex: none;
                        border-radius: 6px;
                        margin-left: auto;
                        cursor: pointer;
                        transition: var(--helpgent-transition);
                        svg{
                            path{
                                transition: var(--helpgent-transition);
                            }
                        }
                        &:hover{
                            background: var(--helpgent-color-danger);
                            svg{
                                path{
                                    fill: #fff;
                                }
                            }
                        }
                    }
                }
            }
        }
        .helpgent-field-element__right{
            width: 128px;
            display: flex;
            justify-content: flex-end;
            flex-direction: column;
        }
        .helpgent-input-description{
            margin-top: 6px;
        }
        .helpgent-field-element--inline .helpgent-field-element__label{
            font-size: 14px;
            font-weight: 500;
            word-wrap: break-word;
            word-break: break-word;
            white-space: nowrap;
            width: 160px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: flex;
            align-items: center;
            gap: 5px;
            .helpgent-tooltip-toggle{
                line-height: 1;
            }
        }
        .helpgent-date-format{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 10px;
            &__btn{
                font-size: 13px;
                font-weight: 500;
                height: 36px;
                min-height: 36px;
                padding: 0 16px;
                transition: var(--helpgent-transition);
                &.helpgent-btn-active,
                &:hover{
                    background: var(--helpgent-color-primary);
                    border-color: var(--helpgent-color-primary);
                    color: #fff;
                }
            }
        }
        .helpgent-date-separator{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 8px;
            margin-bottom: 0;
            &__btn{
                font-size: 13px;
                font-weight: 500;
                height: 36px;
                min-height: 36px;
                width: 36px;
                padding: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: var(--helpgent-transition);
                &.helpgent-btn-active,
                &:hover{
                    background: var(--helpgent-color-primary);
                    border-color: var(--helpgent-color-primary);
                    color: #fff;
                }
            }
        }
        .helpgent-field-element__top{
            &--inline{
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 5px;
            }
            &__action{
                display: flex;
                align-items: center;
                gap: 0 10px;
                svg{
                    width: 15px;
                    height: 15px;
                    path{
                        fill: var(--helpgent-color-light-gray);
                    }
                }
            }
        }
        .helpgent-field-element__content{
            &--inline{
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 25px;
                margin-inline-start: -10px;
                .helpgent-form-group{
                    margin-bottom: 0;
                    flex: 1;
                }
            }
            .helpgent-select{
                .helpgent-select__placeholder{
                    font-size: 14px;
                }
                .helpgent-select__control{
                    padding-top: 5px;
                    padding-bottom: 5px;
                }
            }
            .helpgent-select-lg{
                .helpgent-select__control{
                    padding-top: 10px;
                    padding-bottom: 10px;
                }
            }
        }
        .helpgent-add-option{
            display: flex;
            align-items: center;
            gap: 6px;
            color: var(--helpgent-color-light-gray);
            font-size: 13px;
            font-weight: 500;
            text-decoration: none;
            transition: var(--helpgent-transition);
            span{
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background: var(--helpgent-color-bg-light);
                width: 20px;
                height: 20px;
                svg{
                    width: 8px;
                    height: 8px;
                    path{
                        transition: var(--helpgent-transition);
                        fill: var(--helpgent-color-gray);
                    }
                }
            }
            &:focus{
                outline: 0;
                border: 0 none;
                box-shadow: none;
            }
            &:hover{
                color: var(--helpgent-color-primary);
                svg path{
                    fill: var(--helpgent-color-primary);
                }
            }
        }
        .helpgent-add-social{
            &__btn,
            .helpgent-social-submit{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0 6px;
                color: var(--helpgent-color-gray);
                svg{
                    path{
                        fill: var(--helpgent-color-gray);
                    }
                }
            }
            &__form{
                margin-top: 40px;
            }
            &__fields{
                &:not(:last-child){
                    margin-bottom: 20px;
                }
                .helpgent-select{
                    margin-bottom: 8px;
                    &__control{
                        border-radius: 8px;
                        background: var(--helpgent-color-bg-light);
                        height: 40px;
                        padding-top: 6px;
                    }
                    &__single-value{
                        span{
                            font-weight: 500;
                        }
                        svg{
                            margin-inline-end: 10px;
                            width: 16px;
                            height: 16px;
                            path{
                                fill: var(--helpgent-color-primary);
                            }
                            #facebook{
                                fill: var(--helpgent-color-facebook);
                            }
                            #youtube{
                                fill: var(--helpgent-color-youtube);
                            }
                            #twitter{
                                fill: var(--helpgent-color-twitter);
                            }
                            #instagram{
                                fill: var(--helpgent-color-instagram);
                            }
                        }
                    }
                    &__placeholder{
                        font-size: 14px;
                        font-weight: 500;
                        color: var(--helpgent-color-gray);
                    }
                    &__option{
                        svg{
                            margin-right: 6px;
                            #facebook{
                                fill: var(--helpgent-color-facebook);
                            }
                            #youtube{
                                fill: var(--helpgent-color-youtube);
                            }
                            #twitter{
                                fill: var(--helpgent-color-twitter);
                            }
                            #instagram{
                                fill: var(--helpgent-color-instagram);
                            }
                        }
                    }
                }
            }
            &__select-wrap{
                display: flex;
                align-items: center;
                gap: 0 10px;
                .helpgent-select{
                    flex: 1;
                    margin-bottom: 0;
                }
                +.helpgent-form-group{
                    margin-top: 8px;
                    width: calc(100% - 32px);
                }
            }
        }
        .helpgent-social-list:not(:empty){
            margin: 20px 0;
        }
    }
    .helpgent-field-element--inline{
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:not(:first-child){
            margin-top: 25px;
        }
        & + .helpgent-field-element{
            margin-top: 25px;
        }
        .helpgent-select{
            &__control{
                height: 36px;
                padding: 0;
                border-radius: 8px;
            }
            &__placeholder{
                font-size: 13px;
                font-weight: 500;
            }
        }
        .helpgent-form-group .helpgent-form-group__element{
            height: 36px;
            min-height: 36px;
        }
        .helpgent-field-element__top{
            flex: auto;
            .helpgent-field-element__label{
                margin: 0;
            }
        }
        .helpgent-field-element__content{
            flex: 2;
            .helpgent-form-group{
                margin: 0;
            }
        }
        .helpgent-field-element__left{
            label{
                margin: 0;
            }
            &.helpgent-field-element__left--has-tooltip{
                display: flex;
                .helpgent-field-element__label{
                    width: auto;
                }
                .helpgent-tooltip-toggle{
                    margin-left: 8px;
                }
            }
        }
        .helpgent-field-element__right{
            .helpgent-form-group{
                margin-bottom: 0;
            }
        }
    }
    .helpgent-design-setting-wrap{
        .helpgent-screen-setting-block{
            .helpgent-field-element__label{
                width: 150px;
                &.helpgent-selectable-field-label{
                    width: auto;
                    margin-bottom: 13px;
                }
            }
            .helpgent-color-picker{
                height: 36px;
                background: var(--helpgent-color-bg-gray);
                border-radius: 8px;
                padding: 0 12px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                position: relative;
                width: 100%;
                box-sizing: border-box;
                .helpgent-color-picker__text{
                    min-width: 70px;
                    @media screen and (min-width: 1199px) and (max-width: 1367px) {
                        min-width: 60px;
                    }
                }
            }
        }
    }
    .helpgent-element-dropdown{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 18px 5px 5px;
        border-radius: 10px;
        cursor: pointer;
        transition: background-color .3s ease-in-out;
        background-color: var(--helpgent-color-bg-gray);
        .helpgent-element-dropdown__content{
            display: flex;
            align-items: center;
        }
        .helpgent-element-dropdown__icon{
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            margin-inline-end: 10px;
            background-color: var(--helpgent-color-white);
            svg path{
                fill: var(--helpgent-color-primary);
            }
        }
        .helpgent-element-dropdown__title{
            font-size: 14px;
            font-weight: 500;
            margin: 0;
            color: var(--helpgent-color-dark);
            p,
            strong{
                font-size: inherit;
                line-height: inherit;
                margin: 0;
            }
        }
    }
    .helpgent-media-uploader{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 160px;
        border-radius: 12px;
        background-color: var(--helpgent-color-bg-light);
        .helpgent-btn-upload-trigger{
            font-size: 14px;
            white-space: nowrap;
            color: var(--color-dark);
            background-color: var(--helpgent-color-white);
        }
    }
    .helpgent-media-uploader-actions {
        display: flex;
        flex-direction: column;
    }
    .helpgent-media-preview{
        position: absolute;
        height: 100%;
        width: 100%;
        inset-inline-start: 0;
        top: 0;
        video{
            height: 100%;
            width: 100%;
            object-fit: cover;
            border-radius: 12px;
        }
    }
    .helpgent-media-preview__src{
        height: 100%;
        position: relative;
        &:before{
            position: absolute;
            content: '';
            width: 100%;
            height: 100%;
            inset-inline-start: 0;
            top: 0;
            background: rgba(0,0,0,0.3);
            border-radius: 12px;
            z-index: 1;
        }
        img{
            height: 100%;
            width: 100%;
            object-fit: cover;
            border-radius: 12px;
        }
    }
    .helpgent-layout-actions{
        display: flex;
        align-items: center;
        gap: 16px 20px;
        flex-wrap: wrap;
        .helpgent-layout-action__single{
            cursor: pointer;
            line-height: 0;
            &.helpgent-active{
                svg{
                    path{
                        fill: var(--helpgent-color-primary);
                    }
                }
            }
        }
    }

    //rating styles
    .helpgent-rating-list{
        display: flex;
        align-items: center;
        gap: 4px;
        margin-bottom: 25px;
        .helpgent-rating-single{
            width: 38px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            background: var(--helpgent-color-bg-light);
            transition: var(--helpgent-transition);
            margin-top: 5px;
            cursor: pointer;
            svg{
                width: 16px;
                height: 16px;
                path{
                    fill: var(--helpgent-color-extra-light);
                    transition: var(--helpgent-transition);
                }
            }
            &.helpgent-active{
                background: var(--helpgent-color-primary);
                svg{
                    path{
                        fill: #fff;
                    }
                }
            }
        }
    }

    //Logic styles
    .helpgent-setting-logic-wrap{
        padding: 25px 25px 5px;
        height: calc(100% - 0px);
        box-sizing: border-box;
        .helpgent-logic-add{
            display: flex;
            justify-content: center;
            box-sizing: border-box;
            gap: 10px;
            border-radius: 10px;
            font-size: 14px;
            font-weight: 500;
        }
        .helpgent-logic-inner{
            display: flex;
            flex-direction: column;
            height: 100%;
            box-sizing: border-box;
            .helpgent-logic-bottom{
                margin-top: auto;
                .helpgent-logic-remove{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    cursor: pointer;
                    transition: var(--helpgent-transition);
                    &:hover{
                        color: var(--helpgent-color-danger);
                        svg path{
                            fill: var(--helpgent-color-danger);
                        }
                    }
                    svg path{
                        transition: var(--helpgent-transition);
                    }
                }
            }
            .helpgent-logic-source{
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 12px;
                &__icon{
                    width: 32px;
                    height: 32px;
                    border-radius: 8px;
                    background: var(--helpgent-color-primary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex: none;
                    svg{
                        width: 14px;
                        height: 14px;
                        path{
                            fill: var(--helpgent-color-white);
                        }
                    }
                }
                &__name{
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--helpgent-color-gray);
                    p{
                        margin: 0;
                        font-size: inherit;
                        font-weight: inherit
                    }
                }
            }
            .helpgent-logic{
                display: flex;
                align-items: center;
                justify-content: space-between;
                background: var(--helpgent-color-bg-gray);
                border-radius: 10px;
                padding: 5px 5px 5px 15px;
                &:not(:last-child){
                    margin-bottom: 10px;
                }
                &__text{
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--helpgent-color-black);
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    span{
                        display: flex;
                        align-items: center;
                        gap: 8px;
                    }
                    .helpgent-option-index{
                        width: 23px;
                        height: 23px;
                        border-radius: 6px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 13px;
                        font-weight: 600;
                        background: var(--helpgent-color-primary);
                        text-transform: uppercase;
                        color: #fff;
                    }
                }
                &__dropdown{
                    display: flex;
                    align-items: center;
                    .helpgent-badge{
                        position: absolute;
                        z-index: 1;
                        inset-inline-start: calc(-100% - 4px);
                        top: 50%;
                        transform: translateY(-50%);
                        line-height: normal;
                    }
                    .helpgent-select__menu{
                        min-width: 290px;
                        inset-inline-end: -5px;
                        .helpgent-select__group-heading{
                            font-size: 13px;
                            font-weight: 500;
                            color: var(--helpgent-color-light-gray);
                            text-transform: capitalize;
                        }
                    }
                    .helpgent-select{
                        position: relative;
                        box-sizing: border-box;
                        width: 40px;
                        height: 40px;
                        border-radius: 10px;
                        background: var(--helpgent-color-white);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        .helpgent-select__control{
                            padding: 10px;
                            background-color: transparent;
                            overflow: visible;
                            &--is-focused{
                                box-shadow: none;
                            }
                        }
                        &__value-container{
                            overflow: visible;
                            padding: 0;
                            height: 0;
                            &--has-value{
                                height: auto;
                                & + .helpgent-select__indicators{
                                    display: none;
                                }
                            }
                            svg{
                                width: 16px;
                                height: 16px;
                                path{
                                    fill: var(--helpgent-color-primary);
                                }
                            }
                        }
                        &__indicator{
                            padding-inline-end: 0;
                        }
                        &__option{
                            display: flex;
                            align-items: center;
                            gap: 8px;
                            transition: var(--helpgent-transition);
                            span{
                                margin-inline-end: 0;
                                display: flex;
                                position: static;
                                transform: none;
                            }
                            &__icon{
                                width: 32px;
                                height: 32px;
                                border-radius: 8px;
                                background: var(--helpgent-color-bg-gray);
                                align-items: center;
                                justify-content: center;
                                transition: var(--helpgent-transition);
                                svg{
                                    width: 16px;
                                    height: 16px;
                                    path{
                                        fill: var(--helpgent-color-light-gray);
                                    }
                                }
                            }
                            &:hover{
                                background: var(--helpgent-color-bg-gray);
                                .helpgent-select__option__icon{
                                    background: var(--helpgent-color-white);
                                }
                            }
                        }
                    }
                }
            }
            .helpgent-select__option{
                .helpgent-select__option__icon,
                .helpgent-badge{
                    flex: none;
                }
                .helpgent-select__option__text{
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    flex: 0 0 184px;
                    word-break: break-word;
                    overflow: hidden;
                    p,
                    strong{
                        margin: 0;
                        font-size: inherit;
                        font-weight: inherit;
                        line-height: inherit;
                    }
                }
            }

        }
    }
`),r=i.Ay.div`
    .wp-editor-container{
        border: 0 none;
        border-radius: 10px 0 10px 10px;
        overflow: hidden;
    }
    div.mce-toolbar-grp > div {
        padding: 3px 15px;
    }
    div.mce-toolbar-grp{
        background: var(--helpgent-color-dark);
        border-bottom-color: var(--helpgent-color-dark);
    }
    .mce-toolbar .mce-ico{
        color: #fff;
    }
    .mce-toolbar .mce-btn-group .mce-btn.mce-listbox{
        border-color: var(--helpgent-color-dark);
        &:hover{
            border-color: var(--helpgent-color-dark);
        }
    }
    .mce-toolbar .mce-listbox button,
    .quicktags-toolbar{
        background: var(--helpgent-color-dark);
    }
    .mce-menubtn.mce-fixed-width span{
        color: #fff;
    }
    .mce-toolbar .mce-btn-group .mce-btn:hover,
    .mce-toolbar .mce-btn-group .mce-btn:focus,
    .qt-dfw:hover,
    .qt-dfw:focus{
        background: #222;
        box-shadow: none;
    }
    .mce-toolbar .mce-btn-group .mce-btn.mce-active,
    .mce-toolbar .mce-btn-group .mce-btn:active,
    .qt-dfw.active{
        .mce-ico{
            color: var(--helpgent-color-dark);
        }
    }
    button.wp-switch-editor {
        background: #fff;
        border-color: #fff;
        color: var(--helpgent-color-dark);
        border-radius: 6px 6px 0 0;
        top: 0;
    }
    .wp-editor-wrap.tmce-active{
        button.wp-switch-editor.switch-tmce{
            background: var(--helpgent-color-dark);
            border-color: var(--helpgent-color-dark);
            color: #fff;
        }
    }
    .wp-editor-wrap.html-active{
        button.wp-switch-editor.switch-html{
            background: var(--helpgent-color-dark);
            border-color: var(--helpgent-color-dark);
            color: #fff;
       }
    }
    .wp-media-buttons{
        .button{
            background: var(--helpgent-color-dark);
            border-color: var(--helpgent-color-dark);
            color: #fff;
            border-radius: 6px;
            transition: var(--helpgent-transition);
            &:hover{
                background: #3a3a3a;
            }
        }
    }
`},30912:(e,t,n)=>{n.d(t,{EV:()=>g,F4:()=>o,Ih:()=>m,NO:()=>u,Pk:()=>y,Vz:()=>a,Y8:()=>r,a8:()=>f,dn:()=>d,eq:()=>w,hH:()=>p,lm:()=>b,mR:()=>c,px:()=>s,rS:()=>l,rp:()=>_,vB:()=>v,xk:()=>h,yA:()=>x});var i=n(38267);const o=i.Ay.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px 0 0;
    margin-bottom: 20px;
    background-color: var(--helpgent-color-white);
    position: sticky;
    top: 32px;
    z-index: 98;
    box-shadow: 0 2px 5px rgba(0,0,0,0.02);
    @media only screen and (max-width: 767px){
        gap: 15px;
    }
    @media only screen and (max-width: 575px){
        flex-wrap: wrap;
        padding: 15px;
    }
    @media only screen and (max-width: 430px){
        justify-content: center;
    }
    .helpgent-single-form-header__back-link{
        position: relative;
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        padding: 21px 15px 21px 0;
        margin-right: 8px;
        color: var(--helpgent-color-gray);
        display: flex;
        align-items: center;
        gap: 8px;
        transition: var(--helpgent-transition);
        &:after{
            position: absolute;
            inset-inline-end: 0;
            top: 0;
            width: 1px;
            height: 100%;
            content: '';
            background-color: var(--helpgent-color-border-light);
        }
        svg {
            position: relative;
            top: -1px;
            path {
                fill: var(--helpgent-color-gray);
                transition: var(--helpgent-transition);
            }
        }
        &:hover{
            color: var(--helpgent-color-primary);
            svg path{
                fill: var(--helpgent-color-primary);
            }
        }
    }
    .helpgent-single-form-header__right{
        min-width: 282px;
    }
    .helpgent-single-form-header__left{
        display: flex;
        align-items: center;
        flex: 0.34;
        @media only screen and (max-width: 1650px){
            flex: 0.4;
        }
        @media only screen and (max-width: 1500px){
            flex: 0.6;
        }
        @media only screen and (max-width: 575px){
            flex: 0 0 100%;
        }
    }
    .helpgent-single-form-header__logo{
        background: var(--helpgent-color-bg-deep);
        margin-right: 14px;
        a{
            display: block;
            padding: 13px 14px;
        }
    }
    .helpgent-single-form-header__title{
        font-size: 14px;
        display: flex;
        align-items: center;
        color: var(--helpgent-color-gray);
        padding: 10px 15px 10px 10px;
        border-radius: 8px;
        transition: var(--helpgent-transition);
        margin-right: 15px;
        svg{
            margin-inline-end: 10px;
            width: 14px;
            height: 14px;
            flex: none;
            path{
                fill: var(--helpgent-color-light-gray);
            }
            @media only screen and (max-width: 767px){
                display: none;
            }
        }
        .helpgent-form-rename-field{
            background: none;
            border: 0 none;
            outline: 0;
            box-shadow: none;
            padding: 0;
            min-height: auto;
            line-height: normal;
            position: relative;
            top: -1px;
            left: -1px;
            max-width: 168px;
        }
        &.helpgent-single-form-header__title-active{
            background: var(--helpgent-color-bg-light);
        }
        .helpgent-form-rename-field-validate{
            flex: 0 0 100%;
            font-size: 12px;
            position: relative;
            top: 5px;
            color: var(--helpgent-color-danger);
        }
    }

    .helpgent-draft-text{
        margin: 0;
        display: flex;
        align-items: center;
        gap: 6px;
        color: var(--helpgent-color-light-gray);
        font-size: 12px;
        font-weight: 500;
        line-height: normal;
        min-width: 110px;
        svg{
            margin: 0;
            width: 12px;
            height: 12px;
            flex: none;
            path{
                fill: var(--helpgent-color-light-gray);
            }
        }
    }

    .helpgent-single-form-header__middle{
        flex: 0.48;
        display: flex;
        justify-content: center;
        margin-right: auto;
        @media only screen and (max-width: 1500px){
            flex: 0.2;
        }
        @media only screen and (max-width: 430px){
            flex: 0 0 100%;
        }
    }

    .helpgent-single-form-header__tab{
        display: flex;
        align-items: center;
        gap: 30px;
        padding: 0;
        margin: 0;
        list-style: none;
        @media only screen and (max-width: 767px){
            gap: 15px;
        }
        li{
            margin: 0;
            padding: 0;
        }
    }
    .helpgent-single-form-header__tab-link{
        position: relative;
        font-size: 14px;
        font-weight: 400;
        display: inline-block;
        text-decoration: none;
        padding: 21px 0;
        cursor: pointer;
        transition: var(--helpgent-transition);
        color: var(--helpgent-color-gray);
        @media only screen and (max-width: 575px){
            padding: 0 0 10px;
        }
        &:focus{
            outline: none;
            box-shadow: 0 0;
        }
        &:after{
            position: absolute;
            inset-inline-start: 0;
            bottom: 0;
            width: 100%;
            height: 2px;
            border-radius: 10px;
            content: '';
            opacity: 0;
            visibility: visible;
            transition: var(--helpgent-transition);
            background-color: var(--helpgent-color-primary);
        }
        &:hover,
        &.helpgent-active{
            color:  var(--helpgent-color-primary);
            &:after{
                opacity: 1;
                visibility: visible;
            }
        }
        &.helpgent-active{
            font-weight: 600;
        }
    }
    .helpgent-form-undo-redo-actions{
        display: flex;
        align-items: center;
        gap: 2px;
        margin-right: 3px;
        span{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            border-radius: 8px;
            transition: var(--helpgent-transition);
            pointer-events: none;
            svg{
                width: 14px;
                height: 13px;
                path{
                    fill: var(--helpgent-color-extra-light);
                    transition: var(--helpgent-transition);
                }
            }
            &.helpgent-form-undo-active,
            &.helpgent-form-redo-active{
                pointer-events: all;
                cursor: pointer;
                svg path{
                    fill: var(--helpgent-color-gray);
                }
                &:hover{
                    background: var(--helpgent-color-bg-gray);
                }
            }
        }
    }
    .helpgent-single-form-more-action{
        .helpgent-single-form-action-dropdown{
            .helpgent-dropdown-icon{
                line-height: 0;
            }
            .helpgent-dropdown__toggle{
                width: 36px;
                height: 36px;
                border-radius: 8px;
                transition: var(--helpgent-transition);
                align-items: center;
                justify-content: center;
                position: relative;
                &:hover{
                    background: var(--helpgent-color-border-light);
                }
                &::before{
                    content: attr(data-tooltip);
                    position: absolute;
                    right: 0;
                    top: calc(100% + 4px);
                    width: 250px;
                    padding: 9px 10px;
                    background: var(--helpgent-color-dark);
                    border-radius: 6px;
                    font-size: 12px;
                    font-weight: 500;
                    color: #fff;
                    display: none;
                    align-items: center;
                }
                &::after{
                    content: "";
                    position: absolute;
                    right: 8px;
                    top: calc(100% + 1px);
                    transform: translateX(-50%) rotate(45deg);
                    width: 9px;
                    height: 9px;
                    border-radius: 2px;
                    background: var(--helpgent-color-dark);
                    display: none;
                }
                &:hover{
                    &::before,
                    &::after{
                        display: flex;
                    }
                }
                &:active,
                &:focus{
                    &::before,
                    &::after{
                        display: none;
                    }
                }
            }
            &.helpgent-dropdown-open{
                .helpgent-dropdown__toggle{
                    background: var(--helpgent-color-border-light);
                }
            }
            .helpgent-dropdown__content{
                min-width: 240px;
                padding: 13px;
                li:last-child{
                    border-top: 1px solid var(--helpgent-color-bg-gray);
                    padding-top: 5px;
                }
            }
            .helpgent-single-form-action-fullscreen{
                padding: 11px;
                transition: var(--helpgent-transition);
                cursor: pointer;
                border-radius: 8px;
                &:hover{
                    background: var(--helpgent-color-bg-general);
                }
                .helpgent-toggle{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .helpgent-toggle__label{
                    font-size: 14px;
                    font-weight: 400;
                    color: var(--helpgent-color-dark);
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    flex: 1;
                    svg{
                        width: 14px;
                        height: 14px;
                        path{
                            fill: var(--helpgent-color-text);
                        }
                    }
                }
            }
        }
    }
    .helpgent-single-form-header__action{
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: flex-end;
        .helpgent-btn{
            svg{
                margin:0 8px 0 0;
            }
        }

        .helpgent-btn{
            height: 36px;
            min-height: 36px;
            padding: 0 20px;
        }
        .helpgent-btn-icon{
            padding-left: 10px;
            padding-right: 10px;
            font-weight: 500;
            font-size: 13px;
            svg{
                margin: 0;
            }
        }
    }
    .helpgent-single-form-header__action--compact{
        .helpgent-single-form-header__action-dropdown{
            order: 1;
        }
    }
    .helpgent-single-form-header__action-dropdown{
        position: relative;
        .helpgent-header-action-more{
            width: 36px;
            height: 36px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--helpgent-color-bg-light);
        }
        .helpgent-header-action-items{
            position: absolute;
            right: 0;
            top: 40px;
            background: #fff;
            padding: 15px 20px;
            box-shadow: 0 0 15px rgba(0,0,0,0.1);
            border-radius: 8px;
            min-width: 160px;
            box-sizing: border-box;
            .helpgent-btn{
                background: none;
                padding: 0;
                border: 0 none;
                height: auto;
                max-height: none;
                min-height: auto;
                color: var(--helpgent-color-gray);
                font-size: 14px;
                font-weight: 500;
                line-height: normal;
                svg path{
                    fill: var(--helpgent-color-light-gray);
                }
            }
            .helpgent-btn-preview,
            .helpgent-header-action-item__share{
                margin-top: 12px;
                background: none !important;
            }
            .helpgent-header-action-item__share{
                .helpgent-btn{
                    background: none;
                }
                .helpgent-share-popup{
                    top: 30px;
                    right: -40px;
                }
            }
        }
    }
`,l=(i.Ay.div`

`,i.Ay.div`
    position: relative;
    width: 280px;
    border-radius: 14px;
    background-color: var(--helpgent-color-white);
    transition: width .3s ease;
    height: calc(100vh - 150px);
    @media screen and (min-width: 1199px) and (max-width: 1367px) {
        width: 235px;
    }

    &.helpgent-screenBar--collapsed{
        width: 56px;
        border-radius: 10px;
        .helpgent-screenBar-header{
            padding: 7px 10px;
        }
        .helpgent-screenBar-header__add,
        .helpgent-screenBar-end-head__add{
            width: 36px;
            height: 36px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(101,81,242,0.1);
            svg{
                width: 12px;
                height: 12px;
                path{
                    fill: var(--helpgent-color-primary);
                }
            }
        }
        .helpgent-screenBar-content__welcome,
        .helpgent-screenBar-content__other{
            padding: 5px 10px;
        }
        .helpgent-screenBar-content__end{
            padding: 15px 10px;
            .helpgent-end-screen-list{
                padding-right: 0;
                margin-right: -10px;
            }
        }
        .helpgent-screen__item--collapsed{
            width: 36px;
            height: 36px;
            border-radius: 8px;
            border: 1px solid transparent;
            &:not(.helpgent-active){
                background: none;
                border: 1px solid var(--helpgent-color-bg-gray);
            }
            &:hover{
                background: var(--helpgent-color-bg-gray);
                .helpgent-screen__icon svg path{
                    fill: var(--helpgent-color-gray);
                }
            }
            .helpgent-screen__inner{
                box-sizing: border-box;
                padding: 0;
                height: inherit;
                .helpgent-screen__content{
                    justify-content: center;
                    height: inherit;
                    position: relative;
                    &::before{
                        content: attr(data-title);
                        min-width: 100px;
                        max-width: 200px;
                        background: #000000;
                        border-radius: 6px;
                        padding: 7px 10px;
                        left: calc(var(--helpgent-sidebar-elm-position-right) + 10px);
                        top: calc(var(--helpgent-sidebar-elm-position-top) + 2px);
                        position: fixed;
                        transform: translateY(-50%);
                        z-index: 999;
                        visibility: hidden;
                        opacity: 0;
                        font-size: 13px;
                        font-weight: 500;
                        color: #fff;
                    }
                    &::after{
                        content: '';
                        position: fixed;
                        top: calc(var(--helpgent-sidebar-elm-position-top) - 5px);
                        left: calc(var(--helpgent-sidebar-elm-position-right) + 3px);
                        border-top: 7px solid transparent;
                        border-bottom: 7px solid transparent;
                        border-right: 8px solid #000000;
                        z-index: 999;
                        visibility: hidden;
                        opacity: 0;
                    }
                    .helpgent-screen__icon{
                        flex: none;
                        width: auto;
                        height: auto;
                        margin: 0;
                        background: none !important;
                    }
                    &:hover{
                        &::before,
                        &::after{
                            visibility: visible;
                            opacity: 1;
                        }
                    }
                }
                .helpgent-screen__title{
                    display: none;
                }
            }
        }
    }

    .helpgent-screenBar-header{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 20px;
        border-bottom: 1px solid var(--helpgent-color-bg-gray);
        transition: var(--helpgent-transition);
        @media screen and (min-width: 1199px) and (max-width: 1367px) {
            padding: 15px 15px;
        }
    }
    .helpgent-screenBar-header__title{
        font-size: 15px;
        margin: 0;
        color: var(--helpgent-color-dark);
        font-weight: 500;
    }
    .helpgent-screenBar-header__add{
        position: relative;
        font-size: 13px;
        font-weight: 500;
        text-decoration: none;
        color: var(--helpgent-color-primary);
        display: flex;
        align-items: center;
        gap: 6px;
        &:focus{
            outline: none;
            box-shadow: 0 0;
        }
        svg{
            margin: 0;
            width: 10px;
            height: 10px;
            path{
                fill: var(--helpgent-color-primary);
            }
        }
    }
    .helpgent-screenBar-content{
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        height: calc( 100vh - 200px );
        padding-top: 15px;
        transition: var(--helpgent-transition);
        .helpgent-screen__icon{
            width: 36px;
            height: 36px;
            flex: 0 0 36px;
            svg{
                path,
                circle{
                    fill: var(--helpgent-color-gray);
                }
            }
        }
    }
    .helpgent-sortable-item{
        margin-bottom: 10px;
    }
    .helpgent-sortable-screen{
        &.helpgent-disabled{
            pointer-events: none;
            opacity: .65;
            cursor: not-allowed;
            user-select: none;
        }
    }
    .helpgent-screenBar-content__welcome{
        padding: 5px 20px;
        @media screen and (min-width: 1199px) and (max-width: 1367px) {
            padding: 5px 15px;
        }
        .helpgent-screen__item.helpgent-screen__disabled{
            pointer-events: none;
            opacity: .65;
            cursor: not-allowed;
            user-select: none;
        }
    }
    .helpgent-screenBar-welcome-screens{
        border-bottom: 1px solid var(--helpgent-color-bg-gray);
        padding-bottom: 15px;
        &:empty{
            display: none;
        }
    }
    .helpgent-screenBar-content__other{
        flex: 1 1 0%;
        padding: 0 20px 20px;
        overflow-y: auto;
        @media screen and (min-width: 1199px) and (max-width: 1367px) {
            padding: 0 15px 20px;
        }
        .helpgent-screen__title-text{
            flex: 0 0 138px;
        }
        &::-webkit-scrollbar-track {
            background: #fff;
        }
    }
    .helpgent-screenBar-welcome-screens:not(:empty) + .helpgent-screenBar-content__other{
        padding-top: 20px;
    }
    .helpgent-screenBar-content__end{
        display: flex;
        flex-direction: column;
        padding: 0 20px 20px;
        border-top: 1px solid var(--helpgent-color-bg-gray);
        user-select: none;
        max-height: 250px;
        @media screen and (min-width: 1199px) and (max-width: 1367px) {
            padding: 0 15px 20px;
        }
        .helpgent-end-screen-list{
            overflow-y: auto;
            padding-right: 20px;
            margin-right: -20px;
            @media screen and (min-width: 1199px) and (max-width: 1367px) {
                padding-right: 15px;
                margin-right: -15px;
            }
            &::-webkit-scrollbar-track {
                background: #fff;
            }
        }
        .helpgent-screen__title{
            .helpgent-screen__title-text{
                flex: 0 0 124px;
            }
        }

    }
    .helpgent-ending-draggable{
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 16px;
        cursor: grab;
        .helpgent-ending-draggable__pipe{
            width: 50px;
            height: 4px;
            border-radius: 20px;
            background-color: var(--helpgent-color-light-gray);
        }
    }
    .helpgent-screenBar-end-head{
        display: flex;
        justify-content: space-between;
        margin: 10px 0 20px;
    }
    .helpgent-screenBar-end-head__title{
        font-size: 15px;
        font-weight: 500;
        color: var(--helpgent-color-dark);
    }
    .helpgent-screenBar-end-head__add{
        font-size: 13px;
        text-decoration: none;
        color: var(--helpgent-color-light-gray);
        cursor: pointer;
        transition: var(--helpgent-transition);
        &:hover{
            color: var(--helpgent-color-primary);
        }
    }
    .helpgent-sidebar-collapse{
        position: absolute;
        inset-inline-start: calc(100% + 20px);
        top: 0;
        background: var(--helpgent-color-bg-deep) !important;
        border-radius: 6px;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0 none;
        cursor: pointer;
        svg{
            width: 14px;
            height: 12px;
            path{
                fill: var(--helpgent-color-light-gray);
            }
        }
    }
`),r=i.Ay.div`
    display: flex;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 20px 0 20px;
    overflow: hidden;
    position: relative;
    @media only screen and (max-width: 1399px){
        padding-bottom: 30px;
    }
`,p=i.Ay.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color .3s ease-in-out;
    background-color: var(--helpgent-color-bg-light);
    &:hover{
        background-color: var(--helpgent-color-gray);
        .helpgent-screen__title .helpgent-screen__counter-end{
            background: #fff;
        }
        .helpgent-screen__title .helpgent-screen__counter-end,
        .helpgent-screen__title .helpgent-screen__counter{
            background: rgba(255,255,255,0.2);
            color: #fff;
        }
        .helpgent-screen__title{
            color: var( --helpgent-color-white );
        }
        .helpgent-screen__title .helpgent-screen__title-text{
            color: #fff;
        }
        .helpgent-screen__icon{
            background: rgba(255,255,255,0.2);
            svg{
                path,
                circle{
                    fill: var(--helpgent-color-white);
                }
            }
        }
    }
    &:not(:last-child){
        margin-bottom: 10px;
    }
    &.helpgent-screen__disabled{
        cursor: not-allowed;
    }
    &.helpgent-active{
        background-color: var(--helpgent-color-gray);
        .helpgent-screen__title{
            color: var( --helpgent-color-white );
        }
        .helpgent-screen__icon{
            svg{
                path,
                circle{
                    fill: var(--helpgent-color-white);
                }
            }
        }
        .helpgent-screen__title .helpgent-screen__counter-end,
        .helpgent-screen__title .helpgent-screen__counter{
            background: rgba(255,255,255,0.2);
            color: #fff;
        }
        .helpgent-screen__title .helpgent-screen__title-text{
            color: #fff;
        }
        .helpgent-screen__icon{
            background: rgba(255,255,255,0.2);
        }
    }
    .helpgent-screen__inner{
        width: 100%;
        padding: 6px;
    }
    .helpgent-screen-dropdown{
        position: absolute;
        inset-inline-end: 0;
        .helpgent-dropdown__toggle{
            padding: 5px 15px;
        }
        .helpgent-dropdown__content{
            right: 0;
        }
    }
    .helpgent-screen__content{
        display: flex;
        align-items: center;
    }
    .helpgent-screen__icon{
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        margin-inline-end: 8px;
        background-color: var(--helpgent-color-white);
        transition: var(--helpgent-transition);
        svg{
            path,
            circle{
                fill: var(--helpgent-color-light-gray);
                transition: var(--helpgent-transition);
            }
        }
    }
    .helpgent-screen__title{
        position: relative;
        display: flex;
        align-items: center;
        font-size: 13px;
        font-weight: 500;
        line-height: 1.25;
        margin: 0;
        color: var(--helpgent-color-gray);
        word-break: break-word;
        padding-inline-end: 25px;
        flex: 1;
        .helpgent-screen__title-text{
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            flex: 0 0 125px;
            word-break: break-word;
            overflow: hidden;
            font-size: 13px;
            font-weight: 500;
            color: var(--helpgent-color-gray);
            line-height: 1.2;
            transition: var(--helpgent-transition);
            font-family: var(--helpgent-font-family);
            @media screen and (min-width: 1199px) and (max-width: 1367px) {
                flex: 0 0 95px;
            }
        }
        .helpgent-badge{
            display: inline-block;
            margin-inline-start: 11px;
            line-height: 1.8;
            padding: 0 5px;
            flex: none;
        }
        .helpgent-screen__counter{
            margin-inline-end: 9px;
            width: 24px;
            height: 24px;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex: none;
            background: var(--helpgent-color-bg-deep);
            font-size: 13px;
            font-weight: 500;
            text-transform: uppercase;
            color: var(--helpgent-color-black);
            transition: var(--helpgent-transition);
        }
        .helpgent-screen__counter-end{
            margin-right: 9px;
            width: 24px;
            height: 24px;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex: none;
            background: var(--helpgent-color-bg-deep);
            font-size: 13px;
            font-weight: 600;
            text-transform: uppercase;
            color: var(--helpgent-color-black);
            transition: var(--helpgent-transition);
        }
        P,
        strong{
            margin: 0;
            font-size: inherit;
            line-height: inherit;
        }
    }
    .helpgent-dropdown{
        line-height: 1;
    }
    .helpgent-dropdown__content{
        width: 200px;
        margin: 0;
        top: 40px;
        inset-inline-end: -6px;
        box-sizing: border-box;
        li{
            margin: 0;
        }
        a{
            font-size: 14px;
            &:hover{
                background-color: var(--helpgent-color-bg-gray);
            }
        }
    }
    .helpgent-dropdown__toggle{
        padding: 2px 0;
    }
`,a=i.Ay.div`
    position: fixed;
    width: 45vw;
    border-radius: 14px;
    cursor: auto;
    box-shadow: 0 5px 30px rgba(0,0,0,.10);
    z-index: 99999;
    background-color: var(--helpgent-color-white);
    top: var(--helpgent-dropdown-top);
    right: var(--helpgent-dropdown-right);
    @media only screen and (max-width: 1199px){
        width: 60vw;
    }
    @media only screen and (max-width: 991px){
        width: 70vw;
    }
    &:before{
        content: '';
        position: absolute;
        width: 100%;
        height: 20px;
        background: #fff;
        left: 0;
        bottom: 0;
        border-radius: 0 0 14px 14px;
        z-index: 1;
    }
    .helpgent-mega-dropdown__title{
        font-size: 16px;
        font-weight: 600;
        color: var(--helpgent-color-dark);
        margin: 0 0 20px;
    }
    .helpgent-screen-type__title{
        display: inline-block;
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 12px;
        color: var(--helpgent-color-light-gray);
    }
    .helpgent-mega-dropdown__search{
        position: relative;
        border-bottom: 1px solid var(--helpgent-color-bg-gray);
        .helpgent-mega-dropdown__search-icon{
            position: absolute;
            inset-inline-start: 20px;
            top: 50%;
            transform: translateY(-50%);
        }
        input{
            width: 100%;
            font-size: 14px;
            padding-inline-start: 45px;
            padding-inline-end: 30px;
            min-height: 50px;
            border-radius: 14px 14px 0 0;
            border: 0 none;
            &:focus{
                outline: none;
                box-shadow: 0 0;
            }
        }
    }
    .helpgent-screen-type-wrap{
        display: grid;
        grid-gap: 25px;
        grid-template-columns: 1fr 1fr 1fr;
        @media only screen and (max-width: 767px){
            grid-template-columns: 1fr 1fr;
        }
        @media only screen and (max-width: 575px){
            grid-template-columns: 1fr;
        }
    }
    .helpgent-screen-type{
        font-size: clamp(14px, 4vw, 15px);
        &:not(:last-child){
            margin-bottom: 50px;
            @media only screen and (max-width: 1399px){
                margin-bottom: 30px;
            }
        }
    }
    .helpgent-mega-dropdown__content{
        padding: 20px 30px 40px;
        min-height: 300px;
        box-sizing: border-box;
        @media only screen and (max-width: 1450px){
            max-height: 400px;
        }
        .helpgent-screen__title{56
            padding-inline-end: 0;
        }
        .helpgent-screen__title-text{
            flex: unset;
        }
    }
    .helpgent-screen-type-column{
        &:empty{
            display: none;
        }
    }
    .helpgent-screen__counter-end{
        display: none !important;
    }
`,g=i.Ay.div`
    flex: 1 1 0%;
    padding: 0 30px;
    text-align: center;
    display:flex;
    flex-direction: column;
    transform-origin: top center;
    transition: var(--helpgent-transition);
    height: calc(100vh - 150px);
    @media screen and (min-width: 1199px) and (max-width: 1367px) {
        padding: 0 20px;
    }

    .helpgent-preview-container{
        &:hover{
            .helpgent-media-action{
                visibility: visible;
                opacity: 1;
            }
        }
    }

    &.helpgent-preview-style{
        .helpgent-element-textField{
            padding-left: 40px;
            padding-right: 40px;
            textarea.helpgent-form-group__element{
                min-height: 80px;
            }
        }
        .helpgent-preview-media-overlay .helpgent-element-element{
            padding-left: 40px;
            padding-right: 40px;
        }
        .helpgent-form-bottom-extras {
            @media only screen and (max-width: 768px){
                position: absolute;
            }
            @media only screen and (max-width: 575px){
                padding: 0;
            }
            .helpgent-form__step-count{
                @media only screen and (max-width: 575px){
                    margin: 10px 20px;
                }
            }
        }
    }
    &.helpgent-preview-style--tablet{
        > *{
            width: 650px;
            @media only screen and (max-width: 1399px){
                width: 450px;
            }
            @media only screen and (max-width: 575px){
                width: 100%;
            }
        }
        .helpgent-element-element{
            padding: 15px 0 calc(var(--helpgent-bottom-extras-height) + 25px);
        }
        .helpgent-element-element.helpgent-element-element--open-ended{
            height: auto;
        }
    }

    &.helpgent-preview-style--mobile{
        > *{
            width: 350px;
            @media only screen and (max-width: 400px){
                width: 100%;
            }
        }
        .helpgent-element-element{
            &.helpgent-element-element--open-ended{
                padding: 25px 0 100px 0 !important;
                height: auto;
                @media only screen and (max-width: 575px){
                    justify-content: space-between;
                    .helpgent-element-element__action{
                        margin-top: unset;
                        margin-bottom: 30px;
                    }
                }
                .helpgent-element-element__text{
                    margin-bottom: 25px;
                }
            }
        }
        .helpgent-preview-media-left,
        .helpgent-preview-media-right{
            .helpgent-element-element{
                &.helpgent-element-element--open-ended{
                    padding: 25px 0 115px 0;
                }
            }
        }
        .helpgent-preview-media-overlay,
        .helpgent-preview-no-media,
        .helpgent-preview-open-ended-default{
            .helpgent-element-element{
                &.helpgent-element-element--open-ended{
                    justify-content: space-between;
                    .helpgent-element-element__action{
                        margin-top: unset;
                        margin-bottom: unset;
                    }
                }
            }
            .helpgent-form__copyright--media{
                justify-content: center;
            }
        }
        .helpgent-open-ended-element-types {
            flex-wrap: nowrap;
            .helpgent-open-ended-btn{
                min-width: 60px;
                min-height: 60px;
                svg{
                    width: 18px;
                    height: 18px;
                }
            }
        }
        .helpgent-preview-media-overlay{
            .helpgent-element-element__text,
            .helpgent-element-element__action{
                padding: 0 15px;
            }
        }
        .helpgent-preview-media-overlay .helpgent-element-element-wrapper--multi_select,
        .helpgent-preview-media-overlay .helpgent-element-element-wrapper--single_select{
            .helpgent-element-element__action{
                padding: 0 30px;
            }
        }
        .helpgent-promoter-score__single{
            width: 20px;
            height: 20px;
            font-size: 11px;
        }
        .helpgent-preview-media-overlay .helpgent-promoter-score__single{
            width: 24px;
            height: 24px;
            font-size: 12px;
        }
        .helpgent-element-element__text,
        .helpgent-element-element__action{
            padding: 0 25px;
        }
        .helpgent-preview-container:not(.helpgent-preview-open-ended-default){
            .helpgent-open-ended-element-types {
                grid-template-columns: repeat(auto-fill, minmax(66px, 66px));
                grid-auto-flow: column;
                .helpgent-open-ended-btn{
                    min-width: 65px;
                    min-height: 65px;
                }
            }
        }
    }

    &.helpgent-preview-style--tablet,
    &.helpgent-preview-style--mobile{
        align-items: center;
        > *{
            box-sizing: border-box;
        }
        .helpgent-preview-container{
            flex-flow: column;
        }
        .helpgent-preview-top{
            margin-bottom: 15px;
        }
        .helpgent-element-element{
            padding: 25px 0 calc(var(--helpgent-bottom-extras-height) + 25px) 0;
        }
        .helpgent-element-element-wrapper--welcome{
            .helpgent-element-element{
                padding: 25px 0 calc(var(--helpgent-bottom-extras-height) + 32px) 0;
            }
        }
        .helpgent-btn.helpgent-btn-sm {
            min-height: 30px;
            padding-inline-start: 10px;
            padding-inline-end: 10px;
        }
        .helpgent-media-empty,
        .helpgent-media-src__video video,
        .helpgent-media-src__image img{
            border-radius: 20px 20px 0 0;
        }
        .helpgent-preview-media-overlay,
        .helpgent-preview-open-ended-default{
            .helpgent-element-element{
                padding: 25px 0 calc(var(--helpgent-bottom-extras-height) + 25px) 0;
            }
        }
        .helpgent-form-bottom-extras{
            padding: 0;
            width: 100%;
            right: 0;
            bottom: 0;
            margin: 0;
            border-radius: 0 0 20px 20px;
            justify-content: flex-start;
            box-shadow: 0 -2px 5px rgba(0,0,0,0.08);
            flex-wrap: wrap;
            z-index: 10;
            .helpgent-form__step-count{
                margin: 10px 20px;
            }
            .helpgent-navigation{
                margin-right: 20px;
            }
            .helpgent-form__copyright{
                flex: 0 0 100%;
                a{
                    border-radius: 0 0 20px 20px;
                }
            }
        }
    }

    .helpgent-preview-top{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 15px;
        margin-bottom: 30px;
        svg{
            margin-inline-end: 10px;
        }
    }
    .helpgent-preview-top__text{
        font-size: 14px;
        font-weight: 500;
        color: var(--helpgent-preview-top__text);
    }
    .helpgent-promoter-score__list .helpgent-promoter-score__single{
        width: 28px;
        height: 28px;
    }
    .helpgent-promoter-score__list.helpgent-promoter-score__list--sm .helpgent-promoter-score__single{
        width: 21px;
        height: 21px;
        font-size: 11px;
        @media only screen and (max-width: 1567px) and (min-width: 1500px){
            width: 17px;
            height: 17px;
            font-size: 10px;
        }
        @media only screen and (max-width: 1500px) and (min-width: 1367px){
            width: 12px;
            height: 12px;
            font-size: 8px;
        }
    }
`,h=i.Ay.div`
    position: relative;
    width: 340px;
    border-radius: 14px;
    background-color: var(--helpgent-color-white);
    height: calc(100vh - 150px);
    overflow: hidden;
    @media only screen and (max-width: 1367px){
        width: 290px;
    }
    &.helpgent-email-settings-sidebar{
        position: sticky;
        top: 116px;
        .helpgent-screen-setting-wrap .helpgent-toggle__label{
            flex: 1;
            padding-right: 10px;
        }
    }
    .helpgent-screen-setting-header{
        border-bottom: 1px solid var(--helpgent-color-bg-gray);
    }
    .helpgent-screen-setting-content{
        height: calc(100% - 80px);
        box-sizing: border-box;
        overflow: auto;
        &--global{
            height: calc(100% - 114px);
            .helpgent-screen-setting-block{
                .helpgent-field-element--inline .helpgent-field-element__label{
                    width: 150px;
                    @media screen and (min-width: 1199px) and (max-width: 1367px) {
                        width: 130px;
                    }
                }
            }
        }
    }
    .helpgent-btn-save-settings{
        border-radius: 0;
        min-height: 54px;
        &:hover{
            border-color: #3e2db6;
            background: #3e2db6;
            color: #fff;
        }
    }
    .helpgent-screen-setting-element__label{
        font-size: 14px;
        font-weight: 500;
        margin: 0 0 8px;
        color: var(--helpgent-color-dark);
    }
    .helpgent-verification-group{
        margin: 0 0 30px;
        .helpgent-field-element__label{
            margin-bottom: 15px;
            overflow: unset !important;
        }
    }
    .helpgent-field-element__label{
        .helpgent-tooltip-toggle{
            position: relative;
            top: 2px;
            margin-left: 10px;
        }
    }
    .helpgent-screen-setting-element__content{
        position: relative;
        .helpgent-mega-dropdown{
            //inset-inline-start: auto;
            //inset-inline-end: 0;
        }
        .helpgent-mega-dropdown__content{
            height: min(80vh, 520px);
            overflow-y: auto;
        }
    }
    .helpgent-screen-setting-list{
        display: flex;
        align-items: center;
        gap: 0 30px;
        padding: 10px 25px 0 25px;
        margin: 0;
        @media screen and (min-width: 1199px) and (max-width: 1367px) {
            padding: 10px 15px 0 15px;
        }
        @media only screen and (max-width: 400px){
            padding: 0 15px 0 15px;
        }
        li{
            padding: 15px 0;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            color: var(--helpgent-color-gray);
            margin: 0;
            border-bottom: 2px solid transparent;
            transition: var(--helpgent-transition);
            &.helpgent-active{
                border-color: var(--helpgent-color-primary);
                color: var(--helpgent-color-primary);
                font-weight: 600;
            }
            &:hover{
                color: var(--helpgent-color-primary);
            }
        }
    }

    .helpgent-screen-setting-block{
        padding: 25px;
        @media screen and (min-width: 1199px) and (max-width: 1367px) {
            padding: 15px;
        }
        @media only screen and (max-width: 400px){
            padding: 15px;
        }
        &:not(:last-child){
            border-bottom: 1px solid var(--helpgent-color-bg-gray);
        }
        .helpgent-screen-setting-block{
            padding: 25px 0 0 0;
            margin: 25px 0 0 0;
            border-top: 1px solid var(--helpgent-color-bg-gray);
            .helpgent-field-element__label{
                width: 150px;
            }
        }
        .helpgent-button-text-block{
            h3{
                font-size: 15px;
                margin: 0 0 15px;
            }
            .helpgent-field-element__label{
                width: 170px;
            }
            .helpgent-form-group{
                margin-bottom: 15px;
            }
        }
        .helpgent-form-group__text-selection{
            margin-left: -3px;
            border-radius: 0 6px 6px 0;
            border: 2px solid var(--helpgent-color-bg-deep);
            .helpgent-select__control{
                border-radius: 0;
                min-height: 36px;
                min-width: 58px;
                padding: 4px 8px 6px 8px;
                background-color: var(--helpgent-color-bg-deep);
                &.helpgent-select__control--is-focused{
                    border-radius: 0 6px 6px 0;
                }
            }
            .helpgent-select__value-container{
                padding: 0;
                   .helpgent-quotation-toggle{
            .helpgent-toggle{
                margin-bottom: 0;
            }
        }
 }
            .helpgent-select__indicator{
                padding-inline-end: 0;
                svg{
                    width: 16px;
                    height: 16px;
                }
            }
            .helpgent-select__option{
                padding: 8px 6px;
            }
        }
        .helpgent-field-element{
            position: relative;
            &:last-child{
                .helpgent-field-element__content--inline:not(.helpgent-field-element__content--yesNo){
                    margin-bottom: 0;
                }
            }
            &.helpgent-field-element-gdpr-label{
                textarea.helpgent-form-group__element{
                    min-height: 70px;
                }
            }
            .helpgent-field-element__content--yesNo{
                margin-bottom: 10px;
            }
            .helpgent-bubble-bg-types{
                position: absolute;
                right: 0;
                top: 48px;
                width: 290px;
                height auto;
                background: #fff;
                border-radius: 10px;
                box-shadow: 0 5px 30px rgba(0,0,0,0.15);
                z-index: 999;
                &__list{
                    border-bottom: 1px solid var(--helpgent-color-border-light);
                    padding: 0 20px;
                    display: flex;
                    align-items: center;
                    gap: 10px 20px;
                    span{
                        display: flex;
                        align-items: center;
                        gap: 6px;
                        color: var(--helpgent-color-light-gray);
                        transition: var(--helpgent-transition);
                        border-bottom: 2px solid transparent;
                        padding: 19px 0 15px;
                        cursor: pointer;
                        font-size: 13px;
                        font-weight: 500;
                        svg{
                            width: 14px;
                            height: 14px;
                            path{
                                fill: var(--helpgent-color-light-gray);
                                transition: var(--helpgent-transition);
                            }
                        }
                        &.helpgent-active{
                            color: var(--helpgent-color-dark);
                            border-color: var(--helpgent-color-dark);
                            svg path{
                                fill: var(--helpgent-color-dark);
                            }
                        }
                    }
                }
                &__content{
                    padding: 16px 20px 20px;
                    max-height: 270px;
                    overflow: auto;
                    .helpgent-element-single{
                        border-radius: 8px;
                        background: var(--helpgent-color-bg-light);
                        display: flex;
                        gap: 10px;
                        align-items: center;
                        padding: 5px;
                        cursor: pointer;
                        &:not(:last-child){
                            margin-bottom: 8px;
                        }
                        &__icon{
                            width: 30px;
                            height: 30px;
                            border-radius: 50%;
                            background: #fff;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            flex: none;
                            svg{
                                width: 14px;
                                height: 14px;
                                path{
                                    fill: var(--helpgent-color-light-gray);
                                }
                            }
                        }
                        &__label{
                            color: var(--helpgent-color-light-gray);
                            font-size: 14px;
                            font-weight: 400;
                            p{
                                margin: 0;
                                font-size: inherit;
                                line-height: inherit;
                            }
                        }
                        &__selected{
                            width: 20px;
                            height: 20px;
                            border-radius: 50%;
                            margin-left: auto;
                            background: var(--helpgent-color-primary);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            svg{
                                width: 9px;
                                height: 9px;
                            }
                        }
                    }
                    .helpgent-element-single--active{
                        .helpgent-element-single__icon{
                            svg path{
                                fill: var(--helpgent-color-primary);
                            }
                        }
                        .helpgent-element-single__label{
                            font-weight: 500;
                            color: var(--helpgent-color-dark);
                        }
                    }
                    .helpgent-bubble-color-picker{
                        .components-color-picker{
                            width: 100%;
                            .react-colorful{
                                width: 100%;
                                .react-colorful__hue,
                                .react-colorful__alpha{
                                    width: 97%;
                                }
                            }
                            .components-input-control__container{
                                width: 100%;
                                border-radius: 8px;
                                .components-input-control__backdrop{
                                    border: 1px solid var(--helpgent-color-border-light);
                                }
                            }
                            .components-range-control__thumb-wrapper span,
                            .components-range-control__track{
                                background: var(--helpgent-color-primary);
                            }

                        }
                    }
                }
            }
            &__right{
                &.helpgent-active{
                    .helpgent-bubble-bg-types{
                        display: block;
                    }
                }
            }
            .helpgent-bubble-shapes{
                display: flex;
                align-items: center;
                gap: 20px;
                margin: 0;
                padding: 0;
                .helpgent-bubble-shape{
                    padding: 0;
                    margin: 0;
                    background: var(--helpgent-color-bg-deep);
                    border-radius: 8px;
                    width: 40px;
                    height: 40px;
                    position: relative;
                    cursor: pointer;
                    span{
                        position: absolute;
                        right: 4px;
                        bottom: 4px;
                        background: #fff;
                        display: block;
                        pointer-events: none;
                    }
                    &--circle{
                        span{
                            width: 16px;
                            height: 16px;
                            border-radius: 50%;
                        }
                    }
                    &--boxed-horizontal{
                        span{
                            width: 22px;
                            height: 16px;
                            border-radius: 4px;
                        }
                    }
                    &--boxed-vertical{
                        span{
                            width: 16px;
                            height: 22px;
                            border-radius: 4px;
                        }
                    }
                    &.helpgent-active{
                        background: var(--helpgent-color-primary);
                    }
                }
            }
            .helpgent-bubble-border{
                display: flex;
                align-items: center;
                gap: 10px;
                margin: 0;
                li{
                    margin: 0;
                }
                &__color{
                    .helpgent-color-picker__text{
                        display: none;
                    }
                }
                &__visibility{
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    background: #fff;
                    box-shadow: 0 0 4px rgba(0,0,0,0.15);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    svg{
                        width: 14px;
                        height: 14px;
                    }
                    span{
                        line-height: 0;
                    }
                }
            }
            .helpgent-bubble-position{
                display: flex;
                align-items: center;
                gap: 10px;
                margin: 0;
                li{
                    padding: 0;
                    margin: 0;
                    background: var(--helpgent-color-bg-deep);
                    border-radius: 8px;
                    width: 40px;
                    height: 40px;
                    position: relative;
                    cursor: pointer;
                    span{
                        position: absolute;
                        bottom: 4px;
                        background: #fff;
                        display: block;
                        width: 16px;
                        height: 16px;
                        border-radius: 50%;
                        pointer-events: none;
                    }
                    &.helpgent-active{
                        background: var(--helpgent-color-primary);
                    }
                }
                .helpgent-bubble-position__left{
                    span{
                        left: 4px;
                    }
                }
                .helpgent-bubble-position__right{
                    span{
                        right: 4px;
                    }
                }
            }
            .helpgent-picture-single{
                width: 246px;
                height: 150px;
                margin-top: 10px;
                margin-left: 9px;
                position: relative;
                @media screen and (min-width: 1199px) and (max-width: 1367px) {
                    width: 210px;
                }
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 12px;
                }
                .helpgent-picture-select-action{
                    position: absolute;
                    left: 50%;
                    bottom: 10px;
                    transform: translateX(-50%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    &--upload{
                        width: calc(100% - 4px);
                        height: calc(100% - 4px);
                        left: 0;
                        top: 0;
                        transform: none;
                        z-index: 1;
                        border: 2px dashed var(--helpgent-color-extra-light);
                        border-radius: 12px;
                        button{
                            svg{
                                width: 16px;
                            }
                        }
                    }
                    .helpgent-btn-hover-danger{
                        width: 34px;
                        height: 34px;
                        padding: 0;
                        justify-content: center;
                    }
                }
            }
            .helpgent-btn-add-picture-field{
                margin-left: 9px;
                width: 246px;
                justify-content: center;
                font-size: 13px;
                font-weight: 500;
                color: var(--helpgent-color-gray);
                @media screen and (min-width: 1199px) and (max-width: 1367px) {
                    width: 210px;
                }
                svg path{
                    fill: var(--helpgent-color-gray);
                }
            }
            .helpgent-btn-email-template{
                width: 48px;
                max-width: 48px;
                background: var(--helpgent-color-bg-light);
                padding-left: 0;
                padding-right: 0;
                justify-content: center;
                margin-left: auto;
                flex: none;
                border-color: var(--helpgent-color-bg-light);
            }
        }

        textarea.helpgent-form-group__element{
            resize: none;
            min-height: 100px;
        }

        .helpgent-field-element--wrap{
            flex-wrap: wrap;
            .helpgent-field-element__right{
                width: auto;
            }
            .helpgent-selected-screen{
                flex: 0 0 100%;
                display: flex;
                align-items: center;
                margin-top: 20px;
                gap: 10px;
                .helpgent-element-single{
                    &__icon{
                        width: 30px;
                        height: 30px;
                        background: var(--helpgent-color-bg-gray);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex: none;
                        svg{
                            width: 14px;
                            height: 14px;
                        }
                        video,
                        img{
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            border-radius: 50%;
                        }
                    }
                    &__label{
                        font-size: 14px;
                        font-weight: 500;
                        color: var(--helpgent-color-gray);
                        max-width: 205px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    &__remove{
                        width: 30px;
                        height: 30px;
                        background: var(--helpgent-color-bg-light);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex: none;
                        border-radius: 6px;
                        margin-left: auto;
                        cursor: pointer;
                        transition: var(--helpgent-transition);
                        svg{
                            path{
                                transition: var(--helpgent-transition);
                            }
                        }
                        &:hover{
                            background: var(--helpgent-color-danger);
                            svg{
                                path{
                                    fill: #fff;
                                }
                            }
                        }
                    }
                }
            }
        }
        .helpgent-field-element__right{
            width: 128px;
            display: flex;
            justify-content: flex-end;
            flex-direction: column;
        }
        .helpgent-input-description{
            margin-top: 6px;
        }
        .helpgent-field-element--inline .helpgent-field-element__label{
            font-size: 14px;
            font-weight: 500;
            word-wrap: break-word;
            word-break: break-word;
            white-space: nowrap;
            width: 160px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: flex;
            align-items: center;
            gap: 5px;
            @media screen and (min-width: 1199px) and (max-width: 1367px) {
                width: 110px;
            }
            .helpgent-tooltip-toggle{
                line-height: 1;
            }
        }
        .helpgent-date-format{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 10px;
            &__btn{
                font-size: 13px;
                font-weight: 500;
                height: 36px;
                min-height: 36px;
                padding: 0 16px;
                transition: var(--helpgent-transition);
                &.helpgent-btn-active,
                &:hover{
                    background: var(--helpgent-color-primary) !important;
                    border-color: var(--helpgent-color-primary);
                    color: #fff !important;
                }
            }
        }
        .helpgent-date-separator{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 8px;
            margin-bottom: 0;
            &__btn{
                font-size: 13px;
                font-weight: 500;
                height: 36px;
                min-height: 36px;
                width: 36px;
                padding: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: var(--helpgent-transition);
                &.helpgent-btn-active,
                &:hover{
                    background: var(--helpgent-color-primary) !important;
                    border-color: var(--helpgent-color-primary);
                    color: #fff !important;
                }
            }
        }
        .helpgent-field-element__top{
            &--inline{
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 10px;
                .helpgent-field-element__label{
                    padding-left: 9px;
                }
            }
            &__action{
                display: flex;
                align-items: center;
                gap: 0 10px;
                svg{
                    width: 15px;
                    height: 15px;
                    path{
                        fill: var(--helpgent-color-light-gray);
                    }
                }
                .helpgent-field-required--disabled{
                    pointer-events: none;
                    svg{
                        path{
                            fill: var(--helpgent-color-extra-light);
                        }
                    }
                }
            }
            .helpgent-field-element__label-inner{
                font-size: 12px;
                font-weight: 500;
                display: inline-block;
                margin-bottom: 5px;
                color: var(--helpgent-color-light-gray);
                span{
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    width: 16px;
                    height: 16px;
                    background-color:var(--helpgent-color-bg-gray);
                }
            }
        }
        .helpgent-field-element__content{
            &--inline{
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 30px;
                margin-inline-start: -10px;
                .helpgent-form-group{
                    margin-bottom: 0;
                    flex: 1;
                }
            }
            .helpgent-select{
                .helpgent-select__placeholder{
                    font-size: 14px;
                }
                .helpgent-select__control{
                    padding-top: 5px;
                    padding-bottom: 5px;
                }
            }
            .helpgent-author-location-input{
                position: relative;
                width: 100%;
                .helpgent-form-group__element{
                    padding-right: 30px;
                }
                .helpgent-input-icon-close{
                    position: absolute;
                    right: 14px;
                    top: 50%;
                    transform: translateY(-50%);
                    cursor: pointer;
                    svg{
                        width: 10px;
                        height: 10px;
                        fill: var(--helpgent-color-light-gray);
                    }
                }
            }
            .helpgent-map-autocomplete-dropdown{

            }
        }
        .helpgent-add-option{
            display: flex;
            align-items: center;
            gap: 6px;
            color: var(--helpgent-color-light-gray);
            font-size: 13px;
            font-weight: 500;
            text-decoration: none;
            transition: var(--helpgent-transition);
            span{
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background: var(--helpgent-color-bg-light);
                width: 20px;
                height: 20px;
                svg{
                    width: 8px;
                    height: 8px;
                    path{
                        transition: var(--helpgent-transition);
                        fill: var(--helpgent-color-gray);
                    }
                }
            }
            &:focus{
                outline: 0;
                border: 0 none;
                box-shadow: none;
            }
            &:hover{
                color: var(--helpgent-color-primary);
                svg path{
                    fill: var(--helpgent-color-primary);
                }
            }
        }
        .helpgent-add-social{
            &__btn,
            .helpgent-social-submit{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0 6px;
                color: var(--helpgent-color-gray);
                svg{
                    path{
                        fill: var(--helpgent-color-gray);
                    }
                }
            }
            &__form{
                margin-top: 40px;
            }
            &__fields{
                &:not(:last-child){
                    margin-bottom: 20px;
                }
                .helpgent-select{
                    margin-bottom: 8px;
                    &__control{
                        border-radius: 8px;
                        background: var(--helpgent-color-bg-light);
                        height: 40px;
                        padding-top: 6px;
                    }
                    &__single-value{
                        span{
                            font-weight: 500;
                        }
                        svg{
                            margin-inline-end: 10px;
                            width: 16px;
                            height: 16px;
                            path{
                                fill: var(--helpgent-color-primary);
                            }
                            #facebook{
                                fill: var(--helpgent-color-facebook);
                            }
                            #youtube{
                                fill: var(--helpgent-color-youtube);
                            }
                            #twitter{
                                fill: var(--helpgent-color-twitter);
                            }
                            #instagram{
                                fill: var(--helpgent-color-instagram);
                            }
                        }
                    }
                    &__placeholder{
                        font-size: 14px;
                        font-weight: 500;
                        color: var(--helpgent-color-gray);
                    }
                    &__option{
                        svg{
                            margin-right: 6px;
                            width: 16px;
                            height: 16px;
                            #facebook{
                                fill: var(--helpgent-color-facebook);
                            }
                            #youtube{
                                fill: var(--helpgent-color-youtube);
                            }
                            #twitter{
                                fill: var(--helpgent-color-twitter);
                            }
                            #instagram{
                                fill: var(--helpgent-color-instagram);
                            }
                        }
                    }
                }
            }
            &__select-wrap{
                display: flex;
                align-items: center;
                gap: 0 10px;
                .helpgent-select{
                    flex: 1;
                    margin-bottom: 0;
                }
                +.helpgent-form-group{
                    margin-top: 8px;
                    width: calc(100% - 32px);
                }
            }
        }
        .helpgent-social-list:not(:empty){
            margin: 20px 0;
        }
    }
    .helpgent-field-element--inline{
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:not(:first-child){
            margin-top: 25px;
        }
        & + .helpgent-field-element{
            margin-top: 25px;
        }
        .helpgent-select{
            &__control{
                height: 36px;
                padding: 0;
                border-radius: 8px;
            }
            &__placeholder{
                font-size: 13px;
                font-weight: 500;
            }
        }
        .helpgent-form-group .helpgent-form-group__element{
            height: 36px;
            min-height: 36px;
        }
        .helpgent-field-element__top{
            flex: auto;
            .helpgent-field-element__label{
                margin: 0;
            }
        }
        .helpgent-field-element__content{
            flex: 2;
            .helpgent-form-group{
                margin: 0;
                min-width: 128px;
                @media only screen and (max-width: 1367px){
                    min-width: 80px;
                }
            }
        }
        .helpgent-field-element__left{
            label{
                margin: 0;
            }
            &.helpgent-field-element__left--has-tooltip{
                display: flex;
                .helpgent-field-element__label{
                    width: auto;
                }
                .helpgent-tooltip-toggle{
                    margin-left: 8px;
                }
            }
        }
        .helpgent-field-element__right{
            .helpgent-form-group{
                margin-bottom: 0;
            }
        }
    }
    .helpgent-color-picker{
        height: 36px;
        background: var(--helpgent-color-bg-gray);
        border-radius: 8px;
        padding: 0 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        width: 100%;
        box-sizing: border-box;
        .helpgent-color-picker__text{
            min-width: 70px;
            @media screen and (min-width: 1199px) and (max-width: 1367px) {
                min-width: 57px;
                font-size: 11px;
            }
        }
    }
    .helpgent-design-setting-wrap{
        .helpgent-screen-setting-block{
            .helpgent-field-element__label{
                width: 150px;
                &.helpgent-selectable-field-label{
                    width: auto;
                    margin-bottom: 13px;
                }
                @media screen and (max-width: 1367px) {
                    width: 100px;
                }
            }

            .helpgent-select{
                .helpgent-select__single-value{
                    margin: 0;
                }
                .helpgent-select__value-container{
                    padding: 0 12px;
                }
            }
            .helpgent-form-group .helpgent-form-group__element{
                padding-left: 12px;
                border: 0 none;
            }
        }
    }
    .helpgent-element-dropdown{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 18px 5px 5px;
        border-radius: 10px;
        cursor: pointer;
        transition: background-color .3s ease-in-out;
        background-color: var(--helpgent-color-bg-gray);
        .helpgent-element-dropdown__content{
            display: flex;
            align-items: center;
        }
        .helpgent-element-dropdown__icon{
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            margin-inline-end: 10px;
            background-color: var(--helpgent-color-white);
            svg path{
                fill: var(--helpgent-color-primary);
            }
        }
        .helpgent-element-dropdown__title{
            font-size: 14px;
            font-weight: 500;
            margin: 0;
            color: var(--helpgent-color-dark);
            p,
            strong{
                font-size: inherit;
                line-height: inherit;
                margin: 0;
            }
        }
    }
    .helpgent-media-uploader{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 160px;
        border-radius: 12px;
        background-color: var(--helpgent-color-bg-light);
        border: 2px dashed var(--helpgent-color-bg-deep);
        .helpgent-btn-upload-trigger{
            font-size: 14px;
            white-space: nowrap;
            color: var(--color-dark);
            background-color: var(--helpgent-color-white);
        }
        &.helpgent-media-uploader--has-media{
            border-color: transparent;
            overflow: hidden;
        }
    }
    .helpgent-media-uploader-actions {
        display: flex;
        flex-direction: column;
    }
    .helpgent-media-uploader.helpgent-media-uploader--media-added{
        border: 2px solid #fff;
    }
    .helpgent-element-media-uploader{
        display: flex;
        align-items: center;
        gap: 10px;
        .helpgent-btn{
            flex: 1;
            svg path{
                fill: var(--helpgent-color-light-gray);
                transition: var(--helpgent-transition);
            }
            &.helpgent-btn-remove{
                &:hover{
                    color: var(--helpgent-color-danger);
                    svg path{
                        fill: var(--helpgent-color-danger);
                    }
                }
            }
        }
    }
    .helpgent-focal-point-picker{
        margin-bottom: 20px;
        .components-focal-point-picker{
            box-shadow: none;
            border-radius: 12px;
            overflow: hidden;
            max-height: 190px;
        }
        .components-focal-point-picker__media--image{
            max-height: 190px;
        }
        .components-focal-point-picker-control{
            background: var(--helpgent-color-bg-gray);
            line-height: 0;
            border-radius: 12px;
        }
        .focal-point-picker__controls{
            display: none;
        }
        .components-base-control__field{
            margin-bottom: 0;
        }
        .helpgent-focal-point-picker-top{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .helpgent-focal-point-label{
            font-size: 14px;
            font-weight: 500;
            color: #030308;
        }
        .helpgent-focal-point-reset{
            cursor: pointer;
            width: 30px;
            height: 30px;
            border-radius: 6px;
            background: var(--helpgent-color-bg-gray);
            transition: var(--helpgent-transition);
            display: flex;
            align-items: center;
            justify-content: center;
            svg{
                width: 14px;
                height: 14px;
                path{
                    fill: var(--helpgent-color-gray);
                }
            }
            &:hover{
                background: var(--helpgent-color-bg-deep);
            }
        }
        .components-focal-point-picker__icon_container{
            box-shadow: none;
            border: 2px solid #fff;
            background: var(--helpgent-color-primary);
            backdrop-filter: none;
            width: 24px;
            height: 24px;
            margin: -12px 0 0 -12px;
        }
    }
    .helpgent-media-preview{
        position: absolute;
        height: 100%;
        width: 100%;
        inset-inline-start: 0;
        top: 0;
        video{
            height: 100%;
            max-height: 200px;
            width: 100%;
            object-fit: cover;
            border-radius: 12px;
        }
        .helpgent-video-control{
            position: absolute;
            width: 56px;
            height: 56px;
            border-radius: 50%;
            inset-inline-start: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: var(--helpgent-transition);
            z-index: 4;
            svg{
                width: 16px;
                height: 16px;
                path{
                    fill: var(--helpgent-color-dark);
                }
            }
        }
        &:hover{
            .helpgent-video-control{
                opacity: 1;
                visibility: visible;
            }
        }
    }
    .helpgent-media-preview__src{
        height: 100%;
        position: relative;
        &:before{
            position: absolute;
            content: '';
            width: 100%;
            height: 100%;
            inset-inline-start: 0;
            top: 0;
            background: rgba(0,0,0,0.3);
            border-radius: 12px;
            z-index: 1;
        }
        img{
            height: 100%;
            width: 100%;
            object-fit: cover;
            border-radius: 12px;
        }
    }
    .helpgent-layout-actions{
        display: flex;
        align-items: center;
        gap: 15px;
        flex-wrap: wrap;
        .helpgent-layout-action__single{
            cursor: pointer;
            line-height: 0;
            svg{
                width: 60px;
                height: 40px;
            }
            &.helpgent-layout-action__single--open-ended{
                svg{
                    width: auto;
                }
            }
            &.helpgent-active{
                svg{
                    path,
                    rect{
                        fill: var(--helpgent-color-primary);
                    }
                }
            }
        }
    }

    //rating styles
    .helpgent-rating-list{
        display: flex;
        align-items: center;
        gap: 4px;
        margin-bottom: 25px;
        .helpgent-rating-single{
            width: 38px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            background: var(--helpgent-color-bg-light);
            transition: var(--helpgent-transition);
            margin-top: 5px;
            cursor: pointer;
            svg{
                width: 16px;
                height: 16px;
                path{
                    fill: var(--helpgent-color-extra-light);
                    transition: var(--helpgent-transition);
                }
            }
            &.helpgent-active{
                background: var(--helpgent-color-primary);
                svg{
                    path{
                        fill: #fff;
                    }
                }
            }
        }
    }
`,d=i.Ay.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background: #fff;
    padding: 5px;
    border-radius: 8px;
    width: 110px !important;
    margin: 30px auto 0;
    box-sizing: border-box;
    @media only screen and (max-width: 575px){
        display: none;
    }
    .helpgent-device-action{
        cursor: pointer;
        line-height: 0;
        border-radius: 6px;
        transition: var(--helpgent-transition);
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        &.helpgent-active{
            background: var(--helpgent-color-bg-deep);
            svg{
                path{
                    fill: var(--helpgent-color-gray);
                }
            }
        }
        svg{
            path{
                fill: var(--helpgent-color-extra-light);
                transition: var(--helpgent-transition);
            }
        }
    }
`,s=i.Ay.div`
    //padding: 15px;
    border-radius: 10px;
    margin-bottom: 10px;
    background-color: var(--helpgent-color-bg-light);
    &.helpgent-collapsed{
        .helpgent-validation-collapse{
            background-color: var(--helpgent-color-extra-light);
        }
        .helpgent-validation-top{
            .helpgent-validation-label{
                color: var(--helpgent-color-gray);
            }
        }
        .helpgent-validation-content{
            display: none;
        }
    }
    .helpgent-validation-top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        user-select: none;
        padding: 15px;
        .helpgent-validation-label{
            font-size: 14px;
            font-weight: 500;
            color: var(--helpgent-color-primary);
        }
    }
    .helpgent-form-element-inline{
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    .helpgent-field-element-action{
        .helpgent-field-visibility{
            margin: 6px;
        }
        span{
            cursor: pointer;
        }
        svg{
            width: 14px;
            height: 14px;
            path{
                fill: var(--helpgent-color-light-gray)
            }
        }
    }
    .helpgent-validation-content{
        padding: 10px 15px 20px;
    }
    .helpgent-form-group{
        &:last-child{
            margin-bottom: 0;
        }
        .helpgent-form-group__label{
            font-size: 14px;
            margin-bottom: 0;
        }
        textarea{
            min-height: 100px;
            resize: none;
        }
    }
    .helpgent-form-group__element{
        border-radius: 8px;
        background-color: var(--helpgent-color-white);
    }
    .helpgent-validation-collapse{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: var(--helpgent-color-primary);
        svg{
            path{
                fill: var(--helpgent-color-white);
            }
        }
    }
`,c=i.Ay.div`
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    min-height: 660px;
    border-radius: 14px;
    box-sizing: border-box;
    transform: translateX(0%);
    transition: transform 0.3s ease-in-out 0s;
    background-color: var(--helpgent-color-white);
    z-index: 1;
    > div{
        padding: 32px 32px 30px;
        @media only screen and (max-width: 1399px){
            max-height: 400px;
            overflow-y: scroll;
        }
    }
    .helpgent-btn-back{
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        transition: var(--helpgent-transition);
        color: var(--helpgent-color-dark);
        svg{
            margin-right: 5px;
            path{
                fill: var(--helpgent-color-dark);
            }
        }
        &:hover{
            color: var(--helpgent-color-primary);
            svg path{
                fill: var(--helpgent-color-primary);
            }
        }
    }
    h4{
        font-size: 16px;
        font-weight: 500;
        color: var(--helpgent-color-gray-light);
    }
    .helpgent-textField-form{
        display: flex;
        align-items: flex-end;
        gap: 12px;
        @media screen and (min-width: 1199px) and (max-width: 1367px) {
            flex-wrap: wrap;
        }
        &:not(:last-child){
            margin-bottom: 20px;
        }
        .helpgent-form-group{
            margin-bottom: 0;
        }
        &__element{
            .helpgent-form-group__label{
                font-size: 14px;
                font-weight: 500;
                word-wrap: break-word;
                word-break: break-word;
                white-space: nowrap;
                width: 160px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: flex;
                align-items: center;
                gap: 5px;
                margin-bottom: 12px;
                color: var(--helpgent-color-dark);
            }
            input{
                width: 100%;
                font-size: 14px;
                font-weight: 500;
                line-height: 1.57;
                min-height: 40px;
                border-radius: 6px;
                padding: 7px 16px;
                border: 0 none;
                box-sizing: border-box;
                color: var(--helpgent-color-dark);
                border: 2px solid transparent;
                margin: 0;
                background-color: var(--helpgent-color-bg-gray);
            }
            textarea{
                height: 100px;
            }
        }
        &__action{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }
        .helpgent-textField-form__action-item{
            width: 40px;
            height: 40px;
            border-radius: 6px;
            background-color: var(--helpgent-color-bg-gray);
            display: flex;
            align-items: center;
            justify-content: center;
            svg{
                path{
                    fill: rgb(186, 186, 186);
                }
            }
            &.helpgent-active{
                svg{
                    path{
                        fill: var(--helpgent-color-dark);
                    }
                }
            }
            &.helpgent-textField-form__action-item--disabled{
                pointer-events: none;
                svg{
                    path{
                        fill: var(--helpgent-color-extra-light);
                    }
                }
            }
        }
    }
`,x=i.Ay.div`
    .helpgent-logic-rule-form__condition {
        &:not(:last-child){
            margin-bottom: 5px;
            border-bottom: 1px solid #d0cece;
            padding-bottom: 30px;
        }
    }
    .helpgent-logic-rule-form__condition-top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 25px 0 10px;
        .helpgent-logic-rule-form__and{
            font-size: 14px;
            font-weight: 400;
            color: var(--helpgent-color-gray);
            border-radius: 8px;
            background: #fff;
            min-height: 40px;
            padding: 0 14px;
            display: inline-flex;
            align-items: center;
            min-width: 140px;
            box-sizing: border-box;
        }
        .helpgent-logic-rule-form__condition-cancel{
            width: 34px;
            height: 34px;
            background: rgba(239,0,0,0.1);
            svg{
                path{
                    fill: var(--helpgent-color-danger);
                    transition: var(--helpgent-transition);
                }
            }
            &:hover{
                background: var(--helpgent-color-danger);
                svg{
                    path{
                        fill: #fff;
                    }
                }
            }
        }
    }
    &.helpgent-setting-logic-wrap{
        padding: 25px 25px 5px;
        height: calc(100% - 0px);
        box-sizing: border-box;
        .helpgent-logic-add{
            display: flex;
            justify-content: center;
            box-sizing: border-box;
            gap: 10px;
            border-radius: 10px;
            font-size: 14px;
            font-weight: 500;
        }
        .helpgent-logic-inner{
            display: flex;
            flex-direction: column;
            height: 100%;
            box-sizing: border-box;
            .helpgent-logic-bottom{
                margin-top: auto;
                .helpgent-logic-remove{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    cursor: pointer;
                    transition: var(--helpgent-transition);
                    &:hover{
                        color: var(--helpgent-color-danger);
                        svg path{
                            fill: var(--helpgent-color-danger);
                        }
                    }
                    svg path{
                        transition: var(--helpgent-transition);
                    }
                    &.helpgent-btn-disabled{
                        pointer-events: none;
                        cursor: not-allowed;
                        opacity: .4;
                    }
                }
            }

            .helpgent-select__option{
                .helpgent-select__option__icon,
                .helpgent-badge{
                    flex: none;
                }
                .helpgent-select__option__text{
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    flex: 0 0 184px;
                    word-break: break-word;
                    overflow: hidden;
                    p,
                    strong{
                        margin: 0;
                        font-size: inherit;
                        font-weight: inherit;
                        line-height: inherit;
                    }
                }
            }

        }
        .helpgent-logic{
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: var(--helpgent-color-bg-gray);
            border-radius: 10px;
            padding: 5px 5px 5px 15px;
            margin-bottom: 10px;
            &.helpgent-logic--conditional{
                padding: 6px;
            }
            &__text{
                font-size: 14px;
                font-weight: 500;
                color: var(--helpgent-color-black);
                display: flex;
                align-items: center;
                gap: 8px;
                span{
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .helpgent-option-index{
                    width: 23px;
                    height: 23px;
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 13px;
                    font-weight: 600;
                    background: var(--helpgent-color-primary);
                    text-transform: uppercase;
                    color: #fff;
                }
            }
            &__dropdown{
                display: flex;
                align-items: center;
                .helpgent-badge{
                    position: absolute;
                    z-index: 0;
                    inset-inline-start: calc(-100% - 4px);
                    top: 50%;
                    transform: translateY(-50%);
                    line-height: normal;
                }
                .helpgent-select__menu{
                    min-width: 290px;
                    inset-inline-end: -5px;
                    .helpgent-select__group-heading{
                        font-size: 13px;
                        font-weight: 500;
                        color: var(--helpgent-color-light-gray);
                        text-transform: capitalize;
                    }
                }
                .helpgent-select{
                    flex: none;
                    position: relative;
                    box-sizing: border-box;
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    background: var(--helpgent-color-white);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .helpgent-select__control{
                        padding: 10px;
                        background-color: transparent;
                        overflow: visible;
                        &--is-focused{
                            box-shadow: none;
                        }
                    }
                    &__value-container{
                        overflow: visible;
                        padding: 0;
                        height: 0;
                        &--has-value{
                            height: auto;
                            & + .helpgent-select__indicators{
                                display: none;
                            }
                        }
                        svg{
                            width: 16px;
                            height: 16px;
                            path{
                                fill: var(--helpgent-color-primary);
                            }
                        }
                    }
                    &__indicator{
                        padding-inline-end: 0;
                    }
                    &__option{
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        transition: var(--helpgent-transition);
                        span{
                            margin-inline-end: 0;
                            display: flex;
                            position: static;
                            transform: none;
                        }
                        &__icon{
                            width: 32px;
                            height: 32px;
                            border-radius: 8px;
                            background: var(--helpgent-color-bg-gray);
                            align-items: center;
                            justify-content: center;
                            transition: var(--helpgent-transition);
                            svg{
                                width: 16px;
                                height: 16px;
                                path{
                                    fill: var(--helpgent-color-light-gray);
                                }
                            }
                        }
                        &:hover{
                            background: var(--helpgent-color-bg-gray);
                            .helpgent-select__option__icon{
                                background: var(--helpgent-color-white);
                            }
                        }
                    }
                }
            }
        }
    }

    .helpgent-logic-rule-form{
        padding: 20px 15px;
        border-radius: 10px;
        background-color: var(--helpgent-color-bg-gray);
        margin-bottom: 25px;
        .helpgent-form-group__element{
            background-color: var(--helpgent-color-white);
        }
    }

    .helpgent-logic-rule-form__condition{
        .helpgent-select{
            .helpgent-select__control{
                border-radius: 8px;
                background: #fff;
                padding: 4px;
            }
            .helpgent-select__value-container{
                padding-left: 0;
            }
        }
        .helpgent-form-group{
            margin-bottom: 0;
        }
        .helpgent-select__indicator{
            color: var(--helpgent-color-primary);
        }
        .helpgent-dropdown-icon{
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            background: var(--helpgent-color-primary);
            margin-right: 5px;
            flex: none;
            svg{
                width: 14px;
                height: 14px;
                path{
                    fill: #fff;
                }
            }
        }
        .helpgent-badge-circle{
            flex: none;
        }
        .helpgent-select__option__text{
            font-size: 14px;
            font-weight: 400;
            color: var(--helpgent-color-gray);
            margin-left: 10px;
            display: flex;
        }
        .helpgent-select__menu{
            .helpgent-select__option{
                display: flex;
                align-items: center;
                gap: 5px;
            }
            .helpgent-select__option__icon{
                width: 32px;
                height: 32px;
                border-radius: 8px;
                background: var(--helpgent-color-bg-gray);
                display: flex;
                align-items: center;
                justify-content: center;
                flex: none;
            }
            .helpgent-badge{
                flex: none;
            }
            .helpgent-select__option__text{
                padding-left: 0;
            }
        }
        .helpgent-select-logic-element,
        .helpgent-logic-rule-form__condition-inner{
            display: block;
            margin: 0 0 10px;
        }
        .helpgent-logic-rule-form__condition-inner{
            .helpgent-select .helpgent-select__control{
                padding: 5px 14px;
            }
        }
    }
    .helpgent-logic-rule-form__top-text{
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 10px;
        color: var(--helpgent-color-gray);
        border-radius: 8px;
        background: #fff;
        min-height: 40px;
        padding: 0 14px;
        display: inline-flex;
        align-items: center;
        min-width: 140px;
        box-sizing: border-box;
    }
    .helpgent-logic-rule-form__condition-inner{
        font-size: 14px;
        font-weight: 500;
        display: inline-block;
        margin: 0 6px;
        color: var(--helpgent-color-light);
    }
    .helpgent-logic-condition-add{
        display: flex;
        align-items: center;
        margin: 20px 0 22px;
        color: var(--helpgent-color-primary);
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        .helpgent-logic-condition-add__icon{
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: var(--helpgent-color-white);
            width: 20px;
            height: 20px;
            margin-right: 6px;
        }
        svg{
            width: 8px;
            height: 8px;
            path{
                transition: var(--helpgent-transition);
                fill: var(--helpgent-color-primary);
            }
        }
    }
    .helpgent-logic-rule-form__condition-cancel{
        flex: none;
        margin-left: 10px;
    }
    .helpgent-logic-rule-form__action{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 20px;
        .helpgent-btn-link{
            font-size: 13px;
            font-weight: 500;
            text-decoration: none;
            color: var(--helpgent-color-danger);
            cursor: pointer;
        }
    }
    .helpgent-logic-rule-form__destination{
        span:not(.helpgent-badge){
            font-size: 14px;
            font-weight: 500;
            margin-right: 6px;
            margin-bottom: 8px;
            color: var(--helpgent-color-gray);
            display: inline-block;
            background: none;
        }
        .helpgent-select__control{
            background-color: var(--helpgent-color-white);
            padding: 4px 0;
            border-radius: 8px;
            min-height: 40px;
            .helpgent-select__value-container{
                padding-left: 4px;
                .helpgent-dropdown-icon{
                    width: 32px;
                    height: 32px;
                    border-radius: 8px;
                    background: var(--helpgent-color-primary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 5px;
                    flex: none;
                    svg{
                        width: 14px;
                        height: 14px;
                        path{
                            fill: #fff;
                        }
                    }
                }
                .helpgent-badge{
                    margin-right: 10px;
                    flex: none;
                }
                .helpgent-select__option__text,
                .helpgent-select__placeholder{
                    font-size: 14px;
                    font-weight: 400;
                    color: var(--helpgent-color-gray);
                    margin: 0;
                }
                .helpgent-select__placeholder{
                    padding-left: 10px;
                }
            }
        }
        .helpgent-select__menu{
            .helpgent-select__option{
                display: flex;
                align-items: center;
                gap: 5px;
            }
            .helpgent-select__option__icon{
                width: 32px;
                height: 32px;
                border-radius: 8px;
                background: var(--helpgent-color-bg-gray);
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 5px 0 0;
            }
            .helpgent-badge{
                margin: 0;
            }
            .helpgent-select__option__text{
                padding-left: 0;
                margin: 0 0 0 10px;
                flex: auto;
            }
        }
        .helpgent-select__option__icon{
            svg{
                path{
                    fill: var(--helpgent-color-light-gray);
                }
            }
        }
    }
    .helpgent-logic-rule-form__element-answer{
        .helpgent-select__control{
            .helpgent-select__value-container{
                .helpgent-select__option__text,
                .helpgent-select__placeholder{
                    font-size: 14px;
                    font-weight: 400;
                    color: var(--helpgent-color-gray);
                    margin: 0;
                }
                .helpgent-select__placeholder{
                    padding-left: 10px;
                }
            }
        }
    }
    .helpgent-logic-add-rule{
        margin-top: 20px;
        margin-bottom: 25px;
        font-size: 13px;
        font-weight: 500;
        color: var(--helpgent-color-gray);
        svg{
            width: 10px;
            height: 10px;
            path{
                fill: var(--helpgent-color-gray);
            }
        }
    }
`,m=i.Ay.div`
    &.helpgent-logic-source{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 12px;
        .helpgent-logic-source__icon{
            width: 32px;
            height: 32px;
            border-radius: 8px;
            background: var(--helpgent-color-primary);
            display: flex;
            align-items: center;
            justify-content: center;
            flex: none;
            svg{
                width: 14px;
                height: 14px;
                path{
                    fill: var(--helpgent-color-white);
                }
            }
        }
    }
    .helpgent-logic-source__element{
        display: flex;
        align-items: center;
        gap: 6px;
        .helpgent-badge{
            border-radius: 6px;
            padding: 5px 8.6px 4.5px 8.6px;
        }
    }
    .helpgent-logic-source__label{
        font-size: 14px;
        font-weight: 500;
        margin: 0;
        color: var(--helpgent-color-gray);
    }
`,f=i.Ay.div`
    .helpgent-logic--conditional{
        cursor: pointer;
        > span{
            font-size: 13px;
            font-weight: 500;
            color: var(--helpgent-color-gray);
            margin-left: 9px;
        }
    }
    .helpgent-logic-list__element{
        width: 100%;
        display: flex;
        align-items: center;
        gap: 8px;
        margin-left: 20px;
        cursor: pointer;
    }
    .helpgent-logic-list__element--icon{
        position: relative;
        width: 36px;
        height: 36px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--helpgent-color-white);
        flex: none;
        svg{
            width: 16px;
            height: 16px;
            path{
                fill: var(--helpgent-color-primary);
            }
        }
        .helpgent-badge{
            position: absolute;
            left: -14px;
            top: 50%;
            transform: translateY(-50%);
            flex: none;
        }
    }

    .helpgent-logic-list__element--label{
        font-size: 13px;
        font-weight: 500;
        color: var(--helpgent-color-gray);
        word-break: break-word;
        word-wrap: break-word;
        max-width: 140px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .helpgent-logic-list__condition-answer{
        display: flex;
    }
    .helpgent-logic-list__condition-type{
        font-size: 13px;
        font-weight: 500;
        color: var(--helpgent-color-gray);
    }
    .helpgent-logic-list__condition-value{
        max-width: 70px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
        white-space: nowrap;
        font-size: 13px;
        font-weight: 500;
        color: var(--helpgent-color-gray);
        margin-left: 7px;
    }
    .helpgent-logic-list__go-to-text{
        display: inline-block;
        margin-right: 20px;
        font-size: 13px;
        font-weight: 500;
        color: var(--helpgent-color-gray);
    }
    .helpgent-logic-list__element-destination{
        display: flex;
        flex: none;
        align-items: center;
    }
`,b=i.Ay.div`
    display: flex;
    align-items: center;
    gap: 10px;
    .helpgent-selectable-option{
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 500;
        border-radius: 8px;
        cursor: pointer;
        text-transform: capitalize;
        color: var(--helpgent-color-gray);
        background-color: var(--helpgent-color-bg-light);
        &:hover,
        &.helpgent-active{
            background-color: var(--helpgent-color-gray);
            color: var(--helpgent-color-white);
            svg{
                path{
                    fill: var(--helpgent-color-white);
                }
            }
        }
        svg{
            path{
                fill: var(--helpgent-color-gray);
            }
        }
    }
`,u=i.Ay.div`

`,v=i.Ay.div`

`,w=i.Ay.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-position: center top;
    background-size: cover;
    background-color: var(--helpgent-background-color);
    .helpgent-element-background__overlay{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        border-radius: 20px;
        background-color: var(--helpgent-background-overlay-color);
        opacity: var(--helpgent-background-overlay-opacity);
    }
`,_=i.Ay.ul`
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    gap: 8px;
    li{
        list-style: none;
    }
`,y=(i.Ay.div`
    background: var(--helpgent-color-bg-light);
    border-radius: 10px;
    padding: 20px;
    .helpgent-cta-card__title{
        margin: 0 0 12px;
        padding: 0;
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        font-weight: 500;
        color: var(--helpgent-color-dark);
    }
    .helpgent-cta-card__description{
        line-height: 1.7;
        font-size: 13px;
        font-weight: 500;
        margin: 0 0 16px;
        color: var(--helpgent-color-gray);
    }
`,i.Ay.div`
    border-left: 1px solid var(--helpgent-color-bg-gray);
    .helpgent-close-panel__top{
        position: relative;
        padding: 12px 0;
        min-height: 36px;
        border-bottom: 1px solid var(--helpgent-color-bg-gray);
        .helpgent-btn-panel-close{
            position: absolute;
            right: 20px;
            top: 12px;
            display: flex;
            align-items: center;
            font-size: 13px;
            font-weight: 500;
            padding-inline-start: 13.5px;
            padding-inline-end: 13.5px;
            text-decoration: none;
            border-color: transparent;
            color: var(--helpgent-color-gray);
            background-color: var(--helpgent-color-bg-gray);
            &:focus{
                outline: none;
            }
            svg{
                width: 10px;
                height: 10px;
                margin-right: 9px;
            }
        }
    }
    .helpgent-close-panel__content{
        padding: 20px;
    }
    .helpgent-close-panel__title{
        font-size: 16px;
        font-weight: 500;
        display: flex;
        align-items: center;
        margin: 0;
        font-family: var(--helpgent-font-family);
        color: var(--helpgent-color-dark);
        svg{
            margin-left: 8px;
            position: relative;
            top: -3px;
        }
    }
    p{
        font-size: 13px;
        font-weight: 400;
        margin-bottom: 20px;
        color: var(--helpgent-color-gray);
    }
    .helpgent-close-panel__field{
        .helpgent-form-group__element{
            border-radius: 10px;
            color: var(--helpgent-color-gray);
            background-color: var(--helpgent-color-bg-gray);
        }
        .helpgent-btn-copy{
            font-size: 14px;
            margin-top: 10px;
            svg{
                width: 16px;
                height: 16px;
                path{
                    fill: var(--helpgent-color-white);
                }
            }
            &:hover{
                color: var(--helpgent-color-white);
                background-color: #3a3a3a;
                border-color: #3a3a3a;
            }
        }
    }
`)},48036:(e,t,n)=>{n.d(t,{$:()=>r,H:()=>p});var i=n(51609),o=n(86087);const l=(0,o.createContext)(),r=()=>(0,o.useContext)(l),p=({children:e})=>{const[t,n]=(0,o.useState)({singleForm:null,estimatedTime:null,activeElementId:null,activeElement:null,selectedOption:null,draftContent:null,isFinalSubmissionActive:!1,screenSettingType:"element",deviceType:"desktop",userVerificationField:"default",isActiveTextFieldScreen:!1,isUpdateFormAlertActive:!1,emailTemplateType:"",emailTemplateSettings:null,isTypeChangeModalActive:!1,changingElement:null,rangeSliderValidation:!0,pictureUploadError:null,activeSetting:"general",bubbleBgUploadError:null,isProModalActive:!1,submissionServerError:null,singleFormMode:"edit",activeSettingsTitle:"",activeSettingsGroup:"",submittedAnswers:[],guestData:null,openEndedTypesAdaptive:!1,googleMapInstance:null,googleMapAutocomplete:null,isBuilderClosePanelOpen:!1});return(0,i.createElement)(l.Provider,{value:{singleFormState:t,setSingleFormState:n}},e)}},79865:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var i=n(51609),o=n(86087),l=n(56427),r=n(52619),p=n(63064),a=n(64943),g=n(64197),h=n(6945),d=n(67571),s=n(48036),c=n(68357),x=n(78242),m=n(65604),f=n(4286);function b({type:e,text:t,modifier:n}){return(0,i.createElement)("span",{className:` helpgent-badge helpgent-badge-${e} ${n}`},t)}var u=n(13475),v=n(27723);function w(e){const{cancelHandler:t}=e;return(0,i.createElement)(f.Lk,{className:"helpgent-pro-modal"},(0,i.createElement)("div",{className:"helpgent-pro-modal__top"},(0,i.createElement)(b,{type:"success",text:"PRO",modifier:"helpgent-badge-extended"}),(0,i.createElement)("h2",{className:"helpgent-pro-modal__title"},(0,v.__)("This item is a Pro Feature","helpgent")),(0,i.createElement)("p",null,(0,v.__)("We are sorry, this item is not available on your plan. Please upgrade to unlock these awesome feature.","helpgent"))),(0,i.createElement)("div",{className:"helpgent-pro-modal__bottom"},(0,i.createElement)("button",{className:"helpgent-btn helpgent-btn-primary helpgent-btn-lg"},(0,i.createElement)(m.A,{src:u.A})," ",(0,v.__)("Upgrade Now To Get Access","helpgent")),(0,i.createElement)("button",{className:"helpgent-btn-link",onClick:()=>t()},(0,v.__)("May be later","helpgent"))))}var _=n(30912);const y=(0,o.lazy)((()=>Promise.all([n.e(900),n.e(665)]).then(n.bind(n,42046)))),k=(0,o.lazy)((()=>n.e(253).then(n.bind(n,1253)))),z=(0,o.lazy)((()=>Promise.all([n.e(900),n.e(46)]).then(n.bind(n,20304))));function j(e){const{baseApiRoute:t,baseLinkRoute:n}=e,{singleFormState:l,setSingleFormState:r}=(0,s.$)(),{singleForm:p,activeElementId:a,isProModalActive:g}=l,{elements:h,global:d}=p.content;function m(){r({...l,isProModalActive:!1})}return(0,o.useEffect)((()=>{const e=h.filter((e=>"welcome"===e.element_type||"user_validation"===e.element_type&&"0"===d.anonymous_submission.isActive));if(e.length>0)r({...l,activeElement:e[0],activeElementId:e[0].id});else{const e=h.filter((e=>"end"===e.element_type)),t=h.filter((e=>"welcome"!==e.element_type&&"user_validation"!==e.element_type&&"end"!==e.element_type));t.length>0?r({...l,activeElement:t[0],activeElementId:t[0].id}):r({...l,activeElement:e[0],activeElementId:e[0].id})}}),[]),(0,i.createElement)(_.Y8,null,(0,i.createElement)(o.Suspense,{fallback:(0,i.createElement)(c.A,null)},(0,i.createElement)(y,{baseApiRoute:t})),a&&(0,i.createElement)(o.Fragment,null,(0,i.createElement)(o.Suspense,{fallback:(0,i.createElement)(c.A,null)},(0,i.createElement)(k,{activeElementId:a})),(0,i.createElement)(o.Suspense,{fallback:(0,i.createElement)(c.A,null)},(0,i.createElement)(z,{activeElementId:a,baseApiRoute:t,baseLinkRoute:n}))),g&&(0,i.createElement)(x.A,{className:"helpgent-modal-pro",onCancel:m,isDisableAction:!0},(0,i.createElement)(w,{cancelHandler:m})))}var M=n(40493),E=n(94091);const A=(0,o.lazy)((()=>n.e(972).then(n.bind(n,83972)))),L=(0,o.lazy)((()=>n.e(973).then(n.bind(n,76973)))),D=(0,o.lazy)((()=>n.e(862).then(n.bind(n,19862))));function S(e){const{baseApiRoute:t}=e,{singleFormState:n,setSingleFormState:l}=(0,s.$)(),{singleForm:r,activeSetting:p,isProModalActive:a}=n;function g(){l({...n,isProModalActive:!1})}return r.content,(0,i.createElement)(E.Kh,{className:"helpgent-form-settings"},(0,i.createElement)(o.Fragment,null,(0,i.createElement)(o.Suspense,{fallback:(0,i.createElement)(c.A,null)},"general"===p&&(0,i.createElement)(A,null),"email-notification"===p&&(0,i.createElement)(L,null)),(0,i.createElement)(o.Suspense,{fallback:(0,i.createElement)(c.A,null)},(0,i.createElement)(D,{baseApiRoute:t})),a&&(0,i.createElement)(x.A,{className:"helpgent-modal-pro",onCancel:g,isDisableAction:!0},(0,i.createElement)(w,{cancelHandler:g}))))}var N=n(29016),T=n(28050);const C=(0,o.lazy)((()=>n.e(172).then(n.bind(n,91172))));function F(e){const t=(0,o.useRef)();let[n,p]=(0,o.useState)(),[g,c]=(0,o.useState)(!1);const{baseApiRoute:x,baseLinkRoute:m}=e,{paramsHook:f}=(0,h.Xd)("helpgent_router_references",null),[b,u]=(0,o.useState)(!0),{id:v}=f(),{mutateAsync:w,isLoading:_}=(0,T.A)(`${x?.form}/auto-save`),{data:y,isLoading:k,errorMessage:z,isError:E}=(0,a.A)([`helpgent-single-form-${v}`],`${x?.form}/${v}`,{queryConfig:{refetchOnWindowFocus:!1,keepPreviousData:!1,staleTime:1e4,enabled:b}}),{singleFormState:A,setSingleFormState:L}=(0,s.$)(),{singleForm:D,emailTemplateSettings:F,singleFormMode:I}=A,B=(0,N.d)(D?.content,1500);function O(){p(t.current.clientWidth)}return(0,o.useEffect)((()=>{let e=null,t=null;if(y){y?.form?.draft&&(t=JSON.parse(y?.form?.draft));let n=(0,d.Y)(t?t.content:JSON.parse(y?.form.content));if(e=(0,r.applyFilters)("helpgent_form",{...t||y.form,content:n}),"string"!=typeof n?.global?.font_family){const e=document.body||document.getElementsByTagName("body")[0],t=document.createElement("link");t.href=`https://fonts.googleapis.com/css?family=${n?.global?.font_family?.family}:${n?.global?.font_weight_variations?.join(",")}`,t.rel="stylesheet",e.appendChild(t)}}(0,h.CS)("singleForm",e),L({...A,singleForm:e,draftContent:t,emailTemplateSettings:F||y?.email_template_settings}),u(!1)}),[y?.form,y?.emailTemplateSettings]),(0,o.useEffect)((()=>{k||(c(!0),g&&!_&&async function(e,t,n,i){if(t)return;const o={...n};delete o?.draft;const l={id:n.id,draft:JSON.stringify(o)};try{await e((0,r.applyFilters)("helpgent_form_draft_data",l)),i((e=>({...e,draftContent:l})))}catch(e){console.log(e)}}(w,_,D,L))}),[B]),(0,o.useEffect)((()=>(window.addEventListener("resize",O),O(),()=>{window.removeEventListener("resize",O)})),[]),(0,o.useEffect)((()=>{const e=sessionStorage.getItem("isFullscreenActive"),t=document.querySelector(".helpgent-root");"1"===e?t.classList.add("helpgent-single-form-fullscreen"):t.classList.remove("helpgent-single-form-fullscreen")}),[v]),(0,i.createElement)(M.U,{className:n<1040?"helpgent-form-wrapper--adaptive":"helpgent-form-wrapper",ref:t},!D||!F||k||E?(0,i.createElement)("div",{className:"helpgent-page-initial"},k?(0,i.createElement)(l.Spinner,null):E?(0,i.createElement)("div",{className:"helpgent-message-error"},z):null):(0,i.createElement)(o.Fragment,null,(0,i.createElement)(C,{baseApiRoute:x,baseLinkRoute:m,setFetchingEnabled:u,formDrafting:_}),"edit"===I?(0,i.createElement)(j,{baseApiRoute:x,baseLinkRoute:m}):(0,i.createElement)(S,{baseApiRoute:x})))}function I(e){return(0,i.createElement)(p.Ht,{client:g.A},(0,i.createElement)(s.H,null,(0,i.createElement)(F,{...e})))}},40493:(e,t,n)=>{n.d(t,{U:()=>o,z:()=>l});var i=n(38267);const o=i.Ay.div`
    .helpgent-gdpr-learn-more{
        a{
            pointer-events: none;
        }
    }
    .helpgent-message-error{
        font-size: 15px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .components-spinner {
        position: absolute;
        inset-inline-start: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    .helpgent-page-initial{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 50vh;
        max-width: 100%;
        border-radius: 14px;
        margin: 20px 20px 0;
        background-color: var(--helpgent-color-white);
        box-sizing: border-box;
    }
    .helpgent-single-form-title-info-text{
        display: block;
        max-width: 170px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    &.helpgent-form-wrapper--adaptive{
        .helpgent-preview-style{
            padding: 0;
        }
        /* Header */
        .helpgent-single-form-header__middle{
            flex: none;
            @media only screen and (max-width: 430px){
                flex: 0 0 100%;
            }
        }
        .helpgent-single-form-header__back-link{
            min-width: 35px;
            min-height: 36px;
            padding: 0;
            background: var(--helpgent-color-bg-light);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            &:after{
                content: none;
            }
            span{
                display: none;
            }
        }
        .helpgent-single-form-header__title strong{
            margin: 0;
        }

        .helpgent-sidebar-float,
        .helpgent-settings-float{
            position: absolute;
            background: var(--helpgent-color-bg-deep) !important;
            border-radius: 8px;
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 0 none;
            cursor: pointer;
            z-index: 97;
            transition: 0.3s ease;
            padding: 0;
            svg{
                width: 18px;
                height: 18px;
                path{
                    fill: var(--helpgent-color-gray);
                }
            }
        }
        /* Sidebar */
        .helpgent-screenBar{
            width: 250px;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 9999;
            box-shadow: 5px 0 5px rgba(0,0,0,0.05);
            &.helpgent-screenBar--float{
                margin-right: 20px;
            }
            &.helpgent-screenBar--collapsed{
                left: 100%;
            }
            @media only screen and (max-width: 575px){
                width: 225px;
            }
        }
        .helpgent-screen__title .helpgent-screen__title-text{
            flex: 0 0 95px;
        }

        /* Screen settings */
        .helpgent-screen-settings,
        .helpgent-email-settings-sidebar{
            position: absolute;
            right: 0;
            top: 0;
            z-index: 9999;
            transition: var(--helpgent-transition);
            box-shadow: -5px 0 5px rgba(0,0,0,0.05);
            &.helpgent-screen-settings--collapsed,
            &.helpgent-email-settings-sidebar--collapsed{
                width: 0 !important;
            }
        }

        .helpgent-bubble-preview__wrapper{
            svg{
                max-width: 100%;
            }
        }
    }
`,l=i.Ay.div`
    .helpgent-screen-setting-block__label{
        font-size: 12px;
        display: block;
        font-weight: 600;
        text-transform: uppercase;
        color: var(--helpgent-color-light-gray);
        margin: 0 0 20px;
        letter-spacing: 1.2px;
    }
    .helpgent-toggle{
        display: flex;
        justify-content: space-between;
        align-items: center;
        &__label{
            font-size: 14px;
            font-weight: 500;
            color: #030308;
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;
        }
    }
    .helpgent-learn-more-toggle{
        .helpgent-toggle{
            margin-bottom: 0 !important;
        }
    }

    .helpgent-toggle:not(.helpgent-toggle--has-dependent-field){
        margin-bottom: 24px;
    }
    .helpgent-toggle.helpgent-toggle--has-dependent-field{
        margin-bottom: 15px;
    }
    .helpgent-form-group{
        margin-bottom: 25px;
    }
    .helpgent-field-element:last-child{
        .helpgent-form-group{
            margin-bottom: 0;
        }
    }
    .helpgent-field-element--typography{
        .helpgent-select {
            .helpgent-select__single-value{
                font-size: 14px;
                font-weight: 500;
                font-family: var(--helpgent-selected-font);
                color: var(--helpgent-color-light-gray);
            }
            .helpgent-select__control{
                border-radius: 8px;
                padding-left: 6px;
                background-color: var(--helpgent-color-bg-light);
            }
        }
    }

    .helpgent-screen-setting-block{
        .helpgent-field-element:last-child{
            .helpgent-field-element__content{
                &.helpgent-reply-method{
                    margin-top: 17px;
                    .helpgent-reply-method__single{
                        &:not(:last-child){
                            margin-bottom: 20px;
                        }
                        .helpgent-toggle__label{
                            gap: 20px;
                            text-transform: capitalize;
                            svg{
                                width: 20px;
                                height: 20px;
                                path{
                                    fill: var(--helpgent-color-extra-light);
                                }
                            }
                        }
                    }
                    .helpgent-edit-text-field{
                        font-size: 14px;
                        font-weight: 500;
                        text-decoration: underline;
                        cursor: pointer;
                        margin-top: 25px;
                        transition: var(--helpgent-transition);
                        color: var(--helpgent-color-primary);
                    }
                    .helpgent-toggle__label{
                        .helpgent-badge{
                            margin-left: -10px;
                        }
                    }
                }
            }
        }
        .helpgent-field-element__drag{
            cursor: grab;
        }
    }
    .helpgent-field-element__label{
        font-size: 14px;
        font-weight: 500;
        color: var(--helpgent-color-dark);
        margin-bottom: 9px;
        display: block;
    }
    .helpgent-media-actions{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        position: absolute;
        bottom: 15px;
        transform: translateX(-50%);
        inset-inline-start: 50%;
        z-index: 1;

        path {
            fill: var(--helpgent-color-dark);
        }
        .helpgent-btn{
            svg{
                margin-inline-end: 10px;
            }
        }
        .helpgent-btn-replace{
            padding: 0 20px;
            white-space: nowrap;
        }
        .helpgent-btn-remove{
            padding: 0 13px;
            svg{
                margin: 0;
            }
            &:hover{
                background: var(--helpgent-color-danger);
                border-color: var(--helpgent-color-danger);
            }
        }
    }
`},64197:(e,t,n)=>{n.d(t,{A:()=>i});const i=new(n(5054).E)}}]);