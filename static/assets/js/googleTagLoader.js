(function() {
	var head = document.getElementsByTagName("head")[0]
	var script = document.createElement('SCRIPT');

	script.onload = function() {
	  alert("Script loaded and ready");
	};
	script.src = "/static/assets/js/googleTagManagerHead.js";
	head.insertBefore(scr, head.firstChild)
})
