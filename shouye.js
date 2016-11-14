$('#need').click(function() {
    $('.but').show();
    $('.free').hide()
});
$('#peed').click(function() {
    $('.but').hide();
    $('.free').show()
});

$('#region').hover(function(){
    $('#other').show();
},function (){
    $('#other').hide()
});
$('#other').hover(function(){
    $(this).show();
},function (){
    $(this).hide()
});
$('#other p').click(function(){
    $('#city').html($(this).html());
    $('#other').hide()
});

$.ajax({
    type:'post',
    url:'http://www.zhijunxing.com/yiju/loginSession.action',
    dataType:'jsonp',
    success:function(data){
        if(data.success){
            $('ul a').eq(0).html('欢迎'+data.data[0].lname).attr('href','http://192.168.0.136/personal.html');
            $('ul a').eq(1).html('退出').attr({
                'onclick':'quitLogin()',
                'href':'###'
            })
        }

    }
});


function quitLogin(){
    $.ajax({
        type:'post',
        url:'http://www.zhijunxing.com/yiju/quitLogin.action',
        dataType:'jsonp',
        success:function(data){
            if(data.resultCode=='0000'){
                $('ul a').eq(0).html('登录').attr('href','http://192.168.0.136/login.html');
                $('ul a').eq(1).html('注册').attr('href','http://192.168.0.136/register.html').removeAttr('onclick');
            }
        }
    })
}














$.ajax({
    type: 'post',
    url: 'http://www.zhijunxing.com/yiju/queryHousesTop.action',
    dataType:'jsonp',
    success: function (data) {
        if (data.success) {
            /*console.log(data.data[0].villageName);*/
            var item = '';
            for (var i in data.data) {
                item += '<li class="border">' + '<img src="http://www.zhijunxing.com/yiju/upload/' +
                    data.data[i].photo.split(',')[0] + '"/><p class="region">' + data.data[i].villageName + '</p><div class="pattern">' + data.data[i].room + '<span class="money"> ' + data.data[i].price + '</span>元/月</div></li>'
            }
            $('.picture').append(item);

            $('.box').carousel({
                element: $('.banner'),
                time: 2000,
                left: $('.left'),
                right: $('.right'),
                oli: 4
            }, false, false);
        }else {
            alert('未知错误')
        }
    }
});
