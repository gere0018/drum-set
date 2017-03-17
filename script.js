'use strict';

 function playSound (e) {
/* My initial approach involved using a for loop to loop through all keys and comparte
which one matched the keycode from the event. However a loop every time we press a key is
very taxing so Wesbos approach is much better which is to use querySelector to get only
one key that matches event keycode*/
	var key = document.querySelector('div[data-key="'+ e.keyCode + '"]');
	//for sound i will use Wesbos ES6 approach to use `${expression}` template litterals
	var sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	//handle the cases where other keys are pressed
	if (!sound) return;
	if (!key) return;
	sound.play();
	//make sure to rewind audio for multiple presses
	sound.currentTime = 0;
	key.classList.add("playing");
	//remove class playing
	setTimeout(function () {
		key.classList.remove('playing');
	}, 500)
};

//listen to keydown event
window.addEventListener('keydown', playSound);


// var keys = document.querySelectorAll('.key');
 // 	//loop through keys and identify which key is pressed
	// for (var i = 0; i< keys.length; i++) {
	// 	var keyNumber = keys[i].getAttribute("data-key");
	// 	if (e.keyCode == keyNumber) {
	// 		keys[i].classList.add("playing");
	// 			//remove class soon after
	// 		keys[i].addEventListener('transitionend', removeTransition));
	// 		removeClass();
	// 		var respectiveSound = document.querySelector('audio[data-key="' + keyNumber + '"]');
	// 		respectiveSound.play();
	// 		//make sure to rewind audio for multiple presses
	// 		respectiveSound.currentTime = 0;
	// 	}
	// }