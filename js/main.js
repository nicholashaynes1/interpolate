var revealText = document.getElementsByClassName('interpolateText');
var text= document.getElementsByClassName('interpolateText');
// iteratior

// This loops through all my interpolated text boxes
for(i=0; i<revealText.length; i++)
{
	revealText[i].setAttribute('onClick', 'reveal(this)');
};

// The function used change the opacity on click @me is the variable that allows for the clicked p to be the revealed one.
function reveal(me)
{
	me.style.opacity = "1";
}