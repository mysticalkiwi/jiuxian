var str = '';
var atr = '';
var timer = null;
var shop = '';
var data1 = {};
var aaa = '';
var objCookie = {};
var zj = 0;
var money = 0;
$(function() {
	$.get('json/json.json', function(data) {
		data1 = data;
		for(var i in data) {
			str += `<li><img src = ${data[i].src} data=${i}><p>¥${data[i].money}.00</p><a href=details.html?id=${i} class = onea>${data[i].cap}</a><a href=# class=twoa>已有222人评价</a><span>官方旗舰店</span><a href='javascript:void(0)' class=cat dataid= ${i}>加入购物车</a></li>`;
			atr += `<li><img src = ${data[i].src} data=${i}><p>¥${data[i].money}.00</p><a href=details.html?id=${i} >${data[i].cap}</a></li>`
		}
		$('.cont').find('ul').html(str);
		$('#left').find('ul').html(atr);

		if(getCookie("cart")) {
			var objCookie = JSON.parse(getCookie("cart"));
		} else {
			var objCookie = {};
		}

		for(var i in objCookie) {
			var obj = data1[i];
			aaa += `<li><img src = ${obj.src} data=${i}><a href=details.html?id=${i}>¥${obj.cap}.00</a><span class=${obj.id}>${objCookie[i]}</span><i>¥${obj.money}</i><b dataid=${obj.id} ></b></li>`
			money += parseInt(obj.money) * objCookie[i];
			$(".mny").html("¥" + money);

		}

		$("#cat").find('ul').html(aaa);
		$("#left").find('img').each(function() {
			$(this).click(function() {
				var index = this.getAttribute("data");
				location.href = "details.html?id=" + index;
			})
		})
		$(".cont").find('img').each(function() {
			$(this).click(function() {
				var index = this.getAttribute("data");
				location.href = "details.html?id=" + index;
			})
		})
		$("#cat").find('img').each(function() {
			$(this).click(function() {
				var index = this.getAttribute("data");
				location.href = "details.html?id=" + index;
			})
		})

	});

})

if(getCookie("cart")) {
	var objCookie = JSON.parse(getCookie("cart"));
} else {
	var objCookie = {};
}
var total = 0;
for(var i in objCookie) {
	total += objCookie[i];
}
$('.num').html(total);

$(".cont").on("click", ".cat", function() {

	$('#maimaimai').show();
	var proId = this.getAttribute("dataid");

	if(!objCookie[proId]) {
		objCookie[proId] = 1;
	} else {
		objCookie[proId] += 1;
	}

	var strCookie = JSON.stringify(objCookie);

	setCookie("cart", strCookie, 7);

	total += 1;
	$('.num').html(total);
	money += parseInt(data1[proId].money);
	$(".mny").html("¥" + money);
	if(objCookie[proId] == 1) {
		shop = ` <li><img src=${data1[proId].src}><a href=details.html?id=${proId}>${data1[proId].cap}</a><span class=${proId}>${objCookie[proId]}</span><i>¥${data1[proId].money}</i><b dataid=${data1[proId].id} ></b></li>`;
		$('#cat').find('ul').append(shop)
	} else {
		$("#cat").find("." + proId).html(objCookie[proId])
	}

});

$('#maimaimai').find('a').eq(0).click(function() {
	$('#maimaimai').hide()
})
timer = setInterval(function() {
	$('#maimaimai').hide()
}, 4000)

$(".mai").click(function() {
	$('#cat').show()
})
$('#cat').find('.top').find('span').click(function() {
	$('#cat').hide()
})
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
$("#cat").find('input').click(function() {
	location.href = "cat.html";
})

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
$('#nav').siblings().each(function() {
	var index = $(this).index() - 1;
	$(this).css("top", 79 * index + 34);
})
$('.classify').mouseover(function() {
	$(this).find("#nav").siblings().show()
})

$(".classify").mouseout(function() {
	$(this).find("#nav").siblings().hide()
})