var str = '';
var atr = '';
var timer = null;
$(function() {
	$.get('json/json.json', function(data) {
		for(var i in data) {
			str += `<li><img src = ${data[i].src}><p>¥${data[i].money}.00</p><a  href=# class = onea>${data[i].cap}</a><a href=# class=twoa>已有222人评价</a><span>官方旗舰店</span><a href='javascript:void(0)' class=cat >加入购物车</a></li>`;
			atr += `<li><img src = ${data[i].src}><p>¥${data[i].money}.00</p><a href=# >${data[i].cap}</a></li>`
		}
		$('.cont').find('ul').html(str);
		$('#left').find('ul').html(atr);
	});		
})

$(".cont").on("click",".cat",function(){
	$('#maimaimai').show()
});
$('#maimaimai').find('a').eq(0).click(function(){
	$('#maimaimai').hide()
})


timer = setInterval(function(){
	$('#maimaimai').hide()
},4000)
	
	

