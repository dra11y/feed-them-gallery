jQuery.fn.ftgToggleClick=function(e,t){var o=[e,t];return this.data("toggleclicked",0),this.click(function(){var e=jQuery(this).data(),t=e.toggleclicked;jQuery.proxy(o[t],this)(),e.toggleclicked=(t+1)%2}),this},jQuery(document).ready(function(){jQuery("#ft_gallery_smart_image_orient_prod").appendTo(".ft_gallery_smart_image_orient_prod_holder");var e=jQuery("#ft_gallery_smart_image_orient_prod");jQuery("body").on("click","#ft_gallery_smart_image_orient_prod",function(){e.is(":checked")?jQuery(".ftg-global-model-product-wrap .ftg-settings-overlay").show():jQuery(".ftg-global-model-product-wrap .ftg-settings-overlay").hide()}),e.is(":checked")?jQuery(".ftg-global-model-product-wrap .ftg-settings-overlay").show():jQuery(".ftg-global-model-product-wrap .ftg-settings-overlay").hide(),jQuery("#ft_gallery_image_to_woo_model_prod").on("change",function(e){jQuery("select#ft_gallery_image_to_woo_model_prod").val()?jQuery(".ftg-settings-overlay-smart-images").show():jQuery(".ftg-settings-overlay-smart-images").hide()}),jQuery("select#ft_gallery_image_to_woo_model_prod").val()?jQuery(".ftg-settings-overlay-smart-images").show():jQuery(".ftg-settings-overlay-smart-images").hide(),jQuery("#ft_gallery_zip_to_woo_model_prod").on("change",function(e){jQuery("select#ft_gallery_zip_to_woo_model_prod").val()?jQuery("#ftg-tab-content1 .ft-gallery-zip-gallery").attr("disabled",!1):jQuery("#ftg-tab-content1 .ft-gallery-zip-gallery").attr("disabled",!0)}),jQuery("select#ft_gallery_zip_to_woo_model_prod").val()?jQuery("#ftg-tab-content1 .ft-gallery-zip-gallery").attr("disabled",!1):jQuery("#ftg-tab-content1 .ft-gallery-zip-gallery").attr("disabled",!0),jQuery("#ft_gallery_image_to_woo_model_prod").on("change",function(e){var t=jQuery("select#ft_gallery_image_to_woo_model_prod").val();t?(jQuery(".ftg-global-model-product-wrap .ftg-hide-me").hide(),jQuery(".ftg-js-edit-button-holder").html('<div class="ft-gallery-edit-woo-model-prod ftg-fadein" style="display: none"><a href="'+ftg_woo.admin_url+"post.php?post="+t+'&action=edit" target="_blank">'+ftg_woo.global_product_option+"</a></div>"),jQuery(".ftg-global-model-product-wrap .ftg-fadein").fadeIn()):jQuery(".ftg-global-model-product-wrap .ftg-hide-me, .ftg-global-model-product-wrap .ftg-fadein").fadeOut()}),jQuery("#ft_gallery_landscape_to_woo_model_prod").on("change",function(e){var t=jQuery("select#ft_gallery_landscape_to_woo_model_prod").val();t?(jQuery(".ftg-landscape-option-wrapper .ftg-hide-me").hide(),jQuery(".ftg-js-edit-button-holder-landscape").html('<div class="ft-gallery-edit-woo-model-prod ftg-fadein" style="display: none"><a href="'+ftg_woo.admin_url+"post.php?post="+t+'&action=edit" target="_blank">'+ftg_woo.global_product_option+"</a></div>"),jQuery(".ftg-landscape-option-wrapper .ftg-fadein").fadeIn()):jQuery(".ftg-landscape-option-wrapper .ftg-hide-me, .ftg-landscape-option-wrapper .ftg-fadein").fadeOut()}),jQuery("#ft_gallery_square_to_woo_model_prod").on("change",function(e){var t=jQuery("select#ft_gallery_square_to_woo_model_prod").val();t?(jQuery(".ftg-square-option-wrapper .ftg-hide-me").hide(),jQuery(".ftg-js-edit-button-holder-square").html('<div class="ft-gallery-edit-woo-model-prod ftg-fadein" style="display: none"><a href="'+ftg_woo.admin_url+"post.php?post="+t+'&action=edit" target="_blank">'+ftg_woo.global_product_option+"</a></div>"),jQuery(".ftg-square-option-wrapper .ftg-fadein").fadeIn()):jQuery(".ftg-square-option-wrapper .ftg-hide-me, .ftg-square-option-wrapper .ftg-fadein").fadeOut()}),jQuery("#ft_gallery_portrait_to_woo_model_prod").on("change",function(e){var t=jQuery("select#ft_gallery_portrait_to_woo_model_prod").val();t?(jQuery(".ftg-portrait-option-wrapper .ftg-hide-me").hide(),jQuery(".ftg-js-edit-button-holder-portrait").html('<div class="ft-gallery-edit-woo-model-prod ftg-fadein" style="display: none"><a href="'+ftg_woo.admin_url+"post.php?post="+t+'&action=edit" target="_blank">'+ftg_woo.global_product_option+"</a></div>"),jQuery(".ftg-portrait-option-wrapper .ftg-fadein").fadeIn()):jQuery(".ftg-portrait-option-wrapper .ftg-hide-me, .ftg-portrait-option-wrapper .ftg-fadein").fadeOut()}),jQuery("#ft_gallery_zip_to_woo_model_prod").on("change",function(e){var t=jQuery("select#ft_gallery_zip_to_woo_model_prod").val();t?(jQuery(".ftg-zip-option-wrapper .ftg-hide-me").hide(),jQuery(".ftg-js-edit-button-holder-zip").html('<div class="ft-gallery-edit-woo-model-prod ftg-fadein" style="display: none"><a href="'+ftg_woo.admin_url+"post.php?post="+t+'&action=edit" target="_blank">'+ftg_woo.global_product_option+"</a></div>"),jQuery(".ftg-zip-option-wrapper .ftg-fadein").fadeIn()):jQuery(".ftg-zip-option-wrapper .ftg-hide-me, .ftg-zip-option-wrapper .ftg-fadein").fadeOut()}),jQuery(".post-type-ft_gallery #fts-gallery-checkAll").ftgToggleClick(function(e,t){jQuery("#img1plupload-thumbs input:checkbox").attr("checked","checked"),jQuery(".ft-gallery-myCheckbox").parents(".thumb").addClass("ft-gallery-checked"),jQuery(this).html("Clear All"),jQuery(".wp-core-ui .button-primary.ft-gallery-download-selection-option").show();var o=jQuery("select#ft_gallery_image_to_woo_model_prod").val(),a=jQuery("select#ft_gallery_landscape_to_woo_model_prod").val(),r=jQuery("select#ft_gallery_square_to_woo_model_prod").val(),i=jQuery("select#ft_gallery_portrait_to_woo_model_prod").val(),l=jQuery("#ft_gallery_smart_image_orient_prod").is(":checked"),s=jQuery(".ft-gallery-myCheckbox").parents(".thumb").hasClass("ft-gallery-checked");(o&&!0===s||a&&r&&i&&l&&!0===s)&&jQuery("#ftg-tab-content1 .ft-gallery-create-woo").attr("disabled",!1)},function(){jQuery("#img1plupload-thumbs input:checkbox").removeAttr("checked"),jQuery(".ft-gallery-myCheckbox").parents(".thumb").removeClass("ft-gallery-checked"),jQuery(".wp-core-ui .button-primary.ft-gallery-download-selection-option").hide(),jQuery("#ftg-tab-content1 .ft-gallery-create-woo").attr("disabled",!0),jQuery(this).html("Select All")}),jQuery(".post-type-ft_gallery #img1plupload-thumbs .ft-gallery-myCheckbox span, .post-type-ft_gallery #img1plupload-thumbs img").ftgToggleClick(function(e,t){jQuery("#img1plupload-thumbs input").length>0&&jQuery(".wp-core-ui .button-primary.ft-gallery-download-selection-option").show(),jQuery(this).parents(".thumb").addClass("ft-gallery-checked"),jQuery(this).parents(".thumb").find("input:checkbox").attr("checked","checked");var o=jQuery("select#ft_gallery_image_to_woo_model_prod").val(),a=jQuery("select#ft_gallery_landscape_to_woo_model_prod").val(),r=jQuery("select#ft_gallery_square_to_woo_model_prod").val(),i=jQuery("select#ft_gallery_portrait_to_woo_model_prod").val(),l=jQuery("#ft_gallery_smart_image_orient_prod").is(":checked"),s=jQuery(this).parents(".thumb").hasClass("ft-gallery-checked");(o&&!0===s||a&&r&&i&&l&&!0===s)&&jQuery("#ftg-tab-content1 .ft-gallery-create-woo").attr("disabled",!1)},function(){jQuery(this).parents(".thumb").find("input:checkbox").removeAttr("checked"),jQuery(this).parents(".thumb").removeClass("ft-gallery-checked"),jQuery(".ft-gallery-myCheckbox").parents(".thumb").hasClass("ft-gallery-checked")||(jQuery(".wp-core-ui .button-primary.ft-gallery-download-selection-option").hide(),jQuery("#ftg-tab-content1 .ft-gallery-create-woo").attr("disabled",!0))}),jQuery("body").on("click","#ftg-photo-prev, #ftg-photo-next, .ft-gallery-popup .mfp-image-holder .fts-popup-image-position",function(e){jQuery("body").addClass("fts-using-arrows"),setTimeout(function(){/fbcdn.net/i.test(jQuery(".fts-iframe-popup-element").attr("src"))||/scontent.cdninstagram.com/i.test(jQuery(".fts-iframe-popup-element").attr("src"))?(jQuery("body").addClass("fts-video-iframe-choice"),jQuery(".fts-video-popup-element").show(),jQuery(".fts-iframe-popup-element").attr("src","").hide()):(jQuery("body").removeClass("fts-video-iframe-choice, .fts-using-arrows"),jQuery(".fts-video-popup-element").attr("src","").hide(),jQuery(".fts-iframe-popup-element").show())},10)});var t=new class{NextPrev(e,t,o){var a=e.length;if("current"===o)return r=e[t];if("previous"===o){if("0"===t){t=a;var r=e[a%a]}else r=e[(t+a-1)%a];return r}return"next"===o?e[(t+1)%a]:void 0}CreateTags(e,t){if("no tags"!==e){for(var o of e)jQuery(".popup-ftg-tags ul.tagchecklist").show(),jQuery(".popup-ftg-tags ul.tagchecklist").append('<li class="ftg-term-li" data-termli="'+o.term_id+'"><button type="button" id="delete-media-term-'+o.term_id+'" data-termid="'+o.term_id+'" data-imageid="'+t+'" class="delete-media-term ntdelbutton"><span class="remove-tag-icon" aria-hidden="true"></span><span class="screen-reader-text">Remove Tag: '+o.name+"</span></button>&nbsp; "+o.name+"</li>");jQuery(".ftg-tags-none").hide()}else jQuery(".popup-ftg-tags ul.tagchecklist").hide(),jQuery(".ftg-tags-none").show()}SetImageAttr(e){jQuery("div.ft-gallery-popup-form").hasClass("ftg-premium-active")&&document.querySelector(".popup-ftg-tags button.save-media-term").setAttribute("data-imageid",e)}UpdatePopInfo(e,t=null){jQuery(".fts-gallery-title").val(e.title),jQuery(".fts-gallery-alttext").show().val(e.alt),jQuery(".fts-gallery-description").show().val(e.description),!0!==t&&jQuery(".fts-gallery-tags-edit-wrap").val(e.tags)}PopAjax(e,t,o){return jQuery.ajax({data:{action:e,id:t,nonce:o},type:"post",url:ssAjax.ajaxurl,success:e=>{let o=JSON.parse(e);if(this.UpdatePopInfo(o),!jQuery(".ft-gallery-popup-form").hasClass("ftg-premium-not-active")){let e=o.tags;this.CreateTags(e,t)}},error:()=>{alert("Error, please contact us at https://www.slickremix.com/support/ for help.")}}),!1}};jQuery(".plupload-thumbs").each(function(){var e=jQuery(this).find("button.ft-gallery-edit-img-popup"),t=[];for(var o of e){var a={imgid:o.dataset.id,src:o.dataset.imageurl,nonce:o.dataset.nonce,type:"image",delegate:".thumb:not(.hidden)",woo_option:""};"fts-jal-fb-vid-image"===o.className&&(a.type="iframe"),jQuery("div").hasClass("ft-gallery-woo-btns-wrap-for-popup")&&(a.woo_option=jQuery(o).parents(".thumb").find(".ft-gallery-woo-btns-wrap-for-popup").html()),a.title=jQuery(o).parents(".thumb").find(".ft-image-id-for-popup").html()+document.querySelector(".ft-gallery-popup-form").innerHTML+a.woo_option,t.push(a)}e.magnificPopup({mainClass:"ft-gallery-popup ft-gallery-styles-popup",items:t,removalDelay:150,preloader:!1,closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!1,enableEscapeKey:!0,autoFocusLast:!1,gallery:{enabled:!0,navigateByImgClick:!1,tCounter:'<span class="mfp-counter">%curr% of %total%</span>',preload:[0,1],arrowMarkup:""},callbacks:{beforeOpen:function(){var t=e.index(this.st.el);-1!==t&&this.goTo(t)},open:function(){if(jQuery(document).off(".mfp-gallery"),jQuery(".fts-popup-half .mfp-iframe-scaler")[0]&&jQuery(".fts-popup-image-position").css("height","591px"),jQuery(window).resize(function(){jQuery(".fts-popup-second-half .mfp-bottom-bar").css("height",jQuery(".fts-popup-image-position").height()),jQuery(".fts-popup-image-position, .fts-popup-second-half .mfp-bottom-bar").css("height",jQuery(".mfp-img").height())}),jQuery(window).trigger("resize"),matchMedia("only screen and (max-device-width: 736px)").matches){var e=event.target.id,t=jQuery("#"+e).data("poster");jQuery(".fts-fb-vid-popup video").attr("poster",t)}jQuery("body").addClass("fts-using-arrows")},change:function(){jQuery("body").hasClass("fts-using-arrows")&&(jQuery(".fts-popup-half .mfp-iframe-scaler")[0]?jQuery(".fts-popup-image-position").css("height","591px"):"auto"==jQuery(".fts-popup-image-position").css("height")&&(jQuery(".fts-popup-image-position, .fts-popup-second-half .mfp-bottom-bar").css("height",jQuery(".mfp-img").height()),alert("image")))},imageLoadComplete:function(){jQuery(".fts-popup-image-position, .fts-popup-second-half .mfp-bottom-bar").height()<jQuery(".mfp-img").height()?jQuery(".fts-popup-image-position, .fts-popup-second-half .mfp-bottom-bar").css("height",jQuery(".mfp-img").height()):jQuery(".fts-popup-second-half .mfp-bottom-bar").css("height",jQuery(".fts-popup-image-position").height())},markupParse:function(e,t,o){if(!jQuery("body").hasClass("fts-using-arrows")){var a=o.src;/fbcdn.net/i.test(a)&&"image"!==o.type?jQuery("body").addClass("fts-video-iframe-choice"):jQuery("body").hasClass("fts-using-arrows")||jQuery("body").removeClass("fts-video-iframe-choice")}},afterClose:function(){jQuery("body").removeClass("fts-using-arrows")}},image:{markup:'<div class="mfp-figure"><div class="mfp-close">X</div><div class="fts-popup-wrap">    <div class="fts-popup-half ">               <button title="previous" type="button" id="ftg-photo-prev" class="mfp-arrow mfp-arrow-left mfp-prevent-close"></button>           <div class="fts-popup-image-position" style="height:591px;">                   <span class="fts-position-helper"></span><div class="mfp-img"></div>       </div>               <button title="next" type="button" id="ftg-photo-next" class="mfp-arrow mfp-arrow-right mfp-prevent-close"></button>    </div><div class="fts-popup-second-half"><div class="mfp-bottom-bar"><div class="mfp-title"></div><a class="fts-powered-by-text" href="https://slickremix.com" target="_blank">Powered by Feed Them Gallery</a><div class="mfp-counter"></div></div></div></div></div>',tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'},iframe:{markup:'<div class="mfp-figure"><div class="mfp-close">X</div><div class="fts-popup-wrap">    <div class="fts-popup-half ">               <button title="previous" type="button" id="ftg-photo-prev" class="mfp-arrow mfp-arrow-left mfp-prevent-close"></button>           <div class="fts-popup-image-position">                           <div class="mfp-iframe-scaler"><iframe class="mfp-iframe fts-iframe-popup-element" frameborder="0" allowfullscreen></iframe><video class="mfp-iframe fts-video-popup-element" allowfullscreen autoplay controls></video>                           </div>               <button title="next" type="button" id="ftg-photo-next" class="mfp-arrow mfp-arrow-right mfp-prevent-close"></button><script>if(jQuery("body").hasClass("fts-video-iframe-choice")){jQuery(".fts-iframe-popup-element").attr("src", "").hide(); } else if(!jQuery("body").hasClass("fts-using-arrows")){jQuery(".fts-video-popup-element").attr("src", "").hide(); };  jQuery(".ft-gallery-popup video").click(function(){jQuery(this).trigger(this.paused ? this.paused ? "play" : "play" : "pause")});<\/script>       </div>    </div><div class="fts-popup-second-half"><div class="mfp-bottom-bar"><div class="mfp-title"></div><a class="fts-powered-by-text" href="https://slickremix.com" target="_blank">Powered by Feed Them Social</a><div class="mfp-counter"></div></div></div></div></div>',srcAction:"iframe_src"}})}),jQuery(document).on("click","#ft-gallery-edit-img-ajax",function(){event.preventDefault();var e=jQuery.magnificPopup.instance,o=t.NextPrev(e.items,e.index,"current"),a={action:"ft_gallery_edit_image_ajax",id:o.data.imgid,nonce:o.data.nonce,title:jQuery(document).find(".fts-gallery-title").val(),alttext:jQuery(document).find(".fts-gallery-alttext").val(),description:jQuery(document).find(".fts-gallery-description").val()};return jQuery.ajax({data:a,type:"POST",url:ssAjax.ajaxurl,beforeSend:()=>{jQuery(".ft-submit-wrap").append('<div class="fa fa-cog fa-spin fa-3x fa-fw ft-gallery-loader"></div>'),jQuery(".ft-gallery-success").remove()},success:e=>{let o=JSON.parse(e);t.UpdatePopInfo(o,!0),jQuery(".ft-gallery-loader").remove(),jQuery(".ft-submit-wrap").append('<div class="fa fa-check-circle fa-3x fa-fw ft-gallery-success" ></div>'),setTimeout("jQuery('.ft-gallery-success').fadeOut();",2e3)},error:()=>{alert("Error, please contact us at http://slickremix.com/support-forum for help.")}}),!1}),jQuery(document).on("click",".fts-popup-image-position, #ftg-photo-next",()=>{var e=jQuery.magnificPopup.instance;let o=t.NextPrev(e.items,e.index,"next"),a=o.data.imgid,r=o.data.nonce;e.next(),jQuery(".fts-popup-image-position, .fts-popup-second-half .mfp-bottom-bar").height()<jQuery(".mfp-img").height()?jQuery(".fts-popup-image-position, .fts-popup-second-half .mfp-bottom-bar").css("height",jQuery(".mfp-img").height()):jQuery(".fts-popup-second-half .mfp-bottom-bar").css("height",jQuery(".fts-popup-image-position").height()),t.SetImageAttr(a),t.PopAjax("ft_gallery_update_image_information_ajax",a,r)}),jQuery(document).on("click","#ftg-photo-prev",()=>{var e=jQuery.magnificPopup.instance;let o=t.NextPrev(e.items,e.index,"previous"),a=o.data.imgid,r=o.data.nonce;e.prev(),jQuery(".fts-popup-image-position, .fts-popup-second-half .mfp-bottom-bar").height()<jQuery(".mfp-img").height()?jQuery(".fts-popup-image-position, .fts-popup-second-half .mfp-bottom-bar").css("height",jQuery(".mfp-img").height()):jQuery(".fts-popup-second-half .mfp-bottom-bar").css("height",jQuery(".fts-popup-image-position").height()),t.SetImageAttr(a),t.PopAjax("ft_gallery_update_image_information_ajax",a,r)}),jQuery(".ft-gallery-edit-thumb-btn").on("click",".ft-gallery-edit-img-popup",function(){let e=this.dataset.id,o=this.dataset.nonce;t.SetImageAttr(e),t.PopAjax("ft_gallery_update_image_information_ajax",e,o)}),jQuery(".ft-gallery-remove-thumb-btn").on("click",".ft-gallery-remove-img-ajax",function(e){e.preventDefault();var t=jQuery(this).data("id"),o=jQuery(this).data("nonce"),a=jQuery(this).data("ft-gallery-img-remove"),r=jQuery(this);return jQuery.ajax({data:{action:"ft_gallery_update_image_ajax",id:t,nonce:o,ft_gallery_img_remove:a},type:"POST",url:ssAjax.ajaxurl,success:function(e){jQuery(r).parents(".thumb").hide()},error:function(){alert("Error, please contact us at https://www.slickremix.com/support/ for help.")}}),!1}),jQuery(".ft-gallery-delete-thumb-btn").on("click",".ft-gallery-force-delete-img-ajax",function(e){if(e.preventDefault(),1!=confirm('You are about to permanently delete this item from your site.\nThis action cannot be undone.\n\n"Cancel" to stop, "OK" to delete.'))return!1;txt="You pressed OK!";var t=jQuery(this).data("id"),o=jQuery(this).data("nonce"),a=jQuery(this);return jQuery.ajax({data:{action:"ft_gallery_delete_image_ajax",id:t,nonce:o},type:"POST",url:ssAjax.ajaxurl,success:function(e){jQuery(a).parents(".thumb").remove()},error:function(){alert("Error, please contact us at http://slickremix.com/support-forum for help.")}}),!1})});
