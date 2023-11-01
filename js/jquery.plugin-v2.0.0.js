
(function($){
    $.fn.changeImage=function(){
    //tableau des images
    var bgTab=["img/bg1.jpg","img/bg2.jpg","img/bg3.jpg"];
    var num=0;
   this.css("background-image", "url("+bgTab[num]+")");
   
   $(this).children('#screen:first').css("background-image", "url("+bgTab[0]+")");
   $(this).children('#screen:first').next().css("background-image", "url("+bgTab[1]+")");
   $(this).children('#screen:first').next().next().css("background-image", "url("+bgTab[2]+")");

   $(this).children('#screen:nth-child('+[num+1]+')').children().children().addClass('redTube');

setInterval(function(){
    
  if(num<bgTab.length-1){
        num++;  
        $(".image").children('#screen:nth-child('+[num]+')').children().children().removeClass('redTube'); 
    }
     else if(num==bgTab.length-1){
            num=num-(bgTab.length-1);
            $(".image").children('#screen:nth-child('+[bgTab.length]+')').children().children().removeClass('redTube');
     } 
     $(".image").css("background-image", "url("+bgTab[num]+")");
     
     $(".image").children('#screen:nth-child('+[num+1]+')').children().children().addClass('redTube');

    },5000);
    



   this.addClass("image");
}  
})(jQuery);