<?php
//$name = $_REQUEST["name"];
//$psw = $_REQUEST["psw"];
$name = "qingge@qq.com";
$psw = "123456";
$arr = array("name"=>"qingge@qq.com","psw"=>"123456","back"=> '{"UserId":"666666","nickName":"晴歌","rankName":"银牌会员"}');
if($name == $arr["name"] && $psw == $arr["psw"]){
	echo $arr["back"];
}else{
	echo "error";
}
?>