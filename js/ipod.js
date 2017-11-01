// Create your global variables below:
var tracklist = ["Let It Happen", "Nangs", "The Moment", "Yes I'm Changing", "Eventually", "Gossip", "The Less I Know The Better", "Past Life", "Disciples", "'Cause I'm A Man"];
var tracklist_index;
var volLevels = [];
var volLevel = 3;
var scrubber = document.getElementById("scrubber");

function init() {
	scrubber.value = 0;
	scrubber.min = 0;
	scrubber.max = 180;

	for(var i = 0; i < 6; i++) {
		var vol = document.getElementById("vl" + i);
		if(i < 3) {
			vol.style["background-color"] = "purple";
		}
		volLevels.push(vol)
	};

	tracklist_index = tracklist.indexOf("The Less I Know The Better");

	volLevel = 2;
};

function volUp() {
	// Your code goes here
	if(volLevel < 6) {
		volLevel++;
		volLevels[volLevel-1].style.backgroundColor = "purple";
	}
}

function volDown() {
	// Your code goes here
	if(volLevel > 0) {
		volLevels[volLevel-1].style.backgroundColor = "white";
		volLevel--;
	}
}

function switchPlay() {
	// Your code goes here
	var switchButton = document.getElementById("play_text");

	if(switchButton.innerHTML === "play_arrow") {
		switchButton.innerHTML = "pause";
	} else {
		switchButton.innerHTML = "play_arrow";
	}

	if(switchButton.innerHTML === "pause") {
		var timer = setInterval(() => {
			scrubber.value++;
			if(switchButton.innerHTML === "play_arrow") {
				clearInterval(timer);
			}
			if(scrubber.value === 180 || scrubber.value === "180") {
				nextSong();
			}
			document.getElementById("start-time").innerHTML = secondsToMs(scrubber.value);
		}, 1000);
	}
}

function nextSong() {
	// Your code goes here
	if(tracklist_index === 9) {
		tracklist_index = 0;
	} else {
		tracklist_index += 1;
	}
	scrubber.value = 0;
	document.getElementById("player-song-name").innerHTML = tracklist[tracklist_index];
	document.getElementById("start-time").innerHTML = secondsToMs(scrubber.value);
}

function prevSong() {
	// Your code goes here
	if(tracklist_index === 0) {
		tracklist_index = 9;
	} else {
		tracklist_index -= 1;
	}
	scrubber.value = 0;
	document.getElementById("player-song-name").innerHTML = tracklist[tracklist_index];
	document.getElementById("start-time").innerHTML = secondsToMs(scrubber.value);

}

function secondsToMs(d) {
	d = Number(d);

	var min = Math.floor(d / 60);
	var sec = Math.floor(d % 60);

	return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();
