// 最上面的小黄鸡点击消失
$(function(){
	$('#J_event_close').click(function(){
		$('#J_event').fadeTo('slow',0.5,function(){
			$(this).css('display','none')
		});
	}) 
})
// 上海hover
$(function(){
	$(".fl li").mouseenter(function(){
		$(this).css('background-color','white');
		$(".citys").css('display','block').css('border-top','0');
		$(".ui-areamini-text-wrap").css('border','1px solid #ccc').css('border-bottom','0');
		$(".citys_list div").mouseenter(function(){
			$(this).css('background-color','#eee');
		}).mouseleave(function(){
		  	$(this).css('background-color','')
		})
	}).mouseleave(function(){
		$(this).css('background-color','');
		$(".ui-areamini-text-wrap").css('border','0')
		$('.citys').css('display','none');
	})
	$(".citys_list div").click(function(){
			$(this).css('background-color','red');
		}).mouseleave(function(){
		  	$(this).css('background-color','red')
		})
})
// 我的京东hover
$(function(){
 	$(".wodejd").mouseenter(function(){
 		$(this).css('background-color','white');
 		$(".jds").css('display','block').css('border-top','0');
 	}).mouseleave(function(){
 		$(this).css('background-color','');
 		$(".jds").hide();
 	})
 	$(".jds").mouseenter(function(){
 		$(".wodejd").css('background-color','white');
 		$(this).show();
 	}).mouseleave(function(){
 		$(".wodejd").css('background-color','');
		$(this).hide();
	})
 })
//客服服务hover
$(function(){
	$(".kefu").mouseenter(function(){
 		$(this).css('background-color','white');
 		$(".mykefu").css('display','block').css('border-top','0');
 	}).mouseleave(function(){
 		$(this).css('background-color','');
 		$(".mykefu").hide();
 	})
 	$(".mykefu").mouseenter(function(){
 		$(".kefu").css('background-color','white');
 		$(this).show();
 	}).mouseleave(function(){
 		$(".kefu").css('background-color','');
		$(this).hide();
	})
})
//手机京东hover
$(function(){
	$(".fr8 .dt").mouseenter(function(){
		$(".pop").show();
	}).mouseleave(function(){
		$(".pop").hide();
	})
	$(".pop").mouseenter(function(){
		$(this).show();
	}).mouseleave(function(){
		$(this).hide();
	})
})
//我的购物车
$(function(){
	$(".moche").mouseenter(function(){
 		$(this).css('background-color','white').css('border-bottom','0');
 		$(".downche").css('display','block').css('border-top','0');
 	}).mouseleave(function(){
 		$(this).css('background-color','');
 		$(".downche").hide();
 	})
 	$(".downche").mouseenter(function(){
 		$(".moche").css('background-color','white');
 		$(this).show();
 	}).mouseleave(function(){
 		$(".moche").css('background-color','').css('border-bottom','1');
		$(this).hide();
	})
})
//网站导航
$(function(){
		$(".webdaohang").mouseenter(function(){
 		$(this).css('background-color','white');
 		$(".mywebdaohang").css('display','block').css('border-top','0');
 	}).mouseleave(function(){
 		$(this).css('background-color','');
 		$(".mywebdaohang").hide();
 	})
 	$(".mywebdaohang").mouseenter(function(){
 		$(".webdaohang").css('background-color','white');
 		$(this).show();
 	}).mouseleave(function(){
 		$(".webdaohang").css('background-color','');
		$(this).hide();
	})
})
//促销hover
$(function(){
	$('.newshead_last').mouseenter(function(){
		$('.newscontent>.on').hide();
		$('.down').show();
		$('.news_active').css('transform','translate(56px)');
	})
	$('.newshead_first').mouseenter(function(){
		$('.newscontent>.on').show();
		$('.down').hide();
		$('.news_active').css('transform','translate(0px)');
	})
})
//出现情人节搜索栏
$(function(){
	$(window).scroll(function(){
		var top = $(document).scrollTop();
		//console.log(top)
		if(top>800){
			$("#search1").slideDown('1000');
			$("#search1").css('display','block');
			$("#search1").css('position','fixed');	
		}else{
			$("#search1").slideUp('500');
		}
	})
})
//出现bigshow
$(function(){
	$(".cate_menu li").mouseenter(function(){
		$('#bigshow').show();
	 	$(this).css('background-color','gray');
		$("#bigshow .smallshow_item").eq($(this).index()).show().siblings('div').hide();
		$("#bigshow").css('color','red')	
	}).mouseleave(function(){
		$(this).css('background-color','');
	})
	$("#bigshow").mouseenter(function(){
		$(this).show();
	}).mouseleave(function(){
		$(this).hide();
	})
})
// 轮播图
var timer;
$(function(){
	// function run(){
		$(".yuanbtn").mouseenter(function(){
			if (timer){
				clearInterval(timer);
			};
			$(this).addClass("active").siblings().removeClass('active');
			$(".tu_item").eq($(this).index()).fadeIn("fast").siblings().fadeOut();
		// }
		})
		$(".yuanbtn").mouseleave(function(){
			go();
		})
		// console.log($('.yuanbtn').each);
		function go(){
			$('.yuanbtn').each(function(){
				//console.log($(this));
				if ($(this).hasClass('active')){
					 Num = $(this).index();

					timer = setInterval(run,1500);	
				};
			})
		}
		go();
	//箭头
	$(".jtleft").click(function(){
		clearInterval(timer);
		if(Num<=0){
			Num=9;

		}else if(Num>8){
			Num=2
		}
		Num--;
		//console.log(Num);
		$('.yuanbtn').eq(Num).addClass("active").siblings().removeClass('active');
		$(".tu_item").eq(Num).fadeIn("fast").siblings().fadeOut();

		timer = setInterval(run,1500);
					
	})
	$(".jtright").click(function(){
		clearInterval(timer);
		if(Num<0){
			Num=8;

		}else if(Num>6){
			Num=-1
		}
		Num++;
		//console.log(Num);
		$('.yuanbtn').eq(Num).addClass("active").siblings().removeClass('active');
		$(".tu_item").eq(Num).fadeIn("fast").siblings().fadeOut();

		timer = setInterval(run,1500);
					
	})
	//摸上去全部暂停
	$('.slider_main').mouseenter(function(){
		clearInterval(timer);
		$('.jtleft,.jtright').show();
	})
	$('.slider_main').mouseleave(function(){
		timer = setInterval(run,1500);	
		$('.jtleft,.jtright').hide();
	})
})
//轮播的公共函数
function run(){
				$('.yuanbtn').eq(Num).addClass("active").siblings().removeClass('active');
				$(".tu_item").eq(Num).fadeIn("fast").siblings().fadeOut();
				Num++;
				if (Num == 8){
					Num = 0;
				};
		}
//cd计时器
$(function(){
	var cd = 7200;
	var first = document.getElementById('hour');
	var second = document.getElementById('minutes');
	var three = document.getElementById('seconds');
	var timer = setInterval(run,1000);
	run();
	function run(){
		if(cd < 0 ){
			cd=7200;
		}
	 	//var date = new Date();
	 	var h = Math.floor(cd/3600)
		var m = Math.floor((cd - h*3600)/60);
		var s = cd - h*3600 - m*60;
		h = h<10?'0'+h:h;
		m = m<10?'0'+m:m;
		s = s<10?'0'+s:s;
		first.innerHTML = h;
		second.innerHTML = m;
		three.innerHTML = s;
		cd--;
	 }
})
//小滚动
$(function(){
	$(".jtleft1").click(function(){
		//获取盒子的left值
		var l = parseInt($(".leftlist ul").css("left"));
		console.log(l)
		//参数一：设置要改变的样式
		//参数二：所需时间  动画执行时间
		//参数三：动画执行完毕以后  要执行的回调函数
		$(".leftlist ul").animate({left:(l+1000)+'px'},500,function(){
			if($('.leftlist ul').css('left') == '0px'){
			$(".leftlist ul").css('left','-4000px');
			}
			console.log($('.leftlist ul').css('left'))
		});	
	})
	$(".jtright1").click(function(){
			var l = parseInt($(".leftlist ul").css("left"));
			console.log(l)
		 $(".leftlist ul").animate({left:(l-1000)+'px'},500,function(){
		 	if($('.leftlist ul').css('left') == '-5000px'){
		 	$(".leftlist ul").css('left','-1000px');
		 	}
		 	console.log($('.leftlist ul').css('left'))
		});	
	})
	//摸上箭头消失出现
	// $('.leftlist').find('ul').mouseenter(function(){
	// 	$(".jtleft1 , .jtright1").show();
	// }).mouseleave(function(){
	// 	$(".jtleft1 , .jtright1").hide();
	// })
})
//排名选项卡
$(function(){
	$('.topsale_tab_head_item ').mouseenter(function(){
		$('.topsale_tab_content_item').eq($(this).index()).show().siblings('.topsale_tab_content_item').hide();
		var xiabiao = $(this).index();
		console.log(xiabiao);
		var z = xiabiao*78+"px";
		console.log(z)									// 需要拼接
		$('.top_sale_active').css("transform","translateX("+z+")");
	})
})

//logo小轮播
$(function(){
	//第一个小轮播smallul
	$(".jtleft2").click(function(){
		var le = parseInt($(".smallul").css("left"));
		console.log(le);
		$(".smallul").animate({left:(le+570)+"px"},500,function(){
			if($(".smallul").css('left')=='0px'){
				$(".smallul").css('left','-1140px');
			}
			console.log($('.smallul').css('left'))
		})
	})
	$(".jtright2").click(function(){
		var le = parseInt($(".smallul").css("left"));
		console.log(le);
		$(".smallul").animate({left:(le-570)+"px"},500,function(){
			if($(".smallul").css('left')=='-1710px'){
				$(".smallul").css('left','-570px');
			}
			console.log($('.smallul').css('left'))
		})

	})
	//第二个小轮播smallul1
	$(".jtleft22").click(function(){
		var le = parseInt($(".smallul1").css("left"));
		$(".smallul1").animate({left:(le+570)+"px"},500,function(){
			if($(".smallul1").css('left')=='0px'){
				$(".smallul1").css('left','-1140px');
			}
		})
	})
	$(".jtright22").click(function(){
		var le = parseInt($(".smallul1").css("left"));
		$(".smallul1").animate({left:(le-570)+"px"},500,function(){
			if($(".smallul1").css('left')=='-1710px'){
				$(".smallul1").css('left','-570px');
			}
		})
	})
	//第三个小轮播smallul2
	$(".jtleft222").click(function(){
		var le = parseInt($(".smallul2").css("left"));
		$(".smallul2").animate({left:(le+570)+"px"},500,function(){
			if($(".smallul2").css('left')=='0px'){
				$(".smallul2").css('left','-1140px');
			}
		})
	})
	$(".jtright222").click(function(){
		var le = parseInt($(".smallul2").css("left"));
		$(".smallul2").animate({left:(le-570)+"px"},500,function(){
			if($(".smallul2").css('left')=='-1710px'){
				$(".smallul2").css('left','-570px');
			}
		})
	})
	//第四个小轮播smallul3
	$(".jtleft2222").click(function(){
		var le = parseInt($(".smallul3").css("left"));
		$(".smallul3").animate({left:(le+570)+"px"},500,function(){
			if($(".smallul3").css('left')=='0px'){
				$(".smallul3").css('left','-1140px');
			}
		})
	})
	$(".jtright2222").click(function(){
		var le = parseInt($(".smallul3").css("left"));
		$(".smallul3").animate({left:(le-570)+"px"},500,function(){
			if($(".smallul3").css('left')=='-1710px'){
				$(".smallul3").css('left','-570px');
			}
		})
	})
	//第五个稍大轮播smallul4
	$(".jtleft22222").click(function(){
		var le = parseInt($(".smallul4").css("left"));
		$(".smallul4").animate({left:(le+570)+"px"},200,function(){
			if($(".smallul4").css('left')=='0px'){
				$(".smallul4").css('left','-1140px');
			}
		})
	})
	$(".jtright22222").click(function(){
		var le = parseInt($(".smallul4").css("left"));
		$(".smallul4").animate({left:(le-570)+"px"},200,function(){
			if($(".smallul4").css('left')=='-1710px'){
				$(".smallul4").css('left','-570px');
			}
		})
	})
	//第六个小轮播smallul5
	$(".jtleft222222").click(function(){
		var le = parseInt($(".smallul5").css("left"));
		$(".smallul5").animate({left:(le+570)+"px"},500,function(){
			if($(".smallul5").css('left')=='0px'){
				$(".smallul5").css('left','-1140px');
			}
		})
	})
	$(".jtright222222").click(function(){
		var le = parseInt($(".smallul5").css("left"));
		$(".smallul5").animate({left:(le-570)+"px"},500,function(){
			if($(".smallul5").css('left')=='-1710px'){
				$(".smallul5").css('left','-570px');
			}
		})
	})
	//第七个小轮播smallul6
	$(".jtleft2222222").click(function(){
		var le = parseInt($(".smallul6").css("left"));
		$(".smallul6").animate({left:(le+570)+"px"},500,function(){
			if($(".smallul6").css('left')=='0px'){
				$(".smallul6").css('left','-1140px');
			}
		})
	})
	$(".jtright2222222").click(function(){
		var le = parseInt($(".smallul6").css("left"));
		$(".smallul6").animate({left:(le-570)+"px"},500,function(){
			if($(".smallul6").css('left')=='-1710px'){
				$(".smallul6").css('left','-570px');
			}
		})
	})
	//第8个小轮播smallul7
	$(".jtleft3").click(function(){
		var le = parseInt($(".smallul7").css("left"));
		$(".smallul7").animate({left:(le+570)+"px"},500,function(){
			if($(".smallul7").css('left')=='0px'){
				$(".smallul7").css('left','-1140px');
			}
		})
	})
	$(".jtright3").click(function(){
		var le = parseInt($(".smallul7").css("left"));
		$(".smallul7").animate({left:(le-570)+"px"},500,function(){
			if($(".smallul7").css('left')=='-1710px'){
				$(".smallul7").css('left','-570px');
			}
		})
	})
	//第9个小轮播smallul8
	$(".jtleft4").click(function(){
		var le = parseInt($(".smallul8").css("left"));
		$(".smallul8").animate({left:(le+570)+"px"},500,function(){
			if($(".smallul8").css('left')=='0px'){
				$(".smallul8").css('left','-1140px');
			}
		})
	})
	$(".jtright4").click(function(){
		var le = parseInt($(".smallul8").css("left"));
		$(".smallul8").animate({left:(le-570)+"px"},500,function(){
			if($(".smallul8").css('left')=='-1710px'){
				$(".smallul8").css('left','-570px');
			}
		})
	})
	//第10个小轮播smallul9
	$(".jtleft5").click(function(){
		var le = parseInt($(".smallul9").css("left"));
		$(".smallul9").animate({left:(le+570)+"px"},500,function(){
			if($(".smallul9").css('left')=='0px'){
				$(".smallul9").css('left','-1140px');
			}
		})
	})
	$(".jtright5").click(function(){
		var le = parseInt($(".smallul9").css("left"));
		$(".smallul9").animate({left:(le-570)+"px"},500,function(){
			if($(".smallul9").css('left')=='-1710px'){
				$(".smallul9").css('left','-570px');
			}
		})
	})
	//第11个小轮播smallul10
	$(".jtleft6").click(function(){
		var le = parseInt($(".smallul10").css("left"));
		$(".smallul10").animate({left:(le+570)+"px"},500,function(){
			if($(".smallul10").css('left')=='0px'){
				$(".smallul10").css('left','-1140px');
			}
		})
	})
	$(".jtright6").click(function(){
		var le = parseInt($(".smallul10").css("left"));
		$(".smallul10").animate({left:(le-570)+"px"},500,function(){
			if($(".smallul10").css('left')=='-1710px'){
				$(".smallul10").css('left','-570px');
			}
		})
	})
	//第12个小轮播smallul11
	$(".jtleft7").click(function(){
		var le = parseInt($(".smallul11").css("left"));
		$(".smallul11").animate({left:(le+570)+"px"},500,function(){
			if($(".smallul11").css('left')=='0px'){
				$(".smallul11").css('left','-1140px');
			}
		})
	})
	$(".jtright7").click(function(){
		var le = parseInt($(".smallul11").css("left"));
		$(".smallul11").animate({left:(le-570)+"px"},500,function(){
			if($(".smallul11").css('left')=='-1710px'){
				$(".smallul11").css('left','-570px');
			}
		})
	})
	//第13个最小轮播smallestul12
	$(".jtleft8").click(function(){
		var le = parseInt($(".smallestul12").css("left"));
		$(".smallestul12").animate({left:(le+380)+"px"},500,function(){
			if($(".smallestul12").css('left')=='0px'){
				$(".smallestul12").css('left','-760px');
			}
		})
	})
	$(".jtright8").click(function(){
		var le = parseInt($(".smallestul12").css("left"));
		$(".smallestul12").animate({left:(le-380)+"px"},500,function(){
			if($(".smallestul12").css('left')=='-1140px'){
				$(".smallestul12").css('left','-380px');
			}
		})
	})
	//第14个最小轮播smallestul13
	$(".jtleft9").click(function(){
		var le = parseInt($(".smallestul13").css("left"));
		$(".smallestul13").animate({left:(le+380)+"px"},500,function(){
			if($(".smallestul13").css('left')=='0px'){
				$(".smallestul13").css('left','-760px');
			}
		})
	})
	$(".jtright9").click(function(){
		var le = parseInt($(".smallestul13").css("left"));
		$(".smallestul13").animate({left:(le-380)+"px"},500,function(){
			if($(".smallestul13").css('left')=='-1140px'){
				$(".smallestul13").css('left','-380px');
			}
		})
	})
	//第14个最小轮播smallestul13
	$(".jtleft10").click(function(){
		var le = parseInt($(".smallestul14").css("left"));
		$(".smallestul14").animate({left:(le+380)+"px"},500,function(){
			if($(".smallestul14").css('left')=='0px'){
				$(".smallestul14").css('left','-760px');
			}
		})
	})
	$(".jtright10").click(function(){
		var le = parseInt($(".smallestul14").css("left"));
		$(".smallestul14").animate({left:(le-380)+"px"},500,function(){
			if($(".smallestul14").css('left')=='-1140px'){
				$(".smallestul14").css('left','-380px');
			}
		})
	})
})
//左侧电梯
$(function(){
	$(window).scroll(function(){
		var f=0;
		var top = $(document).scrollTop();
		//console.log(top)
		if(top>1580){
			$(".lift").fadeIn('slow');
		}else{
			$(".lift").fadeOut('slow');
		}
		f = Math.floor((top-1600)/600);
		$(".lift_item").eq(f).css("background-color","red").siblings().css('background-color','');
		//单独绑定top按钮
		//兼容火狐
		$(".litf_item_top").click(function(){
			$('html,body').stop().animate({"scrollTop":0},1000)
			return false;
		})
	})
	//指定跳转到
	$(".lift_list").find('.lift_item').click(function(){
		$('body,html').animate({
			'scrollTop':1580+680*$(this).index()
		},600)
	})
 })
//右侧侧边栏
$(function(){
	$('.first').mouseenter(function(){
		$(this).children('em').stop().animate({'left':'-61px'},500).css('background-color','red')
		$(this).children('.tab_tip').hide();
	}).mouseleave(function(){
		$(this).children('em').stop().animate({'left':'35px'},500).css('background-color','')
		$(this).children('.tab_tip').show();
	})
	$('.second').mouseenter(function(){
		$(this).children('em').stop().animate({'left':'-61px'},500).css('background-color','red')
	}).mouseleave(function(){
		$(this).children('em').stop().animate({'left':'35px'},500).css('background-color','')
	})
	$('.third').mouseenter(function(){
		$(this).children('em').stop().animate({'left':'-61px'},500).css('background-color','red')
	}).mouseleave(function(){
		$(this).children('em').stop().animate({'left':'35px'},500).css('background-color','')
	})
	$('.forth').mouseenter(function(){
		$(this).children('em').stop().animate({'left':'-61px'},500).css('background-color','red')
	}).mouseleave(function(){
		$(this).children('em').stop().animate({'left':'35px'},500).css('background-color','')
	})
	$('.fifth').mouseenter(function(){
		$(this).children('em').stop().animate({'left':'-61px'},500).css('background-color','red')
	}).mouseleave(function(){
		$(this).children('em').stop().animate({'left':'35px'},500).css('background-color','')
	})
	$('.sixth').mouseenter(function(){
		$(this).children('em').stop().animate({'left':'-61px'},500).css('background-color','red')
	}).mouseleave(function(){
		$(this).children('em').stop().animate({'left':'35px'},500).css('background-color','')
	})
	$('.footer_first').mouseenter(function(){
		$(this).children('em').stop().animate({'left':'-61px'},500).css('background-color','red')
	}).mouseleave(function(){
		$(this).children('em').stop().animate({'left':'35px'},500).css('background-color','')
	})
	$('.footer_second').mouseenter(function(){
		$(this).children('em').stop().animate({'left':'-61px'},500).css('background-color','red')
	}).mouseleave(function(){
		$(this).children('em').stop().animate({'left':'35px'},500).css('background-color','')
	})
	//给footer_first按钮单独绑定top事件
	$(window).scroll(function(){
		$('.footer_first').click(function(){
			$('body,html').stop().animate({'scrollTop':'0'},500);
		})
	})
})
//右侧复杂
$(function(){
	//话费
	$(".iframe_top").find("li").mouseenter(function(){
		$(this).addClass("iframe_selected").siblings().removeClass("iframe_selected");
		$(".iframe_recharge").eq($(this).index()+1).show().siblings(".iframe_recharge").hide();
	}).mouseleave(function(){
		$(this).removeClass("iframe_selected");
	})
	$(".sli").mouseenter(function(){
		$(".service_pop .pop_content_item").eq($(this).index()).show().siblings(".service_pop .pop_content_item").hide();
		//border-top 变红
		$(this).eq($(".sli").index()).css('border-top','2px solid red').siblings().css('border-top','');
		//话费变红
		$(this).eq($(".lala").index()).css("color",'red').siblings().css('color','');;
		//li的height变
		$(".sli").animate({"height":'22px'},100);
		//图标消失
		$(".sli").find("i").animate({"height":'0px',},100);
		//话费字体上移
		$(".sli").find(".lala").animate({"margin-top":'-12px'},100);
		//小选项卡出现
		$(".service_pop").animate({"height":'188px'},100);
		//点击叉叉消失
		$(".chacha").click(function(){
			//小选项卡复原
			$(".service_pop").stop().animate({"height":'0px'},100);
			//话费字体复原
			$(".sli").find(".lala").animate({"margin-top":'0px','height':'16px'},100);
			//图标复原
			$(".sli").find("i").animate({"height":'24px'},100);
			//li的height复原
			$(".sli").animate({"height":'68px'},100);
			//border-top 复原
			$(".sli").css('border-top','');
			//话费颜色复原
			$(".sli").find(".lala").css("color",'');
		})
	 })
	//机票滚动
	$(".iframe_item").mouseenter(function(){
		//获取摸到元素的下标
		var n = $(this).index();
		//算好相应滚动距离
		var m = -190*n+"px";
		console.log(m)
		console.log(n)
		$(".tab_content").animate({"margin-left":m},400)//拼接的话"("+m+")"
	   
	})

})