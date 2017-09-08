document.addEventListener("DOMContentLoaded", function(){
	//Creating new object
	var el = document.createElement('div');
	el.id = 'jack';
	el.style.width = '100px';
	el.style.height = '100px';
	el.style.background = '#FF6633';

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

	//Telling about mouse position
	document.getElementById('Body').addEventListener('mousemove', function(e) {
    	console.log(mousePosition(e));
	});


});
