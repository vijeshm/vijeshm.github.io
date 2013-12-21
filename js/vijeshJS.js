contentDivs = ['whoami', 'whatdoido', 'myresearch', 'myphotography', 'myprojects', 'contactme'];
imageNames = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45'];

// length of the hashtags MUST be a multiple of number of columns
numberOfCols = 4;
hashtags = ["#Photography", "#Canon550D", "#Cycling", "#Travel", "#GSoC", "#Gephi", "#Python", "#Photoshop", "#SSVM", "#VijayaHigh", "#VCPUC", "#PESIT", "#Akamai", "#Research", "#Graphs", "#SoftwareEngineer", "#PIXELS", "#PES-OS", "#SND", "#Bangalore", "#Coffee", "#NightOwl", "#Carrom", "#Foodie"]

// shuffle an array
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

// when a tab is clicked, show the corresponding div
function activate(id) {
	for(var i = 0; i < contentDivs.length; i++) {
		$('#' + contentDivs[i]).css({'display':'none'})
		$('#tab_' + contentDivs[i]).removeClass()
	}
	$('#' + id).css({'display':'block'})
	$('#tab_' + id).addClass('selected')
}

$(function() {
	$('body').css({
 	'background-image' : 'url("../images/backgrounds/' + imageNames[Math.floor(Math.random() * imageNames.length)] + '.jpg")',
	'background-size' : 'cover',
	'background-position' : '50% 50%',
	'background-repeat': 'none',
	'background-attachment' : 'fixed'
	});

	shuffle(hashtags);
	var numberOfTags = hashtags.length;
	var htmlString = '';
	for(var i = 0; i < numberOfTags / numberOfCols; i++) {
		htmlString += '<tr>'
		for(var j = 0; j < numberOfCols; j++) {
			htmlString += '<td>' + hashtags[numberOfCols * i + j] + '</td>'
		}
		htmlString += '</tr>'
	}

	$('#hashtags').html(htmlString);
});