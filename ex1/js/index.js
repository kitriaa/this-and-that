window.onload = function () {
  // add an event listener to each li element inside of the nav menu.
  // Make it listen for a Click event
    // this event should log to the console the text inside of the <a> tag
    // the event should only log one word per click.
    var events1 = document.getElementsByClassName("navLink");
    for (i = 0; i < events1.length; i++) {
    	events1[i].addEventListener("click", print);
    }
function print() {
	console.log(this.textContent);
}
};