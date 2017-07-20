$(function(){
	//按钮点击事件
	$("#btn").click(function(){
    	//展开 收缩
   		$(".hide").slideToggle(500,function(){
	    	//动画结束后 判断现在是展开状态还是收缩状态
	        //如果是收缩状态  箭头向下
		    if($(".hide").is(":hidden")){
		      	$("#btn").html("&or;")
		       
		    }else if($(".hide").is(":visible")){
		       	//如果是展开状态  箭头向上
		       	$("#btn").html('&and;')
		    }
	 	})
	})
})
//$(".show").hover(function(){
//	$(this).submit(".absolute").show("300");
//}

window.onload=function(){
	var oBox=document.getElementById("box")
	var oul=document.getElementById("ul1")
	var aLi=oul.children;
	var oL=document.getElementById("left")
	var oR=document.getElementById("right")
	oul.innerHTML+=oul.innerHTML
	oul.style.width=aLi[0].offsetWidth*aLi.length+"px"
	
	var n=0;
	var timer=null;
	oL.onclick=toL;
				
//	function toL(){
//		clearInterval(timer)
//		timer=setInterval(function(){
//			n-=10;
//			if (n<-oul.offsetWidth/2) {
//				n=0;
//			}
//			oul.style.left=n+"px"
//		},30)
//	}
//	toL()
	
	
	
	
	
	oL.onclick=function(){
			n+=376;
			if (n>0) {
				n=-oul.offsetWidth/2;
			}
			oul.style.left=n+"px";
	}
	
	oR.onclick=function(){
			n-=376;
			if (n<-oul.offsetWidth/2) {
				n=0;
			}
			oul.style.left=n+"px"
	}
	
}


//var show=document.getElementsByClassName("show")
//var absolute=document.getElementsByClassName("absolute")
//for(var i = 0;i<show.length;i++){
//	show[i].index = i;
//	show[i].onmouseover  = function(){
//		var x = this.index;
//		console.log("x="+x)
//		for(var j = 0;j<absolute.length;j++ ){
//				absolute[j].style.display = "block";
//		}
//	}
//	show[i].onmouseout=function(){
//		var x = this.index;
//		for(var j = 0;j<absolute.length;j++ ){
//				absolute[j].style.display = "none";
//		}
//	}
//}






//$(document).ready(function(){
//	$(".show").each(function(){
//		$(this).click(function(){
//			$(this).index()
//			$(".absolute").show();
//		});
//	})
//	
//	$("#show").click(function(){
//		$("p").hide();
//	});
//});
