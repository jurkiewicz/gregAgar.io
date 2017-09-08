document.addEventListener("DOMContentLoaded", function(){
	//Creating new object
	var el = document.createElement('div');
	el.id = 'jack';
	el.style.width = '100px';
	el.style.height = '100px';

	var body = document.getElementsByTagName('body')[0];
	body.appendChild(el);

	var jack = document.getElementById('jack');

	var color = 0;

	//Listening mouse position
	function mousePosition(e) {
	    var pozX = 0;
	    var pozY = 0;
	    if (!e) var e = window.event;
	    if (e.pageX || e.pageY) {
	         pozX = e.pageX;
	         pozY = e.pageY;
	    } else if (e.clientX || e.clientY) {
	         pozX = e.clientX + document.body.scrollLeft;
	         pozY = e.clientY + document.body.scrollTop;
	    }
	    return {pozX,pozY}
	}

	//Tracking mouse by object
	function moveJack(e){
		var pozX = 0;
	    var pozY = 0;
	    if (!e) var e = window.event;
	    if (e.pageX || e.pageY) {
	         pozX = e.pageX;
	         pozY = e.pageY;
	    } else if (e.clientX || e.clientY) {
	         pozX = e.clientX + document.body.scrollLeft;
	         pozY = e.clientY + document.body.scrollTop;
	    }
	    with (jack.style) {
	    	left = pozX-55+'px';
	    	top = pozY-55+'px';
	    }
	    return {pozX,pozY}
	}

	//Changing color
	function changeColor(e){
		switch(color){
			case 1:
				jack.style.background = '#EC185D';
				color = 2;
				break;
			case 2:
				jack.style.background = '#66d9ef';
				color = 3;
				break;
			case 3:
				jack.style.background = '#a6e22e';
				color = 0;
				break;
			default:
				jack.style.background = '#FF6633';
				color = 1;
				break;
		}
	}

	//Telling about mouse position, changing jack position
	body.addEventListener('mousemove', function(e) {
    	console.log(mousePosition(e));
    	moveJack(e);
	});
	//Changing colors on click
	jack.addEventListener('click', function(e){
		changeColor(e);
	});
});
