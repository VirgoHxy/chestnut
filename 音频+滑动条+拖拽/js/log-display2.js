var slider = $(".slider");
function sliderFn(){
	//比例
	scale = logCtnrH / logtContH;
    //滚动条高度
    sliderH = logCtnrH*logCtnrH / logtContH;
    //滑动条移动高度
    sliderMoveH = logCtnrH-sliderH;
    //内容移动高度
    moveH = logtContH-logCtnrH;
    //设置滚动条高度
    slider.height(sliderH);
}
//var equrl = "Dialoglog?operation=queryVerbalData";
//var rec = new Array();
//var href = window.location.href;
////设置textPlay的src
//var index1 =href.indexOf("8889");
//var sTime = new Array();
//var eTime = new Array();
//href = href.substr(0,index1);
//href = href+"18080/ictboxasr/";
//var objs = "";
//var h = 0;
//function req11(startTime,endTime) {
//  $.ajax({
//      type:"post",
//      url: "Dialoglog?operation=queryProcessData",
//      data: {startTime:startTime,endTime:endTime},
//      success: function(msg){
//      	objs = msg;
//			$.each(objs,function(index,obj){
//				type = obj['type'];
//				result = obj['result'];
//				msg = obj['msg'];
//				if(msg!=""){
//					msg = "（"+msg+"）";
//				}
//				all = type+": "+result+msg;
//				if(objs.length>1){
//					all = "识别结果：无"
//				}
//			});
//			var divTemp = $("<div class='result'><div class='success'>"+all+"</div></div>");
//			if(all=="识别结果：无"){
//				divTemp = $("<div class='result'><div class='fail'>"+all+"</div></div>");
//			}
//			$('.human').eq(h).after(divTemp);
//			h=h+1;
//			$('.result').hide();
//      }
//  })
//}
//function req(uniqueId) {
//  $.ajax({
//      type:"post",
//      url: equrl,
//      data: {uniqueId:uniqueId},
//      success: function(result){
//      	var liTemp = $('<li></li>'); 
//      	var i = 0;
//      	var j = 0;
//      	var len = result.length;
//			var tempText = result[len-1].type;
//      	$.each(result,function(index,obj){
//      		if(obj['type']=="语音播报"){
//      			//sTime = obj['time'];
//      			eTime[j] = obj['time'];
//      			j+=1;
//      			var leftMsg = obj['msg'];
//      			var divLeft1 = $("<div class='robot'></div>");
//      			var divLeft2 = $("<div class='robot-box'></div>"); 
//      			var divLeft3 = $("<div class='icon-robot'></div>"); 
//      			var divLeft4 = $("<div class='box-cont'></div>"); 
//      			divLeft4.text(leftMsg);
//      			liTemp.append(divLeft1);
//      			divLeft1.append(divLeft2);
//      			divLeft2.append(divLeft3);
//      			divLeft2.append(divLeft4);
//      			if(tempText=="语音播报"){
//          			liTemp.appendTo($('.log-list'));
//      			}
//      		}
//      		if(obj['type']=="语音听写"){
//      			//eTime = obj['time'];
//      			sTime[i] = obj['time'];
//      		    rec[i] = obj['recording'];
//      		    i+=1;
//      			var rightMsg = obj['msg'];
//      			var divRight1 = $("<div class='human'></div>");
//      			var divRight2 = $("<div class='user-box'></div>"); 
//      			var divRight3 = $("<div class='box-cont user-cont'></div>"); 
//      			var divRight4 = $("<div class='play-ctnr'></div>"); 
//      			var divRight5 = $("<div class='wifi-symbol'></div>");
//      			var divRight6 = $("<div class='wifi-circle first'></div>"); 
//      			var divRight7 = $("<div class='wifi-circle second'></div>"); 
//      			var divRight8 = $("<div class='wifi-circle third'></div>"); 
//      			var divRight9 = $("<b class='icon-now-pause'></b>");
//      			var divRight10 = $("<div class='icon-user'></div>");
//      			divRight3.text(rightMsg);
//      			liTemp.append(divRight1);
//      			divRight1.append(divRight2);
//      			divRight2.append(divRight3);
//      			divRight3.append(divRight4);
//      			divRight4.append(divRight5);
//      			divRight5.append(divRight6);
//      			divRight5.append(divRight7);
//      			divRight5.append(divRight8); 
//      			divRight3.append(divRight9);
//      			divRight2.append(divRight10);
//      			var liTemp1 = liTemp;
//      			liTemp1.appendTo($('.log-list'));
//      			liTemp = $('<li></li>'); 
//      		}
//      	})
//      	eTime.splice(0,1);
//      	for(var m=0;m<sTime.length;m++){
//      		var type = "";
//				var result = "";
//				var msg = "";
//				var all = "";
//  			//console.log(sTime[m]);
//  			//console.log(eTime[m]);
//  			req11(sTime[m],eTime[m]);
//      	}
//      }
//  })
//}
//点击“话术日志”
$('.show-log').on("click", function() {
//	var thisTr = $(this).parent().parent();
//	//活动名称
//	var td1 = $.trim(thisTr.find("div:eq(0)").text());
//	console.log(td1);
//	//通话识别号
//	var td5 = $.trim(thisTr.find("div:eq(4)").text());
//	console.log(td5);
//	//呼叫时间	
//	var td6 = $.trim(thisTr.find("div:eq(5)").text());
//	console.log(td6);
//	//通话时长	
//	var td7 = $.trim(thisTr.find("div:eq(8)").text());
//	var td7 = td7+"秒";
//	console.log(td7);
//	//audio链接	
//	var td10 = $.trim(thisTr.find("a:eq(0)").prop("href"));
//	var t2d10 = $.trim(thisTr.find("a:eq(1)").prop("href"));
//	//呼叫结果	
//	var td11 = $.trim(thisTr.find("div:eq(12)").text());
//	var index =td10.indexOf("&");
//	td10 = td10.substr(0,index);
//	td10 = td10.replace(/8889\/ictadm\/CheckRecording\?url=/,"18080");
//	$('.info-value:eq(0)').text(td1);
//	$('.info-value:eq(1)').text(td6);
//	$('.info-value:eq(2)').text(td11);
//	$('.info-value:eq(3)').text(td7);
//	$('.id-value').text(td5);
//	setTimeout(function(){
//		var i = 0;
//	    $('.user-cont b').each(function(){
//	    	var thisB = $(this);
//	    	thisB.attr("num",i);
//	    	var indexB = thisB.attr("num");
//	    	thisB.attr("source",href+rec[indexB]+".wav");
//	    	i++;
//	    });
//	},100);
//	//设置chatPlay的src
//	$('#chat-play').prop("src",td10);
//	//设置下载的src
//	$('.download a').prop("href",t2d10);
//	if(td10==""){
//		$('.ban-click').show();
//		$('.ban-click').on("click",function(){
//			return false;
//		});
//	}
	var chatPlay = $('#chat-play')[0];
	//重载才能播放
	chatPlay.load(); 
	//控制左侧log-info信息高度
//	$('.info-list li').each(function(){
//		var thisLi = $(this);
//		var infoValueH = thisLi.children(".info-value").height();
//		if (infoValueH>22) {
//			thisLi.height(infoValueH);
//		}
//	});
    //setTimeout(function(){
    	$('.log-display2').show();
		$('body').css('overflow', 'hidden');    		
	//},100)
	//检测是否支持用来点击复制flash插件
	var flashFlag;
    if (window.ActiveXObject) {
        flashFlag = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
    } else {
        flashFlag = navigator.plugins['Shockwave Flash'];
    }
    if(flashFlag){
		//点击复制文本
		var tipX,tipY=0;
		$('.log-display2').mousemove(function (e) {
	        var cursX = e.originalEvent.x || e.originalEvent.layerX || 0;
	        var cursY = e.originalEvent.y || e.originalEvent.layerY || 0;
			var pos = $('.log-display2').position();
			tipX = cursX - pos.left;
			tipY = cursY - pos.top;
			//console.log(cursX);获取鼠标横坐标
			//console.log(cursY);获取鼠标纵坐标
			//console.log(pos.left);获取log-display2相对于父元素的左偏移
			//console.log(pos.top);获取log-display2相对于父元素的上偏移
			//console.log(tipX);计算得出提示框的横坐标位置
			//console.log(tipY);计算得出提示框的纵坐标位置
	    });
		$(".id-value").zclip({
			path: "js/ZeroClipboard.swf",
			copy: function() {
				return $(this).text();
			},
			afterCopy: function() { /* 复制成功后的操作 */
				var $copyTip = "<div class='copy-box prompt-box'>复制成功</div>";
				$(".log-display2").find(".copy-box").remove().end().append($copyTip);
				$('.copy-box').fadeOut(2000).css({"top":tipY+"px","left":tipX+20+"px"});
			}
		});    	
    } else {
    	var $flashEle = "<a class='allow' href='http://www.adobe.com/go/getflashplayer' rel='nofollow' target='_blank''>点我开启flash插件</a>";
    	$("html").find(".allow").remove().end().append($flashEle);
    }
//  setTimeout(function(){
//  	$('.log-display2').show();
//		$('body').css('overflow', 'hidden');    		
//	},100)
//	//检测是否支持用来点击复制flash插件
//	var flashFlag;
//  if (window.ActiveXObject) {
//      flashFlag = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
//  } else {
//      flashFlag = navigator.plugins['Shockwave Flash'];
//  }
//  if(flashFlag){
//		//点击复制文本
//		var tipX,tipY=0;
//		$('.log-display2').mousemove(function (e) {
//	        var cursX = e.originalEvent.x || e.originalEvent.layerX || 0;
//	        var cursY = e.originalEvent.y || e.originalEvent.layerY || 0;
//			var pos = $('.log-display2').position();
//			tipX = cursX - pos.left;
//			tipY = cursY - pos.top;
//			//console.log(cursX);获取鼠标横坐标
//			//console.log(cursY);获取鼠标纵坐标
//			//console.log(pos.left);获取log-display2相对于父元素的左偏移
//			//console.log(pos.top);获取log-display2相对于父元素的上偏移
//			//console.log(tipX);计算得出提示框的横坐标位置
//			//console.log(tipY);计算得出提示框的纵坐标位置
//	    });
//		$("div[class*='value']").zclip({
//			path: "js/ZeroClipboard.swf",
//			copy: function() {
//				return $(this).text();
//			},
//			afterCopy: function() { /* 复制成功后的操作 */
//				var $copyTip = "<div class='copy-box prompt-box'>复制成功</div>";
//				$(".log-display2").find(".copy-box").remove().end().append($copyTip);
//				$('.copy-box').fadeOut(2000).css({"top":tipY+"px","left":tipX+20+"px"});
//			}
//		});
//  } else {
//  	var $flashEle = "<a href='http://www.adobe.com/go/getflashplayer' rel='nofollow' target='_blank''>点我开启flash插件</a>";
//  	var $flashTip = "<a class='flash-box prompt-box'>flash插件未被允许，部分功能失效</a>";
//		$("html").find(".flash-box").remove().end().append($flashTip).append($flashEle);
//		$('.flash-box').fadeOut(2000).css({"top":"45%","left":"45%"});	
//  }
	//滑动条
	var scrollFunc = function(e) {
	    var ev = e || window.event;
	    var contTop = $('.log-cont').position().top;
	    var sliderTop = slider.position().top;
	    if (ev.wheelDelta) {
	    	//向下
	        if (ev.wheelDelta<0) {
	            $('.log-cont').css('top',contTop-32+"px");
	            if (Math.abs($('.log-cont').position().top)>=moveH) {
	                $('.log-cont').css('top',-moveH+"px");
	            }
	            slider.css('top',sliderTop+32*scale+"px");
	            if (slider.position().top>=sliderMoveH) {
	            	slider.css('top',sliderMoveH+"px");
	            }
	        } else {
	            $('.log-cont').css('top',contTop+32+"px");
	            if ($('.log-cont').position().top>=0) {
	                $('.log-cont').css('top','0');
	            }
	            slider.css('top',sliderTop-32*scale+"px");
	            if (slider.position().top<=0) {
	            	slider.css('top','0');
	            }
	        }
	    } else if (ev.detail) { //ff
	    	//向下
	        if (ev.detail>0) {
	            $('.log-cont').css('top',contTop-32+"px");
	            if (Math.abs($('.log-cont').position().top)>=moveH) {
	                $('.log-cont').css('top',-moveH+"px");
	            }
	            slider.css('top',sliderTop+32*scale+"px");
	            if (slider.position().top>=sliderMoveH) {
	            	slider.css('top',sliderMoveH+"px");
	            }
	        } else {
	            $('.log-cont').css('top',contTop+32+"px");
	            if ($('.log-cont').position().top>=0) {
	                $('.log-cont').css('top','0');
	            }
	            slider.css('top',sliderTop-32*scale+"px");
	            if (slider.position().top<=0) {
	            	slider.css('top','0');
	            }
	        }
	    }
	}
	//注册滑动
	if ($('.log-ctnr')[0].addEventListener) {
	    $('.log-ctnr')[0].addEventListener('DOMMouseScroll', scrollFunc, false);
	}
	$('.log-ctnr')[0].onmousewheel = scrollFunc;
	setTimeout(function(){
		//定高
        logCtnrH = $('.log-ctnr').height();
        //内容高
        logtContH = $('.log-cont').height();
        sliderFn();
        if(slider.height()>=logCtnrH){
        	slider.hide();
        	$('.log-ctnr')[0].onmousewheel = function(){}
        } else {
        	slider.show();
            $('.log-ctnr')[0].onmousewheel = scrollFunc;
        }
  	},300);
//  req(td5);
    setTimeout(function(){
    	//控制右侧log-list的li高度
    	$("div[class$='-box']").each(function(){
    		var thisBox = $(this);
    		var boxH = thisBox.height();
    		var boxCont = thisBox.children(".box-cont");
    		var boxContH = boxCont.height();
    		if (boxContH<=21&&thisBox.parent().hasClass('human')) {
    			boxCont.css("padding-right","26px");
    			if (thisBox.children(".box-cont").height()<=21){
    				boxCont.css("textAlign","right");
    			}	
    			boxCont.children("b").css("right","0px");
    		}
    		if (thisBox.parent().hasClass('robot')) {
    			boxCont.css("background","#43CE6C");		
    		}
    	});    	
    },200);
	chatPlay.onerror = function(){
		$('.ban-click').css("cssText","display: block!important;");
    	var $audioEle = "<div class='audio-box prompt-box'>音频加载错误，请重试！</div>";
		$("html").find(".audio-box").remove().end().append($audioEle);
		$('.audio-box').fadeOut(2000).css({"top":"45%","left":"45%"});	
	}
});
//点击弹出框
$('.log-display2').on("click", function() {
	var ev = window.event || arguments.callee.caller.arguments[0] || event;
	var target = ev.target || ev.srcElement;
	var target = $(target);
    var i = 1;
    //控制右侧单条播放和暂停
    if (target[0].tagName=="B") {
	    $('.user-cont b').each(function(){
	    	var thisB = $(this);
	    	thisB.removeClass("icon-now-play");
	    	thisB.addClass("icon-now-pause");
	    	thisB.siblings(".play-ctnr").hide();	    	
	    });
		var textPlay = $('#text-play')[0];
		var bSrc = target.attr("source");
		var audioSrc = $('#text-play').prop("src");
		//console.log(href);
		//console.log(bSrc);
		//console.log(audioSrc);
		target.toggleClass("icon-now-play");
		target.toggleClass("icon-now-pause");
		target.siblings(".play-ctnr").toggle();
		//重载才能播放
		//textPlay.load();
		if (textPlay.paused) {
			$('#text-play').prop("src",bSrc);
			textPlay.play();
			$('#text-play').attr("num",target.attr("num"));
			target.addClass("icon-now-play");
			target.removeClass("icon-now-pause");
			target.siblings(".play-ctnr").show();
		}else{
			textPlay.pause();
			target.addClass("icon-now-pause");
			target.removeClass("icon-now-play");
			target.siblings(".play-ctnr").hide();
		}
		if($('#text-play').attr("num")!=target.attr("num")){
			$('#text-play').prop("src",bSrc);
			textPlay.play();
			$('#text-play').attr("num",target.attr("num"));
			target.addClass("icon-now-play");
			target.removeClass("icon-now-pause");
			target.siblings(".play-ctnr").show();
		}
		textPlay.addEventListener('ended', function () {  
    	    $('.user-cont b').each(function(){
    	    	var thisB = $(this);
    	    	thisB.removeClass("icon-now-play");
    	    	thisB.addClass("icon-now-pause");
    	    	thisB.siblings(".play-ctnr").hide();	    	
    	    });
		}, false);
	}
	//关闭弹出框
    if (target.hasClass("icon-add")) {
		$('.log-display2').hide();
		$('.log-display2').attr("style","");
		$('.log-display2').css({"top":"64.4px","right":"8px"});
    	$('.log-cont').each(function(){
    		$(this).css('top','0');
    	});
    	slider.css('top','0');
    	$('body').css('overflow', 'auto');  
//  	$('.log-list').empty();
    	$('.ban-click').hide();
    	$("#chat-play")[0].load();
    	$("#text-play")[0].load();
    	$("#chat-play")[0].currentTime==0;
    	$("#text-play")[0].currentTime==0;
    	$('.play-pause div:eq(0)').addClass("icon-now-pause");
    	$('.play-pause div:eq(0)').removeClass("icon-now-play");
    	$("#chat-play")[0].volume=0.4;
		$(".volume-value").css('width','40px');
		$(".volume-circle").css("left","40px");
		setTimeout(function(){
			$('.cache').removeAttr('style');
			$('.time-value').removeAttr('style');
			$('.time-circle').removeAttr('style');			
		},100)
		$(".volume div:eq(0)").prop("class","icon-voiced");
		$('.btn_fath').attr("style","").removeClass("fatn-curr");
		$('.move').attr("data-state","off").attr("style","");
		h = 0;
		//删掉点击复制的元素
		$(".log-display2").find(".zclip").remove();
    }
});
//整个话术语音播放
$(function(){
	//普通div拖拽
	normalDragMove(".log-hd", ".log-display2");
	//滑动条拖拽
	sliderDragMove(".slider", ".log-cont", ".log-ctnr");
	//滑动条容器点击移动
	sliderClickMove(".slider-ctnr", ".slider", ".log-cont", ".log-ctnr");
	//audio时间条拉动
	audioDragMove(".time-circle", ".time-cont", ".time-value", "#chat-play")
	//audio音量条拉动
	audioDragMove(".volume-circle", ".volume-cont", ".volume-value", "#chat-play")
	//downDiv为触发mousedown的元素，一般是head；moveDiv是移动的元素，一般是个整体，它包含head和body
	function normalDragMove(downDiv, moveDiv) {
		//当鼠标在downDiv元素落下执行
		$(downDiv).mousedown(function(e) {
			//开始拖拽，ismove设置为true，可以拖拽
			var isMove = true;
			//获取鼠标指针mousedown的位置，pageX相对于文档的左边缘(死的)；$(moveDiv).offset().left是最初的left
			var div_x = e.pageX - $(moveDiv).offset().left;
			//获取鼠标指针mousedown的位置，pageY相对于文档的上边缘(死的)；$(moveDiv).offset().left是最初的top
			var div_y = e.pageY - $(moveDiv).offset().top;
			$(document).mousemove(function(e) {
				if(isMove) {
					$(moveDiv).css({
						//总的来说这里就是新的鼠标位置-旧的鼠标位置+初始的元素位置
						//e.pageX和e.pageY是活的
						"left": e.pageX - div_x,
						"top": e.pageY - div_y
					});
					//防止拖拽时进行文本选中
					$('html').css("user-select", "none");
				}
				//设置移动的元素不能越过屏幕上方
				if($(moveDiv).position().top < 0) {
					$(moveDiv).css("top", "0px");
				}
				/*
				 *$(window).height()类似body.clientHeight的高度，但是这里body无高度
				 *$(moveDiv).height()移动元素的高度
				 * 设置移动的元素不能越过屏幕下方
				 */
				if($(moveDiv).position().top > $(window).height() - $(moveDiv).height()) {
					$(moveDiv).css("top", $(window).height() - $(moveDiv).height() + "px");
				}
				//设置移动的元素不能越过屏幕左侧
				if($(moveDiv).position().left < 0) {
					$(moveDiv).css("left", "0px");
				}
				/*
				 *$('body').width()body的宽度
				 *$(moveDiv).width()移动元素的宽度
				 *设置移动的元素不能越过屏幕右侧
				 */
				if($(moveDiv).position().left > $('body').width() - $(moveDiv).width()) {
					$(moveDiv).css("left", $('body').width() - $(moveDiv).width() + "px");
				}
			}).mouseup(
				function() {
					//禁止拖拽
					isMove = false;
					//恢复文本选中功能
					$('html').attr("style", "");
					//去除文档移动事件
					$(document).unbind('mousedown');
					$(document).unbind('mouseup');
				});
		});
	}
	//moveDiv为主动移动的元素，这里是滑动条；contDiv是滑动条关联的内容元素；ctnrDiv是contDiv关联的容器元素，它的是高度固定
	function sliderDragMove(moveDiv,contDiv,ctnrDiv) {
		$(moveDiv).mousedown(function(e) {
			var isMove = true;
			//这里是纵向滑动条，所以不需要left，获取mousedown时的纵坐标
			var cursOldY = e.originalEvent.y || e.originalEvent.layerY || 0;
			//获取滑动条以前的纵坐标
			var oldSliderPos = $(moveDiv).position().top;
			//获取内容元素以前的纵坐标
			var oldContPos = $(contDiv).position().top;
			//这里是为了获取比例，内容移动/（比上）滑动条移动
			var ctnrH = $(ctnrDiv).height();//容器高度
			var contH = $(contDiv).height();//内容高度
			//滑动条高度
			var sliderH = ctnrH*ctnrH / contH;
		    var sliderMoveH = ctnrH-sliderH;//滑动条移动高度
		   	var moveH = contH-ctnrH;//内容移动高度
		   	//比例
		   	var scale = moveH/sliderMoveH;
			$(document).mousemove(function(e) {
				//实时获取鼠标位置
				var cursNewY = e.originalEvent.y || e.originalEvent.layerY || 0;
				if(isMove) {
					//总的来说这里就是新的鼠标位置-旧的鼠标位置+初始的元素位置
					$(moveDiv).css("top",cursNewY-cursOldY+oldSliderPos+"px");
					$(contDiv).css("top",oldContPos-(cursNewY-cursOldY)*scale+"px");
					//禁止文本选中功能
					$('html').css("user-select", "none");
				}
				//滑动条最小top，一个条件控制两个元素的位置
				if($(moveDiv).position().top<=0){
					$(moveDiv).css('top','0');
					$(contDiv).css('top','0');
				}
				//滑动条最大top，一个条件控制两个元素的位置
				if($(moveDiv).position().top>=sliderMoveH){
					$(moveDiv).css('top',sliderMoveH+"px");
					$(contDiv).css('top',-moveH+"px");
				}
			}).mouseup(
				function() {
					//禁止拖拽
					isMove = false;
					//恢复文本选中功能
					$('html').attr("style", "");
					//去除文档移动事件
					$(document).unbind('mousedown');
					$(document).unbind('mouseup');
				});
		});
	}
	//clickDiv为slider的容器div，slider是滑动条，contDiv是滑动条关联的内容移动div，ctnrDiv是滑动条关联的容器div
	function sliderClickMove(clickDiv,slider,contDiv,ctnrDiv){
		$(slider).on('click',function(e){e.stopPropagation()});
		$(clickDiv).on('click',function(e){
			var top = e.pageY - $(clickDiv).offset().top;
			//这里是为了获取比例，内容移动/（比上）滑动条移动
			var ctnrH = $(ctnrDiv).height();//容器高度
			var contH = $(contDiv).height();//内容高度
			var sliderH = $(slider).height();
		    var sliderMoveH = ctnrH-sliderH;//滑动条移动高度
		   	var moveH = contH-ctnrH;//内容移动高度
		   	//比例
		   	var scale = moveH/sliderMoveH;
		   	if(top>$(slider).position().top){//向下
		   		//更随位置移动
		   		//top = e.pageY - $(clickDiv).offset().top-$(slider).height();
			   	//$(slider).css('top',top+'px');
				//$(contDiv).css('top',-top*scale+'px');
				
				//固定移动
				$(slider).css('top',$(slider).position().top+32+'px');
				$(contDiv).css('top',$(contDiv).position().top-32*scale+'px');
		   	} else {//向上
			   	//$(slider).css('top',top+'px');
				//$(contDiv).css('top',-top*scale+'px');
				$(slider).css('top',$(slider).position().top-32+'px');
				$(contDiv).css('top',$(contDiv).position().top+32*scale+'px');
		   	}
   			//滑动条最小top，一个条件控制两个元素的位置
			if($(slider).position().top<=0){
				$(slider).css('top','0');
				$(contDiv).css('top','0');
			}
			//滑动条最大top，一个条件控制两个元素的位置
			if($(slider).position().top>=sliderMoveH){
				$(slider).css('top',sliderMoveH+"px");
				$(contDiv).css('top',-moveH+"px");
			}
		});
	}
	function audioDragMove(circleDiv,contDiv,valueDiv,audioEle) {
		//当鼠标在downDiv元素落下执行
		$(circleDiv).mousedown(function(e) {
			//开始拖拽，ismove设置为true，可以拖拽
			var isMove = true;
			//获取鼠标指针mousedown的位置，pageX相对于文档的左边缘(死的)；$(circleDiv).position().left是最初的left
			var div_x = e.pageX - $(circleDiv).position().left;
			$(document).mousemove(function(e) {
				if(isMove) {
					$(circleDiv).css("left", Math.round(e.pageX-div_x)+"px");
					$(valueDiv).css("width", Math.round(e.pageX-div_x)+"px");
					if (circleDiv.indexOf('volume')!=-1) {
						$(audioEle)[0].volume=$(valueDiv).width()/100;
						if ($(audioEle)[0].volume==0){
							$(".volume div:eq(0)").removeClass("icon-voiced").addClass("icon-no-voiced");
						} else {
							$(".volume div:eq(0)").addClass("icon-voiced").removeClass("icon-no-voiced");
						}
					} else {
						audioTimeFlag = false;
						startTime = Math.trunc($(valueDiv).width()*$(audioEle)[0].duration/$(contDiv).width());
				        if (startTime < 60) {
				            startMinute = "0";
				            startSecond = startTime;
				        } else {
				            startMinute = Math.trunc(startTime / 60);
				            startSecond = Math.trunc(startTime % 60);
				        }
				        if (startMinute < 10) {
				            startMinute = "0" + startMinute;
				        }
				        if (startSecond < 10) {
				            startSecond = "0" + startSecond;
				        }
				        var endTime = $(".time-label").text();
				        endTime = endTime.replace(/.*\/ /g,"");
				        if(startTime<=$(audioEle)[0].duration){
				        	$(".time-label").text(startMinute + ":" + startSecond + " / " + endTime);
				        } else {
				        	$(".time-label").text(endTime + " / " + endTime);
				        }
					}
					//设置移动的元素不能越过屏幕左侧
					if($(circleDiv).position().left < 0) {
						$(circleDiv).css("left", "0");
						$(valueDiv).css("width", "0");
					}
					/*
					 *$(circleDiv).width()圆球的宽度
					 *$(contDiv).width()容器的宽度
					 *设置移动的元素不能越过屏幕右侧
					 */
					if($(circleDiv).position().left > $(contDiv).width()-$(circleDiv).width()) {
						$(circleDiv).css("left", $(contDiv).width()-$(circleDiv).width() + "px");
						$(valueDiv).css("width", $(contDiv).width() + "px");
					}
					//防止拖拽时进行文本选中
					$('html').css("user-select", "none");
				}
			}).mouseup(
				function() {
					//禁止拖拽
					isMove = false;
					audioTimeFlag = true;
					//恢复文本选中功能
					$('html').attr("style", "");
					if(circleDiv.indexOf('time')!=-1){
						$(audioEle)[0].currentTime = Math.trunc($(valueDiv).width()*$(audioEle)[0].duration/$(contDiv).width());
						var scale = chatPlay.buffered.end(0) / chatPlay.duration;
						$('.cache').width($(".time-cont").width()*scale);				
					}
					$(document).unbind('mousedown');
					$(document).unbind('mouseup');
				});
		});
	}				
	var chatPlay = $("#chat-play")[0];
	var timeLabel = $(".time-label");
	var startTime=endTime=cursorX= 0;
	var startMinute=startSecond = "00";
	var endMinute=endSecond = "0";
	var pausePlay = $(".video-ctrl div:eq(1)");
	var iconPP = $('.play-pause div:eq(0)');
	var audioTimeFlag = true;
	var lastEnd = 0;
	var audioTimer;
	var cache = function(){
		if(chatPlay.buffered.length!=0){
			console.log(1)
			//console.log(chatPlay.buffered.start(0)+"/"+chatPlay.buffered.end(0))
			var scale = chatPlay.buffered.end(0) / chatPlay.duration;
			$('.cache').width($(".time-cont").width()*scale);
			//console.log(lastEnd);
			//console.log(lastEnd==chatPlay.buffered.end(0));
			//console.log(chatPlay.buffered.end(0));
			//console.log(chatPlay.duration);
			//console.log(chatPlay.paused);
		    if(chatPlay.paused||chatPlay.buffered.end(0)>=chatPlay.duration){
		    	clearInterval(audioTimer);
		    }
		    lastEnd = chatPlay.buffered.end(0);
			//console.log(lastEnd)
		}
    }
	chatPlay.oncanplay = function(){
		endTime = Math.round(chatPlay.duration);
		endMinute = parseInt(endTime / 60);
	    endSecond = Math.round(endTime % 60);
		if (endMinute < 10) {
	        endMinute = "0" + endMinute;
	    }
	    if (endSecond < 10) {
	        endSecond = "0" + endSecond;
	    }
	    timeLabel.text(startMinute + ":" + startSecond + " / " + endMinute + ":" + endSecond);
    	chatPlay.volume=0.4;
	}
	chatPlay.canplaythrough = function(){
		$('.cache').width($(".time-cont").width());
	}
    chatPlay.ontimeupdate = function() {
		if(chatPlay.buffered.length!=0){
			//console.log(chatPlay.buffered.end(0))
			//console.log(chatPlay.currentTime)
			if(lastEnd==chatPlay.buffered.end(0)){
				clearInterval(audioTimer);
			}
			if(chatPlay.buffered.end(0)<=chatPlay.currentTime+50){
				console.log(4)
				var scale = chatPlay.buffered.end(0) / chatPlay.duration;
				$('.cache').width($(".time-cont").width()*scale);
			}
		}
    	if(audioTimeFlag){
	        startTime = Math.round(chatPlay.currentTime);
	        if (startTime < 60) {
	            startMinute = "0";
	            startSecond = startTime;
	        } else {
	            startMinute = Math.trunc(startTime / 60);
	            startSecond = Math.trunc(startTime % 60);
	        }
	        if (startMinute < 10) {
	            startMinute = "0" + startMinute;
	        }
	        if (startSecond < 10) {
	            startSecond = "0" + startSecond;
	        }
	        timeLabel.text(startMinute + ":" + startSecond + " / " + endMinute + ":" + endSecond);
	        $(".time-value").width(Math.trunc(chatPlay.currentTime*$(".time-cont").width()/chatPlay.duration));
		    $(".time-circle").css('left',$(".time-value").width()+'px');
    		if($(".time-circle").position().left < 0) {
				$(".time-circle").css("left", "0");
			}
			if($(".time-circle").position().left > $(".time-cont").width()-$(".time-circle").width()) {
				$(".time-circle").css("left", $(".time-cont").width()-$(".time-circle").width() + "px");
			}
    	}
    }
   	chatPlay.onended = function() {
        $('.play-pause div').attr("class","icon-now-pause");
        $(".time-value").width(0);
        timeLabel.text( "00:00" + " / " + endMinute + ":" + endSecond);
        $(".time-circle").css('left','0');
        $(".cache").css('width','0');
    }
	$('.video-ctrl').on("click", function(e) {
		var ev = window.event || arguments.callee.caller.arguments[0] || event;
		var target = ev.target || ev.srcElement;
		var target = $(target);
		//获取点击鼠标位置
		cursorX = e.originalEvent.x || e.originalEvent.layerX || 0; 
		if (target.parent().hasClass("play-pause")) {
			if (chatPlay.paused&&chatPlay.readyState==4) {
				iconPP.addClass("icon-now-play");
				iconPP.removeClass("icon-now-pause");
				chatPlay.play();
				console.log(3)
				audioTimer = setInterval(cache,500);
				var scale = chatPlay.buffered.end(0) / chatPlay.duration;
				$('.cache').width($(".time-cont").width()*scale);
			} else{
				iconPP.removeClass("icon-now-play");
				iconPP.addClass("icon-now-pause");
				chatPlay.pause();
				clearInterval(audioTimer);
			}
		}
		if (target.hasClass("icon-voiced")) {
			target.toggleClass("icon-voiced");
			target.toggleClass("icon-no-voiced");
			chatPlay.volume=0;
			$(".volume-value").width(chatPlay.volume*100);
			$(".volume-circle").css("left",$(".volume-value").width()+"px");
		} else {
			if (target.hasClass("icon-no-voiced")) {
				target.toggleClass("icon-voiced");
				target.toggleClass("icon-no-voiced");
				chatPlay.volume=0.4;
				$(".volume-value").width(chatPlay.volume*100);
				$(".volume-circle").css("left",$(".volume-value").width()+"px");
			}
		}
		if (target.hasClass("volume-value")||target.hasClass("volume-cont")) {
			var defaultX = parseInt(target.offset().left)
			$(".volume-value").width(cursorX-defaultX);
			chatPlay.volume=$(".volume-value").width()/100;
			$(".volume-circle").css("left",$(".volume-value").width()+"px");
			if (chatPlay.volume==0){
				$(".volume div:eq(0)").removeClass("icon-voiced");
				$(".volume div:eq(0)").addClass("icon-no-voiced");
			} else {
				$(".volume div:eq(0)").addClass("icon-voiced");
				$(".volume div:eq(0)").removeClass("icon-no-voiced");
			}
		}
		//点击改变时间
		if (target.hasClass("time-value")||target.hasClass("time-cont")||target.hasClass("cache")) {
			var defaultX = parseInt(target.offset().left)
			$(".time-value").width(cursorX-defaultX);
			var timeContW = $(".time-cont").width();
			$(".time-circle").css("left",cursorX-defaultX-10+"px");
			chatPlay.currentTime = Math.trunc($(".time-value").width()*chatPlay.duration/timeContW);
			var scale = chatPlay.buffered.end(0) / chatPlay.duration;
			$('.cache').width($(".time-cont").width()*scale);
		}
	});
});