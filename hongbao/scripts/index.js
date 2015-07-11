$(function(){
//******************slider特效 start*********************//
	var aLi = $('.slider li');
	var aDiv = $('.main .main-div');
	//点击页面顶部的三个tab，切换与其索引值对应的div，显示不同内容
	aLi.on("click",function(){
		aDiv.hide().eq($(this).index()).show();
		//点击第三个tab“晒一晒”时，唤起隐藏渐进特效
		if($(this).index() == 2){
			$(".porduct-click div").hide().fadeIn(3000);
		}
	});
//******************slider特效 end***********************//
//******************焦点图特效 start*********************//
	$('.container-ul li').on("click",function(){
			selectImg($(this).index());
	});
	$('.container-img').width($('div > img').length * 320 + "px");
	
	//方法：传入索引值时，清除所有图片和小圆点的active class效果，为索引值对应的元素添加active class效果
	function selectImg(idx){
		$('.container-ul li').removeClass('active')
				   		     .eq(idx)
				   			 .addClass('active');
		$(".container-img img").removeClass('active')
						   .eq(idx)
						   .addClass('active');
	}
	//方法：为定时器设定方法，定时器每执行一次，索引值加1，图片向右切换一个
	var index = 0;
	function start(){
		index++;
		if (index == $('.container-ul li').length) {
			index = 0;
		}
		selectImg(index);
	}
	//每2秒执行一次定时器
	setInterval(function(){
		start();
	},2000);
//******************焦点图特效 end***********************//
//******************footer特效 start*********************//
	$('.footer').hide().fadeIn(2000).fadeOut(1000);
//******************footer特效 end***********************//
//******************全部福利的特效 start*******************//
	//尝试在最后一个元素前加上2个元素
	var $aUl = $(".subCategoryBox ul").children('li:last');
	var $li_1 = $("<li><a href='#'>11111111</a><i>(30540)</i></li>");
	var $li_2 = $("<li><a href='#'>22222222</a><i>(30540)</i></li>");
	$aUl.before($li_1);
	$aUl.before($li_2);

	//获取class为subCategoryBox的div下的li索引值6后面的元素
	var $oSubCategoryBox = $('.subCategoryBox');
	var $oShowMore = $('.showmore');
	var $category = $(".subCategoryBox ul li:gt(6):not(:last)");
	var $aLi = $("ul li > a");
	
	//先隐藏元素、显示高亮效果
	$category.hide();
	$aLi.addClass('highlight');
	//通过点击按钮展示全部或精简
	$oShowMore.on('click',function() {
		if ($category.is(":visible")) {
			$category.hide(3000);
			$oSubCategoryBox.animate({
					height:"80px"
				},2200);
			$oShowMore.text('显示全部商品').css("color","#000");
			$aLi.addClass('highlight');
		}else{
			$category.css("display","inline-block");
			$oSubCategoryBox.css("height","110px");
			$oShowMore.text('精简显示商品').css("color","#000");
			$aLi.removeClass('highlight')
				.filter(":contains('佳能'),:contains('尼康'),:contains('理光')")
				.addClass('highlight');
			// var oDiv = $oSubCategoryBox.attr("class");
			// alert(oDiv);
		};
	});
//******************全部福利的特效 end*********************//
//******************晒一晒的特效 start*******************//
	$(".porduct-click div:first").css("margin-top","-10px");
	
//******************晒一晒的特效 end*********************//
	//打印一些日志
	// console.log($('input[name=username]'));
	// console.log(document.getElementById('input'));
});