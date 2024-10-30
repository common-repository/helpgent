"use strict";(globalThis.webpackChunkhelpgent=globalThis.webpackChunkhelpgent||[]).push([[95],{14476:(e,n,r)=>{r.r(n),r.d(n,{default:()=>g});var t=r(51609),a=r(86087),l=r(38267);l.Ay.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    border-radius: 10px;
    padding: 10px 15px;
    align-items: center;
    color: var(--helpgent-color-dark);
    background-color: #f2f2f2;

    &.helpgent-banner-info,
    &.helpgent-banner-primary,
    &.helpgent-banner-warning,
    &.helpgent-banner-danger {
        color: #fff;
        .helpgent-banner-title {
            color: #fff;
        }

        .helpgent-banner-description {
            color: #fff;
        }
    }

    &.helpgent-banner-info {
        background-color: var(--helpgent-color-info);
    }

    &.helpgent-banner-primary {
        background-color: var(--helpgent-color-primary);
    }

    &.helpgent-banner-warning {
        background-color: var(--helpgent-color-warning);
    }

    &.helpgent-banner-danger {
        background-color: var(--helpgent-color-danger);
    }

    .helpgent-banner-content {
        flex-grow: 1;
    }

    .helpgent-banner-title {
        color: var(--helpgent-color-dark);
    }

    .helpgent-banner-description {
        color: var(--helpgent-color-dark);
    }

    .helpgent-banner-action {
        display: block;
    }
`;const o=l.Ay.div`
    h3{
        margin: 0 0 15px;
    }
    p{
        margin: 0 0 20px;
    }
    .helpgent-multiline-code{
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 0 2px rgba(0,0,0,0.2) inset;
    }
    .helpgent-banner-action{
        margin: 20px 0 0 !important;
        a{
            margin: 0 !important;
        }
    }
`;var p=r(27723);function g(e){const{bannerType:n,label:r,description:l,moreDescription:g,showMoreButtonLabel:c,showLessButtonLabel:i,callToAction:h}=e,[b,s]=(0,a.useState)(!1),d=c||(0,p.__)("Show More","helpgent"),m=i||(0,p.__)("Show Less","helpgent");return(0,t.createElement)(o,null,(0,t.createElement)("div",{className:"helpgent-banner-content"},(0,t.createElement)("h3",{className:"helpgent-banner-title"},r),(0,t.createElement)("div",{className:"helpgent-banner-description",dangerouslySetInnerHTML:{__html:l}}),b&&(0,t.createElement)("div",{className:"helpgent-banner-description",dangerouslySetInnerHTML:{__html:g}})),(h||g)&&(0,t.createElement)("div",{className:"helpgent-banner-action"},g&&(0,t.createElement)("button",{type:"button",style:{margin:"15px 0"},className:"helpgent-btn helpgent-btn-light-gray",onClick:()=>s(!b)},b?m:d),h&&(0,t.createElement)("a",{className:"helpgent-btn helpgent-btn-gray",href:h.url,target:"__blank"},h.label)))}}}]);