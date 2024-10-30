"use strict";(globalThis.webpackChunkhelpgent=globalThis.webpackChunkhelpgent||[]).push([[446,822],{89542:(e,t,n)=>{n.d(t,{A:()=>a});var i=n(51609),l=n(50481),o=n(4286),r=n(24770),p=n(27723);function a(e){const{moduleState:t,setModuleState:n}=e,{bubbleSettings:a,isClientModeActive:g}=e,{shape:d,position:s,overlay_text:h,size:c,offset_x:m,offset_y:x,border:u,background_type:f}=a,{color:b,upload:w}=f,v={"--helpgent-bubble-border-color":"1"===u.has_border?u.color:"none","--helpgent-bubble-box-shadow":"1"===u.has_border?"inset 0 3px 6px rgba(0, 0, 0, 0.16)":"none","--helpgent-bubble-offset-x":`${m}px`,"--helpgent-bubble-offset-y":`${x}px`,"--helpgent-bubble-bg-color":b||"#fff"},_=t&&t.customChatBubble&&t.customChatBubble.App?t.customChatBubble.App:null;return _?(0,i.createElement)(_,{...e,moduleState:t,setModuleState:n}):(0,i.createElement)(o.mB,{className:`helpgent-chat-bubble helpgent-chat-bubble--${d} helpgent-chat-bubble--${s} helpgent-chat-bubble--${c}`,style:v,onClick:g?function(){n({...t,chatBubble:{...t.chatBubble,isChatFormActive:!0}})}:null},""!==h&&(0,i.createElement)("span",{className:"helpgent-chat-bubble__overlay-text"},h),""!==w?.media?.url&&""!==w?.media?.type&&(0,i.createElement)("div",{className:`helpgent-chat-bubble__background helpgent-chat-bubble__background--${w?.media?.type?w?.media?.type:"placeholder"} ${""!==b?"helpgent-chat-bubble__background--colored":""}`},"image"===w?.media?.type?(0,i.createElement)(l.A,{src:w?.media?.url,alt:(0,p.__)("Helpgent Media","helpgent")}):"video"===w?.media?.type?(0,i.createElement)("video",{preload:"auto",loop:!0,autoPlay:!!g,muted:!0},(0,i.createElement)("source",{src:w?.media?.url,type:"video/mp4"})):""===b?(0,i.createElement)(l.A,{src:r,alt:(0,p.__)("Helpgent Media","helpgent")}):null),""===b&&""===w?.media?.url&&""===w?.media?.type&&(0,i.createElement)("div",{className:"helpgent-chat-bubble__background helpgent-chat-bubble__background--placeholder"},(0,i.createElement)(l.A,{src:r,alt:(0,p.__)("Helpgent Media","helpgent")})))}},98822:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var i=n(51609),l=n(86087),o=n(49785),r=n(4286),p=n(49876),a=n(92095),g=n(767),d=n(28050),s=n(88039),h=n(6945),c=n(38745),m=n(93869),x=n(30912),u=n(44154),f=n(27723);const b=(0,l.lazy)((()=>n.e(604).then(n.bind(n,79604)))),w=(0,l.lazy)((()=>n.e(102).then(n.bind(n,7102))));function v(e){const{moduleState:t,setModuleState:n,isFloatingForm:v}=e,{isLoggedIn:_,isPreviewActive:y,activeElement:M,submittedElements:k,singleForm:L,isSubmitAnswerLoading:D,reWatchedElementIds:j,isProcessingSubmitCallback:E}=t,[z,A]=(0,l.useState)({chatFormClose:null,chatFormNavigation:null}),[N,S]=(0,l.useState)({}),{elements:C,global:T}=L.content,{layout:I,controls:F}=M,{fieldDesign:O}=F,Y=(0,c.L)(),[U,Q]=(0,l.useState)(),{labelFontSize:V,specialLabelFontSize:B,chatTitleFontSize:$,descriptionFontSize:G,specialDescriptionFontSize:R,btnFontSize:P,specialBtnFontSize:W,cornerRadius:Z,largeCornerRadius:J,openEndedRadius:X,welcomeBtnPadding:H,endElementBtnPadding:K}=(0,u.J)(T,I),{register:q,handleSubmit:ee,setValue:te,getValues:ne,resetField:ie,control:le,watch:oe,formState:{errors:re},setError:pe,clearErrors:ae}=(0,o.mN)({mode:"onChange"}),{mutateAsync:ge,isLoading:de}=(0,g.A)("/helpgent/response/get-user-type"),{mutateAsync:se,isLoading:he}=(0,d.A)("/helpgent/response/verify-registered-user"),{mutateAsync:ce,isLoading:me}=(0,d.A)("/helpgent/response/register-guest"),{mutateAsync:xe,isLoading:ue}=(0,d.A)("/helpgent-pro/response/answer"),{mutateAsync:fe,isLoading:be}=(0,d.A)("/helpgent/response/answer/"),{mutateAsync:we,isLoading:ve}=(0,d.A)("/helpgent-pro/response/answer/half"),{mutateAsync:_e,isLoading:ye}=(0,s.A)("/helpgent-pro/response/answer"),{mutateAsync:Me,isLoading:ke}=(0,d.A)("/helpgent/response/generate-token/registered"),{mutateAsync:Le,isLoading:De}=(0,d.A)("/helpgent/response/generate-token/guest"),{mutateAsync:je,isLoading:Ee}=(0,d.A)("/helpgent/response/generate-token/unknown"),{mutateAsync:ze}=(0,s.A)("/helpgent/response/answer/attachment"),Ae=T?.font_weight_variations&&"string"!=typeof T.font_family?`${T?.font_family?.family}, ${T?.font_family?.category}`:T.font_family,{filteredWelcomeElement:Ne,filteredEndElement:Se,filteredOtherElement:Ce}=C.reduce(((e,t)=>("welcome"===t.element_type?e.filteredWelcomeElement.push(t):"end"===t.element_type?e.filteredEndElement.push(t):"user_validation"!==t.element_type&&e.filteredOtherElement.push(t),e)),{filteredWelcomeElement:[],filteredEndElement:[],filteredOtherElement:[]}),Te=[...Ne,...Ce,...Se],Ie=[...Ce],Fe=Te.findIndex((e=>e.id===M.id));function Oe(e){const t=(0,h.Xd)("editedElements",{});return void 0!==t[e]&&t[e]}function Ye(e,t){(0,h.CS)("editedElements",{[e]:t},!0)}return(0,l.useEffect)((()=>{const e=(0,p.$)("helpgent_chat_form_close",{props:{moduleState:t,setModuleState:n}}),i=(0,p.$)("helpgent_chat_form_navigation",{props:{selectedElement:M,isClientModeActive:!0,featureState:t,setFeatureState:n,clearErrors:ae,getValues:ne,register:q,errors:re}});A({...z,chatFormClose:e[1],chatFormNavigation:i[1]})}),[t]),(0,l.useEffect)((()=>{const e=document.querySelector(".helpgent-form-bottom-extras");Q(e.clientHeight)}),[I,C]),(0,i.createElement)(r.MS,{className:`${me||he||de||ue||be||ve||ke||De?"helpgent-answer-loading":""} ${v?"helpgent-chat-bubble-form__floating":""} helpgent-form__contents`},(0,i.createElement)("form",{className:"helpgent-form__element-form",onSubmit:ee((async e=>{const i=(0,h.Xd)("chatFormBeforeSubmitCallback",null),l=(0,h.Xd)("chatFormBeforeSubmitCallbackArgs",null);if("function"==typeof i){n((e=>({...e,isProcessingSubmitCallback:!0})));const t=await i(l,e);if(n((e=>({...e,isProcessingSubmitCallback:!1}))),"boolean"==typeof t.success&&!t.success)return;e=void 0!==t.formData?t.formData:e}(0,a.A)(e,!0,t,n,_,F,null,M,ge,se,ce,xe,fe,we,_e,Oe,Ye,Me,Le,je,(0,c.L)(),y)}))},(0,i.createElement)(r.Ch,{className:"helpgent-preview-container "+("mediaRight"===I?"helpgent-preview-media-right":"mediaBehind"===I?"helpgent-preview-media-overlay helpgent-preview-media-overlay--has-media":"openEndedDefault"===I?"helpgent-preview-open-ended-default":"noMedia"===I?"helpgent-preview-no-media":"helpgent-preview-media-left"),style:{"--helpgent-form-font":`${Ae}`,"--helpgent-element-icon-color":`${T?.color_style?.icon?.value}`,"--helpgent-label-font-size":`${V}px`,"--helpgent-special-label-font-size":`${B}px`,"--helpgent-label-font-weight":600,"--helpgent-label-color":`${T?.color_style?.title?.value}`,"--helpgent-description-font-size":`${G}px`,"--helpgent-special-description-font-size":`${R}px`,"--helpgent-description-font-weight":400,"--helpgent-description-color":`${T?.color_style?.description?.value}`,"--helpgent-chatTtile-font-size":`${$}px`,"--helpgent-chatTtile-font-weight":"600","--helpgent-chatTtile-color":`${T?.color_style?.chatTitleStyle?.value}`,"--helpgent-footerText-font-size":"13px","--helpgent-footerText-font-weight":400,"--helpgent-footerText-color":`${T?.color_style?.footer_text_color?.value}`,"--helpgent-options-color":`${T?.color_style?.options_color?.value}`,"--helpgent-btn-color":`${T?.color_style?.button?.value}`,"--helpgent-btn-radius":`${Z}px`,"--helpgent-btn-text-color":`${T?.color_style?.button_text?.value}`,"--helpgent-btn-font-size":`${P}px`,"--helpgent-special-btn-font-size":`${W}px`,"--helpgent-overlay-color":`${O?.mediaStyle?.overlay_color.value}`,"--helpgent-overlay-opacity":`${O?.mediaStyle?.overlay_opacity.value}%`,"--helpgent-background-overlay-color":`${T?.background_style?.overlay_color.value}`,"--helpgent-background-overlay-opacity":`${T?.background_style?.overlay_opacity.value}%`,"--helpgent-input-radius":`${Z}px`,"--helpgent-large-component-radius":`${J}px`,"--helpgent-input-background":"#EFEFEF","--helpgent-background-color":T?.background_color,"--helpgent-open-ended-border-radius":`${X}px`,"--helpgent-special-btn-padding":`${H}`,"--helpgent-end-element-btn-padding":`${K}`,"--helpgent-bottom-extras-height":`${U}px`}},(0,i.createElement)(l.Suspense,{fallback:(0,i.createElement)("div",{className:"helpgent-chat-form-loader-wrap"},(0,i.createElement)("span",{className:"helpgent-chat-form-loader"},(0,i.createElement)("span",null,(0,f.__)("Loading","helpgent"))))},(0,i.createElement)(x.eq,{className:"helpgent-element-background",style:{backgroundImage:`url(${T?.background_image?.url})`}}," ","1"===T?.background_style?.background_overlay?.isActive&&T?.background_image&&(0,i.createElement)("span",{className:"helpgent-element-background__overlay"})," "),"end"!==M.element_type&&(null===t.openEndedAnswerType||void 0===t.openEndedAnswerType)&&"noMedia"!==I&&(0,i.createElement)(b,{key:`${M.id}-media`,selectedElement:M,featureState:t,setFeatureState:n,isClientModeActive:!0}),(0,i.createElement)(w,{key:M.id,selectedElement:M,featureState:t,setFeatureState:n,isClientModeActive:!0,register:q,errors:re,setValue:te,getValues:ne,clearErrors:ae,resetField:ie,control:le,watch:oe,setError:pe,isElementEdited:Oe,updateEditedElementStatus:Ye,deleteAnswers:async function(e,t,n){try{return{success:!0,response:await _e({form_id:e,element_ids:t,response_token:n})}}catch(e){return{success:!1,error:e}}},deleteAttachment:async function(e,t){var n;if("number"!=typeof e)return;const i=null!==(n=(0,h.Xd)("attachments"))&&void 0!==n?n:[],l=i.filter((t=>t.id===e))[0],o={id:e,data:{token:l?.token,form_id:L?.id}};"1"===T.save_incomplete_data.isActive&&Y&&(o.data.response_token=t);try{const t=i.filter((t=>t.id!==e));return(0,h.CS)("attachments",t),await ze(o)}catch(e){console.log(e)}},getCachedFormData:function(e,t,n){let i=n?n.filter((e=>e.id===t)):[];return i=i.length?i[0].value:{},e.reduce(((e,t)=>(e[t]=i.hasOwnProperty(t)?i[t]:void 0,e)),{})},updateCachedFormData:function(e,t){n((n=>{if(!n.cachedElementsValue)return n;const i=n.cachedElementsValue.map((n=>n.id!==e?n:{...n,value:{...n.value,...t}}));return{...n,cachedElementsValue:i}}))},tempData:N,updateTempData:(e,t,n,i)=>{i="string"==typeof i&&["merge","override"].includes(i)?i:"override",S((l=>{l.hasOwnProperty(e)||(l={...l,[e]:{}});const o=(e,t,n,i)=>({...t,[e]:{...t[e],[n]:i}});return l[e].hasOwnProperty(t)&&(e=>e&&"object"==typeof e&&!Array.isArray(e))(l[e][t])&&"merge"===i?((e,t,n,i)=>({...t,[e]:{...t[e],[n]:{...t[e][n],[n]:i}}}))(e,l,t,n):o(e,l,t,n)}))}})),z?.chatFormClose&&v&&(0,i.createElement)(l.Fragment,{key:`${M.id}-form-close`},z.chatFormClose),(0,i.createElement)("div",{className:"helpgent-form-bottom-extras"},"end"!==M.element_type&&"welcome"!==M.element_type&&"user_validation"!==M.element_type&&"0"!==T?.progress_count?.isActive&&(0,i.createElement)("span",{className:"helpgent-form__step-count"},(0,i.createElement)("span",{className:"helpgent-form__step-active"},"user_validation"===M.element_type||"welcome"===M.element_type?"0":Fe),(0,i.createElement)("span",null," / ",Ie.length)),z?.chatFormNavigation&&"end"!==M.element_type&&z.chatFormNavigation,("1"===T?.helpgent_branding?.isActive||!Y)&&(0,i.createElement)(m.A,{key:`${M.id}-copyright`,className:"helpgent-form__copyright--media"})))))}},93869:(e,t,n)=>{n.d(t,{A:()=>a});var i=n(51609),l=n(65604);const o="data:image/svg+xml;base64,PHN2ZyBpZD0iaGVscGdlbnQtbG9nby1saWdodCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTA2IiBoZWlnaHQ9IjIzLjciIHZpZXdCb3g9IjAgMCAxMDYgMjMuNyI+CiAgPGcgaWQ9Ikdyb3VwXzI4NTIiIGRhdGEtbmFtZT0iR3JvdXAgMjg1MiI+CiAgICA8cGF0aCBpZD0iUGF0aF8xNTczIiBkYXRhLW5hbWU9IlBhdGggMTU3MyIgZD0iTTkxLjczLDU4Ljk3OWExLjY5LDEuNjksMCwwLDAtMS44MTEuMjg4bC0yLDEuODYzVjU5LjA0N0E2LjMyMyw2LjMyMywwLDAsMCw4MS41ODksNTNINzMuNTE0QTYuMzIsNi4zMiwwLDAsMCw2Ny4yLDU5LjMzNVY2Ny40YTYuMzI0LDYuMzI0LDAsMCwwLDQuODA4LDYuMTQ5djEuOTY1YTEuMzI3LDEuMzI3LDAsMCwwLC4xMTkuNTI1LDEuMiwxLjIsMCwwLDAsMS42MDguNTQybDUuNjItMi44MTIsMS43NDQtLjAzNGguNDkxYTMuODI4LDMuODI4LDAsMCwwLC40NC0uMDE3LDYuMTI1LDYuMTI1LDAsMCwwLC43NzktLjEsNi4zMjksNi4zMjksMCwwLDAsNS4xMTMtNS45MjhWNjYuMzQ3bDIuMDE1LDEuODYzYTEuNjQzLDEuNjQzLDAsMCwwLDEuMTM0LjQ0LDEuNjg0LDEuNjg0LDAsMCwwLDEuNjU5LTEuNjA5VjYwLjQxOUExLjU3NywxLjU3NywwLDAsMCw5MS43Myw1OC45NzlaTTc4LjE1Myw3MC41NjUsNzUuNDk1LDcxLjlhLjQ1LjQ1LDAsMCwxLS4yLjA1MS40NTUuNDU1LDAsMCwxLS40NTctLjQ1N1Y3MC4wNGE3LjAzOCw3LjAzOCwwLDAsMS00LjMxNy02LjVoMGE3LjA2OCw3LjA2OCwwLDAsMSw3LjA1OS03LjA2M2gwYTcuMDU4LDcuMDU4LDAsMCwxLC41NzYsMTQuMDkzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY3LjIgLTUzKSIgZmlsbD0iI2ZmZiIvPgogICAgPGcgaWQ9Ikdyb3VwXzI4NTEiIGRhdGEtbmFtZT0iR3JvdXAgMjg1MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNS44NTYgOS41MTUpIj4KICAgICAgPGNpcmNsZSBpZD0iRWxsaXBzZV8zMjAiIGRhdGEtbmFtZT0iRWxsaXBzZSAzMjAiIGN4PSIxLjAxNiIgY3k9IjEuMDE2IiByPSIxLjAxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNi42ODkgMC4yMDgpIiBmaWxsPSIjZmZmIi8+CiAgICAgIDxjaXJjbGUgaWQ9IkVsbGlwc2VfMzIxIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzIxIiBjeD0iMS4wMTYiIGN5PSIxLjAxNiIgcj0iMS4wMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuNDM5IDAuMjA4KSIgZmlsbD0iI2ZmZiIvPgogICAgICA8Y2lyY2xlIGlkPSJFbGxpcHNlXzMyMiIgZGF0YS1uYW1lPSJFbGxpcHNlIDMyMiIgY3g9IjEuMDE2IiBjeT0iMS4wMTYiIHI9IjEuMDE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuNDY3KSByb3RhdGUoLTEzLjI4NikiIGZpbGw9IiNmZmYiLz4KICAgIDwvZz4KICA8L2c+CiAgPHBhdGggaWQ9IlBhdGhfMTM4ODkiIGQ9Ik0yNTQuNDcyLDgxLjgyNEgyNTkuNXY0Ljg2MmgyLjQ4OXYtMTJIMjU5LjV2NC43NDRoLTUuMDI4Vjc0LjY5MUgyNTJ2MTJoMi40ODlWODEuODI0Wk0yNzIuMyw4My4yNDdjLjAxNy0uMTg2LjAzNC0uNDc0LjAzNC0uODY0YTMuODkyLDMuODkyLDAsMCwwLTQuMDgtNC4xLDQuMjQzLDQuMjQzLDAsMCwwLTMuMDY0LDEuMjU0LDQuMDU5LDQuMDU5LDAsMCwwLTEuMjcsMy4wMTYsNC4xMDksNC4xMDksMCwwLDAsMS4yODcsMy4xLDQuNjQ4LDQuNjQ4LDAsMCwwLDMuMiwxLjIsMy42ODQsMy42ODQsMCwwLDAsMy41MjEtMS44NDdMMjcwLjIsODMuODc0YTIuMTksMi4xOSwwLDAsMS0xLjgyOC45ODMsMS45MDcsMS45MDcsMCwwLDEtMi4wMTUtMS42MDlIMjcyLjNabS01Ljg5MS0xLjU3NmExLjYxMSwxLjYxMSwwLDAsMSwuNTU5LS45NDksMS43ODcsMS43ODcsMCwwLDEsMi45NjIuOTQ5Wk0yNzYuNDI5LDc0LjJoLTIuNFY4Ni42ODZoMi40Wk0yODEsNzguNWgtMi4zN1Y5MC43MzZoMi4zODdWODUuNzg5aC4wMzRhMywzLDAsMCwwLDIuNDIxLDEuMDY3LDMuNjI1LDMuNjI1LDAsMCwwLDIuODI3LTEuMjg4LDQuMzgyLDQuMzgyLDAsMCwwLDEuMTE3LTIuOTgyLDQuNSw0LjUsMCwwLDAtMS4wODMtMi45NDgsMy40NjUsMy40NjUsMCwwLDAtMi44MS0xLjI4OCwyLjg1OSwyLjg1OSwwLDAsMC0yLjQ4OSwxLjE2OUgyODFabS0uMDM0LDQuMDY2YTIuMDU5LDIuMDU5LDAsMCwxLC41OTItMS40OTEsMS44ODksMS44ODksMCwwLDEsMS40MjItLjU3NiwyLDIsMCwwLDEsMi4wMzIsMi4wNjcsMi4xMjIsMi4xMjIsMCwwLDEtLjU3NiwxLjUyNUExLjksMS45LDAsMCwxLDI4Myw4NC42N2ExLjk2NSwxLjk2NSwwLDAsMS0xLjQzOS0uNTc2QTIuMDQzLDIuMDQzLDAsMCwxLDI4MC45NjYsODIuNTY5Wm0xMC4yNTktMS45YTMuNzMsMy43MywwLDAsMSwxLjA2Ni0yLjcyOCwzLjUzOSwzLjUzOSwwLDAsMSwyLjYyNC0xLjEsMy4xNzUsMy4xNzUsMCwwLDEsMi4wODIuNjQ0LDMuMzcsMy4zNywwLDAsMSwxLjEzNCwxLjQ3NGwyLjE4NC0xLjA2N2E1LjIsNS4yLDAsMCwwLTEuODc5LTIuMzM4LDUuODM1LDUuODM1LDAsMCwwLTMuNDg3LTEuMDUsNi4wOCw2LjA4LDAsMCwwLTQuNDE4LDEuOCw1Ljk3NCw1Ljk3NCwwLDAsMC0xLjgxMSw0LjQsNi4xODMsNi4xODMsMCwwLDAsMS43MjcsNC40LDYuMDg0LDYuMDg0LDAsMCwwLDQuNDg2LDEuNzc5LDUuNDMxLDUuNDMxLDAsMCwwLDQuODU5LTIuNTc1LDUuOTc4LDUuOTc4LDAsMCwwLC44My0zLjExN3YtLjkzMmgtNi4yM3YyLjI1M2gzLjY0YTIuOTY5LDIuOTY5LDAsMCwxLTMuMSwyLjAxNiwzLjQ3LDMuNDcsMCwwLDEtMi42NTgtMS4xMTgsMy45NTQsMy45NTQsMCwwLDEtMS4wNS0yLjc0NVptMTguOTEsMi41NzVjLjAxNy0uMTg2LjAzNC0uNDc0LjAzNC0uODY0YTMuODkyLDMuODkyLDAsMCwwLTQuMDgtNC4xLDQuMjQzLDQuMjQzLDAsMCwwLTMuMDY0LDEuMjU0LDQuMDU5LDQuMDU5LDAsMCwwLTEuMjcsMy4wMTYsNC4xMDgsNC4xMDgsMCwwLDAsMS4yODcsMy4xLDQuNjQ4LDQuNjQ4LDAsMCwwLDMuMiwxLjIsMy42ODQsMy42ODQsMCwwLDAsMy41MjEtMS44NDdsLTEuNzI3LTEuMTM1YTIuMTksMi4xOSwwLDAsMS0xLjgyOC45ODMsMS45MDcsMS45MDcsMCwwLDEtMi4wMTUtMS42MDlabS01Ljg3NC0xLjU3NmExLjYxMiwxLjYxMiwwLDAsMSwuNTU5LS45NDksMS43ODcsMS43ODcsMCwwLDEsMi45NjMuOTQ5Wm0xNS4yNyw1LjAxNVY4MS42YTMuNiwzLjYsMCwwLDAtLjc0NS0yLjMyMSwyLjYsMi42LDAsMCwwLTIuMi0uOTMyLDIuNjc2LDIuNjc2LDAsMCwwLTEuNTA3LjQyNCwyLjA0MywyLjA0MywwLDAsMC0uODEzLjhoLS4wMTdWNzguNWgtMi4zN3Y4LjE4M2gyLjM4N1Y4Mi4xNDZhMS40NTMsMS40NTMsMCwwLDEsMS4yNy0xLjU5My44MTQuODE0LDAsMCwxLC4yLDBjLjkzMSwwLDEuNDIyLjYyNywxLjQyMiwxLjU5M3Y0LjU0MVptNy4wOTMtMi4wMTZhMi4xLDIuMSwwLDAsMS0uNTU5LjA2OGMtLjkzMSwwLTEuNDIyLS4zNzMtMS40MjItMS4zVjgwLjU4N2gyLjAxNVY3OC41aC0yLjAxNVY3NS45NDVIMzIyLjI5Vjc4LjVoLTEuNTA3VjgwLjU3aDEuNDczVjgzLjdjMCwxLjkxNCwxLjExNywzLjA4MywzLjI1LDMuMDgzYTQuMTM0LDQuMTM0LDAsMCwwLDEuMTE3LS4xNTJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjIwLjY1NyAtNzAuNjExKSIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4K";var r=n(4286),p=n(27723);function a(e){const{className:t}=e;return(0,i.createElement)(r.A3,{className:`helpgent-form__copyright ${void 0!==t?t:""}`},(0,i.createElement)("a",{href:"https://wpwax.com/helpgent/",target:"__blank",className:"helpgent-copyright__button"},(0,p.__)("Powered by","helpgent"),(0,i.createElement)(l.A,{src:o})))}},68469:(e,t,n)=>{n.d(t,{A:()=>o});var i=n(1455),l=n.n(i);async function o(e,t,n){return n=n||{},await l()({path:e,method:"DELETE",data:t,...n}).then((e=>e))}},44154:(e,t,n)=>{function i(e,t){let n="24",i="30",l="16",o="15",r="16",p="15",a="16",g="25",d="10",s=window.innerWidth<=480?"10":"14",h="0 30.45px",c="0 31.6px";return"lg"===e?.element_size?(n="30",o="16",p="16",l="18"):"sm"===e?.element_size&&(n="20",o="14"),"openEndedDefault"===t&&"16"===l&&"sm"===e.element_size&&(l="15"),"lg"===e?.specialElement_size?(i="36",h="0 36px",c="0 41.6px"):"sm"===e.specialElement_size&&(i="24",a="15",r="15",c="0 29.1px"),"partiallyRound"===e?.corner?g="8":"square"===e?.corner&&(g="0",d="0",s="0"),{labelFontSize:n,specialLabelFontSize:i,chatTitleFontSize:l,descriptionFontSize:o,specialDescriptionFontSize:r,btnFontSize:p,specialBtnFontSize:a,cornerRadius:g,largeCornerRadius:d,openEndedRadius:s,welcomeBtnPadding:h,endElementBtnPadding:c}}n.d(t,{J:()=>i})},86958:(e,t,n)=>{n.d(t,{R:()=>p});var i=n(95282),l=n(44089),o=n(6945);function r(e){let t=(0,o.Xd)("editedElements",{});for(const n of Object.keys(t))e.includes(n)&&delete t[n];(0,o.CS)("editedElements",t)}async function p(e,t,n,o,p,a,g,d,s,h,c,m,x,u,f,b){let w=[...d];d.includes(t.id)||w.push(t.id);let v=[...w];if(g?.elementLogic?.logics){let y=!1;for(let M=0;M<g?.elementLogic?.logics.length;M++){var _;const k=g?.elementLogic?.logics[M],L=(0,i.D)(t.id,k,null!==(_=e[t.element_type])&&void 0!==_?_:"",t?.element_type,f);if(k.conditions.length===L){const i=(0,l.e)(p,k?.target_element,t?.id);if(h.push(t),void 0!==c[t.element_type]&&null!==c[t.element_type]||e.fieldKeys){const e=s.findIndex((e=>e.element_id===c.element_id));-1===e?s.push(c):s[e]=c}if(i){if("1"===a.save_incomplete_data.isActive&&u){const e=w.indexOf(t.id);if(-1!==e&&!d.includes(i.id)&&d.includes(t.id)){const t=w.slice(e+1);v=w.slice(0,e+1),0!==t.length&&(r(t),m({form_id:singleForm.id,element_ids:t,response_token:x}))}}!u&&i.isPro?b({...f,submittedRoute:v,submittedAnswers:s,submittedElements:h,activeElement:n[0]||t,responseToken:x,cachedElementsValue:o,openEndedAnswerType:null}):b({...f,submittedRoute:v,submittedAnswers:s,submittedElements:h,activeElement:i,responseToken:x,cachedElementsValue:o,openEndedAnswerType:null})}else b({...f,submittedRoute:v,submittedAnswers:s,submittedElements:h,activeElement:t,responseToken:x,cachedElementsValue:o,openEndedAnswerType:null});y=!0;break}}if(y)return}if(g?.elementLogic?.default_target){const i=(0,l.e)(p,g?.elementLogic?.default_target,t?.id);if(h.push(t),void 0!==c[t.element_type]&&null!==c[t.element_type]||e.fieldKeys){const e=s.findIndex((e=>e.element_id===c.element_id));-1===e?s.push(c):s[e]=c}if(i){if(g?.elementLogic?.logics&&"1"===a.save_incomplete_data.isActive&&u){const e=w.indexOf(t.id);if(-1!==e&&!d.includes(i.id)&&d.includes(t.id)){const t=w.slice(e+1);v=w.slice(0,e+1),0!==t.length&&(r(t),m({form_id:singleForm.id,element_ids:t,response_token:x}))}}var y;!u&&i.isPro?b({...f,submittedRoute:v,submittedAnswers:s,submittedElements:h,activeElement:null!==(y=n[0])&&void 0!==y?y:t,responseToken:x,cachedElementsValue:o,openEndedAnswerType:null}):b((e=>({...e,submittedRoute:v,submittedAnswers:s,submittedElements:h,activeElement:i,responseToken:x,cachedElementsValue:o,openEndedAnswerType:null})))}else b({...f,submittedRoute:w,submittedAnswers:s,submittedElements:h,activeElement:t,responseToken:x,cachedElementsValue:o,openEndedAnswerType:null})}else b({...f,submittedRoute:v,activeElement:t,responseToken:x,cachedElementsValue:o,openEndedAnswerType:null})}},22146:(e,t,n)=>{n.d(t,{T:()=>r});var i=n(94933),l=n(86958),o=n(6945);async function r(e,t,n,r,p,a,g,d,s,h,c,m,x,u,f,b,w,v,_,y,M,k){const{singleForm:L,submittedAnswers:D,submittedElements:j,isFinalSubmissionActive:E,isVisitedValidation:z}=m,{id:A}=L,{elements:N}=L.content;if("welcome"!==e.element_type&&"end"!==e.element_type){for(const e in n)n.hasOwnProperty(e)&&""===n[e]?delete n[e]:"object"!=typeof n[e]||Array.isArray(n[e])||null===n[e]||void 0===n[e]||n[e].label&&(n[e]=n[e].label);!1===n.multi_select?n.multi_select=[]:"string"==typeof n.multi_select&&(n.multi_select=[n.multi_select]),"string"==typeof n.gdpr&&(n.gdpr=[n.gdpr]);let L={form_id:A,element_id:e.id,response_token:m.responseToken,attachment_tokens:[]};try{let S=!0;"1"===r?.save_incomplete_data?.isActive&&s&&(S=!1);let C=[...m.cachedElementsValue],T={id:m.activeElement.id,value:{[e.element_type]:n[e.element_type]}};if(n.fieldKeys)for(const e of n.fieldKeys)n.hasOwnProperty(e)&&(T.value[e]=n[e]);const I=C.findIndex((e=>e.id===T.id));if(I>=0?C[I].value=T.value:C.push(T),"1"===r.save_incomplete_data.isActive&&s){if(m.isGdprActive)h||"gdpr"===e.element_type&&(E?(await(0,o.$2)(d,g,D,L,m,x,h,S,y,w,_,M,k),(0,o.Wz)(E,n,L,e),delete L.data,delete L?.map_address,await f(L)):(await(0,o.$2)(d,g,(0,o._$)(e,n,D,L),L,m,x,h,S,y,w,_,M,k),x((e=>({...e,isGdprActive:!1})))));else{let t=m.responseToken;(0,o.Wz)(E,n,L,e),m.responseToken||h||(t=d?await(0,i.o)(y,{form_id:A}):z?await(0,i.o)(_,{form_id:A,email:m.userEmail,password:m.userPassword}):await(0,i.o)(_,{form_id:A}),x({...m,responseToken:t}),L.response_token=t),(1==L.submit||c(e.id))&&(h||(delete L?.map_address,await f(L)),u(e.id,!1))}let b=(0,o.mu)(e,n);(0,l.R)(n,e,t,C,N,r,p,a,D,j,b,v,L?.response_token,s,m,x)}else{E&&await(0,o.$2)(d,g,(0,o._$)(e,n,D,L),L,m,x,h,S,y,b,_,M,k);let i=(0,o.mu)(e,n);(0,l.R)(n,e,t,C,N,r,p,a,D,j,i,v,m?.responseToken,s,m,x)}}catch(e){console.log(e),x({...m,submitAnswerError:e})}}}},92095:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(94933),l=n(22146),o=n(16174);async function r(e,t,n,r,p,a,g,d,s,h,c,m,x,u,f,b,w,v,_,y,M,k){if(!t)return;"recaptcha"===d.element_type?r((e=>({...e,isReCaptchaSubmitted:!0,submitAnswerError:null,isSubmitAnswerLoading:!0}))):r({...n,submitAnswerError:null,isSubmitAnswerLoading:!0});const{singleForm:L,submittedRoute:D,submittedElements:j,userVerificationField:E,isVisitedValidation:z}=n,{elements:A,global:N}=L.content,S=A.filter((e=>"end"===e.element_type)),{id:C}=L;function T(e,t){const n=e.find((e=>"welcome"===e.element_type));if(n){const{controls:i}=n;return e.find((e=>e.id===i.elementLogic.default_target))||t}const i=e.filter((e=>"welcome"!==e.element_type&&"end"!==e.element_type&&"user_validation"!==e.element_type));return 0!==i.length?i[0]:e.find((e=>"end"===e.element_type))||t}if(e.form_id=C,"welcome"===d.element_type)(0,o.O)(p,a,S,d,z,M,n,r);else if("user_validation"===d.element_type)!async function(){if("default"===E)try{const t=await s(e);if("registered"===t.user_type)r({...n,userEmail:e.email,userType:"registered",userVerificationField:"registered",isRegisteredUser:!0,submissionServerError:null,isVisitedValidation:!0});else if("guest"===t.user_type){const t={form_id:C,email:e.email};"1"===N.save_incomplete_data.isActive&&M?r({...n,userEmail:e.email,activeElement:T(A,d),responseToken:await(0,i.o)(_,t),userVerificationField:"registered",submissionServerError:null,isVisitedValidation:!0}):r({...n,userType:"guest",userEmail:e.email,activeElement:T(A,d),isVisitedValidation:!0,isRegisteredUser:!0})}}catch(t){r({...n,userEmail:e.email,isRegisteredUser:!1,userVerificationField:"guest"})}else if("registered"===E){e.email=n.userEmail;try{await h(e),r({...n,userVerificationField:"default",activeElement:T(A,d),userPassword:e.password,submissionServerError:null,isVisitedValidation:!0})}catch(e){r({...n,submissionServerError:e.message})}}else if("guest"===E)if(delete e?.acceptance,delete e?.welcome,"1"===N.save_incomplete_data.isActive&&M)try{const t=await c(e);r({...n,userVerificationField:"default",activeElement:T(A,d),responseToken:t.response_token,submissionServerError:null,isVisitedValidation:!0})}catch(e){r({...n,submissionServerError:e.message})}else r({...n,userVerificationField:"default",activeElement:T(A,d),userType:"guest",guestData:e,isRegisteredUser:!1,isVisitedValidation:!0,submissionServerError:null})}();else{if(!(void 0!==p&&"0"!==p||z)){const t=A.filter((e=>"user_validation"===e.element_type))[0];return void(t&&"0"===N.anonymous_submission.isActive?(j.push(d),r({...n,submittedElements:j,activeElement:t})):(0,l.T)(d,S,e,N,a,D,p,!0,M,k,b,n,r,w,m,x,u,f,v,y,_,c))}(0,l.T)(d,S,e,N,a,D,p,!1,M,k,b,n,r,w,m,x,u,f,v,y,_,c)}}},16174:(e,t,n)=>{function i(e,t,n,i,l,o,r,p){const{singleForm:a,submittedElements:g}=r,{elements:d,global:s}=a.content;if(void 0!==e&&"0"!==e||r.responseToken||l){const e=d.filter((e=>e.id===t.elementLogic.default_target))[0];var h;g.push(i),e?!o&&e.isPro?p({...r,submittedElements:g,activeElement:null!==(h=n[0])&&void 0!==h?h:i}):p({...r,submittedElements:g,activeElement:e}):p({...r,submittedElements:g,activeElement:i})}else{const e=d.filter((e=>"user_validation"===e.element_type))[0];if(e&&"0"===s.anonymous_submission.isActive)g.push(i),p({...r,submittedElements:g,activeElement:e});else{const e=d.filter((e=>e.id===t.elementLogic.default_target))[0];g.push(i),p({...r,submittedElements:g,activeElement:e})}}}n.d(t,{O:()=>i}),n(86958)},67571:(e,t,n)=>{n.d(t,{Y:()=>l});var i=n(6945);function l(e){const t=e.elements.filter((e=>"welcome"===e.element_type||"end"===e.element_type))[0];if(!e?.global?.corner&&(0,i.U9)(e,"corner",(0,i.xn)(e.elements[0])),!e?.global?.element_size&&(0,i.U9)(e,"element_size",(0,i.uE)(e.elements[0],"general")),!e?.global?.specialElement_size&&(0,i.U9)(e,"specialElement_size",(0,i.uE)(t,"special")),!e?.global?.font_family&&(0,i.U9)(e,"font_family","Inter"),!e?.global?.background_image&&(0,i.U9)(e,"background_image",null),!e?.global?.background_color&&(0,i.U9)(e,"background_color","#ffffff"),!e?.global?.color_style){let t={title:{value:e?.elements[0]?.controls?.fieldDesign?.labelStyle?.text_color?.value},description:{value:e?.elements[0]?.controls?.fieldDesign?.descriptionStyle?.text_color?.value},button:{value:e.elements[0].controls.fieldDesign.buttonStyle.btn_color.value},button_text:{value:e?.elements[0]?.controls?.fieldDesign?.buttonStyle?.btn_text_color?.value}};const n=e.elements.filter((e=>"open_ended"===e.element_type));n.length>0&&(t={...t,chat_title_color:{value:n[0]?.controls?.fieldDesign?.chatTitleStyle?.text_color?.value},footer_text_color:{value:n[0]?.controls?.fieldDesign?.footerTextStyle?.text_color?.value}}),e.global={...e.global,color_style:{...t}}}if(e?.global?.color_style?.icon||(e.global={...e.global,color_style:{icon:{value:"#3c3c3c"},...e.global.color_style}}),e?.global?.color_style?.options_color||(e.global={...e.global,color_style:{...e.global.color_style,options_color:{value:"#3c3c3c"}}}),!e?.global?.background_style){const t=e?.elements.filter((e=>"end"!==e.element_type)),n={background_overlay:{isActive:t[0]?.controls?.fieldDesign?.mediaStyle?.video_overlay?.isActive},overlay_color:{value:t[0]?.controls?.fieldDesign?.mediaStyle?.overlay_color?.value},overlay_opacity:{value:t[0]?.controls?.fieldDesign?.mediaStyle?.overlay_opacity?.value}};e.global={...e.global,background_style:{...n}}}e?.global?.progress_count||(e.global={...e.global,progress_count:{isActive:"1"}});const n=e.elements.map((e=>("user_validation"!==e.element_type||e?.guest_field?.acceptance||(e.guest_field={...e.guest_field,acceptance:{label:"I agree to......",isVisible:"0"}}),"statement"!==e.element_type||e?.controls?.general?.btn_text||(e.controls.general={...e.controls.general,btn_text:{value:"Continue"}}),delete e?.controls?.fieldDesign?.labelStyle,delete e?.controls?.fieldDesign?.descriptionStyle,delete e?.controls?.fieldDesign?.buttonStyle,delete e?.controls?.fieldDesign?.chatTitleStyle,delete e?.controls?.fieldDesign?.footerTextStyle,e)));return e.elements=n,e}},767:(e,t,n)=>{n.d(t,{A:()=>o});var i=n(26374),l=n(7012);const o=e=>(0,i.n)((t=>(0,l.A)(e,t)))},88039:(e,t,n)=>{n.d(t,{A:()=>o});var i=n(26374),l=n(68469);const o=(e,t)=>(0,i.n)((n=>"object"==typeof n?(n.id&&n.data&&(e=`${e}/${n.id}`,n=n.data),(0,l.A)(e,n,t)):(e=n?`${e}/${n}`:e,(0,l.A)(e,n||{},t))))},40289:(e,t,n)=>{n.d(t,{J:()=>r,X:()=>p});var i=n(51609),l=n(86087);const o=(0,l.createContext)(),r=()=>(0,l.useContext)(o),p=({children:e})=>{const[t,n]=(0,l.useState)({singleForm:null,estimatedTime:null,activeElement:null,nextElement:null,isFinalSubmissionActive:!1,isLoggedIn:"1",userVerificationField:"default",userEmail:"",userType:"",userPassword:"",isRegisteredUser:!1,isVisitedValidation:!1,submittedRoute:[],submittedElements:[],submittedAnswers:[],reWatchedElementIds:[],cachedElementsValue:[],responseToken:null,isProcessingSubmitCallback:null,beforeSubmitCallback:null,beforeSubmitCallbackArgs:null,submissionServerError:null,chatBubble:{isChatFormActive:!1,isChatFormMinimized:!1,canCloseChatForm:!0},chatFormClose:null,guestData:null,isAnonymousSubmission:!1,attachments:[],logicalRouteList:{},openEndedSubmittedElements:[],openEndedAnswerType:null,isGdprActive:!1,isReCaptchaPassed:!1,isReCaptchaSubmitted:!1});return(0,i.createElement)(o.Provider,{value:{chatBubbleState:t,setChatBubbleState:n}},e)}},37446:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var i=n(51609),l=n(86087),o=n(52619),r=n(40289),p=n(89542),a=n(98822),g=n(63064),d=n(64197),s=n(7359),h=n(67571),c=n(6945);const m=e=>{const{data:t,isLoggedIn:n,isFloatingForm:d}=e,{chatBubbleState:m,setChatBubbleState:x}=(0,r.J)(),{singleForm:u}=m,f=(0,g.jE)(),[b,w]=(0,l.useState)({offset_x:0,offset_x:0,position:""}),{offset_x:v,offset_y:_,position:y}=b,M={"--helpgent-bubble-form-offset-x":`${v}px`,"--helpgent-bubble-form-offset-y":`${_}px`};return(0,l.useEffect)((()=>{const e=(0,o.applyFilters)("helpgent_form",{...t,content:(0,h.Y)(JSON.parse(t?.content))}),{content:i}=e,{elements:l,global:r}=i;w(r.bubble);const p=l.filter((e=>"end"===e.element_type)),a=[...l.filter((e=>"welcome"!==e.element_type&&"user_validation"!==e.element_type&&"end"!==e.element_type)),...p];let g=l.find(((e,t)=>"welcome"===e.element_type||"user_validation"===e.element_type&&"0"===n&&"0"===r.anonymous_submission.isActive));const d=l.findIndex((e=>"gdpr"===e.element_type));x({...m,temp:{},singleForm:e,activeElement:null!=g?g:a[0],isLoggedIn:n,estimatedTime:null,nextElement:null,isFinalSubmissionActive:!1,userVerificationField:"default",userEmail:"",submittedRoute:[],submittedElements:[],submittedAnswers:[],reWatchedElementIds:[],cachedElementsValue:[],responseToken:null,isProcessingSubmitCallback:null,beforeSubmitCallback:null,beforeSubmitCallbackArgs:null,submissionServerError:null,guestData:null,isAnonymousSubmission:!1,attachments:[],logicalRouteList:{},openEndedSubmittedElements:[],isGdprActive:d>0}),f.clear(),window.helpgentGlobalState&&(delete window.helpgentGlobalState.attachments,delete window.helpgentGlobalState.open_ended,delete window.helpgentGlobalState.chat_form_file,delete window.helpgentGlobalState.chatFormBeforeSubmitCallback,delete window.helpgentGlobalState.chatFormBeforeSubmitCallbackArgs,delete window.helpgentGlobalState.editedElements)}),[m?.chatBubble?.isChatFormActive]),(0,l.useEffect)((()=>{u&&(0,c.dW)(u.content.global)}),[u?.id]),u&&(0,i.createElement)(s.D,null,m.chatBubble.isChatFormActive&&(0,i.createElement)("div",{style:{display:m.chatBubble.isChatFormMinimized?"none":"block"}},(0,i.createElement)(s.A,{className:`helpgent-chat-bubble-form helpgent-chat-bubble-form--${y}`,style:M},(0,i.createElement)(a.default,{moduleState:m,setModuleState:x,isFloatingForm:d}))),(!m.chatBubble.isChatFormActive||m.chatBubble.isChatFormMinimized)&&(0,i.createElement)(p.A,{bubbleSettings:b,moduleState:m,setModuleState:x,isClientModeActive:!0}))};function x(e){return(0,i.createElement)(g.Ht,{client:d.A},(0,i.createElement)(r.X,null,(0,i.createElement)(m,{...e})))}},7359:(e,t,n)=>{n.d(t,{A:()=>l,D:()=>o});var i=n(38267);const l=i.Ay.div`
    position: fixed;
    max-width: 850px;
    width: 100%;
    bottom: var(--helpgent-bubble-form-offset-y);
    height: min(80vh, 550px);
    z-index: 9999;
    animation: 0.4s ease-in-out 0s 1 normal none running helpgentOpeningAnimation;
    @media only screen and (max-width: 991px){
        max-width: 700px;
    }
    @media only screen and (max-width: 768px){
        width: calc(100% - 60px);
        height: unset;
    }
    &.helpgent-chat-bubble-form{
        position: fixed;
        &--left{
            left: var(--helpgent-bubble-form-offset-x);
        }
        &--right{
            right: var(--helpgent-bubble-form-offset-x);
            .helpgent-preview-open-ended-default{
                margin: auto 0 auto auto !important;
            }
        }
        .helpgent-preview-container{
            overflow: unset;
        }
        .helpgent-preview-container.helpgent-preview-media-right .helpgent-chatForm-back-btn--open-ended + .helpgent-media-preview-wrapper + .helpgent-element-element-wrapper,
        .helpgent-preview-container.helpgent-preview-media-right .helpgent-chatForm-back-btn--open-ended + .helpgent-element-element-wrapper{
            padding-left: 40px;
            @media only screen and (max-width: 767px){
                padding-left: 0;
            }
        }
        .helpgent-preview-media-right{
            .helpgent-media-src__image .helpgent-media-src__overlay{
                border-radius: 0 20px 20px 0;
            }
            .helpgent-countdown{
                border-radius: 0;
            }
        }
        .helpgent-preview-open-ended-default{
            margin: unset;
            .helpgent-chatForm-back-btn--open-ended-none{
                display: none;
            }
        }
        .helpgent-media-src__image .helpgent-media-src__overlay{
            border-radius: 20px 0 0 20px;
        }
        .helpgent-preview-container.helpgent-preview-media-right .helpgent-chatForm-back-btn + .helpgent-media-preview-wrapper + .helpgent-element-element-wrapper:not(.helpgent-element-element-wrapper--open_ended) > div,
        .helpgent-preview-container.helpgent-preview-media-right .helpgent-chatForm-back-btn + .helpgent-element-element-wrapper:not(.helpgent-element-element-wrapper--open_ended) > div{
            padding-left: 40px;
            @media only screen and (max-width: 767px){
                padding-left: 65px;
            }
        }

        .helpgent-preview-open-ended-default .helpgent-media-preview-wrapper+.helpgent-element-element-wrapper--open_ended .helpgent-element-element--open-ended{
            padding-bottom: calc(var(--helpgent-bottom-extras-height)) !important;
        }
        .helpgent-element-element.helpgent-element-textField{
            padding-bottom: calc(var(--helpgent-bottom-extras-height));
        }

        @media only screen and (max-width: 768px){
            z-index: 9999;
            form{
                .helpgent-element-element{
                    padding-left: 30px;
                    padding-right: 30px;
                }
            }

            .helpgent-screen-header {
                .helpgent-btn-back{
                    margin-left: 0;
                }
            }
            .helpgent-preview-container:not(.helpgent-preview-open-ended-default) .helpgent-chatForm-back-btn--open-ended + .helpgent-media-preview-wrapper + .helpgent-element-element-wrapper > div,
            .helpgent-preview-container:not(.helpgent-preview-open-ended-default) .helpgent-chatForm-back-btn--open-ended + .helpgent-element-element-wrapper > div{
                padding: 0 25px 0 65px;
            }
            .helpgent-preview-container:not(.helpgent-preview-open-ended-default) .helpgent-chatForm-back-btn + .helpgent-media-preview-wrapper + .helpgent-element-element-wrapper > div,
            .helpgent-preview-container:not(.helpgent-preview-open-ended-default) .helpgent-chatForm-back-btn + .helpgent-element-element-wrapper > div{
                padding: 0 25px 0 65px;
            }
            .helpgent-element-element-wrapper{
                > div.helpgent-record-screen{
                    padding: 30px 25px 85px !important;
                }
            }
            .helpgent-preview-open-ended-default{
                .helpgent-element-element-wrapper > div{
                    padding: 0 20px;
                }
                .helpgent-media-preview-wrapper + .helpgent-element-element-wrapper--open_ended{
                    .helpgent-element-element--open-ended{
                        padding-top: 20px !important;
                    }
                }
                .helpgent-chatForm-back-btn + .helpgent-media-preview-wrapper + .helpgent-element-element-wrapper--open_ended{
                    .helpgent-element-element--open-ended{
                        padding-top: 65px !important;
                    }
                }
                .helpgent-element-element-wrapper {
                    .helpgent-record-screen,
                    .helpgent-record-audio,
                    .helpgent-recorded-preview{
                        padding: 30px 25px calc(var(--helpgent-bottom-extras-height) + 45px) !important
                    }
                }
                .helpgent-video-recorder{
                    &:after{
                        border-radius: 20px 20px 0 0;
                    }
                    .helpgent-btn-back{
                        left: 20px;
                    }
                }
            }
            .helpgent-element-element-wrapper .helpgent-element-element{
                padding-top: 30px !important;
            }

            .helpgent-element-element.helpgent-element-element--open-ended .helpgent-element-element__action{
                @media only screen and (max-width: 768px){
                    padding-top: 30px !important;
                }
            }
            .helpgent-preview-media-overlay .helpgent-element-element-wrapper .helpgent-recorded-preview{
                padding-bottom: 85px !important;
            }
            .helpgent-element-element-wrapper .helpgent-media-preview,
            .helpgent-element-element-wrapper .helpgent-recorded-preview {
                height: unset;
                padding: 25px 25px 30px 65px;
            }
            .helpgent-element-element-wrapper .helpgent-recorded-preview{
                padding: 25px 25px 60px !important;
            }
            .helpgent-element-element.helpgent-element-textField{
                padding: 50px 0 calc(var(--helpgent-bottom-extras-height) + 25px) !important;
            }
            .helpgent-element-element-wrapper--welcome,
            .helpgent-element-element-wrapper--end{
                > div{
                    padding-left: 0;
                }
                .helpgent-element-element__text,
                .helpgent-element-element__action{
                    padding: 0 40px !important;
                }
            }
            .helpgent-element-element-wrapper--end{
                > div{
                    padding-left: 25px;
                }
            }
            .helpgent-element-element__text,
            .helpgent-element-element__action{
                padding: 0 !important;
            }
        }
        @media only screen and (max-width: 575px){
            .helpgent-preview-container:not(.helpgent-preview-open-ended-default) .helpgent-chatForm-back-btn--open-ended + .helpgent-media-preview-wrapper + .helpgent-element-element-wrapper > div,
            .helpgent-preview-container:not(.helpgent-preview-open-ended-default) .helpgent-chatForm-back-btn--open-ended + .helpgent-element-element-wrapper > div{
                padding: 0 25px 0 65px;
            }
            .helpgent-preview-container:not(.helpgent-preview-open-ended-default) .helpgent-chatForm-back-btn + .helpgent-media-preview-wrapper + .helpgent-element-element-wrapper:not(.helpgent-element-element-wrapper--open_ended) > div,
            .helpgent-preview-container:not(.helpgent-preview-open-ended-default) .helpgent-chatForm-back-btn + .helpgent-element-element-wrapper:not(.helpgent-element-element-wrapper--open_ended) > div{
                padding: 0 25px;
            }
            .helpgent-element-element-wrapper{
                > div.helpgent-record-screen{
                    padding: 30px 25px 85px !important;
                }
            }
            .helpgent-preview-container:not(.helpgent-preview-open-ended-default) .helpgent-chatForm-back-btn--open-ended + .helpgent-media-preview-wrapper + .helpgent-element-element-wrapper > div.helpgent-record-screen,
            .helpgent-preview-container:not(.helpgent-preview-open-ended-default) .helpgent-chatForm-back-btn--open-ended + .helpgent-element-element-wrapper > div.helpgent-record-screen{
                padding: 30px 25px 30px 65px !important;
            }
            .helpgent-preview-open-ended-default{
                .helpgent-element-element-wrapper > div{
                    padding: 0 20px 50px !important;
                }
                .helpgent-element-element-wrapper {
                    .helpgent-record-screen,
                    .helpgent-record-audio,
                    .helpgent-recorded-preview{
                        padding: 30px 25px calc(var(--helpgent-bottom-extras-height) + 45px) !important
                    }
                }
                .helpgent-video-recorder{
                    &:after{
                        border-radius: 20px 20px 0 0;
                    }
                    .helpgent-btn-back{
                        left: 20px;
                    }
                }
            }
            .helpgent-element-element-wrapper.helpgent-element-element-wrapper--welcome .helpgent-element-element{
                padding: 0 !important;
                .helpgent-element-element__text,
                .helpgent-element-element__action{
                    padding: 0 25px !important;
                }
            }
            .helpgent-preview-media-right .helpgent-element-element-wrapper{
                padding-left: 0;
            }
        }
        .helpgent-promoter-score__list--sm .helpgent-promoter-score__single{
            width: 26px;
            height: 26px;
            font-size: 12px;
            @media screen and (min-width: 1199px) and (max-width: 1367px){
                width: 27px;
                height: 27px;
                font-size: 13px;
            }
            @media screen and (min-width: 991px) and (max-width: 1199px){
                width: 25px;
                height: 25px;
                font-size: 12px;
            }
            @media screen and (min-width: 767px) and (max-width: 991px){
                width: 21px;
                height: 21px;
                font-size: 11px;
            }
        }
    }
`,o=i.Ay.div`
    .helpgent-chat-bubble{
        position: fixed !important;
    }
`},30912:(e,t,n)=>{n.d(t,{EV:()=>g,F4:()=>l,Ih:()=>x,NO:()=>b,Pk:()=>y,Vz:()=>a,Y8:()=>r,a8:()=>u,dn:()=>s,eq:()=>v,hH:()=>p,lm:()=>f,mR:()=>c,px:()=>h,rS:()=>o,rp:()=>_,vB:()=>w,xk:()=>d,yA:()=>m});var i=n(38267);const l=i.Ay.div`
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
`,o=(i.Ay.div`

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
`,d=i.Ay.div`
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
`,s=i.Ay.div`
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
`,h=i.Ay.div`
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
`,m=i.Ay.div`
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
`,x=i.Ay.div`
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
`,u=i.Ay.div`
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
`,f=i.Ay.div`
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
`,b=i.Ay.div`

`,w=i.Ay.div`

`,v=i.Ay.div`
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
`)},64197:(e,t,n)=>{n.d(t,{A:()=>i});const i=new(n(5054).E)},24770:(e,t,n)=>{e.exports=n.p+"images/chat-bubble-placeholder.fe07ad8d.gif"}}]);