﻿(function(){function la(b){function u(){q=G();r=L();m=H();k.css("cssText",c("-webkit-transform:scale("+m+")",1));setTimeout(function(){t.removeClass("fby-zoom")},50)}var x,h,f="right";"string"==typeof b||"number"==typeof b?x=Number(b):"object"==typeof b&&(b.id&&(x=Number(b.id)),b.position&&(f=b.position),b.color&&(h=b.color));new ma(x);b=["fby-tab","right"==f?"fby-tab-r":"fby-tab-l"];var g=q=G();r=L();m=H();h=e(['<div class="'+b.join(" ")+'">','<div class="fby-tab-scale"'+c("-webkit-transform:scale("+
m+")")+">",'<div class="fby-tab-content"'+(h?c("background-color:"+h):"")+">",S,"</div></div></div>"].join("")).prependTo(t);t.removeClass("fby-zoom");var k=h.find(".fby-tab-scale");h=h.find(".fby-tab-content");e(window).on("resize",function(){setTimeout(function(){q=G();q!=g&&(g=q,u())},200)});setInterval(function(){if(E){var c;300<(new Date).getTime()-E&&(E=0,c=H(),c!=m&&u())}},100);h.on("click",function(c){setTimeout(function(){T(x)},10)})}function T(b){function u(){var b=Math.round((new Date).getTime())-
T;if(b<P)return setTimeout(u,P-b),!1;a=d.data=FBY.forms[z].data;var f;a.logo&&(f=ga+"/"+(a.logo.path?a.logo.path:z+"/logo.jpg?"+a.logo.ts));a.s1_intro&&(a.s1_intro=U(a.s1_intro));a.s2_main&&(a.s2_main=U(a.s2_main));a.s3_main&&(a.s3_main=U(a.s3_main));a.checkbox&&(a.s2_checkbox_intro=U(a.s2_checkbox_intro));"undefined"==typeof a.validation&&(a.validation=1);"undefined"==typeof a.text_req&&(a.text_req=1);"undefined"==typeof a.rating_scale&&(a.rating_scale=10);"undefined"==typeof a.reverse&&(a.reverse=
0);a.contact?(a.s2_email_field=a.contact&1,a.s2_phone_field=a.contact&2,a.s2_name_field=a.contact&4,a.s2_skip=a.contact&128):(a.s2_email_field=1,a.s2_phone_field=0,a.s2_name_field=0,a.s2_skip=0);"undefined"==typeof a.s1_email&&(a.s1_email=0);"undefined"==typeof a.s1_email_req&&(a.s1_email_req=0);"undefined"==typeof a.s1_email_intro&&(a.s1_email_intro="Please enter your email address:");"undefined"==typeof a.s1_err_email&&(a.s1_err_email="Please enter a valid email address...");b={};if(5==a.rating_scale)for(var g=
1;5>=g;g++)b[g]=g;else if(a.reverse)for(g=10;0<=g;g--)b[g]=g;else for(g=0;10>=g;g++)b[g]=g;var k=0,m=e.map(b,function(a,c){return c}).length,q=Math.floor(100/m)+"%",l=[];l.push(['<div class="rating">','<table cellspacing="0"'+c("width:100%")+">","<tr"+c("width:100%")+">"].join(""));e.each(b,function(a,b){var d=[];0==k&&d.push("first");k==m-1&&d.push("last");l.push(['<td unselectable="on" class="',d.join(" "),'"'+c("width:"+q)+' data-score="'+a+'">',"<input"+c("display:none")+' type="radio" name="score" id="score-'+
a+'" idx="'+a+'" value="'+a+'" />',b,"</td>"].join(""));k++});l.push("</tr></table></div>");var r=0,v=a.cats.o?a.cats.o[0].length:0,t=[];t.push(['<div class="cat-subcat"><table><tr>','<td class="categories"'+c("vertical-align:top")+">",'<table cellspacing="0" class="content-width">'].join(""));e.each(a.cats.o[0],function(c,b){var d=[];0==r&&d.push("first");r==v-1&&d.push("last");t.push(['<tr class="category"><td unselectable="on" class="',d.join(" "),'" data-category="'+b+'">',a.cats.n[b]+(a.cats.o[b]?
" &raquo;":""),"</td></tr>"].join(""));r++});t.push(["</table></td>","<td"+c("padding:5px")+"></td>",'<td class="subcategories"'+c("vertical-align:top")+"></td>","</tr></table></div>"].join(""));n.html([a.logo?'<img src="'+f+'"'+c("display:block;width:"+a.logo.w+"px;height:"+a.logo.h+"px;margin:4px 0 10px")+"/>":"",'<div class="fby-main">',"<div"+c("font-weight:bold;margin-bottom:15px")+">",a.s1_head,"</div>","<div"+c("margin-bottom:15px")+">",a.s1_intro,'</div><div class="rating-question">',"<div"+
c("margin-bottom:10px")+">",a.s1_rating,"</div>","<div"+c("margin-bottom:15px")+">",l.join(""),'</div></div><div class="category-question">',"<div"+c("margin-bottom:15px")+">",a.s1_catintro,"</div>",'<div class="content-width"'+c("margin-bottom:15px;overflow:hidden")+">",t.join(""),"</div></div>",'<div class="fby-text-container"'+(1!=v||a.pre?"":c("display:none"))+">","<div"+c("margin-bottom:10px")+">",a.s1_txtintro,"</div>","<div"+c("margin-bottom:15px")+">",'<textarea class="feedback-text content-width"'+
c("height:80px;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-appearance:none;padding:5px;line-height:1.4;border:1px solid #aaa;border-radius:5px;background:#f9f9f9;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px;color:#333")+"></textarea>","</div></div>",a.s1_email&&!d.email?["<div"+c("margin-bottom:10px")+">",a.s1_email_intro,"</div>","<div"+c("margin-bottom:15px")+">",'<input type="email" name="fby-email" value="" class="content-width"'+c("-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-appearance:none;padding:5px;line-height:1.4;border:1px solid #aaa;border-radius:5px;background:#f9f9f9;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px;color:#333")+
"/>","</div>"].join(""):"",'<div class="fby-nav-container"><span class="fby-button">',a.s1_send_button,'</span><span class="fby-close">',a.s1_cancel,"</span></div></div>"].join(""));$form.find(".fby-link").css("cssText",c("display:block",1));I();y=n.find(".fby-main");A=n.find(".cat-subcat");V=n.find(".categories");J=n.find(".subcategories");E=n.find(".feedback-text");if(a.pre&&0<a.pre&&"undefined"!=typeof a.cats.n[a.pre]){var p=null;V.find("td").each(function(c,b){var d=e(b);d.data("category")==a.pre&&
(p=d)});p&&(d.selectedCatId=Number(p.data("category")),p.addClass("on"),p.closest("tr").prev().find("td").addClass("prev"))}$form.find(".rating td").on("click",function(a){a=e(this);d.score=Number(a.data("score"));a.addClass("on");a.siblings().removeClass("on prev");a.prev().addClass("prev")});$form.find(".categories td").on("click",function(b){b=e(this);var f=d.selectedCatId=Number(b.data("category"));V.find("td").removeClass("on prev");b.addClass("on");b.closest("tr").prev().find("td").addClass("prev");
var h=a.cats.o[f]?a.cats.o[f].length:0;h?setTimeout(function(){var b=0,g=[];g.push(["<div"+c("margin-bottom:10px")+'><span class="back">'+a.cats.n[f]+" &raquo;</span></div>",'<table cellspacing="0" class="content-width">'].join(""));e.each(a.cats.o[f],function(c,d){var f=[];0==b&&f.push("first");b==h-1&&f.push("last");g.push(['<tr class="category"><td unselectable="on" class="',f.join(" "),'" data-subcategory="'+d+'">',a.cats.n[d],"</td></tr>"].join(""));b++});g.push("</table>");J.html(g.join(""));
M();I();$form.find(".subcategories td").on("click",function(a){a=e(this);d.selectedSubcatId=Number(a.data("subcategory"));J.find("td").removeClass("on prev");a.addClass("on");a.closest("tr").prev().find("td").addClass("prev");n.find("div.fby-text-container").css("cssText",c("display:block",1))});$form.find("span.back").on("click",function(a){d.selectedCatId=0;d.selectedSubcatId=0;V.find("td").removeClass("on prev");A.css("cssText",c("left:0",1));w=!1;var b=setInterval(function(){"0px"==A.css("left")&&
(clearInterval(b),J.html(""))},50)});setTimeout(function(){A.css("cssText",c("left:"+(J.width()-A.children().eq(0).width())+"px",1));w=!0},10)},100):n.find("div.fby-text-container").css("cssText",c("display:block",1))});$form.find("span.fby-close").on("click",function(a){x()});$form.find("span.fby-button").on("click",function(c){if(C)return!1;c=e(this);d.feedbackTxt=e.trim(E.val());var b="";1==a.validation?d.selectedCatId?a.cats.o[d.selectedCatId]&&!d.selectedSubcatId?b=a.s1_err_nosubcat:a.text_req&&
""==d.feedbackTxt&&(b=a.s1_err_notext):""!=d.feedbackTxt?b=a.s1_err_nosubcat:0>d.score&&(b=a.s1_err_noscore):2==a.validation?0>d.score?b=a.s1_err_noscore:d.selectedCatId?a.cats.o[d.selectedCatId]&&!d.selectedSubcatId?b=a.s1_err_nosubcat:a.text_req&&""==d.feedbackTxt&&(b=a.s1_err_notext):b=a.s1_err_noscore:3==a.validation?0>d.score&&(b=a.s1_err_noscore):4==a.validation&&(d.selectedCatId?a.cats.o[d.selectedCatId]&&!d.selectedSubcatId?b=a.s1_err_nosubcat:a.text_req&&""==d.feedbackTxt&&(b=a.s1_err_notext):
b=a.s1_err_nosubcat);if(!b){var f=n.find("input[name=fby-email]");f.length&&(d.email=e.trim(f.val()),""!=d.email?/^([a-zA-Z0-9!#$%&'*+\-\/=?^_`{|}~.])+\@(([a-zA-Z0-9\-])+\.)+[a-zA-Z0-9]{2,6}$/.test(d.email)||(b=a.s1_err_email):a.s1_email_req&&(b=a.s1_err_email))}if(b)return setTimeout(function(){alert(e("<textarea/>").html(b).text())},10),!1;C=!0;c.addClass("fby-on");0==d.id?(h({id:0}),C=!1):e.getJSON(FBY.IN.replace(/in$/,"touch")+"?cb=?",function(b){FBY.touch=b;W={ck:B.cookieEnabled?1:0,cd:screen.colorDepth,
xy:screen.width+"x"+screen.height,fv:0<X.major?[X.major,X.minor,X.revision].join("."):""};b={touch:FBY.touch,f:d.id,u:location.href,rs:a.rating_scale,s:d.score,c:d.selectedCatId,sc:d.selectedSubcatId,t:d.feedbackTxt};d.email&&(b.email=d.email);F.custom&&(b.d=F.custom);N&&(b.x=1);e.getJSON(FBY.IN+"?cb=?",e.extend(b,W),function(a){h(a);C=!1})})})}function x(){Y&&(Y=!1,l=e("meta[name=viewport]"),l.length&&l.remove(),Z=ha?"width="+e(document).width()+",user-scalable=yes":Z.replace(/[,\s]*initial-scale.+?(,|$)/,
"$1"),l=e('<meta name="viewport">').attr("content",Z).appendTo("head"));M();$form.addClass("fby-hide");t.removeClass("form-on");t.removeClass("fby-zoom");setTimeout(function(){$form.remove();e(window).off("resize",fa)},500);2==d.screen&&(e.getJSON(FBY.IN+"?cb=?",{f:d.id,fid:aa,touch:FBY.touch}),N&&g());ca&&k()}function h(b){v=b;aa=v.id;a.s2_skip||a.s1_email||d.email?f():(y.html(["<div"+c("font-weight:bold;margin-bottom:15px")+">",a.s2_head,"</div>","<div"+c("margin-bottom:15px")+">",a.s2_main,"</div>",
a.s2_name_field?["<div"+c("margin-bottom:15px")+">","<div"+c("margin-bottom:5px")+">",a.s2_name_label,"</div>",'<input type="text" name="fby-name" value="" class="content-width"'+c("-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-appearance:none;padding:5px;line-height:1.4;border:1px solid #aaa;border-radius:5px;background:#f9f9f9;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px;color:#333")+"/>","</div>"].join(""):"",a.s2_email_field?["<div"+c("margin-bottom:15px")+">","<div"+
c("margin-bottom:5px")+">",a.s2_email_label,"</div>",'<input type="email" name="fby-email" value="" class="content-width"'+c("-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-appearance:none;padding:5px;line-height:1.4;border:1px solid #aaa;border-radius:5px;background:#f9f9f9;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px;color:#333")+"/>","</div>"].join(""):"",a.s2_phone_field?["<div"+c("margin-bottom:15px")+">","<div"+c("margin-bottom:5px")+">",a.s2_phone_label,"</div>",'<input type="text" name="fby-phone" value="" class="content-width"'+
c("-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-appearance:none;padding:5px;line-height:1.4;border:1px solid #aaa;border-radius:5px;background:#f9f9f9;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px;color:#333")+"/>","</div>"].join(""):"",a.checkbox?["<div"+c("margin-bottom:10px")+">",a.s2_checkbox_intro,"</div>","<table"+c("margin-bottom:15px")+">","<tr>",'<td><input type="checkbox" name="fby-checkbox" value=""'+c("-webkit-tap-highlight-color:rgba(0,0,0,0)")+"></td>","<td"+
c("padding-left:10px")+">",a.s2_checkbox_label,"</td></tr></table>"].join(""):"",'<div class="fby-nav-container"><span class="fby-button">',a.s2_email_button,'</span><span class="fby-close">',a.s2_close,"</span></div>"].join("")),d.screen=2,e(window).scrollTop(parseInt($form.css("top"))),M(),I(),$form.find("span.fby-close").on("click",function(a){x()}),$form.find("span.fby-button").on("click",function(b){if(!C){b=e(this);var c=n.find("input[name=fby-email]"),h=n.find("input[name=fby-phone]"),g=n.find("input[name=fby-name]"),
A=n.find("input[name=fby-checkbox]");if(c.length&&(d.email=e.trim(c.val()),""==d.email||!/^([a-zA-Z0-9!#$%&'*+\-\/=?^_`{|}~.])+\@(([a-zA-Z0-9\-])+\.)+[a-zA-Z0-9]{2,6}$/.test(d.email)))return setTimeout(function(){alert(e("<textarea/>").html(a.s2_err_email).text())},10),!1;h.length&&(d.phone=e.trim(h.val()));g.length&&(d.name=e.trim(g.val()));0==z?(f(),C=!1):(c={f:d.id,fid:aa,e:d.email,p:d.phone,n:d.name,touch:FBY.touch},A.length&&(c.checked=A.is(":checked")?1:0),C=!0,b.addClass("fby-on"),e.getJSON(FBY.IN+
"?cb=?",c,function(){f();C=!1}))}}))}function f(){y.html(["<div"+c("font-weight:bold;margin-bottom:15px")+">",a.s3_head,"</div>","<div"+c("margin-bottom:15px")+">",a.s3_main,'</div><div class="fby-nav-container"><span class="fby-button">',a.s3_close,"</span></div>"].join(""));d.screen=3;e(window).scrollTop(parseInt($form.css("top")));M();I();$form.find("span.fby-button").on("click",function(a){C||(e(this).addClass("fby-on"),x())});N&&g()}function g(){var b={formId:z,itemId:aa,score:d.score,category:d.selectedCatId?
a.cats.n[d.selectedCatId]:"",subcategory:d.selectedSubcatId?a.cats.n[d.selectedSubcatId]:"",feedback:d.feedbackTxt,email:d.email?d.email:"",context:{url:location.href,ip:v.ip,location:v.location,os:v.os,browser:v.browser,browserLanguage:v.browserLanguage,cookies:W.ck?!0:!1,flashVersion:W.fv}};setTimeout(function(){N.apply(b)},10)}function k(){setTimeout(function(){ca()},10)}function fa(){setTimeout(function(){q=G();if(q!=K&&(K=q,da)){r=L();m="mobile"==p?H():1;var a=360>r?320:360,b=e(window).scrollTop(),
d=e(window).scrollLeft()+(window.innerWidth-a*m)/2;$form.css("cssText",c("top:"+b+"px;left:"+d+"px;width:"+a+"px",1));S.css("cssText",c("-webkit-transform:scale("+m+")",1));ea=n.width();e("head").append('<style type="text/css">#feedbackify #fbya #fbyb .fby-form .content-width {'+c("width:"+ea+"px",1)+"}</style>");w&&A.css("cssText",c("-webkit-transition:none;left:"+(J.width()-A.children().eq(0).width())+"px",1));M();I()}},200)}var d=new na(b),z=d.id,a,W,v,y,A,V,J,E,w=!1,K=q=G();if(ba||O&&D.match(/chrome\/((\d+)[\d\.]+)/i))Y||
"mobile"!=p||(Y=!0,l=e("meta[name=viewport]"),l.length&&(Z=l.attr("content"),l.remove()),l=e('<meta name="viewport">').attr("content","width="+window.innerWidth+",user-scalable=no").appendTo("head"));r=L();m="mobile"==p?H():1;I();b=360>r?320:360;var Q=e(window).scrollTop(),R=e(window).scrollLeft()+(window.innerWidth-b*m)/2;t.addClass("form-on");$form=e(['<div class="fby-form"'+c("width:"+b+"px;top:"+Q+"px;left:"+R+"px")+">",'<div class="fby-form-scale"'+c("-webkit-transform:scale("+m+")")+">",'<div class="fby-form-content"'+
c("background:#FFF;border-radius:5px;padding:10px;box-shadow:0 0 12px")+">",'Loading....</div><a class="fby-link" href="http://www.feedbackify.com/" target="_blank">Powered by Feedbackify&trade;</a></div></div>'].join("")).appendTo(t);var S=$form.find(".fby-form-scale"),n=$form.find(".fby-form-content"),ea=n.width();e("head").append('<style type="text/css">#feedbackify #fbya #fbyb .fby-form .content-width {'+c("width:"+ea+"px",1)+"}</style>");var T=Math.round((new Date).getTime()),P=500;0!=z?(FBY.forms[z]=
{},e.ajax({url:ga+"/"+z+"/d.js",dataType:"script",crossDomain:!0,success:u})):u();var aa,C=!1;e(window).on("resize",fa)}function I(){da=!0;K.css("cssText",c("display: block;width:"+e(document).width()+"px;height:"+e(document).height()+"px",1))}function M(){da=!1;K.css("cssText",c("display: none",1))}function G(){if(ba)return 0==window.orientation||180==window.orientation?"portrait":"landscape";var b=document.documentElement;return b.clientHeight>.7*b.clientWidth?"portrait":"landscape"}function L(){var b;
b="portrait"==q?Math.min(window.screen.width,window.screen.height):Math.max(window.screen.width,window.screen.height);O&&P&&!/(chrome|firefox)/i.test(D)&&(b/=P);return b}function H(){return ba||O&&D.match(/chrome\/((\d+)[\d\.]+)/i)?window.innerWidth/r:1}function c(b,c){var e=b.replace(/(.+?)\s*(!important)?\s*(;|$)/g,function(b,c){return c+"!important;"});return c?e:' style="'+e+'"'}function U(b){return b.replace(/\[(.+?)\]\((.+?)( ("|&quot;)(.+?)("|&quot;))?\)/g,function(b,e,h,f,g,k){return'<a href="'+
(/^https?:\/\//.test(h)?h:0==h.indexOf("//")?url.replace(/(^https?:).+/,"$1"+h):0==h.indexOf("/")?url.replace(/(^https?:\/\/[^/]+).*/,"$1"+h):url.replace(/([^?]*\/).*$/,"$1"+h))+'" title="'+k+'" target="_blank"'+c("color:#444;text-decoration:underline")+">"+e+"</a>"})}function oa(b,c,e,h){h||(h=window.document);var f=h.createElement(b),g=function(){f.loaded=!0;e&&e(this)};f.src=c;ia?f.onreadystatechange=function(){"loaded"!=f.readyState&&"complete"!=f.readyState||f.loaded||g()}:f.onload=g;h.body.appendChild(f);
return f}function ja(){function b(a){switch(a[0]){case "showTab":la(a[1]);break;case "showForm":T(a[1]);break;case "setEmail":F.email=a[1];break;case "customData":var b=a[1];a=a[2];if("object"==typeof b)for(key in b)b.hasOwnProperty(key)&&(F.custom[key]=b[key]);else"string"!=typeof b||"string"!=typeof a&&"number"!=typeof a||(F.custom[b]=a);break;case "onload":"function"==typeof a[1]&&a[1].apply({device:p});break;case "onclose":"function"==typeof a[1]&&(ca=a[1]);break;case "callback":"function"==typeof a[1]&&
(N=a[1])}}l=e("meta[name=viewport]");l.length||(ha=1);q=G();r=L();p=p?p:!/(windows (nt|xp|2000))/i.test(D)&&/(ipad|android|windows phone|mobile|tablet)/i.test(D)?768>r?"mobile":"tablet":"desktop";m=H();var u=e('<iframe src="about:blank"'+c("visibility:hidden;width:0;height:0")+"></iframe>").appendTo("body"),x=u[0].contentWindow,h=x.document;h.open();h.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><style type="text/css">* {margin: 0;padding: 0;}</style></head><body><a></a><div></div><span></span><table><tr><td></td></tr></table><input type="text" /><input type="radio" /><textarea></textarea></body></html>');
h.close();for(var f="",g='a div span table tbody tr td input[type="text"] input[type="radio"] textarea'.split(" "),k;k=g.shift();){for(var w=x.getComputedStyle(e(k,h)[0],null),d,z,a="",B={width:"auto",height:"auto",visibility:"inherit"},v={"-webkit-text-fill-color":1},y=0;y<w.length;y++)d=w[y],v[d]||(z=B[d]?B[d]:w.getPropertyValue(d),a+=d+":"+z+"!important;");f+="#feedbackify #fbya #fbyb "+k+" {"+a+"} "}u.remove();$css=e(['<style type="text/css">',f,"#feedbackify #fbya #fbyb *::before, #feedbackify #fbya #fbyb *::after {",
c("content: none",1),"}#feedbackify #fbya #fbyb div, #feedbackify #fbya #fbyb span, #feedbackify #fbya #fbyb table, #feedbackify #fbya #fbyb td, #feedbackify #fbya #fbyb a, #feedbackify #fbya #fbyb input, #feedbackify #fbya #fbyb textarea {",c("font-family: Helvetica,Arial,sans-serif;font-size: 14px;color: #333333;",1),"}#feedbackify #fbya #fbyb table {",c("border-collapse: collapse;border-spacing: 0;",1),"}#feedbackify #fbya #fbyb #fby-mask {",c("z-index: 2147483646;position: absolute;top: 0;left: 0;background: #000;opacity: 0.4;display: none;",
1),"}#feedbackify #fbya #fbyb .fby-tab {",c("position: fixed;bottom: 0;z-index:2147483646;",1),"}#feedbackify #fbya #fbyb .fby-tab-l {",c("left: 0;",1),"}#feedbackify #fbya #fbyb .fby-tab-r {",c("right: 0;",1),"}","#feedbackify #fbya #fbyb ".slice(0,-1)+".form-on .fby-tab {",c("display: none;",1),"}","#feedbackify #fbya #fbyb ".slice(0,-1)+".fby-zoom .fby-tab {",c("display: none;",1),"}#feedbackify #fbya #fbyb .fby-tab-scale {",c("padding: 10px;",1),"}#feedbackify #fbya #fbyb .fby-tab-l .fby-tab-scale {",
c("-webkit-transform-origin: 0 100%;",1),"}#feedbackify #fbya #fbyb .fby-tab-r .fby-tab-scale {",c("-webkit-transform-origin: 100% 100%;",1),"}#feedbackify #fbya #fbyb .fby-tab-content {",c("position: relative;padding: 6px 10px;background: #FF0059;color: #FFF;font-weight: bold;border-radius: 4px;",1),"}#feedbackify #fbya #fbyb .fby-form {",c("z-index: 2147483646;position: absolute;",1),"}#feedbackify #fbya #fbyb .fby-form-scale {",c("-webkit-transform-origin: 0 0;padding: 10px;",1),"}#feedbackify #fbya #fbyb .fby-hide {",
c("opacity: 0;",1),"}#feedbackify #fbya #fbyb .rating table {",c("border-collapse: separate;",1),"}#feedbackify #fbya #fbyb .rating td {",c("text-align: center;padding: 6px 5px;background: -webkit-gradient(linear, left bottom, left top, from(#E6E6E6), to(#FFFFFF));background: -webkit-linear-gradient(bottom, #E6E6E6, #FFFFFF);background: linear-gradient(to top, #E6E6E6, #FFFFFF);border: 1px solid #999999;border-left: 0;-webkit-user-select: none;-webkit-tap-highlight-color: rgba(0,0,0,0);",1),"}#feedbackify #fbya #fbyb .rating td.first {",
c("border-left: 1px solid #999;border-radius: 4px 0 0 4px;",1),"}#feedbackify #fbya #fbyb .rating td.last {",c("border-radius: 0 4px 4px 0;",1),"}#feedbackify #fbya #fbyb .rating td.on {",c("background: #08C;border-color: #08C;color: #FFF;",1),"}#feedbackify #fbya #fbyb .rating td.prev {",c("border-right-color: #08C;",1),"}#feedbackify #fbya #fbyb .cat-subcat {",c(["position: relative;-webkit-transition: left 0.4s;left: 0;",O?"-webkit-transform: translateZ(0);-webkit-backface-visibility: hidden;-webkit-perspective: 1000;":
""].join(""),1),"}#feedbackify #fbya #fbyb .cat-subcat table {",c("border-collapse: separate;",1),"}#feedbackify #fbya #fbyb .category td {",c("text-align: center;padding: 6px 5px;background: -webkit-gradient(linear, left bottom, left top, from(#E6E6E6), to(#FFFFFF));background: -webkit-linear-gradient(bottom, #E6E6E6, #FFFFFF);background: linear-gradient(to top, #E6E6E6, #FFFFFF);border: 1px solid #999999;border-top: 0;-webkit-user-select: none;-webkit-tap-highlight-color: rgba(0,0,0,0);",1),"}#feedbackify #fbya #fbyb .category td.first {",
c("border-top: 1px solid #999;border-radius: 4px 4px 0 0;",1),"}#feedbackify #fbya #fbyb .category td.last {",c("border-radius: 0 0 4px 4px;",1),"}#feedbackify #fbya #fbyb .category td.on {",c("background: #08C;border-color: #08C;color: #FFF;",1),"}#feedbackify #fbya #fbyb .category td.prev {",c("border-bottom-color: #08C;",1),"}#feedbackify #fbya #fbyb .back {",c("font-weight: bold;-webkit-user-select: none;",1),"}#feedbackify #fbya #fbyb .fby-nav-container {",c("border-top: 1px solid #CCC;padding-top: 15px;",
1),"}#feedbackify #fbya #fbyb .fby-button {",c("display: inline-block;border: 1px solid #999999;border-radius: 4px;background: -webkit-gradient(linear, left bottom, left top, from(#E6E6E6), to(#FFFFFF));background: -webkit-linear-gradient(bottom, #E6E6E6, #FFFFFF);background: linear-gradient(to top, #E6E6E6, #FFFFFF);padding: 6px 10px;-webkit-tap-highlight-color: rgba(0,0,0,0);",1),"}#feedbackify #fbya #fbyb .fby-button.fby-on {",c("background: #E6E6E6;box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15) inset, 0 1px 2px rgba(0, 0, 0, 0.05);",
1),"}#feedbackify #fbya #fbyb .fby-close {",c("margin-left: 10px;color: #999;-webkit-tap-highlight-color: rgba(0,0,0,0);",1),"}#feedbackify #fbya #fbyb .fby-link {",c("display:none;text-shadow:0 0 5px #333;text-align:right;margin:12px 0;color:#DDD;font-size:12px;",1),"}</style>"].join("")).appendTo("head");Q=e('<div id="feedbackify"><div id="fbya"><div id="fbyb"><div id="fby-mask"></div></div></div></div>').appendTo(document.body);t=Q.find("#fbyb");K=Q.find("#fby-mask");e(window).scroll(function(){E=
(new Date).getTime()});u=function(){b(arguments)};u.push=function(a){b(a)};if(window.fby.shift)for(;y=window.fby.shift();)b(y);else if(window.fby.q)for(;y=window.fby.q.shift();)b(y);window.fby=u}var ka="http:"==document.location.protocol?"http:":"https:",pa=ka+"//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js",ga=ka+"//s3.amazonaws.com/fby-form",B=navigator,D=B.userAgent,O,ba,ia;/windows phone/i.test(D)||(/android/i.test(D)?O=!0:/(iphone|ipad|ipod)/i.test(D)?ba=!0:"Microsoft Internet Explorer"==
B.appName&&(ia=!0));var P=window.devicePixelRatio,e,q,r,p,S="Feedback",m,E,l,ha,Z,Y,da,Q,t,K,F={custom:{}},N,ca,na=function(b){this.id=b;this.screen=1;this.data=null;this.score=-1;this.selectedSubcatId=this.selectedCatId=0;this.feedbackTxt="";this.email=F.email?F.email:null;this.name=this.phone=""},ma=function(b){this.id=b},X=new function(){var b=this;b.installed=!1;b.raw="";b.major=-1;b.minor=-1;b.revision=-1;b.revisionStr="";var c=[{name:"ShockwaveFlash.ShockwaveFlash.7",version:function(b){return e(b)}},
{name:"ShockwaveFlash.ShockwaveFlash.6",version:function(b){var c="6,0,21";try{b.AllowScriptAccess="always",c=e(b)}catch(g){}return c}},{name:"ShockwaveFlash.ShockwaveFlash",version:function(b){return e(b)}}],e=function(b){var c=-1;try{c=b.GetVariable("$version")}catch(e){}return c};b.fdetect=function(){if(B.plugins&&0<B.plugins.length){var e=B.mimeTypes;if(e&&e["application/x-shockwave-flash"]&&e["application/x-shockwave-flash"].enabledPlugin&&e["application/x-shockwave-flash"].enabledPlugin.description){var e=
e["application/x-shockwave-flash"].enabledPlugin.description,f,g=e.split(/ +/);f=g[2].split(/\./);g=g[3];f={raw:e,major:parseInt(f[0],10),minor:parseInt(f[1],10),revisionStr:g,revision:parseInt(g.replace(/[a-zA-Z]/g,""),10)||b.revision};b.raw=f.raw;b.major=f.major;b.minor=f.minor;b.revisionStr=f.revisionStr;b.revision=f.revision;b.installed=!0}}else if(-1==B.appVersion.indexOf("Mac")&&window.execScript)for(e=-1,g=0;g<c.length&&-1==e;g++){f=-1;try{f=new ActiveXObject(c[g].name)}catch(l){f={activeXError:!0}}if(!f.activeXError&&
(b.installed=!0,e=c[g].version(f),-1!=e)){f=e;var k=f.split(",");f={raw:f,major:parseInt(k[0].split(" ")[1],10),minor:parseInt(k[1],10),revision:parseInt(k[2],10),revisionStr:k[2]};b.raw=f.raw;b.major=f.major;b.minor=f.minor;b.revision=f.revision;b.revisionStr=f.revisionStr}}}()};window.fby||(fby=function(){(fby.q=fby.q||[]).push(arguments)});try{var w=FBY.config.device;if("mobile"==w||"tablet"==w||"desktop"==w)p=w}catch(b){}try{FBY.config.tabText&&(S=FBY.config.tabText)}catch(b){}FBY={IN:"https://www.feedbackify.com/in",
forms:{},showTab:function(b){fby("showTab",b)},showForm:function(b){fby("showForm",b)},setEmail:function(b){fby("setEmail",b)}};try{var R;if((R=jQuery.fn.jquery.split("."))&&1==R[0]&&7<=R[1])e=jQuery,setTimeout(function(){ja()},1);else throw 0;}catch(b){oa("SCRIPT",pa,function(){e=jQuery.noConflict(!0);ja()})}})();