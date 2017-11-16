var str = '';
				var arr =[1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
				var sta = false;
				var sta1 = false;
				var sta2 = false;
				var sta3 = false;
				
				$(function(){
					$('.cuti').click(function(){
						$('#enroll').show().siblings().hide();
						$('section').eq(0).css("background-image","url(img/bg.jpg)")
					});
					$('.cutb').click(function(){
						$('#enroll-qy').show().siblings().hide();
						$('section').css("background",0);
					});
					$('.tel').focus(function(){
						$(this).siblings('em').eq(0).show().css("background","#999").html("请输入11位手机号");
					});
					$('.tel').change(function(){
						if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test($(this).val()))){
							$(this).siblings('em').eq(0).css("background","#ed787f").html("请输入正确的手机号码");
							sta = false;
						}else{
							$(this).siblings('em').eq(0).hide();
							sta = true;
						}
					});
					$('.ran').html(str);
					$('.pad').focus(function(){
						$(this).siblings('em').eq(0).show().css("background","#999").html("8-20位字母、数字、下划线");
						
					});
					$('.pad').change(function(){
						if(!(/^(\w){8,20}$/.test($(this).val()))){
							$(this).siblings('em').eq(0).css("background","#ed787f").html("密码长度为8~20位");
							sta1 = false;
						}else{
							$(this).siblings('em').eq(0).hide();
							sta1 = true;
						}
					});
					$('.apasd').focus(function(){
						$(this).siblings('em').eq(0).show().css("background","#999").html("请再次输入密码");
					});
					$('.apasd').change(function(){
						if($(this).val() !=  $('.pad').val()){
							$(this).siblings('em').eq(0).css("background","#ed787f").html("两次输入的密码不一致");
							sta2 = false;
						}else{
							$(this).siblings('em').eq(0).hide()
							sta2 = true;
						}
					})
					$('.yzm').change(function(){
						if($(this).val() != str){
							$(this).siblings('em').eq(0).show().css("background","#ed787f").html("验证码不正确");
							sta3 = false;
						}else{
							$(this).siblings('em').eq(0).hide()
							sta3 = true;
						}
					})
					$('.btn').eq(0).click(function(){
						if(sta && sta1 && sta2 && sta3){
							var user = $(".tel").val();
							var psd  = $(".pad").val();
							
							var strCookie = JSON.stringify(user);
							var strCookie1 = JSON.stringify(psd);
							
							setCookie("user",strCookie,7);
							setCookie("psd",strCookie1,7);
							alert("注册成功,即将跳转")
							location.href = "index.html?userid="+user;
							
						}else{
							alert("输入正确信息")
						}
						
					})
				})
				
				for(var i = 0 ; i < 4 ;i++){
					var num = Math.floor(Math.random()*36);
					str += arr[num];
				}
			
				
