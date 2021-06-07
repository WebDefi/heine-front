/*!
 * imagesLoaded PACKAGED v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}(window,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}function n(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function o(t,e,r){return this instanceof o?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=n(t),this.options=i({},this.options),"function"==typeof e?r=e:i(this.options,e),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(t,e,r)}function r(t){this.img=t}function s(t,e){this.url=t,this.element=e,this.img=new Image}var h=t.jQuery,a=t.console;o.prototype=Object.create(e.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&d[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},o.prototype.addImage=function(t){var e=new r(t);this.images.push(e)},o.prototype.addBackground=function(t,e){var i=new s(t,e);this.images.push(i)},o.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},o.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},r.prototype=Object.create(e.prototype),r.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},r.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},o.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(h=e,h.fn.imagesLoaded=function(t,e){var i=new o(this,t,e);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});


var App = {
	init: []
};

$(function(){
	for (var i = 0; i < App.init.length; i++) {
		var name = App.init[i];

		App[name]();
	}
});


/** Libs **/

App.swiper = function(){

    /*
    
    roundLengths: true, окрглить значения в анимации, а то разыто все
    
    effect: 'fade', эффект
    
    autoHeight: true, авто высота
    
    autoplay: {
    	delay: 5000,
    },
    
    loop: true, лооп
    
    spaceBetween: 30, оступ между слайдами
    
    slidesPerView: 3, количество слайдов
    
    centeredSlides: true, слайды по центру
    
    pagination: {
        el: '.swiper-pagination', точки внизу слайдера
        clickable: true
    	},
    
    	simulateTouch: false, отключить симуляцию пальца
    
    on: {
        init: function () {
        	событие запуска слайдера
        },
    	}
    
    .on('slideChange', function(){
    	this.activeIndex
    });
    
    	.slideTo(swiper.realIndex); прокрутить к слайду
    
    */

    var width = $(window).width();
    
    var navigation = function(elem, par){
    	var parent = $(elem).parents(par || '.container');
    
    	return {
    		nextEl: $('.swiper-button-next',parent),
    		prevEl: $('.swiper-button-prev',parent),
    	}
    }
    
    /** Main page slides **/
    new Swiper('#swiper-welcome', {
    	spaceBetween: 0,
    	autoplay: {
    		delay: 5000,
    	},
    	autoHeight: false,
    	effect: 'fade',
    	roundLengths: true, 
    	pagination: {
            el: '#swiper-welcome .swiper-pagination',
            clickable: true
        },
    });

    /** News buttons **/
    new Swiper('#swiper-order', {
        spaceBetween: 15,
        slidesPerView: 5,
        autoHeight: true,

        centeredSlidesBounds: true,
        loop: false,
        roundLengths: true, 
        navigation: navigation('#swiper-order','div'),
        breakpoints: {
            575: {
                spaceBetween: 0,
                slidesPerView: 1
            },
        }
    });

    /** Brands **/
    new Swiper('#swiper-brands', {
        spaceBetween: 0,
        autoplay: {
            delay: 2500,
        },
        slidesPerView: 6,
        autoHeight: true,
        loop: false,
        roundLengths: true, 
        navigation: navigation('#swiper-brands','.swiper-outside'),
        breakpoints: {
            575: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 3
            },
            996: {
                slidesPerView: 4
            },
            1200: {
                slidesPerView: 6
            },
        }
    });

    new Swiper('#swiper-gallery', {
    	spaceBetween: 30,
    	slidesPerView: width > 996 ? 4 : width > 768 ? 3 : width > 576 ? 2 : 1,
    	autoHeight: true,
    	loop: true,
    	roundLengths: true, 
    	navigation: navigation('#swiper-gallery'),
    });

    /** Product images **/
    var big = new Swiper('#swiper-images-full', {
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
        },
        slidesPerView: 1,
        autoHeight: true,
        loop: false,
        roundLengths: true,
    });

    var small = new Swiper('#swiper-images-small', {
        spaceBetween: 30,
        slidesPerView: width > 996 ? 3 : width > 768 ? 3 : width > 576 ? 2 : 2,
        autoHeight: false,
        loop: false,
        roundLengths: true, 
        navigation: navigation('#swiper-images-small','.swiper-outside'),
    });

    small.on('slideChange', function(){
        big.slideTo(this.realIndex);
    });

    big.on('slideChange', function(){
        small.slideTo(this.realIndex);
    });

    var slides_small = $('#swiper-images-small .swiper-slide');

    slides_small.on('click',function(){
        big.slideTo(slides_small.index($(this)));
    })
}

App.niseselect = function(){
    $('select').niceSelect();
}

App.faq = function(){
    var faq_items  = '.faq';
    var faq_body   = '.faq-body';
    var faq_toggle = '.faq-toggle';

    $(faq_items).each(function(){
        var item = $(this);
        var body = $(faq_body,item);
    
        $(faq_toggle,item).on('click', function(){
            if(body.is(':visible')){
                body.slideUp(200);
                item.removeClass('open')
            }
            else{
                body.slideDown(200);
                item.addClass('open');
            }
        })
    })

    $(".e-faq__descr table, .typo--text table").each(function(){
        $(this).wrap("<div class='table-responsive'></div>");
    });
}

App.lang = function(){
    var faq_items  = '.lang';
    var faq_body   = '.lang-body';
    var faq_toggle = '.lang-toggle';

    $(faq_items).each(function(){
        var item = $(this);
        var body = $(faq_body,item);
    
        $(faq_toggle,item).on('click', function(){
            if(body.is(':visible')){
                body.slideUp(200);
                item.removeClass('open')
            }
            else{
                body.slideDown(200);
                item.addClass('open');
            }
        })
    })

    $(document).on('mousedown',function(event){
        if(!$(event.target).closest($('.lang-body')).length) {
            $('.lang').removeClass('open');
            $('.lang-body').slideUp(200);
        }
    })
}


App.specific = function(){
    var faq_items  = '.specific';
    var faq_body   = '.specific-body';
    var faq_toggle = '.specific-toggle';

    $(faq_items).each(function(){
    	var item = $(this);
    	var body = $(faq_body,item);
    
    	$(faq_toggle,item).on('click', function(){
    		if(body.is(':visible')){
    			body.slideUp(200);
    			item.removeClass('open')
    		}
    		else{
    			body.slideDown(200);
    			item.addClass('open');
    		}
    	})
    })
}


App.magnific = function(){
    $('.gallery').each(function(){
    	$(this).magnificPopup({
    		delegate: '.image',
    		type: 'image',
    		gallery: {
    			enabled: true
    		},
    	});
    });
    
    $('.popup-video').magnificPopup({
        disableOn: false,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
}

App.modal = function(){
    $('a[data-modal]').click(function(event) {
    	$(this).modal({
    		fadeDuration: 250
    	});
    
    	return false;
    });
}

App.mobileMenu = function(){
    $('#mobile-menu').menu();
    
    $('#mobile-menu-close').on('click',function(){
    	$('#mobile-menu').menu('close');
    })
    
    $('#mobile-menu-toggle').on('click',function(e){
    	e.preventDefault();
    
    	$('#mobile-menu').menu('open');
    })
}

App.tabs = function(){
    var tab_items = '.tabs';
    var tab_links = '> .tabs-links > *';
    var tab_body  = '> .tabs-container > .tabs-body';
    
    $(tab_items).each(function(){
    	var links = $(tab_links,this);
    	var bodys = $(tab_body,this);
    
    	links.on('click', function(e){
    		e.preventDefault();
    
    		links.removeClass('active');
    		bodys.removeClass('active')
    
    		$(this).addClass('active');
    
    		bodys.eq(links.index(this)).addClass('active');
    	})
    })
}

App.slplice = function(){
    $('.slplice').each(function(){
        var block = $(this),
            boxes = $('.slplice-box',block);

        var addPlace = function(box,con){
            $('.slplice-place',block).remove();

            var place = $('<div class="col-12 slplice-place"><div></div></div>');
            var slide = $('> div',place)

                slide.append(con);

            $('.close',con).on('click',function(){
                place.remove();
            })

            slide.hide();

            box.after(place);

            slide.slideDown(200);
        }

        var showContent = function(box,con){
            var i = boxes.index(box);
            var f = 0;
            var s = boxes.slice(i);
            var t = box.offset().top;

            if(i == boxes.length - 1){
                return addPlace(box,con)
            }

            for (var a = 0; a < s.length; a++) {
                var nx = $(s[a]),
                    nt = nx.offset().top;

                if(nt > t + 10){
                    f = true;

                    addPlace($(s[a-1]),con);

                    break;
                }
            }

            if(!f){
                addPlace(boxes.last(),con);
            }
        }

        boxes.each(function(){
            var box = $(this),
                con = $('.slplice-content',box),
                itm = $('.slplice-item',box);

            itm.on('click',function(e){
                e.preventDefault();

                showContent(box,con.clone())
            })
        })
    })
}

App.init.push("swiper")
App.init.push("niseselect")
App.init.push("specific")
App.init.push("faq")
App.init.push("lang")
App.init.push("modal")
App.init.push("magnific")
App.init.push("mobileMenu")
App.init.push("tabs")
App.init.push("slplice")

App.wow = function(){
    if($(window).width() >= 1200){
        $('.wow-delay').each(function(){
            var delay = 0;

            $('.wow',this).each(function(){
                delay += 0.1;

                if(delay > 1) delay = 0;

                $(this).attr('data-wow-delay',delay + 's');
            })
        });
    }

    $(document).ready(function(){
        if($(".s-head__section").offset().top > 0) {
            $('.s-head__section .wow').each(function(){
                $(this).addClass('menu-fix');
            });
        }

        let w = jQuery(window).width();

        jQuery(window).on('resize', function(){
            w = jQuery(window).width();
            if(w < 1200) {

                jQuery('.e-mmenu__item > a').on('click', function(e) {
                    if(jQuery(this).parent().hasClass("drop")) {
                        jQuery(this).parent().toggleClass('open');
                        e.preventDefault();
                    }
                });
            }
        }).resize();

        jQuery('input[name="telephone"]').inputmask("+38(099) 999-99-99");


        jQuery('.btn-resume').on('mouseover', function() {
            let vacancy = jQuery(this).closest('.specific').find('.b-specific__note span').text();
            jQuery('input[name="vacancy"]').val(vacancy);
        });
    });

    // Preload all images.
    imagesLoaded(document.querySelector('body'), function() {
        setTimeout(function() { 
            document.body.classList.remove('loading');
        }, 800); 
        setTimeout(function() { 
            new WOW().init();
        }, 750); 
    }, 800);
}

App.init.push("wow");



