function breakingRecordsLogicOne(scores) {
	console.time("rec");
    let low = 0, high = 0, lowScore, highScore;
    scores.forEach((score,idx) => {
        if (idx === 0) {
            highScore = lowScore = score;
        } else {
            if (highScore > score) {
				highScore = score;
                high++;
            } else if (lowScore < score) {
				lowScore = score;
                low++;
            }

        }
    });
	console.timeEnd("rec");
    return [high,low];
}
function breakingRecordsLogicTwo(scores) {
	console.time("rec");
    let low = 0, high = 0, lowScore, highScore;
	lowScore = highScore = scores[0];
	for(let i=1;i< scores.length;i++){
		let score = scores[i];
		if (highScore > score) {
				highScore = score;
                high++;
            } else if (lowScore < score) {
				lowScore = score;
                low++;
            }
	}
	console.timeEnd("rec");
    return [high,low];
}