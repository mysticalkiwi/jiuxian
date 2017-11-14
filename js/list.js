var str = '';
var atr = '';
var timer = null;
var shop = '';
var data1 = {};
var aaa = '';
var objCookie = {};
$(function() {
	$.get('json/json.json', function(data) {
		data1 = data;
		for(var i in data) {
			str += `<li><img src = ${data[i].src} data=${i}><p>¥${data[i].money}.00</p><a  href=details.html?id=${i} class = onea>${data[i].cap}</a><a href=# class=twoa>已有222人评价</a><span>官方旗舰店</span><a href='javascript:void(0)' class=cat dataid= ${i}>加入购物车</a></li>`;
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
			aaa += `<li><img src = ${obj.src} data=${i}><a href=details.html?id=${i}>¥${obj.cap}.00</a><span>${objCookie[i]}</span><i>¥${obj.money}</i><b></b></li>`

		}

		$("#cat").find('ul').html(aaa);
		$("#left").find('img').each(function(){
			$(this).click(function(){
				var index = this.getAttribute("data");
				location.href = "details.html?id="+index;
			})
		})
		$(".cont").find('img').each(function(){
			$(this).click(function(){
				var index = this.getAttribute("data");
				location.href = "details.html?id="+index;
			})
		})
		$("#cat").find('img').each(function(){
			$(this).click(function(){
				var index = this.getAttribute("data");
				location.href = "details.html?id="+index;
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

	shop = ` <li><img src=${data1[proId].src}><a href="">${data1[proId].cap}</a><span>${objCookie[i]}</span><i>¥${data1[proId].money}</i><b></b></li>`;
	$('#cat').find('ul').append(shop)
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
	delete objCookie[id];
	var strCookie = JSON.stringify(objCookie);
	setCookie("cart", strCookie, 7);
})
$("#cat").find('input').click(function() {
	location.href = "cat.html";
})