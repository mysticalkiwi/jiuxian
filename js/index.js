var timer = null;
var time1 = null;
var time2 = null;
var index = 1;
var ban = document.getElementsByClassName('ban')[0];
var ban_p = document.getElementsByClassName('ban-p')[0];
var ban_bj = document.getElementsByClassName('ban-bj')[0];
var one_p = document.getElementsByClassName('one-p')[0];
var pro = document.getElementsByClassName('pro-1');
var tuijian = document.getElementsByClassName('tuijian');
var selist = document.getElementsByClassName('selist');
var btn_list = document.getElementsByClassName('btn-list');
var str = '';
var atr = '';

function move(banner, banner2, spanname) {
	$(banner).find('li').eq(index).fadeIn(1000).siblings().fadeOut(1000);
	$(banner2).find('span').eq(index).addClass(spanname).siblings().removeClass(spanname);
	index++;
	if(index == banner.children.length) {
		index = 0;
	}
}

function clearT(banner) {
	banner.onmouseover = function() {
		clearInterval(timer);
	}
}

function addT(banner, a, b) {
	banner.onmouseout = function() {
		timer = setInterval(function() {
			move(banner, a, b)
		}, 2000)
	}
}

function spanC(banner, banner2, spanname) {
	$(banner2).find('span').each(function() {
		$(this).mouseover(function() {
			var i = $(this).index();
			index = i;
			$(banner).find('li').eq(index).fadeIn(1000).siblings().fadeOut(1000);
			$(banner).find('a').eq(index).fadeIn(1000).siblings().fadeOut(1000);
			$(banner2).find('span').eq(index).addClass(spanname).siblings().removeClass(spanname);
		})
	})
}

timer = setInterval(function() {
	move(ban, ban_p, "ban-span");
}, 2000)

clearT(ban);
addT(ban, ban_p, "ban-span");
spanC(ban, ban_p, "ban-span");

$.get("json/json.json", function(data) {

	for(var i in data) {
		str += `<li><a href=''><img src = ${data[i].src}><p>${data[i].cap}</p></a><span>￥${data[i].money}</span></li>`;
		atr += `<li><a href=""><img src="${data[i].src}"/></a><a href=""><p>${data[i].cap}</p></a><span>￥${data[i].money}</span></li>`
	}

	$('.pro-1').html(str)
	$('.tuijian').html(str);
	$('.selist').html(str);
	$('.btn-list').html(atr);

})

function move2() {
	for(var i = 0; i < $('figure').eq(0).find('div').size(); i++) {
		$('figure').eq(0).find('div').eq(i).css("left", i * 1200);
	}
	$('.tuijian-s').find('span').each(function() {
		$(this).click(function() {
			var index = $(this).index();
			$(this).addClass('shuang11-span').siblings().removeClass('shuang11-span');
			$('figure').eq(0).find('div').eq(index).stop().animate({
				"left": 0
			}, 500).siblings().animate({
				"left": 1200
			}, 500);
		})
	})
	$('.btn-p').each(function() {
		$(this).find('span').each(function() {
			$(this).mouseover(function() {
				var index = $(this).index();
				$(this).addClass('btn-span').siblings().removeClass('btn-span');
				$('.btn-list').eq(index).show().siblings('ul').hide()
			})
		})
	})
	$('.btn-p1').each(function() {
		$(this).find('span').each(function() {
			$(this).mouseover(function() {
				var index = $(this).index();
				$(this).addClass('btn-span').siblings().removeClass('btn-span');
				$('.btn-list1').eq(index).show().siblings('ul').hide()
			})
		})
	})
	$('.sec-btn').find('ul').eq(0).find('li').each(function() {
		$(this).mouseover(function() {
			var index = $(this).index();
			$('.sec-btn').find('p').eq(0).stop().animate({
				"left": 92 * index
			}, 200);
			$('.guanfang').find('ul').eq(index).show().siblings().hide();
		})
	})
	$('.guanfang').find('ul').find('li').each(function() {
		$(this).mouseover(function() {
			$(this).find('img').eq(0).stop().animate({
				"left": -100
			}, 500);
		})
		$(this).mouseout(function() {
			$(this).find('img').eq(0).stop().animate({
				"left": 0
			}, 500);
		})
	})
	for(var i = 0; i < $('.smlban').find('a').size(); i++) {
		$('.smlban').find('a').eq(i).css("left", i * 268);
	}
	for(var i = 0; i < $('.smlban1').find('a').size(); i++) {
		$('.smlban1').find('a').eq(i).css("left", i * 268);
	}

}
move2()

$(function() {
	$('.acl').eq(0).find('li').each(function() {
		$(this).mouseover(function() {
			var index = $(this).index();
			$(this).addClass('acl-z').siblings().removeClass('acl-z');
			$('.pro-1').eq(index).show().siblings().hide();

		})
	})
	$('.acl2').eq(0).find('li').each(function() {
		$(this).mouseover(function() {
			var index = $(this).index();
			$(this).addClass('acl-z').siblings().removeClass('acl-z');
			$('.aff-cont').find('div').eq(index).show().siblings().hide();

		})
	})
	$('.backtop').click(function() {
		$("html,body").animate({
			"scrollTop": 0
		}, 500)
	})
	$('#sus').find('div').click(function() {
		var num = $(this).index();
		var hig = $('.sec-btn').siblings('div').eq(num).offset().top;
		var scroll = document.documentElement.scrollTop || document.body.scrollTop;
		$("html,body").stop().animate({
			"scrollTop": hig
		}, 500)
	})
	$('#sus').find('div').mouseover(function() {
		$(this).find('a').eq(0).show().stop().animate({
			"padding-left": 10,
			"padding-right": 10
		}, 300).siblings().hide()
	})
	$('#sus').find('div').mouseout(function() {
		$(this).find('a').eq(0).hide().stop().animate({
			"padding-left": 0,
			"padding-right": 0
		}, 300).siblings().show()
	})
	$("#sus").find('.backtop').mouseover(function() {
		$(this).find('i').css('background', "url(img/grther.png) no-repeat -95px -190px")
	})
	$("#sus").find('.backtop').mouseout(function() {
		$(this).find('i').css('background', "url(img/grther.png) no-repeat -74px -190px")
	})

})

function sus() {
	var scroll = document.documentElement.scrollTop || document.body.scrollTop;
	if(scroll >= $('section').offset().top - 400) {
		$('#sus').show()
	} else {
		$('#sus').hide()
	}
}
document.onscroll = sus;

function json_array(data) {
	var len = eval(data);
	var arr = [];
	for(var i = 0; i < len; i++) {
		arr[i]['id'] = data[i].id;
		arr[i]['url'] = data[i].src;
		arr[i]['cap'] = data[i].cap;
		arr[i]['money'] = data[i].money;
	}
	return arr;
}
$(".mai").click(function() {
	$('#cat').show()
})
$('#cat').find('.top').find('span').click(function() {
	$('#cat').hide()
})