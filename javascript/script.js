function authenticate(){
	var uname = document.querySelector("#username").value;
	var pass = document.querySelector("#password").value;
	if(uname== "Jay"&& pass=="02-10")
  	{
  	    window.location.href="start.html";
  	}
  	else
  	{
  		alert("invalid details");
  		window.location.href="index.html";
  	}	
};
