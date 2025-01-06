//your JS code here. If required.
let counterValue = document.getElementById('counter');
let btn = document.getElementById('incrementBtn');
function counterFunc (){
	 let initialValue = parseInt(counterValue.textContent);
	    alert(initialValue)
	  counterValue.textContent = initialValue +1;
	
	
}