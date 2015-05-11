(function(e){e.fn.quicksand=function(t,n){var r={duration:1e3,easing:"swing",attribute:"data-id",adjustHeight:"auto",adjustWidth:"auto",useScaling:true,enhancement:function(t){e("a[rel^='prettyPhoto']").prettyPhoto();e("ul.ourHolder").css("width","100%")},selector:"> *",atomic:true,dx:500,dy:0,maxWidth:0,retainExisting:false};e.extend(r,n);if(e.browser.msie||typeof e.fn.scale=="undefined"){r.useScaling=false}var i;if(typeof arguments[1]=="function"){i=arguments[1]}else if(typeof (arguments[2]=="function")){i=arguments[2]}return this.each(function(n){var s;var o=[];var u;if(typeof r.attribute=="function"){u=e(t)}else{u=e(t).filter("["+r.attribute+"]").clone()}var a=e(this);var f=e(this).css("height");var l=e(this).css("width");var c,h;var p=false;var d=false;var v=e(a).offset();var m=[];var g=e(this).find(r.selector);var y=e(g).innerWidth();if(e.browser.msie&&parseInt(e.browser.version,10)<7){a.html("").append(u);return}var b=0;var w=function(){e(this).css("margin","").css("position","").css("top","").css("left","").css("opacity","");if(!b){b=1;if(!r.atomic){var t=a.find(r.selector);if(!r.retainExisting){a.prepend(N.find(r.selector));t.remove()}else{var n=e([]);N.find(r.selector).each(function(i){var s=e([]);if(typeof r.attribute=="function"){var o=r.attribute(e(this));t.each(function(){if(r.attribute(this)==o){s=e(this);return false}})}else{s=t.filter("["+r.attribute+'="'+e(this).attr(r.attribute)+'"]')}if(s.length>0){n=n.add(s);if(i===0){a.prepend(s)}else{s.insertAfter(a.find(r.selector).get(i-1))}}});t.not(n).remove()}if(p){a.css("height",c)}if(d){a.css("width",l)}}r.enhancement(a);if(typeof i=="function"){i.call(this)}}if(false===r.adjustHeight){a.css("height","auto")}if(false===r.adjustWidth){a.css("width","auto")}};var E=a.offsetParent();var S=E.offset();if(E.css("position")=="relative"){if(E.get(0).nodeName.toLowerCase()!="body"){S.top+=parseFloat(E.css("border-top-width"))||0;S.left+=parseFloat(E.css("border-left-width"))||0}}else{S.top-=parseFloat(E.css("border-top-width"))||0;S.left-=parseFloat(E.css("border-left-width"))||0;S.top-=parseFloat(E.css("margin-top"))||0;S.left-=parseFloat(E.css("margin-left"))||0}if(isNaN(S.left)){S.left=0}if(isNaN(S.top)){S.top=0}S.left-=r.dx;S.top-=r.dy;a.css("height",e(this).height());a.css("width",e(this).width());g.each(function(t){m[t]=e(this).offset()});e(this).stop();var x=0;var T=0;g.each(function(t){e(this).stop();var n=e(this).get(0);if(n.style.position=="absolute"){x=-r.dx;T=-r.dy}else{x=r.dx;T=r.dy}n.style.position="absolute";n.style.margin="0";if(!r.adjustWidth){n.style.width=y+"px"}n.style.top=m[t].top-parseFloat(n.style.marginTop)-S.top+T+"px";n.style.left=m[t].left-parseFloat(n.style.marginLeft)-S.left+x+"px";if(r.maxWidth>0&&m[t].left>r.maxWidth){n.style.display="none"}});var N=e(a).clone();var C=N.get(0);C.innerHTML="";C.setAttribute("id","");C.style.height="auto";C.style.width=a.width()+"px";N.append(u);N.insertBefore(a);N.css("opacity",0);C.style.zIndex=-1;C.style.margin="0";C.style.position="absolute";C.style.top=v.top-S.top+"px";C.style.left=v.left-S.left+"px";if(r.adjustHeight==="dynamic"){a.animate({height:N.height()},r.duration,r.easing)}else if(r.adjustHeight==="auto"){c=N.height();if(parseFloat(f)<parseFloat(c)){a.css("height",c)}else{p=true}}if(r.adjustWidth==="dynamic"){a.animate({width:N.width()},r.duration,r.easing)}else if(r.adjustWidth==="auto"){h=N.width();if(parseFloat(l)<parseFloat(h)){a.css("width",h)}else{d=true}}g.each(function(t){var n=[];if(typeof r.attribute=="function"){s=r.attribute(e(this));u.each(function(){if(r.attribute(this)==s){n=e(this);return false}})}else{n=u.filter("["+r.attribute+'="'+e(this).attr(r.attribute)+'"]')}if(n.length){if(!r.useScaling){o.push({element:e(this),dest:n,style:{top:e(this).offset().top,left:e(this).offset().left,opacity:""},animation:{top:n.offset().top-S.top,left:n.offset().left-S.left,opacity:1}})}else{o.push({element:e(this),dest:n,style:{top:e(this).offset().top,left:e(this).offset().left,opacity:""},animation:{top:n.offset().top-S.top,left:n.offset().left-S.left,opacity:1,scale:"1.0"}})}}else{if(!r.useScaling){o.push({element:e(this),style:{top:e(this).offset().top,left:e(this).offset().left,opacity:""},animation:{opacity:"0.0"}})}else{o.push({element:e(this),animation:{opacity:"0.0",style:{top:e(this).offset().top,left:e(this).offset().left,opacity:""},scale:"0.0"}})}}});u.each(function(t){var n=[];var i=[];if(typeof r.attribute=="function"){s=r.attribute(e(this));g.each(function(){if(r.attribute(this)==s){n=e(this);return false}});u.each(function(){if(r.attribute(this)==s){i=e(this);return false}})}else{n=g.filter("["+r.attribute+'="'+e(this).attr(r.attribute)+'"]');i=u.filter("["+r.attribute+'="'+e(this).attr(r.attribute)+'"]')}var f;if(n.length===0&&i.length>0){if(!r.useScaling){f={opacity:"1.0"}}else{f={opacity:"1.0",scale:"1.0"}}var l=i.clone();var c=l.get(0);c.style.position="absolute";c.style.margin="0";if(!r.adjustWidth){c.style.width=y+"px"}c.style.top=i.offset().top-S.top+"px";c.style.left=i.offset().left-S.left+"px";l.css("opacity",0);if(r.useScaling){l.css("transform","scale(0.0)")}l.appendTo(a);if(r.maxWidth===0||i.offset().left<r.maxWidth){o.push({element:e(l),dest:i,animation:f})}}});N.remove();if(!r.atomic){r.enhancement(a);for(n=0;n<o.length;n++){o[n].element.animate(o[n].animation,r.duration,r.easing,w)}}else{$toDelete=a.find(r.selector);a.prepend(N.find(r.selector));for(n=0;n<o.length;n++){if(o[n].dest&&o[n].style){var k=o[n].dest;var L=k.offset();k.css({position:"relative",top:o[n].style.top-L.top,left:o[n].style.left-L.left});k.animate({top:"0",left:"0"},r.duration,r.easing,w)}else{o[n].element.animate(o[n].animation,r.duration,r.easing,w)}}$toDelete.remove()}})}})(jQuery)