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

$('body').css({
	'background-image' : 'url("../images/' + imageNames[Math.floor(Math.random() * imageNames.length)] + '.jpg")',
	'background-size' : 'cover',
    'background-position' : '50% 50%',
    'background-repeat': 'none'
});