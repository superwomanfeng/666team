var coolPage;
coolPage = new FullPage({
		id: 'pageContain',
    slideTime: 800,
    effect: {
        transform: {
           translate: 'X',
           scale:[0, 1],
           rotate:[270, 0]
        },
        opacity: [0, 1]
    },
    mode: 'wheel, touch, nav:navBar',
    easing: 'ease'
});

$(function(){
	//回到最顶部
	$(".goTop").hide();
	$(".goTop").on("click",function(){
				coolPage.go(0);
				if(coolPage.thisPage() == 0){
					$(".goTop").hide();
				}
			});
	//点击下一页按钮绑定事件
	var $goNext = $(".next").on("click",function(){
		//num值＝当前页＋1
		var num = coolPage.thisPage() + 1;
		//去到第num页
		coolPage.go(num);
		//如果num等于数组goNext的长度，num归0，回到最顶部
		if(num == $goNext.length){
			num = 0;
			coolPage.go(num);
		}
		//如果当前页面大于2小于6，展示回到顶部按钮；反之则隐藏
		if(coolPage.thisPage() > 2 && coolPage.thisPage() < 6){
			$(".goTop").show();
		}else{
			$(".goTop").hide();
		};
	});
	//点击小圆点绑定事件
	$('#navBar li').on("click",function(){
		//如果当前页面大于2小于5，展示回到顶部按钮；反之则隐藏
		if(coolPage.thisPage() > 2 && coolPage.thisPage() < 6){
			$(".goTop").show();
		}else{
			$(".goTop").hide();
		};
	});
	// if(coolPage.thisPage() > 2){
	// 	$(".goTop").show();
	// };
});