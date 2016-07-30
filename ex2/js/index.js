window.onload = function () {
  // add an event listener to the `child` class.
  // inspect the .css file
    // when a `child` class is clicked you code will add CSS styles which will show the
    // secret toy element. Click on an element will only show that element's toy, no one elses.
    var elemental = document.getElementsByClassName("child");
    for (i = 0; i < elemental.length; i++) {
    	elemental[i].addEventListener("click", print);
    }
    function print() {
    	var toy = this.querySelectorAll("p.secret-toy")[0];
    	if(toy.style.display === "none") {
    		toy.style.display = "inline";
    	} else {
    		toy.style.display = "none";
    	}
    }
};  