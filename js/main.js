var revealText = document.getElementsByClassName('interpolateText');
//an array used to hold all the interpolate text objects
var revealArray = [];
var nextButton = document.getElementsByClassName('nextButton');
// The array holding the book container
var bookContainer = document.getElementById('bookHolder');

// This loops through all my interpolated text boxes
for(i=0; i<revealText.length; i++)
{
	revealText[i].setAttribute('onClick', 'reveal(this)');
	//adding the interpolate objects to the array
	revealArray.push(revealText[i]);
};


// The function used change the opacity on click @me is the variable that allows for the clicked p to be the revealed one.
function reveal(me)
{
	me.style.opacity = "1";
	// This checks to see if every interpolated text is revealed and if it is to show the next level button.
	if(revealArray.every(checkOpacity) == true)
	{
		//Make the next level buton visible
		nextButton[0].style.opacity = '1';

		moveBook();
	}
}

//Checks the opactiy of every button
function checkOpacity(me)
{
	return me.style.opacity == true;
}

//moves the book container div to make room for the next level button.
function moveBook()
{

	void bookContainer.offsetWidth;
	bookContainer.classList.add("nextPage");
}