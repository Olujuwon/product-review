$(document).ready(function(){

    $(".1").click(function(){
        firebase.database().ref('reviews').push({
                excellent: $(".excellent").val(),
            });
            alert("Thank you for your time");
     });

     $(".2").click(function(){
        firebase.database().ref('reviews').push({
                good: $(".good").val(),
            });
            alert("Thank you for your time");
     });

     $(".3").click(function(){
        firebase.database().ref('reviews').push({
                fair: $(".fair").val(),
            });
            alert("Thank you for your time");
     });

     $(".4").click(function(){
        firebase.database().ref('reviews').push({
                poor: $(".poor").val(),
            });
            alert("Thank you for your time");
     });

     $(".5").click(function(){
        firebase.database().ref('reviews').push({
                disaster: $(".disaster").val(),
            });
            alert("Thank you for your time");
     });
});
    /*$(".1").on("click", function(){
        reviews = $("#ex").val()
        dbRef.ref().set({
            reviews:reviews
        });
    });*/