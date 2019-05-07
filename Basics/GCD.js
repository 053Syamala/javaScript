function gcd(){
	a = document.getElementById("firstNumber").value;
	b = document.getElementById("secondNumber").value;  
	while (a!=b)
	{
		if (a>b)
		{
			a = a -b;
		}
		else
		{
			b = b - a;
		}
	}
	document.getElementById("result").innerHTML= a;
}

