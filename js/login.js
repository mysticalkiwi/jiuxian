var str = '';
				var arr =[1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
				var sta = false;
				var sta1 = false;
				var sta2 = false;
				var sta3 = false;
				
				$(function(){
					$('#yzm').html(str);
					$('.zhlogin').eq(0).click(function(){
						$('.usercont').eq(0).show();
						$('.telcont').eq(0).hide();
						$(this).css({"color":"#e4393c","font-weight":"bold"})
						$('.tellogin').eq(0).css({"color":"#999","font-weight":"normal"})
					})
					$('.tellogin').eq(0).click(function(){
						$('.usercont').eq(0).hide();
						$('.telcont').eq(0).show();
						$(this).css({"color":"#e4393c","font-weight":"bold"})
						$('.zhlogin').eq(0).css({"color":"#999","font-weight":"normal"})
					})
					$('.skipewm').eq(0).click(function(){
						$('.userlogin').eq(0).hide();
						$('.ewmcont').eq(0).show();
					})
					$('.skipuser').eq(0).click(function(){
						$('.userlogin').eq(0).show();
						$('.ewmcont').eq(0).hide();
					})
					$('.usertxt').change(function(){
						if($(this).val().length == 0 ){
							$(this).siblings('b').eq(0).show().html("请输入用户名/邮箱/手机号");
						}else{
							$(this).siblings('b').eq(0).hide();
						}
					})
					$('.userpad').change(function(){
						if($(this).val().length == 0 ){
							$(this).siblings('b').eq(0).show().html("请输入密码");
						}else{
							$(this).siblings('b').eq(0).hide();
						}
					})
					$('.useryz').change(function(){
						if($(this).val().length == 0 ){
							$(this).siblings('b').eq(0).show().html("请输入验证码");
						}else{
							$(this).siblings('b').eq(0).hide();
						}
					})
					
				})
				
				for(var i = 0 ; i < 4 ;i++){
					var num = Math.floor(Math.random()*36);
					str += arr[num];
				}
				