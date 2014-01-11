lmgtfy = {

	1: function () {
		
			if(isEmpty(window.getSelection())){
			    	var str = prompt("Enter your keyword here: ");
				str = str.replace(/\s/g, "+");	
				cctoc("http://lmgtfy.com/?q=" +str);
			}  else {
				var str = window.getSelection();
				str = str.replace(/\s/g, "+");
				cctoc("http://lmgtfy.com/?q=" +str);
			}
			
			
	},
	
	cctoc: function (text) {
  		window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
	},
	isEmpty: function(text){
		text.trim(); if(text=='') return true;
		return false;
	}

}		
