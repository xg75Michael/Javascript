console.info('thales common ready');
var thStatus = {};
var thCrtTop;
var thScroller = {
    ease: 0.2,
    endY: 0,
    y: 0,
    resizeRequest: 1,
    scrollRequest: 0,
    requestId: null
};
var thObFuncList = [];
var thResizeTO = null;
var thRAF = window.requestAnimationFrame || setTimeout;
var forEach = Array.prototype.forEach;
var thContainer = document.querySelector('.thales-container');
var thImageList = [];
var thCanvasEl = document.getElementById('th-canvas-1');
var thCanvasArg = {};
var thImgIndex = 0;
// var thCanvasTxts = Array.prototype.slice.call(document.querySelectorAll('.canvas-txts-container'));


// 只需要执行一次的设备状态
function thInitStatus() {
    thStatus.width = window.innerWidth;
    thStatus.height = window.innerHeight;
    thStatus.isPortrait = window.innerWidth <= 640 || (window.innerWidth / window.innerHeight < 1 && window.innerWidth <= 1200);
    thStatus.isIE = !!window.ActiveXObject || "ActiveXObject" in window;
    thStatus.isOldEdge = navigator.userAgent.indexOf("Edge/") > -1;
    thStatus.isNewEdge = navigator.userAgent.indexOf("Edg/") > -1;
    thStatus.isWebp = document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;
    thStatus.isIOAPI = !!("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype);
    thStatus.isResizing = false;
    thStatus.getOffsetTop = function (el) {
        if (el.className.indexOf('thales-container') > -1) {
            // 去掉二级导航的高度
            return thStatus.isPortrait ? -96 : -76;
        }
        return el.offsetTop + thStatus.getOffsetTop(el.parentNode);
    };
    thStatus.prefixNumb = function (num, n) {
        return (Array(n).join(0) + num).slice(-n);
    };
};
// 会变化的值，需要重新计算，变化完了再重新计算
function thUpdateInfo() {
    thStatus.width = window.innerWidth;
    thStatus.height = window.innerHeight;
    thStatus.isPortrait = window.innerWidth <= 640 || (window.innerWidth / window.innerHeight < 1 && window.innerWidth <= 1200);
}
// 如果滚动页面 记录滚动数据并触发 thRAF
function thUpdateScroller() {
    // console.info(thScroller);
    // 在滚动的时候重置 resizeRequest 变量
    var resetResize = 0 < thScroller.resizeRequest;
    resetResize ? thScroller.resizeRequest = 0 : null;
    thCrtTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    thScroller.endY = thCrtTop;
    thScroller.y += (thCrtTop - thScroller.y) * thScroller.ease;
    // 如果有 resize 的事件 则马上重置 scrollRequest 变量
    if (Math.abs(thCrtTop - thScroller.y) < 0.1 || resetResize) {
        thScroller.y = thCrtTop;
        thScroller.scrollRequest = 0;
    }
    for (let i = 0; i < thObFuncList.length; i++) {
        window[thObFuncList[i].funcName](thObFuncList[i].target);
    }
    thScroller.requestId = 0 < thScroller.scrollRequest ? thRAF(thUpdateScroller) : null;
}

function thOnScrolling() {
    thScroller.scrollRequest++;
    if (thStatus.isResizing) {
        console.info('change thScroller.y value');
        thScroller.y -= 100;
        thStatus.isResizing = false;
    }
    if (!thScroller.requestId) {
        thScroller.requestId = thRAF(thUpdateScroller);
    }
}

// function thTopCover(target) {
//     console.info('thTopCover');
//     var startPos = thStatus.getOffsetTop(thContainer.querySelector('.' + target.getAttribute('data-start')));
//     var distance = Number(target.getAttribute('data-distance').slice(0, -2)) / 100;
//     var dur = Number(target.getAttribute('data-duration')) / 100;
//     if (thScroller.y > startPos && thScroller.y < startPos + thStatus.height * dur) {
//         target.style.top = (thScroller.y - startPos) * distance + 'px';
//     }
//     if (thScroller.y <= startPos) {
//         target.style.top = '0px';
//     }
//     if (thScroller.y >= startPos + thStatus.height * dur) {
//         target.style.top = thStatus.height * dur * distance + 'px';
//     }
// }
// 向下移动一定距离
function paraDownFast(target) {
    // console.info('fullTitleSec');
    var startPos = thStatus.getOffsetTop(thContainer.querySelector('.' + target.getAttribute('data-start')));
    var distance;
    if (target.getAttribute('data-distance').indexOf('vh') > 0) {
        distance = Number(target.getAttribute('data-distance').slice(0, -2)) / 100;
    } else {
        distance = Number(target.getAttribute('data-distance').slice(0, -2)) / 100 / thStatus.height * thStatus.width;
    }
    var dur = Number(target.getAttribute('data-duration')) / 100;
    if (thScroller.y > startPos && thScroller.y < startPos + thStatus.height * dur) {
        target.style.transform = 'translateY(' + (thScroller.y - startPos) * distance + 'px)';
    }
    if (thScroller.y <= startPos) {
        target.style.transform = 'translateY(0px)';
    }
    if (thScroller.y >= startPos + thStatus.height * dur) {
        target.style.transform = 'translateY(' + thStatus.height * dur * distance + 'px)';
    }
}
// 向上移动一定距离
function paraPopUpFast(target) {
    var startPos = thStatus.getOffsetTop(thContainer.querySelector('.' + target.getAttribute('data-start')));
    var distance;
    if (target.getAttribute('data-distance').indexOf('vh') > 0) {
        distance = Number(target.getAttribute('data-distance').slice(0, -2)) / 100;
    } else {
        distance = Number(target.getAttribute('data-distance').slice(0, -2)) / 100 / thStatus.height * thStatus.width;
    }
    var dur = Number(target.getAttribute('data-duration')) / 100;

    if (target.getAttribute('data-fromStart') == 'true') {
        if (target.getAttribute('data-isLate') == 'true') {
            if (thScroller.y > startPos && thScroller.y < startPos + thStatus.height * dur) {
                target.style.transform = 'translateY(' + (startPos - thScroller.y) / (thStatus.height * dur) * distance * thStatus.height + 'px)';
            }
            if (thScroller.y <= startPos) {
                target.style.transform = 'translateY(0px)';
            }
            if (thScroller.y > startPos + thStatus.height * dur) {
                target.style.transform = 'translateY(' + -thStatus.height * distance + 'px)';
            }
        } else {
            if (thScroller.y > startPos - thStatus.height * dur && thScroller.y < startPos) {
                target.style.transform = 'translateY(' + Math.abs(thScroller.y - startPos) * distance + 'px)';
            }
            if (thScroller.y <= startPos - thStatus.height * dur) {
                target.style.transform = 'translateY(' + thStatus.height * dur * distance + 'px)';
            }
            if (thScroller.y > startPos) {
                target.style.transform = 'translateY(0px)';
            }
        }
    } else {
        if (target.getAttribute('data-isLate') == 'true') {
            if (thScroller.y > startPos && thScroller.y < startPos + thStatus.height * dur) {
                target.style.transform = 'translateY(' + (thStatus.height * dur - thScroller.y + startPos) / (thStatus.height * dur) * distance * thStatus.height + 'px)';
            }
            if (thScroller.y <= startPos) {
                target.style.transform = 'translateY(' + distance * thStatus.height + 'px)';
            }
            if (thScroller.y > startPos + thStatus.height * dur) {
                target.style.transform = 'translateY(0px)';
            }
        } else {
            if (thScroller.y > startPos - thStatus.height * dur && thScroller.y < startPos) {
                target.style.transform = 'translateY(' + Math.abs(thScroller.y - startPos) * distance + 'px)';
            }
            if (thScroller.y <= startPos - thStatus.height * dur) {
                target.style.transform = 'translateY(' + thStatus.height * dur * distance + 'px)';
            }
            if (thScroller.y > startPos) {
                target.style.transform = 'translateY(0px)';
            }
        }
    }
}
// X 轴移动一定距离
function paraStickyXFast(target) {
    var startPos = thStatus.getOffsetTop(thContainer.querySelector('.' + target.getAttribute('data-start')));
    var distance = Number(target.getAttribute('data-distance').slice(0, -2));
    var dur = Number(target.getAttribute('data-duration')) / 100;
    if (target.getAttribute('data-fromStart') == 'true') {
        if (thScroller.y > startPos && thScroller.y < startPos + thStatus.height * dur) {
            // console.info(Math.abs(startPos + thStatus.height * dur - thScroller.y) / thStatus.height);
            target.style.transform = 'translateX(' + (thScroller.y - startPos) / (thStatus.height * dur) * distance + 'vw)';
        }
        if (thScroller.y <= startPos) {
            target.style.transform = 'translateX(0px)';
        }
        if (thScroller.y >= startPos + thStatus.height * dur) {
            target.style.transform = 'translateX(' + distance + 'vw)';
        }
    } else {
        if (thScroller.y > startPos && thScroller.y < startPos + thStatus.height * dur) {
            // console.info(Math.abs(startPos + thStatus.height * dur - thScroller.y) / thStatus.height);
            target.style.transform = 'translateX(' + (startPos + thStatus.height * dur - thScroller.y) / (thStatus.height * dur) * distance + 'vw)';
        }
        if (thScroller.y <= startPos) {
            target.style.transform = 'translateX(' + distance + 'vw)';
        }
        if (thScroller.y >= startPos + thStatus.height * dur) {
            target.style.transform = 'translateX(0px)';
        }
    }
}
// 改变 opacity
function thFadein(target) {
    var startPos = thStatus.getOffsetTop(thContainer.querySelector('.' + target.getAttribute('data-start')));
    var dur = Number(target.getAttribute('data-duration')) / 100;
    if (target.getAttribute('data-isLate') == 'true') {
        // console.info('late');
        if (thScroller.y > startPos && thScroller.y < startPos + thStatus.height * dur) {
            target.style.opacity = Math.abs(thScroller.y - startPos) / (thStatus.height * dur);
        }
        if (thScroller.y <= startPos) {
            target.style.opacity = 0;
        }
        if (thScroller.y > startPos + thStatus.height * dur) {
            target.style.opacity = 1;
        }
    } else {
        if (thScroller.y > startPos - thStatus.height * dur && thScroller.y < startPos) {
            target.style.opacity = Math.abs(thScroller.y - startPos + thStatus.height * dur) / (thStatus.height * dur);
        }
        if (thScroller.y <= startPos - thStatus.height * dur) {
            target.style.opacity = 0;
        }
        if (thScroller.y > startPos) {
            target.style.opacity = 1;
        }
    }
}

function thFadeout(target) {
    var startPos = thStatus.getOffsetTop(thContainer.querySelector('.' + target.getAttribute('data-start')));
    var dur = Number(target.getAttribute('data-duration')) / 100;
    if (target.getAttribute('data-isLate') == 'true') {
        // console.info('late');
        if (thScroller.y > startPos && thScroller.y < startPos + thStatus.height * dur) {
            target.style.opacity = 1 - Math.abs(thScroller.y - startPos) / (thStatus.height * dur);
        }
        if (thScroller.y <= startPos) {
            target.style.opacity = 1;
        }
        if (thScroller.y > startPos + thStatus.height * dur) {
            target.style.opacity = 0;
        }
    } else {
        if (thScroller.y > startPos - thStatus.height * dur && thScroller.y < startPos) {
            target.style.opacity = 1 - Math.abs(thScroller.y - startPos + thStatus.height * dur) / (thStatus.height * dur);
        }
        if (thScroller.y <= startPos - thStatus.height * dur) {
            target.style.opacity = 1;
        }
        if (thScroller.y > startPos) {
            target.style.opacity = 0;
        }
    }
}
// scale
function thScaleUp(target) {
    if (!target) return;
    var startPos = thStatus.getOffsetTop(thContainer.querySelector('.' + target.getAttribute('data-start')));
    var dur = Number(target.getAttribute('data-duration')) / 100;
    var scale = Number(target.getAttribute('data-scale'));
    if (target.getAttribute('data-isEarly') == 'true') {
        if (thScroller.y > startPos - thStatus.height * dur && thScroller.y < startPos) {
            target.style.transform = 'scale(' + ((thScroller.y - startPos + thStatus.height * dur) / (thStatus.height * dur) * (1 - scale) + scale).toFixed(4) + ')';
        }
        if (thScroller.y <= startPos - thStatus.height * dur) {
            target.style.transform = 'scale(' + scale + ')';
        }
        if (thScroller.y > startPos) {
            target.style.transform = 'scale(1)';
        }
    } else {
        if (thScroller.y > startPos && thScroller.y < startPos + thStatus.height * dur) {
            target.style.transform = 'scale(' + ((thScroller.y - startPos) / (thStatus.height * dur) * (1 - scale) + scale).toFixed(4) + ')';
        }
        if (thScroller.y <= startPos) {
            target.style.transform = 'scale(' + scale + ')';
        }
        if (thScroller.y > startPos + thStatus.height * dur) {
            target.style.transform = 'scale(1)';
        }
    }
}
// preload all images
function thImageInit() {
    console.info('image init');
    // set canvas size
    var canWidth = window.getComputedStyle(thCanvasEl.parentNode).getPropertyValue('width');
    var canHeight = window.getComputedStyle(thCanvasEl.parentNode).getPropertyValue('height');
    thStatus.canWidth = Number(canWidth.slice(0, -2));
    thStatus.canHeight = Number(canHeight.slice(0, -2));
    thCanvasEl.setAttribute('width', canWidth);
    thCanvasEl.setAttribute('height', canHeight);
    thCanvasEl.parentNode.parentNode.parentNode.style.height = Number(thCanvasEl.getAttribute('data-duration')) + '50vh';
    // set canvas form
    var imgForm = thStatus.isWebp ? '.webp' : '.jpg';
    var imgPath = thCanvasEl.getAttribute('data-path');
    var imgNumb = Number(thCanvasEl.getAttribute('data-numb'));
    // set thCanvasArg
    thCanvasArg.numb = imgNumb - 1;
    thCanvasArg.start = thStatus.getOffsetTop(thContainer.querySelector('.thales-section10')) + Number(window.getComputedStyle(thContainer.querySelector('.canvas-txt-container')).getPropertyValue('height').slice(0, -2));
    thCanvasArg.dur = Number(thCanvasEl.getAttribute('data-duration') - 0.5) * thStatus.height;
    thCanvasArg.eachDur = thCanvasArg.dur / 4;
    thCanvasArg.stop1 = 81;
    thCanvasArg.target1 = thContainer.querySelector('.sec10-txts1-container');
    thCanvasArg.target2 = thContainer.querySelector('.sec10-img1-container');
    thCanvasArg.target3 = thContainer.querySelector('.sec10-txts2-container');
    thCanvasArg.target4 = thContainer.querySelector('.sec10-img2-container');
    thCanvasArg.ctx = thCanvasEl.getContext('2d');
    var ctx = thCanvasEl.getContext("2d");
    new Array(imgNumb).fill(0).map(function (d, i) {
        // console.info('new image');
        var tempImg = new Image();
        if (i === 0) {
            tempImg.onload = function () {
                // 这里如果提供的图片尺寸不一样就会成为问题， canvas 会画出小于整屏的图片
                thStatus.canImgWidth = this.width;
                thStatus.canImgHeight = this.height;
                // console.info(Math.abs(thStatus.canImgWidth - thStatus.canWidth) / 2);
                // console.info('实际截取的宽度： ' + thStatus.canImgHeight / thStatus.canHeight * thStatus.canWidth);
                // 根据宽高比判断是否把宽都铺满，如果 canvas 宽高比大，则将图片宽度铺满，截掉一点高度，否则高度铺满，图片左右各截掉一点宽度
                thStatus.isCanFullWidth = thStatus.canWidth / thStatus.canHeight > thStatus.canImgWidth / thStatus.canImgHeight;
                thStatus.isCanFullWidth ?
                    // ctx.drawImage(tempImg, 0, 0, thStatus.canImgWidth, thStatus.canImgWidth / thStatus.canWidth * thStatus.canHeight, 0, 0, thStatus.canWidth, thStatus.canHeight) :
                    ctx.drawImage(tempImg, 0, (thStatus.canImgHeight - thStatus.canHeight / thStatus.canWidth * thStatus.canImgWidth) / 2, thStatus.canImgWidth, thStatus.canHeight / thStatus.canWidth * thStatus.canImgWidth, 0, 0, thStatus.canWidth, thStatus.canHeight) :
                    ctx.drawImage(tempImg, (thStatus.canImgWidth - thStatus.canImgHeight / thStatus.canHeight * thStatus.canWidth) / 2, 0, thStatus.canImgHeight / thStatus.canHeight * thStatus.canWidth, thStatus.canImgHeight, 0, 0, thStatus.canWidth, thStatus.canHeight);
            }
        }
        tempImg.src = imgPath + thStatus.prefixNumb(i, 4) + imgForm;
        thImageList.push(tempImg);
    });
}
// canvas draw images function
function thFrameSeries(target) {
    thCanvasArg.ctx.clearRect(0, 0, thStatus.canWidth, thStatus.canHeight);
    // 没开始的时候可以一直画 0000
    if (thScroller.y <= thCanvasArg.start) {
        thImgIndex = 0;
        // thCanvasArg.target1.style.opacity = 0;
        // thCanvasArg.target2.style.opacity = 0;
        // thCanvasArg.target3.style.opacity = 0;
        // thCanvasArg.target4.style.opacity = 0;
        // console.info(000);
    }
    // step 1 照片从 0000 - 0078
    if (thScroller.y > thCanvasArg.start && thScroller.y < thCanvasArg.start + thCanvasArg.eachDur * 1) {
        thImgIndex = Math.floor((thScroller.y - thCanvasArg.start) / thCanvasArg.eachDur * thCanvasArg.stop1);
        // thCanvasArg.target1.style.opacity = 0;
        // thCanvasArg.target2.style.opacity = 0;
    }
    // step 2 照片保持在 0078 上图片和文字
    if (thScroller.y >= thCanvasArg.start + thCanvasArg.eachDur * 1 && thScroller.y < thCanvasArg.start + thCanvasArg.eachDur * 2) {
        thImgIndex = thCanvasArg.stop1;
        // console.info(222);
        // TODO animate1
        if (thScroller.y >= thCanvasArg.start + thCanvasArg.eachDur * 1) {
            // thCanvasArg.target1.style.opacity = 1;
            // thCanvasArg.target2.style.opacity = 1;
        }

    }
    // step 3 照片从 0079 - 0181
    if (thScroller.y >= thCanvasArg.start + thCanvasArg.eachDur * 2 && thScroller.y < thCanvasArg.start + thCanvasArg.eachDur * 3) {
        thImgIndex = thCanvasArg.stop1 + Math.floor((thScroller.y - thCanvasArg.start - thCanvasArg.eachDur * 2) / thCanvasArg.eachDur * (thCanvasArg.numb - thCanvasArg.stop1));
        // console.info(333);
        // thCanvasArg.target1.style.opacity = 0;
        // thCanvasArg.target2.style.opacity = 0;
        // thCanvasArg.target3.style.opacity = 0;
        // thCanvasArg.target4.style.opacity = 0;
    }
    // 结束之后要画 thCanvasArg.numb
    if (thScroller.y >= thCanvasArg.start + thCanvasArg.eachDur * 3) {
        thImgIndex = thCanvasArg.numb;
        // console.info(666);
    }
    // console.info(thImageList[thImgIndex]);
    thStatus.isCanFullWidth ?
        thCanvasArg.ctx.drawImage(thImageList[thImgIndex], 0, (thStatus.canImgHeight - thStatus.canHeight / thStatus.canWidth * thStatus.canImgWidth) / 2, thStatus.canImgWidth, thStatus.canHeight / thStatus.canWidth * thStatus.canImgWidth, 0, 0, thStatus.canWidth, thStatus.canHeight) :
        thCanvasArg.ctx.drawImage(thImageList[thImgIndex], (thStatus.canImgWidth - thStatus.canImgHeight / thStatus.canHeight * thStatus.canWidth) / 2, 0, thStatus.canImgHeight / thStatus.canHeight * thStatus.canWidth, thStatus.canImgHeight, 0, 0, thStatus.canWidth, thStatus.canHeight);
}

function thCreateTransOb() {
    var thCanOb = new IntersectionObserver(function (changes) {
        changes.forEach(function (d) {
            if (0 < d.intersectionRatio) {
                // 进入整屏之后把需要的方法 push 到 aiaFunctionList 数组里，以便在 updateScroller 中调用
                if (d.target.hasAttribute('data-function')) {
                    // console.info('push obj with function and ele');
                    var funcName = d.target.getAttribute('data-function');
                    var targetID = d.target.getAttribute('data-target');
                    var target = thContainer.querySelector('.' + targetID);
                    var tempObj = {
                        funcName: funcName,
                        targetID: targetID,
                        target: target,
                    };
                    if (!(funcName === 'thFrameSeries' && thStatus.isPortrait)) {
                        thCanvasArg.start = thStatus.getOffsetTop(thContainer.querySelector('.thales-section10')) + Number(window.getComputedStyle(thContainer.querySelector('.canvas-txt-container')).getPropertyValue('height').slice(0, -2));
                        thObFuncList.push(tempObj);
                    }
                    // console.info(thObFuncList);
                }
            } else {
                // console.info('take out obj function and ele');
                var rmTargetID = d.target.getAttribute('data-target');
                // console.info(rmTargetID)
                var tryIndex = thObFuncList.findIndex(function (o) {
                    return o.targetID == rmTargetID;
                });
                // console.info('find index: ');
                // console.info(tryIndex);
                // console.info(rmTargetID);
                if (tryIndex !== -1) {
                    thObFuncList.splice(tryIndex, 1);
                }
                // console.info(thObFuncList);
            }
        });
    }, {
        rootMargin: "600% 0% 500% 0%",
        threshold: [0, 1],
    });
    var thObedEles = document.querySelectorAll('.thales-observer');
    thObedEles.forEach(function (e) {
        thCanOb.observe(e);
    });
}

function se2ScrollTo() {
    // TODO click function
    // thContainer.querySelector('.section2-advantage ').addEventListener('click', function (e) {
    //     var thisT = e.target;
    //     var thisTop;
    //     console.info(thisT.nodeName.toLowerCase());
    //     if (thisT.nodeName.toLowerCase() === 'img') {
    //         thisTop = thStatus.getOffsetTop(thContainer.querySelector('.' + thisT.getAttribute('data-scrollTo')));
    //         console.info(thisTop);
    //         if (thStatus.isIE || thStatus.isOldEdge) {
    //             console.info('not it')
    //             window.scrollTo(0, thisTop);
    //         } else {
    //             window.scrollTo({
    //                 top: thisTop,
    //                 behavior: "smooth"
    //             });
    //         }
    //     }
    // });

    var advantage = thContainer.querySelector('.section2-advantage');
    for (var index = 0; index < thContainer.querySelectorAll('.sec2-adv').length; index++) {
        (function (i) {
            thContainer.querySelectorAll('.sec2-adv')[i].addEventListener('click', function () {
                var scrollTo = advantage.querySelector('.sec2-adv' + (i + 1)).querySelector('img').getAttribute('data-scrollTo');
                if (scrollTo === 'thales-section16') {
                    scrollTo = 'thales-section16-container';
                }
                if (scrollTo === 'thales-section8') {
                    scrollTo = 'thales-section8-container';
                }
                thisTop = thStatus.getOffsetTop(thContainer.querySelector('.' + scrollTo));
                console.info(thisTop);
                if (thStatus.isIE || thStatus.isOldEdge) {
                    console.info('not it')
                    window.scrollTo(0, thisTop);
                } else {
                    window.scrollTo({
                        top: thisTop,
                        behavior: "smooth",
                    });
                }
            });
        })(index);
    }
}

function sec16DragMask() {
    var isDrag = false;
    var dragEle = document.querySelector('#s16-dragable'),
        targetELe = document.querySelector('.sec16-img-container'),
        imgMask = document.querySelector('.sec16-img-mask'),
        targetWidth = targetELe.getBoundingClientRect().width,
        targetLeft = targetELe.getBoundingClientRect().x || targetELe.getBoundingClientRect().left;
    ['mousedown', 'touchstart'].forEach(function (e, i) {
        dragEle.addEventListener(e, function (ev) {
            ev.preventDefault();
            isDrag = true;
            // console.info(isDrag);
        });
    });
    ['mousemove', 'touchmove'].forEach(function (e, i) {
        targetELe.addEventListener(e, function (ev) {
            var evClientX = ev.clientX || ev.changedTouches[0].clientX;
            var range = evClientX - targetLeft;
            if (isDrag === true && (range > 0 && range < targetWidth)) {
                // console.info(range >= 0 && range <= targetWidth);
                imgMask.style.transform = 'translateX(' + ((evClientX - targetLeft) / targetWidth - 1) * 100 + '%)';
            }
        });
    });
    ['mouseup', 'touchend'].forEach(function (e, i) {
        document.documentElement.addEventListener(e, function (ev) {
            isDrag = false;
            // console.info(isDrag);
        });
    });
}

function adaptMobDur() {
    // s14
    thContainer.querySelectorAll('.thales-section14 .sec14-imgs-container img').forEach(function (i) {
        i.setAttribute('data-duration', '50');
    });
    // s18
    thContainer.querySelector('.thales-para-45').setAttribute('data-distance', '8vh');
    thContainer.querySelector('.thales-para-46').setAttribute('data-distance', '5vh');
    // s24
    thContainer.querySelector('.thales-para-53').setAttribute('data-distance', '15vh');
    thContainer.querySelector('.thales-para-54').setAttribute('data-distance', '25vh');
}

function s27MobSwiper() {
    let s27Imgs = thContainer.querySelectorAll('.thales-section27-container .thales-fullbg-img'),
        s27Target = thContainer.querySelector('.thales-section27-container'),
        s27LftBtn = thContainer.querySelector('.s27-fallback-lft'),
        s27RtBtn = thContainer.querySelector('.s27-fallback-rt'),
        maxIndex = s27Imgs.length - 1,
        touchStart = 0,
        touchEnd = 0,
        tempIndex = 0;
    s27Imgs.forEach(function (i) {
        i.addEventListener('touchstart', function (e) {
            touchStart = e.targetTouches[0].clientX;
        });
        i.addEventListener('touchmove', function (e) {
            // e.preventDefault();
        });
        i.addEventListener('touchend', function (e) {
            touchEnd = e.changedTouches[0].clientX;
            touchStart > touchEnd + 50 ? tempIndex++ : null;
            touchStart < touchEnd - 50 ? tempIndex-- : null;
            tempIndex < 0 ? tempIndex = 0 : null;
            tempIndex > maxIndex ? tempIndex = maxIndex : null;
            s27Target.setAttribute('data-index', tempIndex);
        });
    })
    s27LftBtn.addEventListener('touchstart', function () {
        tempIndex--;
        tempIndex < 0 ? tempIndex = maxIndex : null;
        s27Target.setAttribute('data-index', tempIndex);
    });
    s27RtBtn.addEventListener('touchstart', function () {
        tempIndex++;
        tempIndex > maxIndex ? tempIndex = 0 : null;
        s27Target.setAttribute('data-index', tempIndex);
    });
}

function ieAutoVideo() {
    var ieVideos = thContainer.querySelectorAll('video');
    for (var i = 0; i < ieVideos.length; i++) {
        ieVideos[i].play();
    }
}

function thDisclaimer() {
    var thDisContainer = thContainer.querySelector('.thales-disclaimer'),
        aClicks = thContainer.querySelectorAll('sup>a'),
        liDisclaimers = thDisContainer.querySelectorAll('li');
    Array.prototype.map.call(aClicks, function (e, i) {
        e.addEventListener('click', function () {
            Array.prototype.map.call(liDisclaimers, function (e, i) {
                e.classList.remove('th-curt-dis')
            });
            thDisContainer.querySelector(e.getAttribute('href')).classList.add('th-curt-dis');
        });
    })
}

function thWechatShare() {
    var isWeixin = window.navigator.userAgent.toLowerCase().indexOf("micromessenger") != -1;
    if (isWeixin) {
        $.getScript("//res.wx.qq.com/open/js/jweixin-1.2.0.js", function (response, status) {
            if (status == 'success') {
                $.getScript("//consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/store/js/cbgwechatv1.js", function (r, s) {
                    if (s == 'success') {
                        var wxShare = setInterval(function () {
                            if (typeof (WechatShare) != "undefined") {
                                WechatShare({
                                    url: window.location.href,
                                    img: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/visions/v-2021/img/intro/th-wechat.jpg',
                                    title: $(document).attr('title'),
                                    descript: document.querySelector('meta[name=\"description\"]').getAttribute('content')
                                }, function () {
                                    alert('谢谢分享。');
                                });
                                clearInterval(wxShare)
                            }
                        }, 150)
                    }
                });
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    console.info('DOMContentLoaded');
    thInitStatus();
    se2ScrollTo();
    sec16DragMask();
    thDisclaimer();
    thWechatShare();
    if (!thStatus.isIE) {
        if (!thStatus.isPortrait) {
            thImageInit();
        }
        thCreateTransOb();
    } else {
        // IE canvas 静态处理
        console.info('IE - 需要静态处理');
        document.body.classList.add('th-static');
    }
    if (thStatus.isPortrait) {
        adaptMobDur();
        s27MobSwiper();
    }
});
window.addEventListener("load", function () {
    if (thStatus.isIE) {
        ieAutoVideo();
    }
});
window.addEventListener("scroll", function () {
    if (!thStatus.isIE) {
        thRAF(thOnScrolling);
    }
});
window.addEventListener("resize", function () {
    if (!thStatus.isIE) {
        if (thResizeTO != null) {
            clearTimeout(thResizeTO);
        }
        thResizeTO = setTimeout(function () {
            console.info('resize event fired');
            thStatus.isResizing = true;
            thUpdateInfo();
            if (!thStatus.isPortrait) {
                thImageInit();
            }
            thRAF(thOnScrolling);
        }, 500);
    }
    $('.tl-family-list-attribute-details').height('auto');
    for (i = 0; i < attributeTarget.length; i++) {
        thalesCompareHeight(attributeTarget[i])
    }
});

var attributeTarget = ['.tl-family-list-attribute-details-color', '.tl-family-list-attribute-details-overview', '.tl-family-list-attribute-details-screen', '.tl-family-list-attribute-details-sounds', '.tl-family-list-attribute-details-camera', '.tl-family-list-attribute-details-splitscreen', '.tl-family-list-attribute-details-aivoice', '.tl-family-list-attribute-details-aifurniture'];

function thalesCompareHeight(target) {
    var attributeColor = new Array;
    var maxHeight = 0;
    [].forEach.call(document.querySelectorAll(target), function (e, i) {
        attributeColor[i] = e;
        maxHeight = maxHeight > e.clientHeight ? maxHeight : e.clientHeight;
    });
    for (var i = 0; i < attributeColor.length; i++) {
        attributeColor[i].style.height = maxHeight + 'px';
    }
}
document.addEventListener("DOMContentLoaded", function () {
    //tl-family
    var attributeColor = new Array;
    var maxHeight = 0;
    [].forEach.call(document.querySelectorAll('.tl-family-list-attribute-details-color'), function (e, i) {
        attributeColor[i] = e;
        maxHeight = maxHeight > e.clientHeight ? maxHeight : e.clientHeight;
    });
    for (var i = 0; i < attributeColor.length; i++) {
        attributeColor[i].style.height = maxHeight + 'px';
    }
    var attributeWrapperHeight = document.querySelectorAll('.tl-family-list-attribute-composition')[1].clientHeight;
    [].forEach.call(document.querySelectorAll('.tl-family-list-attribute-wrapper'), function (e, i) {
        e.style.height = '0px';
    });

    var famliyListTop;
    var htmlTop;
    var familylistShowStep;
    var familylistUpStep;
    var a = 0;
    var famliyflag = true;
    var familylistSpeed;

    function familyListShow(e, htmlTop) {
        // if (thStatus.isIE || thStatus.isOldEdge) {
        //     e.style.height = 'auto';
        // } else {
        if (famliyflag) {
            if (htmlTop < famliyListTop) {
                a = a + familylistShowStep;
                e.style.height = a + 'px';
                if (thStatus.isIE || thStatus.isOldEdge) {
                    e.style.height = 'auto';
                }
                htmlTop = htmlTop + familylistUpStep;
                window.scrollTo(0, htmlTop);
                window.requestAnimationFrame(function () {
                    familyListShow(e, htmlTop)
                })
            } else {
                a = attributeWrapperHeight;
                e.style.height = 'auto';
                window.scrollTo(0, htmlTop);
                document.querySelector('.tl-family-list-buttom p').textContent = '隐藏对比';
            }
        } else {
            if (htmlTop > famliyListTop) {
                a = a + familylistShowStep;
                e.style.height = a + 'px';
                if (thStatus.isIE || thStatus.isOldEdge) {
                    e.style.height = 'auto';
                }
                htmlTop = htmlTop - familylistUpStep;
                window.scrollTo(0, htmlTop);
                window.requestAnimationFrame(function () {
                    familyListShow(e, htmlTop)
                })
            } else {
                a = attributeWrapperHeight;
                e.style.height = 'auto';
                window.scrollTo(0, htmlTop);
                document.querySelector('.tl-family-list-buttom p').textContent = '隐藏对比';
            }
        }
        // }
    }

    function familyListHidden(e) {
        // if (thStatus.isIE || thStatus.isOldEdge) {
        //     e.style.height = '0';
        // } else {
        if (htmlTop > famliyListTop) {
            a = a - familylistShowStep;
            e.style.height = a + 'px';
            htmlTop = htmlTop - familylistUpStep;
            window.scrollTo(0, htmlTop);
            window.requestAnimationFrame(function () {
                familyListHidden(e)
            })
        } else {
            a = 0;
            e.style.height = '0';
            window.scrollTo(0, htmlTop);
            document.querySelector('.tl-family-list-buttom p').textContent = '机型对比';
        }
        // }
    }

    function offset(target) {
        var top = 0,
            left = 0
        while (target.offsetParent) {
            top += target.offsetTop
            left += target.offsetLeft
            target = target.offsetParent
        }
        return {
            top: top,
            left: left,
        }
    }
    //	function ease(t,p0,p1,p2,p3){
    //	    return (3*p1 - 3*p2 + p3 - p0)*t*t*t + (3*p0 - 6*p1 + 3*p2)*t*t + 3*(p1 - p0)*t + p0;
    //	}
    document.querySelector('.tl-family-list-buttom').addEventListener('click', function () {
        htmlTop = document.getElementsByTagName("body")[0].scrollTop == 0 ? document.getElementsByTagName("html")[0].scrollTop : document.getElementsByTagName("body")[0].scrollTop;
        famliyListTop = offset(document.getElementById("tl-family-hidden-trigger")).top - 65;
        familylistUpStep = (htmlTop - famliyListTop) / (1 * 60);
        familylistShowStep = attributeWrapperHeight / (3 * 60);
        if (document.querySelector('.tl-family-list-attribute-wrapper').clientHeight > 0) {
            [].forEach.call(document.querySelectorAll('.tl-family-list-attribute-wrapper'), function (e, i) {
                familyListHidden(e);
            });
        } else {

            if (thStatus.isPortrait) {
                familylistSpeed = 0.1;
            } else {
                familylistSpeed = 0.5;
            }
            famliyListTop = offset(document.getElementById("tl-family-show-trigger")).top;
            if (famliyListTop > htmlTop) {
                familylistUpStep = (famliyListTop - htmlTop) / (familylistSpeed * 60);
                famliyflag = true;
            } else {
                familylistUpStep = (htmlTop - famliyListTop) / (familylistSpeed * 60);
                famliyflag = false;
            }
            familylistShowStep = attributeWrapperHeight / (1 * 60);
            attributeWrapperHeight = document.querySelectorAll('.tl-family-list-attribute-composition')[1].clientHeight;
            [].forEach.call(document.querySelectorAll('.tl-family-list-attribute-wrapper'), function (e, i) {
                familyListShow(e, htmlTop);
            });
        }
    })
    for (i = 0; i < attributeTarget.length; i++) {
        thalesCompareHeight(attributeTarget[i])
    }
    if (thStatus.isPortrait) {
        var compareCompent = document.getElementById("tl-family"),
            isDraging = false,
            startX,
            endX,
            preY;

        function scrollCompare(isGoRight) {
            var minIndex = 0,
                maxIndex = parseInt(compareCompent.getAttribute("max-index")),
                currentIndex = parseInt(compareCompent.getAttribute("compare-index"));
            if (isGoRight) {
                if (currentIndex != maxIndex) {
                    compareCompent.setAttribute("compare-index", currentIndex + 1);
                } else {
                    compareCompent.setAttribute("compare-index", 0);
                }
            } else {
                if (currentIndex != 0) {
                    compareCompent.setAttribute("compare-index", currentIndex - 1);
                } else {
                    compareCompent.setAttribute("compare-index", maxIndex);
                }
            }
        }
        compareCompent.addEventListener("touchstart", function (e) {
            isDraging = true;
            startX = e.changedTouches[0].clientX;
            preY = e.changedTouches[0].clientY;
        });
        compareCompent.addEventListener("touchmove", function (e) {
            e.preventDefault()
            if (isDraging) {
                endX = e.changedTouches[0].clientX;
                if (startX - endX > 50) {
                    isDraging = false;
                    scrollCompare(true);
                } else if (startX - endX < -50) {
                    isDraging = false;
                    scrollCompare(false);
                }
                window.scrollBy(0, preY - e.changedTouches[0].clientY)
                preY = e.changedTouches[0].clientY
            }
        }, {
            passive: false,
            cancelable: true
        });
        compareCompent.addEventListener("touchend", function (e) {
            isDraging = false;
        });

        [].slice.call(document.querySelectorAll(".tl-family-list .swiper-pagination-bullet")).forEach(function (ele) {
            ele.addEventListener("click", function (e) {
                compareCompent.setAttribute("compare-index", this.getAttribute("compare-index"));
            })
        });

        [
            document.getElementById('scroll-to-left'),
            document.getElementById('scroll-to-right'),
        ].forEach(function (item, index) {
            item.addEventListener('click', function (evt) {
                evt.preventDefault();
                scrollCompare(!!index);
                // console.info('clicked');
            });
        });
    }
});

// uc browser
(function () {
    var isUC = (navigator.userAgent.indexOf('UCBrowser') > -1) ? 1 : 0
    if (isUC) {
        document.querySelector('.thales-container').classList.add('isUC');
    }
})()

var controller = new ScrollMagic.Controller();

function sectionOverflow(options) {
    var animate;
    if (!options.width) {
        animate = TweenMax.to(options.targetElement, 1, {
            'margin-top': '-100vh',
        });
    } else {
        animate = TweenMax.fromTo(options.targetElement, 1, {
            'width': '60vw',
        }, {
            'width': '100vw'
        });
    }
    new ScrollMagic.Scene({
            triggerElement: options.triggerElement,
            triggerHook: 1,
            offset: 0,
            duration: options.duration ? options.duration : '150%',
        })
        .setTween(animate)
        // .addIndicators()
        .addTo(controller);
}
sectionOverflow({
    triggerElement: '#trigger-overflow-1',
    targetElement: '.thales-overflow-1',
});
sectionOverflow({
    triggerElement: '#trigger-overflow-2',
    targetElement: '.thales-overflow-2',
});
sectionOverflow({
    triggerElement: '#trigger-overflow-3',
    targetElement: '.thales-overflow-3',
});
sectionOverflow({
    triggerElement: '#trigger-overflow-4',
    targetElement: '.thales-overflow-4',
});
sectionOverflow({
    triggerElement: '#trigger-overflow-4',
    targetElement: '.thales-width-1',
    width: 1,
    duration: '60%',
});