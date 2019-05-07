//document.writeln("Hello,world,61,73");
var Person={FirstName:'Syamala',
			LastName:'Thiru',
			age:'19',
			FullName:function(){
				return Person.LastName+" "+Person.FirstName;
			}
		};

function MyFunction(){
	//document.getElementById('demo').innerHTML='Changed Paragraph';
	//document.writeln(Person.LastName);
	document.getElementById('demo').innerHTML=Person.FullName();
}
