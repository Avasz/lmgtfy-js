lmgtfy = {

	1: function () {
			var str = prompt("Enter your keyword here: ");
			str = str.replace(/\s/g, "+");
			alert("http://lmgtfy.com/?q=" +str);
	},

}