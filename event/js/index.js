/**
 * Created by Administrator on 2017/8/14.
 */
$(document).ready(function(){
    $(".dj").click(function(){
        $(this).siblings('ul').slideToggle(500);
    });
    //$(".history").css("height","4000px").slideDown();
    var time=setTimeout(function(){
        $(".history").animate({height:"4100px"},2000);
    },300);

});
/*window.onload=function(){
 var his=document.getElementsByClassName("history")[0];
 var time=setTimeout(pop,2000)
 function pop(){
 his.style.display="block";
 }
 }*/