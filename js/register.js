    var off={};

    $('form input[name=lname]').on({

        focus: function () {
            $(this).css({
                'border-color': 'rgb(112, 173, 70)'
            });
        },
        blur:function () {
            var val=$(this).val();
            isinput(/[\w]{6,20}/.test(val),this);
        }
    }).focus();

    $('form input[name=lpassword]').on({
        focus:function(){
            //console.log($(this).tagName);
            $(this).css({
                'border-color':'rgb(112, 173, 70)'
            });
        },
        blur:function(){
            var val=$(this).val();
            isinput(/^[a-zA-Z0-9][\w]{5,19}/.test(val),this)
        }
    });

    $('form .confirm').on({
        focus:function(){
        $(this).css({
            'border-color':'rgb(112, 173, 70)'
        });
    },
        blur:function(){
            var val=$(this).val();
            isinput(val===$('form input[name=lpassword]').val(),this)
        }
    });

    $('form input[name=lemail]').on({
       focus:function(){
           $(this).css({
               'border-color':'rgb(112, 173, 70)'
           });
       },
        blur:function(){
            var val=$(this).val();
            isinput(/^[a-zA-Z0-9][\w]{5,17}@[a-z0-9]{2,6}(\.[a-z]{2,3}){1,2}$/.test(val),this)
        }
    });

    $('form input[name=lphone]').on({
       focus:function(){
           $(this).css({
               'border-color':'rgb(112, 173, 70)'
           });
       } ,
        blur:function(){
            var val=$(this).val();
            isinput(/^1[0-9]{10}$/.test(val),this);
        }
    });
    function isinput(put,_this){
        if(put){
            $(_this).css({
                'border-color':'rgb(112, 173, 70)'
            });
            off[_this.className]=true
        }else {
            $(_this).css({
                'border-color': '#981616'
            });
            off[_this.className]=false
        }
    }
    /*------------------------------------第一种-------------------------------------------*/
    //多项选择，一次全部判断，
    $('form .but').click(function() {
        var isform = true;
        if (isform) {

            $('form input').blur();

            /*if (!(/[\w]{6,20}/.test($('form input[name=lname]').val()))) {
             $('form input[name=lname]').blur();
             }
             if (!(/^[a-zA-Z0-9][\w]{5,19}/.test($('form input[name=lpassword]').val()))) {
             $('form input[name=lpassword]').blur();
             }
             if (!($('form .confirm').val() === $('form input[name=lpassword]').val()) || $('form .input-3').val() == '') {
             $('form .confirm').blur();
             }
             if (!(/^[a-zA-Z0-9][\w]{5,17}@[a-z0-9]{2,6}(\.[a-z]{2,3}){1,2}$/.test($('form input[name=lemail]').val()))) {
             $('form input[name=lemail]').blur();
             }
             if (!(/^1[0-9]{10}$/.test($('form input[name=lphone]').val()))) {
             $('form input[name=lphone]').blur();
             }*/
            if ($('.agree input').attr('checked') == 'checked') {
                isform = true;

            } else {
                isform = false;
                alert('请选择协议');
            }
        }
        for (var i in off) {
            if (!off[i]) {
                isform = false;
            }
        }
        if (isform) {

            $.ajax({
                type: 'post',
                url: 'http://www.zhijunxing.com/yiju/saveLandlord.action',
                dataType: 'jsonp',
                data: $('form').serialize(),
                success: function (data) {
                    alert(data.resultCode);
                    if (data.resultCode == '0000') {
                        $('.pop').show();
                        $('.mask').show();
                        $('.pop-x').click(function(){
                            $('.pop').hide();
                            $('.mask').hide();
                        });
                        $('.pop .pop-m').click(function(){
                            $.ajax({
                                type: 'post',
                                url: 'http://www.zhijunxing.com/yiju/landlordLogin.action',
                                dataType: 'jsonp',
                                data: {
                                    lname:$('form input[name=lname]').val(),
                                    lpassword:$('form input[name=lpassword]').val()
                                },
                                success: function (data) {
                                    if (data.resultCode == '0000') {
                                        location.href = 'http://192.168.0.136/shouye.html'
                                    } else {
                                        alert('注册失败')
                                    }
                                }
                            })
                        })

                    }
                }
            })
        }
        /*------------------------------------第二种-------------------------------------------*/

        /*
         //第二种写法---单项选择每次只会判断一个
         if (!(/[\w]{6,20}/.test($('form input[name=lname]').val()))) {
         $('form input[name=lname]').blur();
         } else if (!(/^[a-zA-Z0-9][\w]{5,19}/.test($('form input[name=lpassword]').val()))) {
         $('form input[name=lpassword]').blur();
         } else if (!($('form .input-3').val() === $('form input[name=lpassword]').val())) {
         $('form .input-3').blur();
         } else if (!(/^[a-zA-Z0-9][\w]{5,17}@[a-z0-9]{2,6}(\.[a-z]{2,3}){1,2}$/.test($('form input[name=lemail]').val()))) {
         $('form input[name=lemail]').blur();
         } else if (!(/^1[0-9]{10}$/.test($('form input[name=lphone]').val()))) {
         $('form input[name=lphone]').blur();
         } else if (!$('.xieyi b').attr('class') == '') {
         alert('请选择');
         } else {
         $.ajax({
         type: 'post',
         url: 'http://www.zhijunxing.com/yiju/saveLandlord.action',
         dataType: 'jsonp',
         data: $('form').serialize(),
         success: function (data) {
         alert(data.resultCode);
         if (data.resultCode == '0000') {
         location.href = 'http://192.168.0.175/yiju/01/login.html'
         }

         }
         })
         }*/

        /*------------------------------------第二种结束-------------------------------------------*/

    });


