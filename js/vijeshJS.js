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

function shuffle(array) {
  var currentIndex = array.length
    , temporaryValue
    , randomIndex
    ;

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

shuffle(imageNames);
fadeInOutTime = 2000;
imageDuration = 3000;
currentImageIndex = 0;

function fadeOut() {
	$('#backgroundChild').css('background', 'rgb(0, 0, 0)');
	setTimeout(changeBackground, fadeInOutTime);
	setTimeout(fadeIn, fadeInOutTime);
}

function fadeIn() {
	$('#backgroundChild').css('background', 'rgba(0, 0, 0, 0)');
	setTimeout(fadeOut, fadeInOutTime + imageDuration)
}

function changeBackground() {
	$('#backgroundContainer').css('background-image', 'url("../images/' + imageNames[currentImageIndex] + '.jpg")');
	currentImageIndex += 1;
	if(currentImageIndex == imageNames.length) {
		currentImageIndex = 0;
		shuffle(imageNames);
	}
}

changeBackground();
fadeIn();