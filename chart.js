window.onload = function() {
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
				{ label: "Excellent",             y: 56  }, 
				{ label: "Good",            y: 94}, 
				{ label: "Fair",    y: 50  }, 
				{ label: "Poor",           y: 20}, 
				{ label: "Disaster",           y: 15}, 
			] 
		} 
		] 
	});   
}