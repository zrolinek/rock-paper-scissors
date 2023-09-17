$(document).ready(function(){
	let player, computer, result, i;
	let score = parseInt($("#score").text());

	$(".game__btn").click(function() {
		player = $(this).attr('id');
		computer = 'gameOption'+Math.floor(Math.random() * 3);
		evaluateResult(player, computer);
		showResult();
	});

	$("#playAgainBtn").click(function() {
		$(".gameresult").css('display', 'none');
		$(".gamefield").css('display', 'block');
		$(".gameresult__info").css('display', 'none');
		$(".gameresult__option > .game-btn__circle").removeClass('paper');
		$(".gameresult__option > .game-btn__circle").removeClass('scissors');
		$(".gameresult__option > .game-btn__circle").removeClass('rock');
		$(".gameresult__option--player > .game-btn__circle").removeClass('winner');
		$(".gameresult__option--computer > .game-btn__circle").removeClass('winner');
	});

	function evaluateResult(player, computer) {
		if (player === computer) {
			result = 'draw';
		} else if (player === 'gameOption0' && computer === 'gameOption2') {
			result = 'win';
		} else if (player === 'gameOption1' && computer === 'gameOption0') {
			result = 'win';
		} else if (player === 'gameOption2' && computer === 'gameOption1') {
			result = 'win';
		} else {
			result = 'lose';
		}
			return result;
	}

	function showResult() {
		if (player === "gameOption0") {
			$(".gameresult__option--player > .game-btn__circle").addClass('paper');
			$(".gameresult__option--player > .game-btn__circle > img").attr('src', './img/icon-paper.svg');
		} else if (player === "gameOption1") {
			$(".gameresult__option--player > .game-btn__circle").addClass('scissors');
			$(".gameresult__option--player > .game-btn__circle > img").attr('src', './img/icon-scissors.svg');
		} else {
			$(".gameresult__option--player > .game-btn__circle").addClass('rock');
			$(".gameresult__option--player > .game-btn__circle > img").attr('src', './img/icon-rock.svg');
		}

		$(".gamefield").css('display', 'none');
		$(".gameresult").css('display', 'block');

		i = 0;
		let animationInterval = setInterval(function() {
			$(".gameresult__option--computer > .game-btn__circle").removeClass('paper');
			$(".gameresult__option--computer > .game-btn__circle").removeClass('scissors');
			$(".gameresult__option--computer > .game-btn__circle").removeClass('rock');
			if (i === 0) {
				$(".gameresult__option--computer > .game-btn__circle").addClass('paper');
				$(".gameresult__option--computer > .game-btn__circle > img").attr('src', './img/icon-paper.svg'); 
				i++;
			} else if (i === 1) {
				$(".gameresult__option--computer > .game-btn__circle").addClass('scissors');
				$(".gameresult__option--computer > .game-btn__circle > img").attr('src', './img/icon-scissors.svg');
				i++;
			} else {
				$(".gameresult__option--computer > .game-btn__circle").addClass('rock');
				$(".gameresult__option--computer > .game-btn__circle > img").attr('src', './img/icon-rock.svg');
				i = 0;
			}
		}, 100);

		setTimeout(function() {
			clearInterval(animationInterval);
			$(".gameresult__option--computer > .game-btn__circle").removeClass('paper');
			$(".gameresult__option--computer > .game-btn__circle").removeClass('scissors');
			$(".gameresult__option--computer > .game-btn__circle").removeClass('rock');

			if (computer === "gameOption0") {
				$(".gameresult__option--computer > .game-btn__circle").addClass('paper');
				$(".gameresult__option--computer > .game-btn__circle > img").attr('src', './img/icon-paper.svg');
			} else if (computer === "gameOption1") {
				$(".gameresult__option--computer > .game-btn__circle").addClass('scissors');
				$(".gameresult__option--computer > .game-btn__circle > img").attr('src', './img/icon-scissors.svg');
			} else {
				$(".gameresult__option--computer > .game-btn__circle").addClass('rock');
				$(".gameresult__option--computer > .game-btn__circle > img").attr('src', './img/icon-rock.svg');
			}

			if (result === "draw") {
				$("#resultText").text('Draw');
			} else if (result === "win") {
				$("#resultText").text('You win');
				$(".gameresult__option--player > .game-btn__circle").addClass('winner');
					score++;
			} else {
				$("#resultText").text('You lose');
				$(".gameresult__option--computer > .game-btn__circle").addClass('winner');
				score--;
			}
			$("#score").text(score);
			$(".gameresult__info").css('display', 'flex');
		}, 2000);
	}
})