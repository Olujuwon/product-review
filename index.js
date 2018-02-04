$(document).ready(function(){

    $(".1").click(function(){
        firebase.database().ref('reviews').push({
            rv: $(".excellent").val(),
            time: $.now()
            });
            window.location.href = "./result.html";
     });

     $(".2").click(function(){
        firebase.database().ref('reviews').push({
            rv: $(".good").val(),
            time: $.now()
            });
            window.location.href = "./result.html";
     });
     
     $(".3").click(function(){
        firebase.database().ref('reviews').push({
            rv: $(".fair").val(),
            time: $.now()
            });
            window.location.href = "./result.html";
     });

     $(".4").click(function(){
        firebase.database().ref('reviews').push({
            rv: $(".poor").val(),
            time: $.now()
            });
            window.location.href = "./result.html";
     });

     $(".5").click(function(){
        firebase.database().ref('reviews/').push({
                rv: $(".disaster").val(),
                time: $.now()
            });
            window.location.href = "./result.html";
     });   
});