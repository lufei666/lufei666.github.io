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
                var a ='<a href="http://192.168.0.136/screen.html">'+data.data[0].lname+'</a><a>|</a><a href="http://192.168.0.136/shouye.html" onclick="quitLogin()">退出</a>';
                $('.register').html(a);
            }else{
                location.href = 'http://192.168.0.136/login.html';
            }
        }
    });
}





























$('.direction').click(function(){
    $('.bearing').show()
});
$('.bearing').click(function(){
    $('this').show();
},function(){
    $('this').hide()
});
$('.bearing span').click(function(){
    $('.direction').html($(this).html());
    $('.bearing').hide();
});

$('.cut').click(function(){
    $('.fitment').show()
});
$('.fitment').click(function(){
    $('this').show()
},function(){
    $('this').hide()
});
$('.fitment span').click(function(){
    $('.cut').html($(this).html());
    $('.fitment').hide();
});

$('.cash-l').click(function(){
    $('.deposit').show()
});
$('.deposit').click(function(){
    $('this').show()
},function(){
    $('this').hide()
});
$('.deposit span').click(function(){
    $('.cash-l').html($(this).html());
    $('.deposit').hide();
});









$('.thing').click(function(){
    $(this).toggleClass('style');
});

//上传图片
var fileIds = [], num = 1;
$('.upload').on('change', 'input[type=file]', function () {
    var reader = new FileReader(), val = $(this).get(0).files[0];
    reader.readAsDataURL(val);
    //console.log(typeof reader);
    reader.onload = function () {
        fileIds.push('file' + num);
        $('#' + fileIds[num - 1]).hide();
        num += 1;
        $('.case').append('<img src="' + reader.result + '"/>');


    }
});

$('.upload .button').click(function(){
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
