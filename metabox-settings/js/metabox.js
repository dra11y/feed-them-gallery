function plu_show_thumbs(e,t){for(var a,i=jQuery,l=i(".thumb"),r="list_item_"+t,o=i("#"+e).val(),s=o.split(","),n=0;n<s.length;n++){s[n]&&(a=i('<li class="thumb thumb-new" id="'+r+'"><img src="'+s[n]+'" alt="" /><div class="thumbi"><a id="thumbremovelink'+e+n+'" href="#" style="display: none">Delete</a></div> <div class="clear"></div></li>'),i("#img1plupload-thumbs").prepend(a),a.find("a").click(function(){var e=i(this).attr("id").replace("thumbremovelink"+r,""),e=parseInt(e),t=[];o=i("#"+r).val(),s=o.split(",");for(var a=0;a<s.length;a++)a!=e&&(t[t.length]=s[a]);return!1}))}jQuery("#img1plupload-thumbs").sortable({items:"li",opacity:1,cursor:"move",update:function(){var t=jQuery(this).data("post-id"),e=jQuery(this).sortable("serialize")+"&action=list_update_order";jQuery.post(ajaxurl,e,function(e){console.log(e),console.log(t)})}}),l.disableSelection()}jQuery(document).ready(function(a){a(".ftg-select2").select2(),a("a#dgd_library_button").click(function(e){var t=wp.media.controller.Library.extend({defaults:_.defaults({id:"insert-image",title:"Insert Image Url",allowLocalEdits:!0,displaySettings:!0,displayUserSettings:!0,multiple:!0,type:"image"},wp.media.controller.Library.prototype.defaults)}),i=wp.media({button:{text:"Select"},state:"insert-image",states:[new t]});i.on("close",function(){i.state("insert-image").get("selection").length}),i.on("select",function(){var s=i.state("insert-image"),e=s.get("selection");console.log(e),e&&e.each(function(e){var a,t,i,l=s.display(e).toJSON(),r=e.toJSON(),o=r.caption;wp.media.view.settings.captions||delete r.caption,l=wp.media.string.props(l,r),a={id:r.id,post_content:r.description,post_excerpt:o},l.linkUrl&&(a.url=l.linkUrl),"image"===r.type?(t=wp.media.string.image(l),_.each({align:"align",size:"image-size",alt:"image_alt"},function(e,t){l[t]&&(a[e]=l[t])})):"video"===r.type?t=wp.media.string.video(l,r):"audio"===r.type?t=wp.media.string.audio(l,r):(t=wp.media.string.link(l),a.post_title=l.title),e.attributes.nonce=wp.media.view.settings.nonce.sendToEditor,e.attributes.attachment=a,e.attributes.html=t,e.attributes.post_id=wp.media.view.settings.post.id,i=e.attributes.sizes.ft_gallery_thumb?e.attributes.sizes.ft_gallery_thumb.url:e.attributes.sizes.thumbnail.url,jQuery("#img1plupload-thumbs").prepend('<li class="thumb" id="list_item_'+e.id+'" data-image-id="'+e.id+'"><img src="'+i+'" alt="" /><div class="clear"></div></li>'),jQuery.ajax({data:{action:"ft_gallery_edit_image_ajax",id:e.id,postID:jQuery("#img1plupload-thumbs").attr("data-post-id"),nonce:"attach_image"},type:"post",url:ssAjax.ajaxurl,success:function(e){console.log("Well Done and got this from sever: "+e)},error:function(){alert("Error, please contact us at https://slickremix.com/ for help.")}})})}),i.on("open",function(){var a=i.state("insert-image").get("selection");a.each(function(e){var t=wp.media.attachment(e.attributes.id);t.fetch(),a.remove(t?[t]:[])})}),i.open()}),(jQuery("div.ft-gallery-popup-form").hasClass("ftg-premium-active")||jQuery("body").hasClass("post-type-ft_gallery_albums"))&&jQuery('<div id="ftg-watermark-logo-wrap"></div>').insertAfter("#ft-watermark-image"),a("input#ft-watermark-image").click(function(e){e.preventDefault();var t=wp.media({id:"dgd_featured_image",title:dgd_strings.panel.title,multiple:!1,library:{type:"image"},button:{text:dgd_strings.panel.button}});t.on("select",function(){var e=t.state().get("selection").first().toJSON();return jQuery("#ft_watermark_image_input").val(e.url),jQuery("#ft_watermark_image_id").val(e.id),jQuery("#ftg-watermark-logo-wrap").html('<img src="'+e.url+'" class="ft-watermark-image-thumb" /><br/>'),jQuery.ajax({data:{action:"ft_gallery_update_image_ajax",id:e.id,nonce:e.id,ft_gallery_img_remove:"true"},type:"POST",url:ssAjax.ajaxurl,beforeSend:function(){},success:function(e){console.log("Well Done and got this from sever: "+e)},error:function(){alert("Error, please contact us at https://www.slickremix.com/support for help.")}}),!1}),t.open()}),""!==jQuery("#ft-watermark-image").val()&&jQuery("#ftg-watermark-logo-wrap").html('<img src="'+jQuery("#ft_watermark_image_input").val()+'" class="ft-watermark-image-thumb ft-watermark-existing" /><br/>'),a("body").on("click","a.wp-post-thumbnail",function(e){parent.tb_remove(),parent.location.reload(1)}),a("body").on("click","a#insert-media-button",function(){var e,t;"undefined"!=typeof wp&&(e=a(".wp-media-buttons:eq(0) .add_media").attr("data-editor"),(t=void 0!==(t=wp.media.editor.get(e))?t:wp.media.editor.add(e))&&t.on("select",function(){"featured-image"===t.state().id&&doFetchFeaturedImage()}))}),jQuery("#img1plupload-thumbs").sortable({items:"li",opacity:1,cursor:"move",update:function(){var t=jQuery(this).data("post-id"),a=jQuery(this).sortable("serialize")+"&post_id="+t+"&action=list_update_order";jQuery.post(ajaxurl,a,function(e){console.log(e),console.log(t),console.log(a)})}})}),jQuery.fn.exists=function(){return 0<jQuery(this).length},jQuery(document).ready(function(m){var i;m(".plupload-upload-uic").exists()&&(i=!1,m(".plupload-upload-uic").each(function(){var e,t,p=m(this),c=p.attr("id").replace("plupload-upload-ui","");plu_show_thumbs(c),(i=JSON.parse(JSON.stringify(base_plupload_config))).browse_button=c+i.browse_button,i.container=c+i.container,i.drop_element,i.file_data_name=c+i.file_data_name,i.multipart_params.imgid=c,i.multipart_params._ajax_nonce=p.find(".ajaxnonceplu").attr("id").replace("ajaxnonceplu",""),p.hasClass("plupload-upload-uic-multiple")&&(i.multi_selection=!0),p.find(".plupload-resize").exists()&&(e=parseInt(p.find(".plupload-width").attr("id").replace("plupload-width","")),t=parseInt(p.find(".plupload-height").attr("id").replace("plupload-height","")),i.resize={width:e,height:t,quality:100});var a=new plupload.Uploader(i);a.bind("Init",function(e){var t=m("#plupload-upload-ui");e.features.dragdrop?(t.addClass("drag-drop"),m("#drag-drop-area").bind("dragover.wp-uploader",function(){t.addClass("drag-over")}).bind("dragleave.wp-uploader, drop.wp-uploader",function(){t.removeClass("drag-over")})):(t.removeClass("drag-drop"),m("#drag-drop-area").unbind(".wp-uploader"))}),a.init(),a.bind("FilesAdded",function(e,t){m.each(t,function(e,t){p.find(".filelist").append('<div class="file" id="'+t.id+'"><b>'+t.name+'</b> (<span class="ftg-file-size">'+plupload.formatSize(0)+"</span>/"+plupload.formatSize(t.size)+')  <span class="ftg-finishing"></span><div class="fileprogress"></div></div>')}),e.refresh(),e.start()}),a.bind("UploadProgress",function(e,t){m("#"+t.id+" .fileprogress").width(t.percent+"%"),m("#"+t.id+" span.ftg-file-size").html(plupload.formatSize(parseInt(t.size*t.percent/100))),setTimeout(function(){100==t.percent&&m("#"+t.id+" span.ftg-finishing").html("<strong>Finishing up, please be patient</strong>")},5e3)}),a.bind("FileUploaded",function(e,t,a){var i;m("#"+t.id).fadeOut(),m("#"+t.id).addClass("ftg-upload-complete"),a=JSON.parse(a.response),p.hasClass("plupload-upload-uic-multiple")?(i=m.trim(m("#"+c).val()),i=a.url,m("#"+c).val(i)):m("#"+c).val(a.url+""),plu_show_thumbs(c,a.id);var l,r,o=jQuery("select#ft_gallery_image_to_woo_model_prod").val(),s=jQuery("select#ft_gallery_landscape_to_woo_model_prod").val(),n=jQuery("select#ft_gallery_square_to_woo_model_prod").val(),d=jQuery("select#ft_gallery_portrait_to_woo_model_prod").val(),u=jQuery("#ft_gallery_smart_image_orient_prod").is(":checked");console.log(o),jQuery("#uploaderSection").hasClass("ftg-auto-create-product-on-upload")||jQuery("#ft_gallery_auto_image_woo_prod").is(":checked")?o||s&&n&&d&&u?(ft_gallery_image_to_woo_on_upload(a.id,jQuery("#img1plupload-thumbs").attr("data-post-id")),jQuery("#ftg-tab-content1 .ft-gallery-notice").removeClass("error"),jQuery("#ftg-tab-content1 .ft-gallery-notice").removeClass("ftg-block"),jQuery("#ftg-tab-content1 .ft-gallery-notice").html("")):(jQuery("#ftg-tab-content1 .ft-gallery-notice").addClass("error"),jQuery("#ftg-tab-content1 .ft-gallery-notice").addClass("ftg-block"),jQuery("#ftg-tab-content1 .ft-gallery-notice").html(ftg_woo.must_have_option_selected_to_create_products+'<div class="ft-gallery-notice-close"></div>'),console.log("error")):(l=jQuery(".file"),r=jQuery(".file.ftg-upload-complete"),l.length===r.length&&setTimeout(function(){jQuery("#ftg-tab-content1 .ft-gallery-notice").addClass("updated"),jQuery("#ftg-tab-content1 .ft-gallery-notice").addClass("ftg-block"),jQuery("#ftg-tab-content1 .ft-gallery-notice").html(updatefrombottomParams.images_complete_on_auto_upload),jQuery("#ftg-tab-content1 .ft-gallery-notice").append('<div class="ft-gallery-notice-close"></div>'),console.log("made it")},500))})}))});