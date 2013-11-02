contentDivs = ['whoami', 'whatdoido', 'myresearch', 'myphotography', 'myprojects', 'contactme'];
imageNames = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45']

// when a tab is clicked, show the corresponding div
function activate(id) {
	for(var i = 0; i < contentDivs.length; i++) {
		$('#' + contentDivs[i]).css({'display':'none'})
		$('#tab_' + contentDivs[i]).removeClass()
	}
	$('#' + id).css({'display':'block'})
	$('#tab_' + id).addClass('selected')
}

$('body').css({
 	'background-image' : 'url("../images/backgrounds/' + imageNames[Math.floor(Math.random() * imageNames.length)] + '.jpg")',
	'background-size' : 'cover',
	'background-position' : '50% 50%',
	'background-repeat': 'none',
	'background-attachment' : 'fixed'
});