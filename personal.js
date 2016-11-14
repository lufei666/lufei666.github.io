/*---------------------------------------------------上传头像-------------------------------------------------------*/

$(function(){
    $(".box-c a").click(function() {
        $(this).siblings('a').removeClass('style');  // 删除其他兄弟元素的样式
        $(this).addClass('style');                            // 添加当前元素的样式
    });
});

$('.upload').click(function(){
    $('.picture').show();
    $('.pet').hide();
    $('.pw').hide()
});
$('.nickname').click(function(){
    $('.pet').show();
    $('.picture').hide();
    $('.pw').hide()
});
$('.code').click(function(){
    $('.pw').show();
    $('.picture').hide();
    $('.pet').hide()
});

/*---------------------------------------------------自己写的-------------------------------------------------------*/
/*---------------------------------------------------我的收藏-------------------------------------------------------*/

/*
$(function(){
    $(".set-u li").click(function() {
        $(this).siblings('li').removeClass('set-y');  // 删除其他兄弟元素的样式
        $(this).addClass('set-y');                            // 添加当前元素的样式
    });
});

$('.set-s').click(function(){
    $('.collect').show();
    $('.release').hide();
    $('.history').hide();
    $('.person-box').hide();
});
$('.set-f').click(function(){
    $('.collect').hide();
    $('.release').show();
    $('.history').hide();
    $('.person-box').hide();
});
$('.set-l').click(function(){
    $('.collect').hide();
    $('.release').hide();
    $('.history').show();
    $('.person-box').hide();
});
$('.set-b').click(function(){
    $('.collect').hide();
    $('.release').hide();
    $('.history').hide();
    $('.person-box').show();
});
*/

/*---------------------------------------------------老师写的-------------------------------------------------------*/
/*---------------------------------------------------我的收藏-------------------------------------------------------*/

$('.set-u li').eq(0).click(function(){
    var pageNo = 1;

    $(this).addClass('set-y').siblings().removeClass('set-y');
    $('.collect').show();
    $('.release').hide();
    $('.history').hide();
    $('.person-box').hide();

    collect(pageNo);

    $('.page').on('click','a',function(){
        if($(this).html() == '上一页'){
            if(!(pageNo == 1)){
                pageNo -= 1;
                collect(pageNo);
            }
        }else if($(this).html() == '下一页'){
            if(!(pageNo == $('.page a').last().prev().html())){
                pageNo += 1;
                collect(pageNo);
            }
        }else {
            pageNo = parseInt($(this).html());
            collect(parseInt(pageNo));      //parseInt() 函数可解析一个字符串，并返回一个整数
        }
    })

});
$('.set-u li').eq(1).click(function(){
    $(this).addClass('set-y').siblings().removeClass('set-y');
    $('.collect').hide();
    $('.release').show();
    $('.history').hide();
    $('.person-box').hide();
});
$('.set-u li').eq(2).click(function(){
    $(this).addClass('set-y').siblings().removeClass('set-y');
    $('.collect').hide();
    $('.release').hide();
    $('.history').show();
    $('.person-box').hide();
});
$('.set-u li').eq(3).click(function(){
    $(this).addClass('set-y').siblings().removeClass('set-y');
    $('.collect').hide();
    $('.release').hide();
    $('.history').hide();
    $('.person-box').show();
});

//添加收藏
/*for(var i =400;i<600;i++){
    $.ajax({
        type:'get',
        url: 'http://www.zhijunxing.com/yiju/addCollect.action',
        dataType:'jsonp',
        data:{
            hid:i
        },
        success:function(data){
            console.log(data);
        }
    })
}*/

//取消收藏

/*$.ajax({
    type:'get',
    url:'http://www.zhijunxing.com/yiju/delCollect.action',
    dataType:'jsonp',
    data:{
        hid:74
    },
    success:function(data){
        console.log(data);
}
});*/

$('.dv').on('click','.delete',function(){
    $('.window').show();
    $('.mask').show();
});
$('.window-x').click(function(){
    $('.window').hide();
    $('.mask').hide();
});
$('.but-2').click(function(){
    $('.window').hide();
    $('.mask').hide();
});
$.ajax({
    type:'get',
    url:'http://www.zhijunxing.com/yiju/delCollect.action',
    dataType:'jsonp',
    data:{
        hid:1526
    },
    success:function(data){
        console.log(data);
        if(data.success){
            $('.window').on('click','.but-1',function(){
                console.log(resultCode);
                alert(message);
            })
        }
    }
});





function collect(pageNo){
    $.ajax({
        type:'post',
        url:'http://www.zhijunxing.com/yiju/queryCollectHouses.action',
        dataType:'jsonp',
        data:{
            pageNo:pageNo
        },
        success:function(data){
            console.log(data.rowCount);
            if(data.success){
                var a;
                if(Math.ceil(data.rowCount / 2) <= 5){
                    a = '<a href="###">上一页</a>';
                    for(var i = 1;i<=Math.ceil(data.rowCount / 2);i++){
                        if(i == pageNo){
                            a += '<a href="###" class="page-checked">'+i+'</a>'
                        }else {
                            a += '<a href="###">'+i+'</a>'
                        }
                    }
                    a += '<a href="###">下一页</a>';
                }else if(pageNo <= 3){
                    a = '<a href="###">上一页</a>';
                    for (var i = 1;i<=4; i++){
                        if(i == pageNo){
                            a += '<a href="###" class="page-checked">'+i+'</a>'
                        }else {
                            a += '<a href="###">'+i+'</a>'
                        }
                    }
                    a += '<b>··· </b><a href="###">'+Math.ceil(data.rowCount / 2)+'</a><a href="###">下一页</a>';
                }else if(pageNo+2 >= Math.ceil(data.rowCount / 2)){
                    a = '<a href="###">上一页</a>'+
                        '<a href="###">1</a>'+
                        '<b>··· </b>';
                    for(var i = 3;i >= 0;i--){
                        if(Math.ceil(data.rowCount / 2) - i == pageNo){
                            a += '<a href="###" class="page-checked">'+(Math.ceil(data.rowCount / 2)-i)+'</a>'
                        }else {
                            a += '<a href="###">'+(Math.ceil(data.rowCount / 2)-i)+'</a>'
                        }
                    }
                    a += '<a href="###">下一页</a>';
                }else  if(pageNo + 2 < Math.ceil(data.rowCount / 2)){
                    a = '<a href="###">上一页</a>'+
                             '<a href="###">1</a>'+
                             '<b>··· </b>'+
                            '<a href="###">'+(parseInt(pageNo)-1)+'</a>'+
                            '<a href="###" class="page-checked">'+pageNo+'</a>'+
                            '<a href="###">'+(parseInt(pageNo)+1)+'</a>'+
                            '<b>··· </b>'+
                            '<a href="###">'+Math.ceil(data.rowCount / 2)+'</a>'+
                            '<a href="###">下一页</a>'
                }
                $('.page').html(a);

           var item = '';
                for (var i = 0; i < data.data.length; i++){
                item += '<dl class="box1"><dt class="img"><a href=""><img src="http://www.zhijunxing.com/yiju/upload/' + data.data[i].photo.split(',')[0] + '" alt="" style="width: 100%;height: 100%;"/></a></dt>' +
                        '<dd><a class="address">'+data.data[i].tittle+' '+data.data[i].room+'<p class="people"></p><p class="honest"></p></a></dd>' +     '<dd><a class="pattern">'+data.data[i].room+' | '+data.data[i].rentway+' | '+data.data[i].hlevel+' | '+data.data[i].floor+'/'+data.data[i].countfloor+'层</a></dd>' +
                        '<dd><p class="map"></p><a class="location">'+data.data[i].address+'</a></dd>' +
                        '<dd><a class="decorate">'+data.data[i].hlevel+'</a><a class="subway">'+data.data[i].paymethod+'</a></dd>' +
                        '<dd><div class="money"><span class="month">'+data.data[i].price+'</span>/月<span class="date">'+data.data[i].addtime+'</span><a href="###" class="delete">删除 ×</a></div></dd>' +
                        '</dl>'
                }
                $('.pox .dv').html(item);
            }else {
                alert('您没有收藏房源！')
            }
        }
    })
}



























/*---------------------------------------------------修改昵称-------------------------------------------------------*/

$('.pet .pet-p').on({
    focus:function(){
        $(this).css({
            'border-color':'rgb(112, 173, 70)'
        });
    },
    blur:function(){
        var val = $(this).val();
        if(/[\w]{6,20}$/.test(val)){
            $('.pet .keep-1').click(function(){
                $.ajax({
                    type:'post',
                    url:'http://www.zhijunxing.com/yiju/uqdateLandlord.action',
                    dataType:'jsonp',
                    data:{
                        lname:val
                    },
                    success:function(data){
                        console.log(data);
                        if(data.resultCode=='0000'){
                            login();
                        }
                    }
                })
            })
        }
    }
});
/*---------------------------------------------------修改密码-------------------------------------------------------*/
var pass = $('.pw');
/*
$('.pw .pet-p').on({
    focus:function(){
        $(this).css({
            'border-color':'rgb(112, 173, 70)'
        });
    }
});
$('.pw .pet-p').eq(0).blur(function(){
    var val=$(this).val();
    console.log(val == pass);
    if(!(val==pass)){
        $(this).css({
            'border-color': '#981616'
        });
    }
});

$('.pw .pet-p').eq(1).blur(function(){
   var val=$(this).val();
    if(!(/^[a-zA-Z0-9][\w]{5,19}/.test(val))){
        $(this).css({
            'border-color': '#981616'
        })
    }
});
$('.pw .pet-p').eq(2).blur(function(){
    var val=$(this).val();
    if(!(val == '' ? false : val === $('.pet .pet-p').eq(1).val())){
        $(this).css({
            'border-color': '#981616'
        })
    }
});
$('.pw .keep-1').click(function(){
    var off = true;
    console.log($('.name-t1 input').eq(0).css('border-top-color'));
});
*/

$('.pw .pet-p').on({

    focus: function () {
        $(this).css({
            'border-color': 'rgb(112, 173, 70)'
        });
    }
});

$('.pw .pet-p').eq(0).blur(function () {
    var val = $(this).val();
    console.log(val==pass);

    if (!(val == pass)) {
        $(this).css({
            'border-color': '#981616'
        });
    }
});
$('.pw .pet-p').eq(1).blur(function () {
    var val = $(this).val();
    if(!(/^[a-zA-Z0-9][\w]{5,19}/.test(val))){
        $(this).css({
            'border-color': '#981616'
        });
    }

});
$('.pw .pet-p').eq(2).blur(function () {
    var val = $(this).val();
    if(!(val == '' ? false : val === $('.pw .pet-p').eq(1).val())){
        $(this).css({
            'border-color': '#981616'
        });
    }

});
$('.pw .keep-1').click(function () {
    var off=true;
//        for (var i=0; i<$('.name-t1 input').length;i++){
//
//        }
    console.log($('.pw .pet-p').eq(0).css('border-top-color'));


});

/*----------------------------------------------------ajax----------------------------------------------------------*/
login();

//获取登录信息
function login() {
    $.ajax({
        type: 'post',
        url: 'http://www.zhijunxing.com/yiju/loginSession.action',
        dataType: 'jsonp',
        success: function (data) {
            console.log(data);
            if (data.success) {
                var a ='<a href="###">'+data.data[0].lname+'</a><a>|</a><a href="http://192.168.0.136/shouye.html" onclick="quitLogin()">退出</a>';
                 $('.register').html(a);
                $('.set span').html(data.data[0].lname);
                if (data.data[0].lphoto) {
                    $('.set img').attr('src', 'http://www.zhijunxing.com/yiju/upload/' + data.data[0].lphoto);
                } else {
                    alert('没有上传图片')
                }
            } else {
                location.href = 'http://192.168.0.136/login.html';
            }
        }
    });
 }

//上传图片按钮
$('.picture .file').change(function(){
    if(typeof FileReader == 'undefined'){
        alert("检测到您的浏览器不支持FileReader对象");
    }
    var reader = new FileReader();
    val = this.files[0];
    reader.readAsDataURL(val);
    reader.onload = function(){
        $('.picture img').attr('src',reader.result);
    }
});

//点击保存，开始上传图片
$('.picture .keep').click(function(){
    $.ajaxFileUpload({
        type: 'post',
        url: 'http://www.zhijunxing.com/yiju/uqdateLandlord.action',
        secureuri: false,
        fileElementId: 'uploadPhoto',
        async: true,
        cache: true,
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded;charset=UTF-8'
    });
    setTimeout(login, 1000)
});

//退出
function quitLogin() {
    $.ajax({
        type:'post',
        url:'http://www.zhijunxing.com/yiju/quitLogin.action',
        dataType:'josnp',
        success:function(data){
            console.log(data);
            if(data.resultCode=='0000'){
                location.href='http://192.168.0.136/shouye.html';
            }
        }

    })
}