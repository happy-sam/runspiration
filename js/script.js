$(document).ready(function(){         

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $(".navbar").css({"background": "rgba(13, 107, 170, 0.95)", "transition": "1s"});             
        } else {
            $(".navbar").css({"background": "none", "transition": "0.5s"});
        }
    });
    
});
    
WebFont.load({
	custom: {
		families: ['FontAwesome'],
		urls: ['//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css']
		}
});
