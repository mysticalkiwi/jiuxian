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
				for(var j = 0; j < pro.length; j++) {
					for(var n = 0; n < pro[j].children.length; n++) {
						for(var i in data) {
							pro[j].children[n].children[0].children[0].src = data[i].src;
							pro[j].children[n].children[0].children[1].innerHTML = data[i].cap;
							pro[j].children[n].children[1].innerHTML = "¥" + data[i].money;
							break;
						}
					}
				}
				for(var j = 0; j < tuijian.length; j++) {
					for(var n = 0; n < tuijian[j].children.length; n++) {
						for(var i in data) {
							tuijian[j].children[n].children[0].children[0].src = data[i].src;
							tuijian[j].children[n].children[0].children[1].innerHTML = data[i].cap;
							tuijian[j].children[n].children[1].innerHTML = "¥" + data[i].money;
							break;
						}
					}
				}
				for(var j = 0; j < selist.length; j++) {
					for(var n = 0; n < selist[j].children.length; n++) {
						for(var i in data) {
							selist[j].children[n].children[0].children[0].src = data[i].src;
							selist[j].children[n].children[0].children[1].innerHTML = data[i].cap;
							selist[j].children[n].children[1].innerHTML = "¥" + data[i].money;
							break;
						}
					}
				}
				for(var j = 0; j < btn_list.length; j++) {
					for(var n = 0; n < btn_list[j].children.length; n++) {
						for(var i in data) {
							btn_list[j].children[n].children[0].children[0].src = data[i].src;
							btn_list[j].children[n].children[1].children[0].innerHTML = data[i].cap;
							btn_list[j].children[n].children[2].innerHTML = "¥" + data[i].money;
							break;
						}
					}
				}
			})
			console.log($('.btn-p'))
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
				$('.btn-p').each(function(){
					$(this).find('span').each(function() {
					$(this).mouseover(function() {
						var index = $(this).index();
						$(this).addClass('btn-span').siblings().removeClass('btn-span');
						$('.btn-list').eq(index).show().siblings('ul').hide()
					})
				})
			})
				$('.btn-p1').each(function(){
					$(this).find('span').each(function() {
					$(this).mouseover(function() {
						var index = $(this).index();
						$(this).addClass('btn-span').siblings().removeClass('btn-span');
						$('.btn-list1').eq(index).show().siblings('ul').hide()
					})
				})
			})
				$('.sec-btn').find('ul').eq(0).find('li').each(function(){
					$(this).mouseover(function(){
						var index = $(this).index();
						$('.sec-btn').find('p').eq(0).stop().animate({"left":92*index},200);
						$('.guanfang').find('ul').eq(index).show().siblings().hide();
					})
				})
				$('.guanfang').find('ul').find('li').each(function(){
					$(this).mouseover(function(){
						$(this).find('img').eq(0).stop().animate({"left":-100},500);
					})
					$(this).mouseout(function(){
						$(this).find('img').eq(0).stop().animate({"left":0},500);
					})
				})
				for( var i = 0 ; i < $('.smlban').find('a').size(); i++){
					$('.smlban').find('a').eq(i).css("left",i*268);
				}
				for( var i = 0 ; i < $('.smlban1').find('a').size(); i++){
					$('.smlban1').find('a').eq(i).css("left",i*268);
				}
		}
			move2()
			
			time2 = setInterval(function(){
				$('.smlban').find('a').each(function(){
				var index = $(this).index();
				$(this).animate({"left":268},300).siblings('a').animate({"left":0},300);
				$('.smlban').find('span').eq(index).addClass('sml-span').siblings().removeClass('sml-span');
				})
			},2000)
			
			
			
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
			})