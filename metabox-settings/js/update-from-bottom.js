!function(t){"use strict";t(document).ready(function(){t("#publish, #publishing-action input[type=submit]").val()==updatefrombottomParams.publish?t('<div class="updatefrombottom" ><a class="button button-totop">'+updatefrombottomParams.totop+'</a><a class="button button-primary button-large">'+updatefrombottomParams.publish+"</a></div>").appendTo(".tab-content"):t('<div class="updatefrombottom"><a class="button button-totop">'+updatefrombottomParams.totop+'</a><a class="button button-primary button-large">'+updatefrombottomParams.update+"</a></div>").appendTo(".tab-content");var o={box:t(".updatefrombottom"),heart:t("#jsc-heart"),update:t(".updatefrombottom .button-primary"),publish:t("#publish, #publishing-action input[type=submit]"),totop:t(".updatefrombottom .button-totop")};o.box.hide(),o.update.on("click",function(a){t(this).text()==updatefrombottomParams.publish?t(this).text(updatefrombottomParams.publishing):t(this).text(updatefrombottomParams.updating),o.publish.trigger("click"),a.preventDefault()}),o.totop.on("click",function(o){o.preventDefault(),t("html, body").animate({scrollTop:0},600)}),t.fn.isInViewport=function(){var o=t(this).offset().top,a=o+t(this).outerHeight(),i=t(window).scrollTop(),u=i+t(window).height();return a>i&&o<u},t(window).on("resize scroll",function(){t("#publish, #publishing-action input[type=submit]").isInViewport()?o.box.hide():o.box.show()})})}(jQuery);