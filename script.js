'use strict';

 var playSound = function (e) {
	var keys = document.querySelectorAll('.key');
 	//loop through keys and identify which key is pressed
	for (var i = 0; i< keys.length; i++) {
		var keyNumber = keys[i].getAttribute("data-key");
		if (e.keyCode == keyNumber) {
			console.log('playing');
			keys[i].classList.add("playing");
		}
	}
};

//listen to keydown event
window.addEventListener('keydown', playSound);