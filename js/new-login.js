$(function(){
	//导航
	$(".new-login-header .nav li").click(function(){
		$(this).addClass("active").siblings("li").removeClass("active")
	});
	$(".new-login-header .nav li").hover(function(){
		$(this).find("i").css({"transform":"rotate(180deg)","color":"#269ABC"});
		$(this).find(".subnav").stop().slideDown();
	},function(){
		$(this).find("i").css({"transform":"rotate(0deg)","color":"#269ABC"});
	    $(this).find(".subnav").stop().slideUp();
	});
	var num=0;
	$(".new-login-header .user").click(function(){
		
		if(num%2==0){
			$(this).siblings(".menuList").show();
			$(this).children("b").css("transform","rotate(180deg)")
		}else{
			$(this).siblings(".menuList").hide();
			$(this).children("b").css("transform","rotate(0deg)")
		}
		num++;
		
	});
	
	//轮播图
	var width=document.documentElement.clientWidth;
	console.log(width);
	var index=0;
			var next=0;
			var timer=null;
			timer=setInterval(move,2000);
			function move(){
				next++;
				if(next==2){
					next=-1
				}
				$("#banner ul li").eq(index).siblings().css("left",width);
				$("#banner ul li").eq(index).animate({"left":-width});
				$("#banner ul li").eq(next).animate({"left":0});
				$("#banner ol li").eq(next).addClass("bgColor");
				$("#banner ol li").eq(next).siblings("li").removeClass("bgColor")
				index=next
				
			}
			function move2(){
				next--
				if(next==-1){
					next==2
				}
				
				$("#banner ul li").eq(index).siblings().css("left",-width)
				$("#banner ul li").eq(index).animate({"left":width})
				$("#banner ul li").eq(next).animate({"left":0})
				$("#banner ol li").eq(next).addClass("bgColor")
				$("#banner ol li").eq(next).siblings("li").removeClass("bgColor")
				index=next
				
			}
//			$("#banner #zuo").click(function(){
//				clearInterval(timer);
//				if(next==-1){
//				next=3
//			   }
//				move2()
//				timer=setInterval(move2,1000);
//			})
//			$("#banner #you").click(function(){
//				clearInterval(timer);
//				if(next==3){
//					next=-1
//				}
//				move()
//				timer=setInterval(move,1000);
//			})
			$("#banner ol li").click(function(){
				clearInterval(timer);
			     next=$(this).index()-1
			     move()
			     timer=setInterval(move,2000);
			})
			$("#banner").mouseover(function(){
				clearInterval(timer)
			})
			$("#banner").mouseleave(function(){
				timer=setInterval(move,2000);
			})
//			$("#banner ol li").hover(function(){
//				clearInterval(timer);
//			     next=$(this).index()-1
//			     move()
//			},function(){
//			     timer=setInterval(move,1000);
//			})
//			$("#banner").hover(function(){
//				 clearInterval(timer)
//			},function(){
//				clearInterval(timer)
//				timer=setInterval(move,1000);
//			})

$(".classisCase li").hover(function(){
	$(this).children(".search").show("300");
	$(this).children(".title").animate({"line-height":"46px",opacity:'0.5'})
},function(){
	$(this).children(".search").hide("300");
	$(this).children(".title").animate({"line-height":"0",opacity:'0'})
})

//轮播图2
var oUl=document.querySelector(".classisCase");
var btnL=document.querySelector(".btnLeft");
var btnR=document.querySelector(".btnRight");
var timer2=null;
    
    var num=0;
    btnL.onclick=function(){
    	clearInterval(timer2)
    	move3()
    	
    }
    btnR.onclick=function(){
    	clearInterval(timer2);
		timer2=setInterval(function(){
			  num+=10;
			  
			  if(num>0){
				num=-oUl.offsetWidth/2;  
			  }
			  
			  oUl.style.left=num+'px';
					
		},100)	
    }
    function move3(){
    	timer2=setInterval(function(){
	    	num-=10;		  
			if(num<-oUl.offsetWidth/2){
			   num=0;  
			}
	    	oUl.style.left=num+"px"
	    },100) 
    }
    move3()
    oUl.onmouseover=function(){
    	clearInterval(timer2);	
    }
    oUl.onmouseout=function(){
    	move3()
    }
})

