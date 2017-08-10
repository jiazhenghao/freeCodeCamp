 $(document).ready(function(){
	$('body').scrollspy({target: '.navbar-fixed-top'});
	$('#portfolio img').magnify();
	$("#send").click(function(e) {
		e.preventDefault();
		window.location.reload();//刷新当前页面.
	});

});



