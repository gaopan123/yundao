$(function(){
	//按钮点击事件
	$(".list1").click(function(){
    	//展开 收缩
   		$(".hide").slideToggle(1000,function(){
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