login();

//获取登录信息
function login() {
    $.ajax({
        type: 'post',
        url: 'http://www.zhijunxing.com/yiju/loginSession.action',
        dataType: 'jsonp',
        success: function (data) {
           // console.log(data);
            if (data.success) {
                var a ='<a href="http://192.168.0.136/screen.html">'+data.data[0].lname+'</a><a>|</a><a href="http://192.168.0.136/shouye.html" onclick="quitLogin()">退出</a>';
                $('.register').html(a);
            }else{
                location.href = 'http://192.168.0.136/login.html';
            }
        }
    });
}






/*$('.type').click(function(){
    $('.layout').show();
});
$('.layout').click(function(){
    $(this).show();
},function(){
    $(this).hide()
});
$('.layout span').click(function(){
    $('.type').html($(this).html());
    $('.layout').hide()
});

$('.type-1').click(function(){
    $('.form').show();
});
$('.form').click(function(){
    $(this).show();
},function(){
    $(this).hide()
});
$('.form span').click(function(){
    $('.type-1').html($(this).html());
    $('.form').hide()
});*/


/*$('.left li').click(function(){
    $(this).addClass('all').siblings().removeClass('all');
});
    var pageNo = 1;
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
    });

//添加收藏
for(var i =400;i<600;i++){
 $.ajax({
 type:'get',
 url: 'http://www.zhijunxing.com/yiju/queryHousesBySql.action',
 dataType:'jsonp',
 data:{
 hid:i
 },
 success:function(data){
 console.log(data);
 }
 })
 }

function collect(pageNo){
    $.ajax({
        type:'post',
        url:'http://www.zhijunxing.com/yiju/queryHousesBySql.action',
        dataType:'jsonp',
        data:{
            pageNo:pageNo
        },
        success:function(data){
           // console.log(data.rowCount);
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
                    item +=
                        '<dl class="box1"><dt class="img"><a href=""><img src="http://www.zhijunxing.com/yiju/upload/' + data.data[i].photo.split(',')[0] + '" alt="" style="width: 100%;height: 100%;"/></a></dt>' +
                        '<dd><a class="address">'+data.data[i].tittle+' '+data.data[i].room+'<p class="people"></p><p class="honest"></p></a></dd>' +
                        '<dd><a class="pattern">'+data.data[i].room+' | '+data.data[i].rentway+' | '+data.data[i].hlevel+' | '+data.data[i].floor+'/'+data.data[i].countfloor+'层</a></dd>' +
                        '<dd><p class="map"></p><a class="location">'+data.data[i].address+'</a></dd>' +
                        '<dd><a class="decorate">'+data.data[i].hlevel+'</a><a class="subway">'+data.data[i].paymethod+'</a></dd>' +
                        '<dd><div class="money"><span class="month">'+data.data[i].price+'</span>/月<span class="date">'+data.data[i].addtime+'</span></div></dd>' +
                        '</dl>'
                }
               $('.dv .box').html(item);
            }
        }
    })
}*/


var obj = {};
obj.pageNo = 1;
collect(obj);
$('.left li').click(function(){
    $(this).addClass('all').siblings().removeClass('all');
});
collect(obj);
$('.page').on('click','a',function(){
    if($(this).html() == '上一页'){
        if(!(obj.pageNo == 1)){
            obj.pageNo -= 1;
            collect(obj);
        }
    }else if($(this).html() == '下一页'){
        if(!(obj.pageNo == $('.page a').last().prev().html())){
            obj.pageNo += 1;
            collect(obj);
        }
    }else {
        obj.pageNo = parseInt($(this).html());
        collect(obj);      //parseInt() 函数可解析一个字符串，并返回一个整数
    }
});
function collect(obj){
    $.ajax({
        type:'post',
        url:'http://www.zhijunxing.com/yiju/queryHousesBySql.action',
        dataType:'jsonp',
        data:obj,
        success:function(data){
            // console.log(data.rowCount);
            if(data.success){
                var a;
                if(Math.ceil(data.rowCount / 2) <= 5){
                    a = '<a href="###">上一页</a>';
                    for(var i = 1;i<=Math.ceil(data.rowCount / 2);i++){
                        if(i ==obj.pageNo){
                            a += '<a href="###" class="page-checked">'+i+'</a>'
                        }else {
                            a += '<a href="###">'+i+'</a>'
                        }
                    }
                    a += '<a href="###">下一页</a>';
                }else if(obj.pageNo <= 3){
                    a = '<a href="###">上一页</a>';
                    for (var i = 1;i<=4; i++){
                        if(i == obj.pageNo){
                            a += '<a href="###" class="page-checked">'+i+'</a>'
                        }else {
                            a += '<a href="###">'+i+'</a>'
                        }
                    }
                    a += '<b>··· </b><a href="###">'+Math.ceil(data.rowCount / 2)+'</a><a href="###">下一页</a>';
                }else if(obj.pageNo+2 >= Math.ceil(data.rowCount / 2)){
                    a = '<a href="###">上一页</a>'+
                        '<a href="###">1</a>'+
                        '<b>··· </b>';
                    for(var i = 3;i >= 0;i--){
                        if(Math.ceil(data.rowCount / 2) - i == obj.pageNo){
                            a += '<a href="###" class="page-checked">'+(Math.ceil(data.rowCount / 2)-i)+'</a>'
                        }else {
                            a += '<a href="###">'+(Math.ceil(data.rowCount / 2)-i)+'</a>'
                        }
                    }
                    a += '<a href="###">下一页</a>';
                }else  if(obj.pageNo + 2 < Math.ceil(data.rowCount / 2)){
                    a = '<a href="###">上一页</a>'+
                        '<a href="###">1</a>'+
                        '<b>··· </b>'+
                        '<a href="###">'+(parseInt(obj.pageNo)-1)+'</a>'+
                        '<a href="###" class="page-checked">'+obj.pageNo+'</a>'+
                        '<a href="###">'+(parseInt(obj.pageNo)+1)+'</a>'+
                        '<b>··· </b>'+
                        '<a href="###">'+Math.ceil(data.rowCount / 2)+'</a>'+
                        '<a href="###">下一页</a>'
                }
                $('.page').html(a);

                var item = '';
                for (var i = 0; i < data.data.length; i++){
                    item +=
                        '<dl class="box1"><dt class="img"><a href=""><img src="http://www.zhijunxing.com/yiju/upload/' + data.data[i].photo.split(',')[0] + '" alt="" style="width: 100%;height: 100%;"/></a></dt>' +
                        '<dd><a class="address">'+data.data[i].tittle+' '+data.data[i].room+'<p class="people"></p><p class="honest"></p></a></dd>' +
                        '<dd><a class="pattern">'+data.data[i].room+' | '+data.data[i].rentway+' | '+data.data[i].hlevel+' | '+data.data[i].floor+'/'+data.data[i].countfloor+'层</a></dd>' +
                        '<dd><p class="map"></p><a class="location">'+data.data[i].address+'</a></dd>' +
                        '<dd><a class="decorate">'+data.data[i].hlevel+'</a><a class="subway">'+data.data[i].paymethod+'</a></dd>' +
                        '<dd><div class="money"><span class="month">'+data.data[i].price+'</span>/月<span class="date">'+data.data[i].addtime+'</span></div></dd>' +
                        '</dl>'
                }
                $('.dv .box').html(item);
            }
        }
    })
}


//筛选
//钱
$('.content a').click(function(){
    if($(this).html()=='500以下'||$(this).html()=='5000以上'){
        $(this).addClass('price');
        var str = $(this).html().slice(0,($(this).html().length-2));
        obj[this.className] = str;
        collect(obj)
    }else {
        $(this).addClass('price');
        var str = $(this).html().slice(0,($(this).html().length-1));
        obj[this.className]=str;
        collect(obj)
    }
});
$('.content a').click(function() {
    $(this).addClass('style').siblings().removeClass('style');
});

//厅室
$('.content1 a').click(function(){
    $(this).addClass('shi');
    obj[this.className]=$(this).attr('id');
    collect(obj)
});
$('.content1 a').click(function() {
    $(this).addClass('style').siblings().removeClass('style');
});

//装修
$('.type').hover(function(){
    $('.layout').show();
},function(){
    $('.layout').hide()
});
$('.layout').hover(function(){
    $(this).show();
},function(){
    $(this).hide()
});
$('.layout span').click(function(){
    $(this).addClass('room');
    $('.type').html($(this).html());
    $('.layout').hide();
    obj[this.className]=$(this).attr('class');
    collect(obj)
});

$('.type-1').hover(function(){
    $('.form').show();
},function(){
    $('.form').hide()
});
$('.form').hover(function(){
    $(this).show();
},function(){
    $(this).hide()
});
$('.form span').click(function(){
    $(this).addClass('room');
    $('.type-1').html($(this).html());
    $('.form').hide();
    obj[this.className]=$(this).attr('class');
    collect(obj)
});
