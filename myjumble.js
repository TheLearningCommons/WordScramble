// Function to automatically move to the next input after a single letter is inputted.
var container = document.getElementsByClassName("squares1")[0];
    container.onkeyup = function(e) {
    var target = e.srcElement;
    var maxLength = parseInt(target.attributes["maxlength"].value, 10);
    var myLength = target.value.length;
    if (myLength >= maxLength) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() == "input") {
                next.focus();
                break;
            }
        }
    }
}

var container = document.getElementsByClassName("squares2")[0];
    container.onkeyup = function(e) {
    var target = e.srcElement;
    var maxLength = parseInt(target.attributes["maxlength"].value, 10);
    var myLength = target.value.length;
    if (myLength >= maxLength) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() == "input") {
                next.focus();
                break;
            }
        }
    }
}

var container = document.getElementsByClassName("squares3")[0];
    container.onkeyup = function(e) {
    var target = e.srcElement;
    var maxLength = parseInt(target.attributes["maxlength"].value, 10);
    var myLength = target.value.length;
    if (myLength >= maxLength) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() == "input") {
                next.focus();
                break;
            }
        }
    }
}

var container = document.getElementsByClassName("squares4")[0];
    container.onkeyup = function(e) {
    var target = e.srcElement;
    var maxLength = parseInt(target.attributes["maxlength"].value, 10);
    var myLength = target.value.length;
    if (myLength >= maxLength) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() == "input") {
                next.focus();
                break;
            }
        }
    }
}

var container = document.getElementsByClassName("squares5")[0];
    container.onkeyup = function(e) {
    var target = e.srcElement;
    var maxLength = parseInt(target.attributes["maxlength"].value, 10);
    var myLength = target.value.length;
    if (myLength >= maxLength) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() == "input") {
                next.focus();
                break;
            }
        }
    }
}

window.onload = function() {
	
	// Creates an array of all the inputs for this word scramble.
	document.getElementById('check1').onclick = function() {
		var inputs = []
		guess1 = document.getElementById('box1-1').value;
		inputs.push(guess1);
		guess2 = document.getElementById('box1-2').value;
		inputs.push(guess2);
		guess3 = document.getElementById('box1-3').value;
		inputs.push(guess3);
		guess4 = document.getElementById('box1-4').value;
		inputs.push(guess4);
		guess5 = document.getElementById('box1-5').value;
		inputs.push(guess5);
		guess6 = document.getElementById('box1-6').value;
		inputs.push(guess6);
		guess7 = document.getElementById('box1-7').value;
		inputs.push(guess7);
		guess8 = document.getElementById('box1-8').value;
		inputs.push(guess8);
		guess9 = document.getElementById('box1-9').value;
		inputs.push(guess9);
		guess10 = document.getElementById('box1-10').value;
		inputs.push(guess10);
		guess11 = document.getElementById('box1-11').value;
		inputs.push(guess11);
		
		newstring = inputs.join(""); // Joins the array into one string.
		newstring = newstring.toLowerCase(); // Makes sure that everything is lowercase.
		
		// Changes the border color to red in the case of a wrong answer. Green when correct.
		// Adds an orange background to squares used in the final scramble.
		if (newstring == "regulations") {
			document.getElementById("box1-1").style.borderColor = "green";
			document.getElementById("box1-2").style.borderColor = "green"; 
			document.getElementById("box1-2").style.backgroundColor = "orange";
			document.getElementById("box1-3").style.borderColor = "green"; 
			document.getElementById("box1-4").style.borderColor = "green"; 
			document.getElementById("box1-5").style.borderColor = "green"; 
			document.getElementById("box1-6").style.borderColor = "green"; 
			document.getElementById("box1-7").style.borderColor = "green";
			document.getElementById("box1-7").style.backgroundColor = "orange";
			document.getElementById("box1-8").style.borderColor = "green"; 
			document.getElementById("box1-9").style.borderColor = "green"; 
			document.getElementById("box1-10").style.borderColor = "green"; 
			document.getElementById("box1-11").style.borderColor = "green"; 			
		}
		else {
			document.getElementById("box1-1").style.borderColor = "red";
			document.getElementById("box1-2").style.borderColor = "red";
			document.getElementById("box1-3").style.borderColor = "red";
			document.getElementById("box1-4").style.borderColor = "red";
			document.getElementById("box1-5").style.borderColor = "red";
			document.getElementById("box1-6").style.borderColor = "red";
			document.getElementById("box1-7").style.borderColor = "red";
			document.getElementById("box1-8").style.borderColor = "red";
			document.getElementById("box1-9").style.borderColor = "red";
			document.getElementById("box1-10").style.borderColor = "red";
			document.getElementById("box1-11").style.borderColor = "red";
		}	
	}
	
	document.getElementById('check2').onclick = function() {
		var inputs = []
		guess1 = document.getElementById('box2-1').value;
		inputs.push(guess1);
		guess2 = document.getElementById('box2-2').value;
		inputs.push(guess2);
		guess3 = document.getElementById('box2-3').value;
		inputs.push(guess3);
		guess4 = document.getElementById('box2-4').value;
		inputs.push(guess4);
		guess5 = document.getElementById('box2-5').value;
		inputs.push(guess5);
		guess6 = document.getElementById('box2-6').value;
		inputs.push(guess6);
				
		newstring = inputs.join("");
		newstring = newstring.toLowerCase();
				
		if (newstring == "genome") {
			document.getElementById("box2-1").style.borderColor = "green";
			document.getElementById("box2-1").style.backgroundColor = "orange";
			document.getElementById("box2-2").style.borderColor = "green"; 
			document.getElementById("box2-3").style.borderColor = "green"; 
			document.getElementById("box2-4").style.borderColor = "green"; 
			document.getElementById("box2-5").style.borderColor = "green"; 
			document.getElementById("box2-6").style.borderColor = "green"; 				
		}
		else {
			document.getElementById("box2-1").style.borderColor = "red";
			document.getElementById("box2-2").style.borderColor = "red";
			document.getElementById("box2-3").style.borderColor = "red";
			document.getElementById("box2-4").style.borderColor = "red";
			document.getElementById("box2-5").style.borderColor = "red";
			document.getElementById("box2-6").style.borderColor = "red";			
		}	
	}
	
	document.getElementById('check3').onclick = function() {
		var inputs = []
		guess1 = document.getElementById('box3-1').value;
		inputs.push(guess1);
		guess2 = document.getElementById('box3-2').value;
		inputs.push(guess2);
		guess3 = document.getElementById('box3-3').value;
		inputs.push(guess3);
		guess4 = document.getElementById('box3-4').value;
		inputs.push(guess4);
		guess5 = document.getElementById('box3-5').value;
		inputs.push(guess5);
		guess6 = document.getElementById('box3-6').value;
		inputs.push(guess6);
				
		newstring = inputs.join("");
		newstring = newstring.toLowerCase();
				
		if (newstring == "dactyl") {
			document.getElementById("box3-1").style.borderColor = "green";
			document.getElementById("box3-2").style.borderColor = "green"; 
			document.getElementById("box3-2").style.backgroundColor = "orange"; 
			document.getElementById("box3-3").style.borderColor = "green"; 
			document.getElementById("box3-4").style.borderColor = "green"; 
			document.getElementById("box3-5").style.borderColor = "green"; 
			document.getElementById("box3-6").style.borderColor = "green"; 				
		}
		else {
			document.getElementById("box3-1").style.borderColor = "red";
			document.getElementById("box3-2").style.borderColor = "red";
			document.getElementById("box3-3").style.borderColor = "red";
			document.getElementById("box3-4").style.borderColor = "red";
			document.getElementById("box3-5").style.borderColor = "red";
			document.getElementById("box3-6").style.borderColor = "red";			
		}	
	}
	
	document.getElementById('check4').onclick = function() {
		var inputs = []
		guess1 = document.getElementById('box4-1').value;
		inputs.push(guess1);
		guess2 = document.getElementById('box4-2').value;
		inputs.push(guess2);
		guess3 = document.getElementById('box4-3').value;
		inputs.push(guess3);
		guess4 = document.getElementById('box4-4').value;
		inputs.push(guess4);
		guess5 = document.getElementById('box4-5').value;
		inputs.push(guess5);
		guess6 = document.getElementById('box4-6').value;
		inputs.push(guess6);
		guess7 = document.getElementById('box4-7').value;
		inputs.push(guess7);
		guess8 = document.getElementById('box4-8').value;
		inputs.push(guess8);
		guess9 = document.getElementById('box4-9').value;
		inputs.push(guess9);
				
		newstring = inputs.join("");
		newstring = newstring.toLowerCase();
		
		
		if (newstring == "sclerosis") {
			document.getElementById("box4-1").style.borderColor = "green";
			document.getElementById("box4-2").style.borderColor = "green"; 
			document.getElementById("box4-3").style.borderColor = "green"; 
			document.getElementById("box4-4").style.borderColor = "green"; 
			document.getElementById("box4-5").style.borderColor = "green"; 
			document.getElementById("box4-5").style.backgroundColor = "orange"; 
			document.getElementById("box4-6").style.borderColor = "green"; 
			document.getElementById("box4-7").style.borderColor = "green"; 
			document.getElementById("box4-8").style.borderColor = "green"; 
			document.getElementById("box4-9").style.borderColor = "green"; 				
		}
		else {
			document.getElementById("box4-1").style.borderColor = "red";
			document.getElementById("box4-2").style.borderColor = "red";
			document.getElementById("box4-3").style.borderColor = "red";
			document.getElementById("box4-4").style.borderColor = "red";
			document.getElementById("box4-5").style.borderColor = "red";
			document.getElementById("box4-6").style.borderColor = "red";
			document.getElementById("box4-7").style.borderColor = "red";
			document.getElementById("box4-8").style.borderColor = "red";
			document.getElementById("box4-9").style.borderColor = "red";			
		}	
	}
	
	document.getElementById('check5').onclick = function() {
		var inputs = []
		guess1 = document.getElementById('box5-1').value;
		inputs.push(guess1);
		guess2 = document.getElementById('box5-2').value;
		inputs.push(guess2);
		guess3 = document.getElementById('box5-3').value;
		inputs.push(guess3);
		guess4 = document.getElementById('box5-4').value;
		inputs.push(guess4);
		guess5 = document.getElementById('box5-5').value;
		inputs.push(guess5);
		guess6 = document.getElementById('box5-6').value;
		inputs.push(guess6);
		guess7 = document.getElementById('box5-7').value;
		inputs.push(guess7);
		guess8 = document.getElementById('box5-8').value;
		inputs.push(guess8);
		guess9 = document.getElementById('box5-9').value;
		inputs.push(guess9);
		guess10 = document.getElementById('box5-10').value;
		inputs.push(guess10);
		guess11 = document.getElementById('box5-11').value;
		inputs.push(guess11);
		
		newstring = inputs.join("");
		newstring = newstring.toLowerCase();
		
		
		if (newstring == "correlation") {
			document.getElementById("box5-1").style.borderColor = "green";
			document.getElementById("box5-2").style.borderColor = "green"; 
			document.getElementById("box5-3").style.borderColor = "green"; 
			document.getElementById("box5-4").style.borderColor = "green"; 
			document.getElementById("box5-5").style.borderColor = "green"; 
			document.getElementById("box5-6").style.borderColor = "green"; 
			document.getElementById("box5-7").style.borderColor = "green"; 
			document.getElementById("box5-8").style.borderColor = "green"; 
			document.getElementById("box5-8").style.backgroundColor = "orange"; 
			document.getElementById("box5-9").style.borderColor = "green"; 
			document.getElementById("box5-10").style.borderColor = "green"; 
			document.getElementById("box5-11").style.borderColor = "green"; 		
		}
		else {
			document.getElementById("box5-1").style.borderColor = "red";
			document.getElementById("box5-2").style.borderColor = "red";
			document.getElementById("box5-3").style.borderColor = "red";
			document.getElementById("box5-4").style.borderColor = "red";
			document.getElementById("box5-5").style.borderColor = "red";
			document.getElementById("box5-6").style.borderColor = "red";
			document.getElementById("box5-7").style.borderColor = "red";
			document.getElementById("box5-8").style.borderColor = "red";
			document.getElementById("box5-9").style.borderColor = "red";
			document.getElementById("box5-10").style.borderColor = "red";
			document.getElementById("box5-11").style.borderColor = "red";
		}	
	}
}
