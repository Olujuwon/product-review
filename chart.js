(function() {
    
       var firebaseRef;
       var ctxreviewPerPerson; 
    
       
    
       var reviewPerPerson = {
                           labels : [],
                           datasets: [
                           {
                               label: "Total Sales",
                               fillColor: "rgba(67, 214, 92, 0.5)", 
                               strokeColor: "rgba(67, 214, 92, 1)",
                               pointColor: "rgba(67, 214, 92,1)",
                               pointStrokeColor: "#fff",
                               pointHighlightFill: "#fff",
                               pointHighlightStroke: "rgba(67, 214, 92,1)",
                               data: []
                           },
                           {
                               label: "Gross Profit",
                               fillColor: "rgba(218, 233, 39, 0.5)", 
                               strokeColor: "rgba(218, 233, 39, 1)",
                               pointColor: "rgba(218, 233, 39,1)",
                               pointStrokeColor: "#fff",
                               pointHighlightFill: "#fff",
                               pointHighlightStroke: "rgba(218, 233, 39,1)",
                               data: []
                           }                         
                       ]};
       
       var reviewPerPerson;
         
       $(document).ready(function() {
    
           firebaseRef = new Firebase("https://prodrev-5c219.firebaseio.com");
    
           var reviewsRef = firebaseRef.child("reviews");
    
           reviewsRef.on('value', reviewPerPersonListener);  
    
       });
    
       var reviewPerPersonListener = function reviewPerPersonListener(snapshot) {
    
               var review;
               var profit;
               var salesPerson;
               
                ctxreviewPerPerson= $("#chartContainer").get(0).getContext("2d");
             
    
               
               //datareviewPerPerson.labels = [];
          
               
              // datareviewPerPerson.datasets[0].data = [];        
    
               snapshot.forEach(function(reviewPerPerson) {
                   review = 0; 
                   profit = 0;
    
                   thisReview = reviewPerPerson.val().rv;
    
                   reviewPerPerson.forEach(function(reviewPerPerson) {
                       if (reviewPerPerson.hasChildren()) {
                           var thisReview = reviewPerPerson.val().rv;
                           
                                                  
                           rev += thisReview; 
                              
                           reviewPerPerson.datasets[0].data[rev] += thisReview;
                           
                           region = salesSnapshot.val().region;                  
                       }
    
                   });         
    
               })
    
              
               
               barreviewPerPerson = {};
               barreviewPerPerson = new Chart(ctxreviewPerPerson).Bar(thisReview);
               //$("#legendSBP").html(barSalesByPerson.generateLegend());   
    
           };  
    
    })();






























/*window.onload = function() {
	$("#chartContainer").CanvasJSChart({ 
		title: { 
			text: "Result of your reviews" 
		}, 
		axisY: { 
			title: "Percentage (%)" 
		}, 
		data: [ 
		{ 
			type: "bar", 
			toolTipContent: "{label}: US$ {y} billion",
			dataPoints: [ 
				{ label: "Excellent"}, 
				{ }, 
			] 
		} 
		] 
	});   
}*/
/*var ctx = $("#chartContainer");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});*/