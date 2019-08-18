'use strict';

window.$(document).ready( function() {	

    // HOME PAGE HEIGHT
    window.jQuery(window).load(function() {
            // will first fade out the loading animation
            window.jQuery(".loader").fadeOut();
            // will fade out the whole DIV that covers the website.
            window.jQuery(".preloader").delay(1000).fadeOut("slow");
    });

     
    // HOME PAGE HEIGHT
    if (window.$('.home, .portfolio-hero').length) {
        function fullhome() {
            var hometext = window.$('.home, .portfolio-hero')            
//            var homett = $('.hero-title').offset();
//            $('.social').css('margin-top', homett.top)            
            hometext.css({
                "height": window.$(window).height() + "px"
            });
        }
        fullhome();
        window.$(window).resize(fullhome);
    }
        

    // MAGNIFIC POPUP FOR PORTFOLIO PAGE
    // $('.magnif').magnificPopup({
    //     type:'image',
    //     gallery:{enabled:true},
    //     zoom:{enabled: true, duration: 300}
    // });
    
    
    // HOME TYPED JS
    if (window.$('.element').length) {
        window.$('.element').each(function () {
            window.$(this).typed({
                strings: [window.$(this).data('text1'), window.$(this).data('text2'), window.$(this).data('text3')], 
                loop: window.$(this).data('loop') ? window.$(this).data('loop') : false ,
                backDelay: window.$(this).data('backdelay') ? window.$(this).data('backdelay') : 2000 ,                
                typeSpeed: 10,
            });
        });
    }


    // PORTFOLIO ISOTOPE
    if (window.$('.isotope_items').length) {
         var $container = window.$('.isotope_items');
         $container.isotope();

        window.$('.portfolio-filter ul li').on("click", function(){
            window.$(".portfolio-filter ul li").removeClass("select-cat");
            window.$(this).addClass("select-cat");              
            var selector = window.$(this).attr('data-filter');
            window.$(".isotope_items").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
        });
            return false;
        });      
    }


    // PORTFOLIO EFFECT
    window.$(".cbp-item").hover3d({
        selector: "figure",
        perspective: 3000,
        shine: true
    });

    
   // $('.site-btn').click(function(){
   //      $('.isotope_items').load('port.html').fadeIn();
   //  });


// PORTFOLIO CONTENT  
    window.$('#grid-container').cubeportfolio({
        layoutMode: 'grid',
        filters: '.portfolio-filter',
        gridAdjustment: 'responsive',
        animationType: 'skew',
        defaultFilter: '*',
        gapVertical: 30,
        gapHorizontal: 30,
        singlePageAnimation: 'fade',
        mediaQueries: [{
                width: 700,
                cols: 3,
            }, {
                width: 480,
                cols: 2,
                options: {
                    caption: '',
                    gapHorizontal: 30,
                    gapVertical: 20,
                }
            }, {
                width: 320,
                cols: 1,
                options: {
                    caption: '',
                    gapHorizontal: 50,
                }
            }],            
        singlePageCallback: function (url, element) {
            var t = this;
            window.$.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'html',
                    timeout: 30000
                })
                .done(function (result) {
                    t.updateSinglePage(result);
                })
                .fail(function () {
                    t.updateSinglePage('AJAX Error! Please refresh the page!');
                });
        },
            plugins: {
                loadMore: {
                    element: '#port-loadMore',
                    action: 'click',
                    loadItems: 3,
                }
            }
    }); 


    //TWITTER
    if (window.$('.widget-twitter .tweet').length) {
        window.$('.widget-twitter .tweet').twittie({
            username: 'envato'
            , list: null
            , dateFormat: '%B %d, %Y'
            , template: '{{tweet}} <br/> <span class="date">{{date}}</span>'
            , count: 10

        }, function () {
            setInterval(function() {
                var item = window.$('.widget-twitter .tweet ul').find('li:first');

                item.animate( {marginLeft: '-220px', 'opacity': '0'}, 500, function() {
                    window.$(this).detach().appendTo('.widget-twitter .tweet ul').removeAttr('style');
                });
            }, 5000);
        });
    }


    // RESPONSIVE MENU
    window.$('.nav-icon').click(function(){
        window.$('body').toggleClass('full-open');
    });


    // OWL CAROUSEL GENERAL JS
    // var owlcar = window.$('.owl-carousel');
    // if (owlcar.length) {
    //     owlcar.each(function () {
    //         var $owl = window.$(this);
    //         var itemsData = $owl.data('items');
    //         var autoPlayData = $owl.data('autoplay');
    //         var paginationData = $owl.data('pagination');
    //         var navigationData = $owl.data('navigation');
    //         var stopOnHoverData = $owl.data('stop-on-hover');
    //         var itemsDesktopData = $owl.data('items-desktop');
    //         var itemsDesktopSmallData = $owl.data('items-desktop-small');
    //         var itemsTabletData = $owl.data('items-tablet');
    //         var itemsTabletSmallData = $owl.data('items-tablet-small');
    //         $owl.owlCarousel({
    //             items: itemsData
    //             , pagination: paginationData
    //             , navigation: navigationData
    //             , autoPlay: autoPlayData
    //             , stopOnHover: stopOnHoverData
    //             , navigationText: ["<", ">"]
    //             , itemsCustom: [
    //                 [0, 1]
    //                 , [500, itemsTabletSmallData]
    //                 , [710, itemsTabletData]
    //                 , [992, itemsDesktopSmallData]
    //                 , [1199, itemsDesktopData]
    //             ]
    //         , });
    //     });
    // }




}); // document ready end 




































