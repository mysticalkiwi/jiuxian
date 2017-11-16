var str = '';
			var aaa = '';
			var timer = null;
			var money = 0;
			var data1 = {};
			var total = 0;
			$(".amo").bind("input propertychange", function() {
				if($(this).val() < 1) {
					this.value = 1
				}
			})
			$.get("json/json.json", function(data) {
				data1 = data;
				var adr = location.search;
				var arr = adr.split("=");
				var id = arr[1];
				var sp = data[id];

				$(".mony").html("￥" + sp.money);
				$(".cap").html(sp.cap)
				$(".midimg").find("img").attr("src", sp.src)
				$(".bigimg").find("img").attr("src", sp.src)
				var arr = Object.keys(sp);
				var len = arr.length;

				for(var i = 0; i < len - 3; i++) {
					if(i == 0) {
						i = '';
					}
					str += `<li><img src = ${sp["src"+i]}></li>`
				}

				$(".smlimg").find("ul").html(str);

				$('.smlimg').on('mouseover', "li", function() {
					var index = $(this).index();
					if(index == 0) {
						index = '';
					}
					$(this).addClass('listz').siblings().removeClass('listz');
					$('.midimg').find('img').attr("src", sp["src" + index]);
					$('.bigimg').find('img').attr("src", sp["src" + index]);
				})

				if(getCookie("cart")) {
					var objCookie = JSON.parse(getCookie("cart"));
				} else {
					var objCookie = {};
				}

				for(var i in objCookie) {
					var obj = data[i];
					aaa += `<li><img src = ${obj.src} data=${i}><a href=details.html?id=${i}>¥${obj.cap}.00</a><span class=${obj.id}>${objCookie[i]}</span><i>¥${obj.money}</i><b dataid=${i} ></b></li>`
					money += parseInt(obj.money) * objCookie[i];
					
				}
				$("#cat").find('ul').html(aaa);
				$(".mny").html("¥" + money);
				$("#btm").click(function() {
					var num = parseInt($(".amo").val());
					
					var strCookie = JSON.stringify(objCookie);
					$('#maimaimai').show();
					var proId = sp.id;
					if(!objCookie[proId]) {
						objCookie[proId] = 1;
					} else {
						objCookie[proId] += num;
					}
					money += parseInt(sp.money) * num;
					$(".mny").html("¥" + money);
					var strCookie = JSON.stringify(objCookie);
					setCookie("cart", strCookie, 7);
					total += num;
					$('.num').html(total);
					
					if(objCookie[proId] == 1){
						shop = ` <li><img src=${sp.src}><a href="">${sp.cap}</a><span class=${proId}>${total}</span><i>¥${sp.money}</i><b dataid=${sp.id} ></b></li>`;
						$('#cat').find('ul').append(shop)
					}else{
						$("#cat").find("."+sp.id).html(objCookie[proId])
					}
					
				})

			})

			$('.midimg').mouseover(function() {
				$('.bigimg').show();
				$(this).find('div').show();
			})
			$('.midimg').mouseout(function() {
				$('.bigimg').hide();
				$(this).find('div').hide();
			})

			$('.midimg').mousemove(function(e) {
				var evt = e || event;
				var disx = evt.pageX - $(this).find('div').width() / 2 - $('.glap').offset().left;
				var disy = evt.pageY - $(this).find('div').height() / 2 - $('.glap').offset().top;
				if(disx <= 0) {
					disx = 0;
				}
				if(disy <= 0) {
					disy = 0;
				}
				if(disx >= $(this).width() - $(this).find('div').width()) {
					disx = $(this).width() - $(this).find('div').width();
				}
				if(disy >= $(this).height() - $(this).find('div').height()) {
					disy = $(this).height() - $(this).find('div').height();
				}
				$(this).find('div').css({
					"left": disx,
					"top": disy
				});
				var x = -$(this).find('div').position().left / $(this).find('img').width() * $('.bigimg').find('img').width();
				var y = -$(this).find('div').position().top / $(this).find('img').height() * $('.bigimg').find('img').height();

				$('.bigimg').find('img').css({
					"left": x,
					"top": y
				})
			})

			
			$('#nav').siblings().each(function() {
				var index = $(this).index() - 1;
				$(this).css("top", 79 * index + 34);
			})
			$(".mai").click(function() {
				$('#cat').show()
			})
			$('#cat').find('.top').find('span').click(function() {
				$('#cat').hide()
			})

			if(getCookie("cart")) {
				var objCookie = JSON.parse(getCookie("cart"));
			} else {
				var objCookie = {};
			}
			
			for(var i in objCookie) {
				total += objCookie[i];
			}
			$('.num').html(total);

			$("#cat").on("DOMNodeInserted", "ul", function() {
				if($(this).children().length > 0) {
					$(this).siblings().hide().parents().css("padding-top", 0)
				}
			})
			$("#cat").on("click", "ul", function() {
				if($(this).children().length < 1) {
					$(this).siblings().show().parent().css("padding-top", 40)
				}
			})
			$("#cat").find("input").click(function() {
				location.href = "cat.html"
			})

			$('#maimaimai').find('a').eq(0).click(function() {
				$('#maimaimai').hide()
			})
			timer = setInterval(function() {
				$('#maimaimai').hide()
			}, 4000)

			$('#cat').on("mouseover", 'li', function() {
				$(this).css("background-color", "rgb(248,248,248)").find('b').show();

			})
			$('#cat').on("mouseleave", 'li', function() {
				$(this).css("background-color", "#fff").find('b').hide()
			})
			$('#cat').on("click", "b", function() {
				$(this).parent().remove();
				var id = this.getAttribute("dataid");
				total -= objCookie[id];
				money -= data1[id].money * objCookie[id];
				delete objCookie[id];
				$(".num").html(total)
				$(".mny").html("¥" + money)
				var strCookie = JSON.stringify(objCookie);
				setCookie("cart", strCookie, 7);
			})
			
			$('.classify').mouseover(function() {
				$(this).find("#nav").siblings().show()
			})
			
			$(".classify").mouseout(function(){
				$(this).find("#nav").siblings().hide()
			})
			

			