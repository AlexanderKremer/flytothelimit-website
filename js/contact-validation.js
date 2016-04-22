// Find the form
var bookingForm = document.querySelector("#flightbooking")
var nameMessage = document.querySelector("#full-name-message");
var emailMessage = document.querySelector("#email-message");
var messageMessage = document.querySelector("#message-message");

	// var namePattern = new RegExp("^[a-zA-Z' .-]{1,30}$");
	// var emailPattern = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3,254}$");
	// var phonePattern = new RegExp("^[0-9 ]{7,18}$")
	

	var nameInput = document.querySelector("#full-name");
	var emailInput = document.querySelector("#email");
	var messageInput = document.querySelector("#post");

nameInput.onblur = function() {

	if ( this.value.length < 1 ) {

			nameMessage.innerHTML = "Name must be at least 1 characters";

		} else if (this.value.length > 30 ) {

			nameMessage.innerHTML = "Name must be at most 30 characters";

		} else if ( namePattern.test( this.value ) ){

		nameMessage.innerHTML = "";
	
		} else {

		nameMessage.innerHTML = "Invalid name";
	}
}

emailInput.onblur = function() {

	if ( this.value.length < 3 ) {

			emailMessage.innerHTML = "Invalid, Email is to short";

		} else if (this.value.length > 254 ) {

			emailMessage.innerHTML = "Invalid, Email is to long";

		} else if ( emailPattern.test( this.value ) ){

			emailMessage.innerHTML = "";
	
		} else {

			emailMessage.innerHTML = "Invalid email";
	}
}

	messageInput.onkeyup = function() {

		var totalLetters = this.value.length;

		messageMessage.innerHTML =  totalLetters + '/800';

}


	