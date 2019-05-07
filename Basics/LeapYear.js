function Leap_year(){
	year=getElementById("year").value;
	if(year % 4 != 0) {
		document.getElementById('demo').innerHTML="This is Not aLeap Year";
	}
	else if(year % 100 != 0){
		document.getElementById('demo').innerHTML="This is aLeap Year";
	}
	else if(year % 400 != 0){
		document.getElementById('demo').innerHTML="This is Not a Leap Year";
	}
	else{
		document.getElementById('demo').innerHTML="This is a Leap Year";
	}
	
}