// ==UserScript==
// @name            Huawei GA Assistant
// @namespace       ga-website-assistant-for-huawei.user.js
// @version         1.0
// @description     NT!
// @author          Michael Gao
// @include         https://mktcloud.c.huawei.com/content/huawei-cbg-site/*
// @grant           none
// ==/UserScript==
;
window.onload = function() {
    console.log('GA monkey Start!');
    // console.log(1); // console.log(dataLayer); // console.log(window.dataLayer); // console.log(2);

    function RdmRgNumb(start, end) {
        return Math.random() * (end - start) + start;
    }

    function RandomLightColor() {
        return 'rgb(' + RdmRgNumb(147, 254) + ',' + RdmRgNumb(147, 254) + ',' + RdmRgNumb(147, 254) + ')';
    }

    function RandomDarkColor() {
        return 'rgb(' + RdmRgNumb(0, 107) + ',' + RdmRgNumb(0, 107) + ',' + RdmRgNumb(0, 107) + ')';
    }

    function HvRdmClr(e) {
        e.onmouseover = () => {
            e.style.backgroundColor = RandomDarkColor();
            e.style.color = RandomLightColor();
        };
        e.onmouseout = () => {
            e.style.backgroundColor = RandomDarkColor();
            e.style.color = RandomLightColor();
        };
    }

    function CrtEl(s, t = '', c = 'aia_common') {
        let e = document.createElement(s);
        if (t !== '') {
            e.appendChild(document.createTextNode(t));
        }
        e.className = c;
        return e;
    }
    const BODY = document.body;
    let El_Ctn_Otr = CrtEl('div', '', 'container_outter');
    El_Ctn_Otr.style = 'display: flex; position: fixed; top: 6vw; right: 0; background: #000; opacity: 0.8; min-width: 100px; min-height: 30px; flex-direction: row-reverse; padding: 0.3vw; z-index: 9999;';
    BODY.appendChild(El_Ctn_Otr);
    console.log(El_Ctn_Otr);
    let El_GA_Btn = CrtEl('div', 'Toggle GA', 'aia_ga_button');
    El_GA_Btn.style = 'color: #fff; border: 1px solid #fff; border-radius: 0.3vw; padding: 0.1vw 0.2vw; cursor: pointer; margin: 0.6vw 0px;';
    El_GA_Btn.setAttribute('onselectstart', 'return false');
    HvRdmClr(El_GA_Btn);
    let El_Clean_GA_Btn = CrtEl('div', 'Clean GA', 'aia_ga_clean_button');
    El_Clean_GA_Btn.style = 'color: #fff; border: 1px solid #fff; border-radius: 0.3vw; padding: 0.1vw 0.2vw; cursor: pointer; margin: 0.6vw 0px;';
    El_Clean_GA_Btn.setAttribute('onselectstart', 'return false');
    HvRdmClr(El_Clean_GA_Btn);
    let El_Btns = CrtEl('div', '', 'aia_ga_buttons');
    El_Btns.appendChild(El_GA_Btn);
    El_Btns.appendChild(El_Clean_GA_Btn);
    El_Ctn_Otr.appendChild(El_Btns);
    let GA_Otr = CrtEl('div', '', 'ga_container');
    GA_Otr.style = 'color: #fff; margin-right: 1vw; display: none; overflow: scroll; max-height: 70vh;';
    El_Ctn_Otr.appendChild(GA_Otr);
    El_GA_Btn.onclick = function() {
        GA_Otr.style.display === 'none' ?
            GA_Otr.style.display = 'block' :
            GA_Otr.style.display = 'none';
    }
    El_Clean_GA_Btn.onclick = function() {
        GA_Otr.innerHTML = "Once Cleaned!";
    }
    setTimeout(function() {
        if (window.dataLayer === undefined) {
            function createScript() {
                let s = document.createElement('script');
                s.type = 'text/javascript';
                s.innerText = 'const arrayProto = Array.prototype;' +
                    'const arrayMethods = Object.create(arrayProto);' +
                    'const newArrProto = [];' +
                    'const dataLayerKeys = ["event", "pageCategory", "nextBannerName", "previousBannerName", "buttonName", "bannerPosition", "swipeDirection", "pageName", "linkName", "linkPosition", "buttonPosition", "pop_upName", "bannerName", "videoStep", "videoName", "productMktName", "productCategory", "productPosition", "ecPlatform", "countryCode"];' +
                    'const eventKeys = ["swiperSwitchBtnClicks","mobTouchSwitch","textLinkClicks","popupBtnClicks","submitBtnClicks","productPopBtn","bannerBtnClicks","productBannerBtnClicks","bannerClicks","video","nonProductPopBtn","buyBtnClicks","retailerClicks","campaignListItemClicks","positionBtnClicks"];' +
                    'let GA_Otr = document.querySelector(".ga_container");' +
                    '["push"].forEach(method => { let or = arrayMethods[method]; newArrProto[method] = function() { ' +
                    'incomingDataLayer = arguments[0];' +
                    'oldDataLayer = this;' +
                    'let temp_p = document.createElement("p");' +
                    'if (incomingDataLayer.constructor == Object) {' +
                    'if (incomingDataLayer.event.indexOf("gtm.") < 0){' +
                    'for (k in incomingDataLayer) {' +
                    'if (dataLayerKeys.indexOf(k) >= 0) {' +
                    'let k_span = document.createElement("span");' +
                    'temp_p.appendChild(document.createTextNode(k + ": "));' +
                    'k_span.appendChild(document.createTextNode(incomingDataLayer[k]));' +
                    'k_span.style.color = "#44f";' +
                    'temp_p.appendChild(k_span);' +
                    'temp_p.appendChild(document.createTextNode("; "));' +
                    '}}' +
                    'GA_Otr.appendChild(temp_p);' +
                    '}}' +
                    'return or.apply(this, arguments);}});' +
                    /// dataLayer itself has a push function, so we need to delete dataLayer.push inorder to use ours
                    'delete dataLayer.push;' +
                    'dataLayer.__proto__ = newArrProto;';
                return s;
            }
            let my_script = createScript();
            BODY.insertBefore(my_script, BODY.firstChild);
        }
        console.log('setTimeout end');
    }, 1000);
};