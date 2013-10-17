contentDivs = ['whoami', 'whatdoido', 'myresearch', 'myphotography', 'myprojects', 'contactme'];
imageNames = ['1', '2', '3', '4', '5', '6']

// when a tab is clicked, show the corresponding div
function activate(id) {
	for(var i = 0; i < contentDivs.length; i++) {
		$('#' + contentDivs[i]).css({'display':'none'})
		$('#tab_' + contentDivs[i]).removeClass()
	}
	$('#' + id).css({'display':'block'})
	$('#tab_' + id).addClass('selected')
}

//function to shuffle the image names
function shuffle(array) {
	var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

// hide all the contents of the tabs except the home tab
for(var i = 0; i < contentDivs.length; i++) {
	$('#' + contentDivs[i]).css({'display':'none'});
}
$('#whoami').css({'display':'block'});

// create a random order for the images
shuffle(imageNames);

spanToChange = 1;
imageIndex = 0;
function changeBackground() {
	console.log(spanToChange + ' ' + imageIndex + ' ' + imageNames[imageIndex] + '.jpg')
	if(spanToChange == 1) {
		$('#background1').css('background-image', 'url("../images/' + imageNames[imageIndex] + '.jpg")');
		spanToChange = 2;
	} else {
		$('#background2').css('background-image', 'url("../images/' + imageNames[imageIndex] + '.jpg")');
		spanToChange = 1;
	}

	imageIndex += 1;
	if(imageIndex == imageNames.length) {
		console.log('shuffling images...');
		imageIndex = 0;
		shuffle(imageNames);
		console.log('new order: ' + imageNames);
	}
	setTimeout(changeBackground, 6000); 
	// this interval should be exactly the same as the time given to each span
}

changeBackground()

/*
//change the backgroundURL periodically
function changeBackground1(){
	console.log('in function 1');
	$('#background1').css('background-image', 'url("../images/' + Math.floor((Math.random()*6)+1) + '.jpg")');
	setTimeout(changeBackground2, 3000);
	setTimeout(changeBackground1, 6000);
}

function changeBackground2(){
	console.log('in function 2');
	$('#background2').css('background-image', 'url("../images/' + Math.floor((Math.random()*6)+1) + '.jpg")');
	setTimeout(changeBackground1, 3000);
	setTimeout(changeBackground2, 6000);
}

changeBackground1();
*/