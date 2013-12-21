$(function() {
	$('body').css({
 	'background-image' : 'url("../../images/calendar/2013/DSC_7472.JPG")',
	'background-size' : 'cover',
	'background-position' : '50% 50%',
	'background-repeat': 'none',
	'background-attachment' : 'fixed'
	});
});

function showInModal(imagepath) {
	$("#magnified").attr('src', imagepath);
	$("#modal").css({
		'display' : 'block'
	});
}

function closeModal() {
	$("#modal").css({
		'display' : 'none'
	});
}