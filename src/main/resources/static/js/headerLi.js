/**
 * Created by Administrator on 2017/10/9.
 */
$(function () {
    // $('.nav_menu li').on('click',function(){
    //     $(this).addClass('.active');
    // });

    $('.nav_menu li a').click(function () {
        console.log(123)
        $(this).addClass('active');
    });

    $("#Message_Board").click(function () {

        if($(".feedback").css("display")=="none"){
            $(".feedback").show();
        }else{
            $(".feedback").hide();
        }
    });
    
    //发送按钮
    $(".feedback_btn").click(function () {
        var MessageBoard = {};
        var content = $("#textarea_content").val();
        var name = $("#name").val();
        var tel = $("#tel_num").val();
        MessageBoard.content = content;
        MessageBoard.name = name;
        MessageBoard.tel = tel;
        var num = 0;
        $('.feedback').find('input,textarea').each(function(){
            if(!$(this).val()){
                $(this).addClass('red')
                num++;
            }else{
                $(this).removeClass('red');
                if(num>0)
                    num--;
            }
        })

        if(num == 0){
            $('.feedback').hide();
        }
    });


});
