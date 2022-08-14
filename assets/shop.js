jQuery(function($){

	$('html').removeClass('no-js'); 



	// PRELOADER
	$(window).load(function() {
		$('#page_preloader').delay(700).fadeOut(700);

		function preloaderRemove() {
			$('#page_preloader').remove()
		};

		setTimeout( preloaderRemove, 3000 );
	});



	// IOS HOVER
	if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
		$('a').on("touchstart", function() {});
	};



	// HZ
	$('ul.styles > li').click(function(){
		var className = $(this).attr('class');
		$('body').removeClass('theme-style-0 theme-style-1 theme-style-2 theme-style-3');
		$('body').addClass(className);
	});



	// PLACEHOLDER JS 
	$('[placeholder]').each(function(){
	  if ($(this).val() === '') {
		var hint = $(this).attr('placeholder');
		$(this).val(hint).addClass('hint');
	  }
	});

	$('[placeholder]').focus(function() {
	  if ($(this).val() === $(this).attr('placeholder')) {
		$(this).val('').removeClass('hint');
	  }
	}).blur(function() {
	  if ($(this).val() === '') {
		$(this).val($(this).attr('placeholder')).addClass('hint');
	  }
	});                    



	// FORM VALIDATION MINI
	$.fn.formValidation=function(){this.find("input, textarea").after('<p class="alert-form-info"></p>'),this.on("submit",function(t){if($(this).find("input, textarea").each(function(){""==$(this).val()&&($(this).addClass("alert-form").next().html("Field can't be blank").slideDown(),$(this).on("focus",function(){$(this).removeClass("alert-form").next().slideUp()}),t.preventDefault())}),$(this).find("input[type=email]").length){var e=$(this).find("input[type=email]");e.val().length>0&&(e.val().length<6||-1==e.val().indexOf("@")||-1==e.val().indexOf("."))&&(e.addClass("alert-form").next().html("Incorrect email").slideDown(),e.on("focus",function(){$(this).removeClass("alert-form").next().slideUp()}),t.preventDefault())}if(2==$(this).find("input[type=password]").length){var n=$(this).find("input[type=password]:eq(0)"),i=$(this).find("input[type=password]:eq(1)");n.val()!=i.val()&&(i.addClass("alert-form").next().html("Passwords do not match").slideDown(),i.on("focus",function(){i.removeClass("alert-form").next().slideUp()}),t.preventDefault())}})};


   
	// FORM STYLES   
	$('.address_table form, .customer_address form').addClass('form-horizontal');



	// CUSTOM SELECTS 
	$('.header_currency select, #navigation select').styler();
	$('.jq-selectbox__trigger').append('<i class="fa fa-angle-down"></i>');



	// MEGAMENU DESKTOP 
	$('.sf-menu').superfish({
		animation: {height: 'show'},
		speed: 'fast'
	});

	var path = window.location.pathname.split('/');
	path = path[path.length-1];
	if (path !== undefined) {
	  $("ul.sf-menu > li").children("a[href$='" + path + "']").parents('li').children('a').addClass('active');
	};

	var path2 = window.location.pathname;
	if (path2 == '/' || path == undefined) {
	  $("ul.sf-menu > li").children("a[href$='" + path2 + "']").parents('li').children('a').addClass('active');
	};



	// MEGAMENU MOBILE 
	$(document).ready(function(){
		$(".megamenu_mobile h2").click(function(){
			$(".level_1").slideToggle("slow");
			$(this).toggleClass("active");
		});

		$(".level_1_trigger").click(function(){
			$(this).parent().parent().find(".level_2").slideToggle("slow");
			$(this).toggleClass("active");
			return false;
		});

		$(".level_2_trigger").click(function(){
			$(this).parent().parent().find(".level_3").slideToggle("slow");
			$(this).toggleClass("active");
			return false;
		});

		$('.megamenu_mobile h2').on('click touchstart', function(e){
			e.stopPropagation();
		});

		$(document).on('click', function(){
			$(".level_1").slideUp("slow");
			$(".megamenu_mobile").find("h2").removeClass("active");
		});
	});



	// STICK MENU 
  	 $(window).on("load resize",function(){
		$('#header_top').tmStickUp();
    });
      	
	$(document).ready(function(){
    var changeHeight = function(resultHeight) {

      $('#header_top .sf-menu > li > a').css({
        "height": resultHeight,
        "line-height": resultHeight + "px"
      });
      $('#header_top').css('height', resultHeight);
      $('#header_top .logo_main').css('height', resultHeight + 'px');
      $('#header_top .header_cart a').css('height', resultHeight + 'px');
      $('#header_top .sf-menu > li > ul').css('top', resultHeight + 'px');
      $('.header_cart a .icon').css('line-height', resultHeight + 'px');
      $('#header_top #cart_items').css('margin-top', resultHeight * 0.2 + 'px');
      $('#header_top .logo_main a').css('line-height', resultHeight + 'px');
      $('.logo_main a img').css('width', resultHeight * 0.01 * 64 + 'px');
    }  
      
  	var changeHeightCond = function() {
      
      var delta = $("#wrapper3").offset().top - $(document).scrollTop();	 
      
      if(delta <= 100){
        changeHeight(delta < 50 ? 50 : delta);
      } else {
        changeHeight(100);
      }
    };
      
    function useChangeHeight() {
      changeHeightCond(); 
      $(window).on('scroll', changeHeightCond);
    };
      
    function hideChangeHeight() {
        $('#header_top .sf-menu > li > a').css({
          "height": '',
          "line-height": ''
        });
        $('#header_top').css('height', '');
        $('#header_top .logo_main').css('height', '');
        $('#header_top .header_cart a').css('height', '');
        $('#header_top .sf-menu > li > ul').css('top', '');
        $('.header_cart a .icon').css('line-height', '');
        $('#header_top #cart_items').css('margin-top', '');
        $('#header_top .logo_main a').css('line-height', '');
        $('.logo_main a img').css('width', '');
    }

      
    $(window).on("load resize", function(){
      if ($(this).width() > 991) {
          useChangeHeight();
      }

      if ($(this).width() < 991) {
          hideChangeHeight();
      }
    });
   });



	// MAIN PRODUCT LISTING IMAGE CHANGE
	imgChange = function (){
		if ( device.desktop() ) {
			$(document).on({
			    mouseenter: function(){
			        $(this).find(".img__2").stop().animate({"opacity": 1});
			    },
			    mouseleave: function(){
			        $(this).find(".img__2").stop().animate({"opacity": 0});
			    }
			}, '.img_change');
		};
	};
	$(window).load( imgChange );



	// BACK TO TOP BUTTON 
	$(document).ready(function(){
		$(document.body).append('<a id="back_top" title="Back to top" href="#"></a>');
		$('#back_top').hide();

		$(window).scroll(function(){
			if ( $(this).scrollTop() > 300 ) {
				$('#back_top').fadeIn("slow");
			}
			else {
				$('#back_top').fadeOut("slow");
			};
		});

		$('#back_top').on('click', function(e) {
			e.preventDefault();
			$('html, body').animate({scrollTop : 0},800);
			$('#back_top').fadeOut("slow").stop();
		});
	});



	// PRODUCT QUANTITY FORM MINI, USED ON:
	// 1. PRODUCT PAGE
	// 2. PRODUCT QUICK VIEW
	// 3. CART PAGE
	$(document).on("focusout",".quantity_input",function(){var t=$(this).val();$(this).val(isNaN(parseFloat(t))&&!isFinite(t)||0==parseInt(t)||""==t?1:parseInt(t)<0?parseInt(t)-2*parseInt(t):parseInt(t))}),$(document).on("click",".quantity_up",function(){var t=$(this).parent().find(".quantity_input");t.val(!isNaN(parseFloat(t.val()))&&isFinite(t.val())?parseInt(t.val())+1:1)}),$(document).on("click",".quantity_down",function(){var t=$(this).parent().find(".quantity_input");t.val(!isNaN(parseFloat(t.val()))&&isFinite(t.val())&&t.val()>1?parseInt(t.val())-1:1)});



	// PRODUCT QUICK VIEW MINI
	$(document.body).on("click",".quick_view_btn",function(i){i.preventDefault(),$(document.body).append('<div id="product_quick_view" style="display: none;"><div class="product_quick_wrapper"><div class="quick_view__left"><div id="img_big"></div><div class="product_images"><div class="img_gallery"></div></div></div><div class="quick_view__right"><form action="/cart/add" method="post" enctype="multipart/form-data" id="product-actions" class="quick_view_form"><p id="quick_view__name" class="product_name"></p><p id="quick_view__type"><label for="">Product type:</label> <span></span></p><p id="quick_view__vendor"><label for="">Vendor:</label> <span></span></p><p id="quick_view__variants"><label for="">Options:</label><select id="product-select" name="id" class="hidden"></select></p><p id="quick_view__price" class="product_price"></p><p id="quick_view__availability"><label for="">Availability:</label> <span></span></p><div id="quick_view__form"><label for="quantity">Choose quantity:</label><div class="quantity_box"><input min="1" type="text" name="quantity" value="1" class="quantity_input" /><span class="quantity_modifier quantity_down"><i class="fa fa-minus"></i></span><span class="quantity_modifier quantity_up"><i class="fa fa-plus"></i></span></div><button class="btn btn-cart" type="submit" id="quick_view__add">Add to cart</button></div></form></div></div></div>'),$.fancybox.showLoading(),$.fancybox.helpers.overlay.open({parent:$("body")}),$.getJSON($(this).attr("href")+".js",function(i){if($(document).on("click","#product_quick_view .img_gallery a",function(i){i.preventDefault();var e=$(this).attr("href");$("#product_quick_view #img_big img").attr("src",e)}),i.title.length<60)var e=i.title;else var e=$.trim(i.title).substring(0,75)+"...";$("#quick_view__name").html('<a href="'+i.url+'">'+e+"</a>"),$("#quick_view__type span").html(i.type),$("#quick_view__vendor span").html(i.vendor),$.each(i.variants,function(i,e){$("#product-select").append('<option value="'+e.id+'">'+e.title+" - "+e.price+"</option>")}),$("#quantity").on("focusout",function(){var i=$(this).val();$(this).val(isNaN(parseFloat(i))&&!isFinite(i)||0==parseInt(i)||""==i?1:parseInt(i)<0?parseInt(i)-2*parseInt(i):parseInt(i))}),$("#quantity_up").on("click",function(){var i=$("#quantity").val();$("#quantity").val(!isNaN(parseFloat(i))&&isFinite(i)?parseInt(i)+1:1)}),$("#quantity_down").on("click",function(){var i=$("#quantity").val();$("#quantity").val(!isNaN(parseFloat(i))&&isFinite(i)&&i>1?parseInt(i)-1:1)}),$.getScript("//cdn.shopify.com/s/assets/themes_support/option_selection-fe6b72c2bbdd3369ac0bfefe8648e3c889efca213baefd4cfb0dd9363563831f.js",function(){function e(i,e){var a=i.length;0===a&&e();var t=0;$(i).each(function(){$("<img>").attr("src",this).load(function(){t++,t===a&&e()})})}e(i.images,function(){$("#product_quick_view #img_big").append('<img src="'+i.images[0]+'" alt="" />'),$.each(i.images,function(i,e){$("#product_quick_view .img_gallery").append('<a href="'+e+'"><img src="'+e+'" alt="" /></a>')}),$("#product_quick_view .img_gallery").bxSlider({infiniteLoop:!0,minSlides:1,maxSlides:3,moveSlides:1,slideWidth:94,pager:!1,prevText:"",nextText:""});var e=function(i){if(i&&i.available?(jQuery("#quick_view__add").removeAttr("disabled").removeClass("disabled"),jQuery("#quick_view__price").html(i.price<i.compare_at_price?'<span class="money">'+Shopify.formatMoney(i.price,"")+'</span><span class="money compare-at-price money_sale">'+Shopify.formatMoney(i.compare_at_price,"")+'</span><span class="money_sale_percent">– '+parseInt(100-100*i.price/i.compare_at_price)+"%</span>":'<span class="money">'+Shopify.formatMoney(i.price,"")+"</span>"),jQuery("#quick_view__availability span").removeClass("notify_danger").addClass("notify_success").html(null!=i.inventory_management?"<b>"+i.inventory_quantity+"</b> item(s)":"Available")):(jQuery("#quick_view__add").addClass("disabled").attr("disabled","disabled"),jQuery("#quick_view__availability span").removeClass("notify_success").addClass("notify_danger").html("Unavailable"),jQuery("#quick_view__price").html('<span class="money">'+Shopify.formatMoney(i.price,"")+"</span>")),i&&i.featured_image){var e=$("#img_big img"),a=i.featured_image,t=e[0];Shopify.Image.switchImage(a,t,function(i){$("#img_big img").attr("src",i)})}currencyToggle("#quick_view__price .money")};new Shopify.OptionSelectors("product-select",{product:i,onVariantSelected:e,enableHistoryState:!1}),$.each($("#quick_view__variants select option"),function(){"Default Title"==$(this).val()&&$("#quick_view__variants").hide()}),$.fancybox($("#product_quick_view"),{openSpeed:500,closeSpeed:500,tpl:{wrap:'<div id="quick_view__wrap" class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',closeBtn:'<a title="Close" id="quick_view__close" class="fancybox-item fancybox-close" href="javascript:;"></a>'},afterClose:function(){$("#product_quick_view").remove()}})})}),$("#quick_view__add").on("click",function(){$.fancybox.close()})})});

$(".header_user li a:not(.user_name)").wrapInner('<span class="header_user__text"></span>')

});