// Find the form
var bookingForm = document.querySelector("#flightbooking")
var nameMessage = document.querySelector("#full-name-message");
var phoneMessage = document.querySelector("#phone-number-message");
var emailMessage = document.querySelector("#email-message");
var messageMessage = document.querySelector("#message-message");

	// var namePattern = new RegExp("^[a-zA-Z' .-]{1,30}$");
	// var emailPattern = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3,254}$");
	// var phonePattern = new RegExp("^[0-9 ]{7,18}$")
	

	var nameInput = document.querySelector("#full-name");
	var emailInput = document.querySelector("#email");
	var phoneInput = document.querySelector("#phone-number");
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

phoneInput.onblur = function() {

	if ( this.value.length < 7 ) {

			phoneMessage.innerHTML = "Please enter a phone number at least 7 numbers long";

		} else if (this.value.length > 18 ) {

			phoneMessage.innerHTML = "Phone number is to long";

		} else if ( phonePattern.test( this.value ) ){

		phoneMessage.innerHTML = "";
	
		} else {

		phoneMessage.innerHTML = "Invalid phone number, only use numbers and spaces";
	}

	messageInput.onkeyup = function() {

		var totalLetters = this.value.length;

		messageMessage.innerHTML =  totalLetters + '/240';

	}
}

	