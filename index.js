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

     var ref = firebase.database().ref('reviews');
     ref.on('value', gotData, errData);

     function gotData(data) {
         //console.log(data.val());
         var scores = data.val();
         var keys = Object.keys(scores);
         //console.log(keys);
         for (var i=0; i < keys.length; i++) {
             var k=keys[i];
             var rv = scores [k].rv;
             var time = scores [k].time;
             console.log(rv, time);
         }
     }
     function errData(err) {
         console.log('Error 404!');
         console.log(err);
     }

     //userCountRef.on('child_added', function(snapshot) {
         //console.log("display database")
         //$('#displaydata').append("<li id=" + snapshot.val().id + ">" + snapshot.val());
     //});


});
    /*$(".1").on("click", function(){
        reviews = $("#ex").val()
        dbRef.ref().set({
            reviews:reviews
        });
    });*/