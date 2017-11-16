var str = '';
			var objCookie = {};
			var num = 0;
			var money = 0 ;
			$(function() {

				$.get("json/json.json", function(data) {
					if(getCookie("cart")) {
						 objCookie = JSON.parse(getCookie("cart"));
					} else {
						 objCookie = {};
					}
					for(var i in objCookie) {
						var obj = data[i];
						money += parseInt(obj.money) * objCookie[i];
						num += objCookie[i];
						var zj = obj.money*objCookie[i]
						str += `<li><i></i><div class="lig"><img src=${obj.src}><a href=details.html?id=${i}>${obj.cap}</a></div><div class="lig1">${obj.money}</div><div class="lig2">233</div><div class="lig3">${objCookie[i]}</div><div class="lig4">${zj}</div><div class="lig5"><b dataid=${i}>删除</b></div></li>`
					}
					$(".qian").html("¥"+money);
					$(".num").html(num);
					$("#shop").append(str);
						
					$("#shop").on("click","b",function(){
						$(this).parent().parent().remove();
						var id = this.getAttribute("dataid");
						money -= data[id].money * objCookie[id];
						num -= objCookie[id];
						$(".qian").html("¥"+money);
						$(".num").html(num);
						delete objCookie[id];
						var strCookie = JSON.stringify(objCookie);
						setCookie("cart", strCookie, 7);
					})
				
				})
			
				

			})
			