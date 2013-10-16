contentDivs = ['whoami', 'whatdoido', 'mypublications', 'myphotography', 'myprojects', 'contactme'];

for(var i = 0; i < contentDivs.length; i++) {
	$('#' + contentDivs[i]).css({'display':'none'})
}
$('#whoami').css({'display':'block'})

function activate(id) {
	for(var i = 0; i < contentDivs.length; i++) {
		$('#' + contentDivs[i]).css({'display':'none'})
		$('#tab_' + contentDivs[i]).removeClass()
	}
	$('#' + id).css({'display':'block'})
	$('#tab_' + id).addClass('selected')
}