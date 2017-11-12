$(function () {
    $(window).scroll(function(event) {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 110) {
            $("#nav_list").css('top', 0);
        } else if (scrollTop > 0 && scrollTop < 110) {
            console.log("scrollTop="+scrollTop);
            var nav_list = 110 - scrollTop;
            $("#nav_list").css('top', nav_list);
            $('.to_top').css('display', 'none');
        } else {
            $("#nav_list").css('top', 101);
        }

        //返回顶部按钮
        if (scrollTop > 200) {
            $(".to_top").fadeIn(200);
        } else {
            $(".to_top").fadeOut(200);

        }
    });
    //返回顶部
    $(".to_top").click(function() {
        console.log(111);
        $("html,body").animate({scrollTop:0}, 500);
    });
});