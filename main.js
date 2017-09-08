document.addEventListener("DOMContentLoaded", function(){
	//Creating new object
	var el = document.createElement('div');
	el.id = 'jack';
	el.style.width = '100px';
	el.style.height = '100px';

	var body = document.getElementsByTagName('body')[0];
	body.appendChild(el);

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
		var jack = document.getElementById('jack');
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

	//Telling about mouse position
	document.getElementById('Body').addEventListener('mousemove', function(e) {
    	console.log(mousePosition(e));
    	moveJack(e);
	});
});
