/* Offer Menu Filter START */	
if (jQuery(".offer-menu-wrapper").length > 0) {	
	jQuery(window).load(function(){
		"use strict";
		jQuery(function() {
			var container = jQuery(".offer-menu-items");
			container.isotope({
				itemSelector : ".isotope-item",
				layoutMode: "fitRows",
				transitionDuration: "0.7s",
				filter: ".cat1"
			});
			var optionSets = jQuery(".option-set"),
				optionLinks = optionSets.find("a");

			optionLinks.click(function(){
				var $this = jQuery(this);

				if ( $this.hasClass("selected") ) {
					return false;
				}
				var optionSet = $this.parents(".option-set");
				optionSet.find(".selected").removeClass("selected");
				$this.addClass("selected");

				var options = {},
					key = optionSet.attr("data-option-key"),
					value = $this.attr("data-option-value");

				value = value === "false" ? false : value;
				options[ key ] = value;
				if ( key === "layoutMode" && typeof changeLayoutMode === "function" ) {

					changeLayoutMode( $this, options )
				} else {
					// otherwise, apply new options
					container.isotope( options );
				}

				return false;
			});
		});
	});  
}
/* Offer Menu Filter END */	

/*	Menu START */
jQuery(function(){
	"use strict";
	// main navigation init
	jQuery('.main-menu .sf-menu').superfish({
		delay:	300,	// one second delay on mouseout 
		animation:   {opacity:'show',height:'show'}, // fade-in and slide-down animation
		speed:       'fast',  // faster animation speed 
		autoArrows:  true,   // generation of arrow mark-up (for submenu) 
		dropShadows: false
	});
});
/*	Menu END */

/*	Footer and Header START */
jQuery(document).ready(function () {
	"use strict";
	if (jQuery("#footer").length > 0) {
		var offsetHeight = document.getElementById('footer').offsetHeight;
		jQuery(".container-wrapper").css("padding-bottom", offsetHeight+"px");
	}
	var offsetHeightHeader = document.getElementById('header').offsetHeight;
	if (jQuery(".header-info").length > 0) {
		var offsetHeightHeader2 = document.getElementById('header-info').offsetHeight;
		var mobileheight = offsetHeightHeader - offsetHeightHeader2;
		jQuery(".mobile-menu-wrapper").css("top", mobileheight+"px");
	} else {
		jQuery(".mobile-menu-wrapper").css("top", offsetHeightHeader+"px");
	}

});

jQuery(window).smartresize(function(){
	"use strict";
	if (jQuery("#footer").length > 0) {
		var offsetHeight = document.getElementById('footer').offsetHeight;
		jQuery(".container-wrapper").css("padding-bottom", offsetHeight+"px");
	}
	var offsetHeightHeader = document.getElementById('header').offsetHeight;
	if (jQuery(".header-info").length > 0) {
		var offsetHeightHeader2 = document.getElementById('header-info').offsetHeight;
		var mobileheight = offsetHeightHeader - offsetHeightHeader2;
		jQuery(".mobile-menu-wrapper").css("top", mobileheight+"px");
	} else {
		jQuery(".mobile-menu-wrapper").css("top", offsetHeightHeader+"px");
	}

});

jQuery(window).load(function () {
	if (jQuery("#footer").length > 0) {
		var offsetHeight = document.getElementById('footer').offsetHeight;
		jQuery(".container-wrapper").css("padding-bottom", offsetHeight+"px");
	}
	var offsetHeightHeader = document.getElementById('header').offsetHeight;
	if (jQuery(".header-info").length > 0) {
		var offsetHeightHeader2 = document.getElementById('header-info').offsetHeight;
		var mobileheight = offsetHeightHeader - offsetHeightHeader2;
		jQuery(".mobile-menu-wrapper").css("top", mobileheight+"px");
	} else {
		jQuery(".mobile-menu-wrapper").css("top", offsetHeightHeader+"px");
	}
});
/*	Footer and HEader END */

/*	Page load/switch transition  START */
jQuery(document).ready(function($) {
	"use strict";
	$(".animsition").animsition({
		inClass               :   'fade-in',
		outClass              :   'fade-out',
		inDuration            :    1500,
		outDuration           :    800,
		linkElement           :   '.animsition-link',
		loading               :    true,
		loadingParentElement  :   'body', //animsition wrapper element
		loadingClass          :   'animsition-loading',
		unSupportCss          : [ 'animation-duration',
								 '-webkit-animation-duration',
								 '-o-animation-duration'
								],
		overlay               :   false,
		overlayClass          :   'animsition-overlay-slide',
		overlayParentElement  :   'body'
	});
});
/*	Page load/switch transition  END */

/* Mobile menu START */
jQuery(document).ready(function($){
	"use strict";
	var slide = false;
	$(".menu-icon-mobile").on( "click", function() {

		if (slide == false) {
			$(".mobile-menu-wrapper").slideDown("slow");
			jQuery(".menu-icon.menu-icon-mobile").addClass("opened");
			slide = true;
		}
		else {
			$(".mobile-menu-wrapper").slideUp("slow");
			jQuery(".menu-icon.menu-icon-mobile").removeClass("opened");
			slide = false;
		}
	});
	$(".mobile-menu-wrapper a").on( "click", function() {
		if (slide == false) {
			$(".mobile-menu-wrapper").slideDown("slow");
			jQuery(".menu-icon.menu-icon-mobile").addClass("opened");
			slide = true;
		}
		else {
			$(".mobile-menu-wrapper").slideUp("slow");
			jQuery(".menu-icon.menu-icon-mobile").removeClass("opened");
			slide = false;
		}
	});
});
/* Mobile menu END */