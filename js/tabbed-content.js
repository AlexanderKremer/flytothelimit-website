// Find all the buttons
var buttonOne = document.querySelector('#button-one');
var buttonTwo = document.querySelector('#button-two');

// Find all sections
var allSections = document.querySelectorAll('.tab');

// Attach click event listeners to the buttons
buttonOne.onclick = changeTab;
buttonTwo.onclick = changeTab;

// Function that changes the visible tab
function changeTab() {

	// Hide all tabs
	for ( var i=0; i < allSections.length; i++ ) {
		allSections[i].style.display = 'none';
	}

	// Switch based on the ID of the button clicked
	switch( this.id ) {
		case 'button-one':
			allSections[0].style.display = 'block';
		break;

		case 'button-two':
			allSections[1].style.display = 'block';
		break;

	}

}