$(document).ready(function(){
	var rulesBtn = $('#rulesBtn');
	var rulesModal = $('#rulesModal');
	var rulesClose = $('#rulesClose');

	rulesBtn.on('click', function(){
		rulesModal.addClass('rules-modal_active');
	});

	rulesClose.on('click', function(){
		rulesModal.removeClass('rules-modal_active');
	});
})