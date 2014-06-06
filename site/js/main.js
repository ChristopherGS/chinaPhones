window.onload= function() {
	var counter = document.getElementById('counter');
	var button = document.getElementById('play');
	var desc = document.getElementById('desc');
	var clue = document.getElementById('clue');
	
	button.onclick = startCounter;
	
	function startCounter() {
		console.log('start counter');
		counter.style.display="block";
		desc.style.display = "block";
		clue.style.display = "block";
		
		var indexVariable = 0;
		setInterval(function () {
			indexVariable = ++indexVariable % 360 + 0; // SET { 1-360 }
			counter.innerHTML = 702408120 + indexVariable;
		}, 
		2000);
		
	};
	
};
