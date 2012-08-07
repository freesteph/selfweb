
lines = ["How are you doing?",
	 "Good, me too. So regarding my name...",
	 "... there's no fucking i.",
	 "Like, not at all.",
	 "You remember Tarzan? Naked guy in the trees?",
	 "Well he didn't screw up \"Jane\"",
	 "And he dropped out of college",
	 "And from trees.",
	 "Anyway.",
	 "http://www.youtube.com/watch?v=j7jhb8_UPfw"];

$(document).ready(function() {
    $("div#anchor a").click(function () {
	if (!this.counter) this.counter = 0;
	if (this.counter == lines.length) {
	    $(this).attr("href", lines[this.counter]);
	} else {
	    $(this).text(lines[this.counter]);
	}
	this.counter++;
    });
});

