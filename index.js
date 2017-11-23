$(document).ready(function(){

    $(".1").click(function(){
        firebase.database().ref('reviews').push({
            rv: $(".excellent").val(),
            time: $.now()
            });
            window.location.href = "./result.html";
            //alert("Thank you for your time");
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

     var userCountRef = firebase.database().ref('reviews/');
     userCountRef.on('child_added', function(snapshot) {
         console.log("display database")
         $('#displaydata').append("<li id=" + snapshot.val().id + ">" + snapshot.val());
     });

     
});
    /*$(".1").on("click", function(){
        reviews = $("#ex").val()
        dbRef.ref().set({
            reviews:reviews
        });
    });*/