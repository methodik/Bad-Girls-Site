$(function(){$(".mainContent").fitVids();var e=$("img.a");e.hover(function(){$(this).stop().animate({opacity:"0.0"},200)},function(){$(this).stop().animate({opacity:"1.0"},200)});var t=$('<div class="navLineTop"> </div>');lineBottom=$('<div class="navLineBottom"> </div>');$(".main li").append(t).append(lineBottom);$(".main li").hover(function(){$(this).find($(".navLineTop, .navLineBottom")).stop().animate({height:"0.3em"},200)},function(){$(".navLineTop, .navLineBottom").stop().animate({height:"0em"},200)});var n=$("#bookButton");bannerOverlay=$(".bannerOverlay");bannerOverlay.hover(function(){bannerOverlay.stop().animate({height:"8.5em"},300);$(".bookingList").stop().css({opacity:"0",display:"block",marginLeft:"-6em"}).animate({opacity:"1",marginLeft:"0em"},500)},function(){bannerOverlay.stop().animate({height:"4em"},500);$(".bookingList").stop().animate({opacity:"0",marginLeft:"-6em"}).css({opacity:"0",marginLeft:"0em"})});var r=$(".textRotator").find("span");setInterval(function(){console.log("set interval is working");var e=$(".current");next=$(".next");hidden=$(".hidden");e.animate({opacity:"0"},450,function(){next.animate({opacity:"1"}).removeClass("next").addClass("current");hidden.removeClass("hidden").addClass("next");e.removeClass("current").addClass("hidden")})},6e3)});