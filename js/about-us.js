$(function(){
				$("#btn").click(function(){
					$(".left-b").slideToggle(500,function(){
						if($(".left-b").is(":hidden")){
//							$("#btn").text("用户中心收缩");
							$("#btn").css("color","#a0d0fd");
							$("#btn").css("font-size","18px");
						}else if($(".left-b").is(":visible")){
							$("#btn").text("用户中心");
							$("#btn").css("color","#a0d0fd");
							$("#btn").css("font-size","18px");
						}
					})
				})
				
				
				
				$(".btn1").click(function(){
	                $(".kuang").css("display","block");
                 })
				$(".btn2").click(function(){
	                $(".kuang").css("display","block");
                 })
				$(".button").click(function(){
					$(".kuang").css("display","none");
				})
			})
















