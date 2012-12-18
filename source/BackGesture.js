/*
	
	Add an event listener for keyup to document to listen for the custom "U+1200001" key on OwOS
	or for the ESC key (U+0018) on other platforms and call onbackbutton to be compatible with
	PhoneGap
	
*/

(function() {
	document.addEventListener('keyup', function(ev) {
		if (ev.keyIdentifier == "U+1200001" || ev.keyIdentifier == "U+0018") {
			enyo.Signals && enyo.Signals.send && enyo.Signals.send('onbackbutton');
		}
	}, false);
})()
