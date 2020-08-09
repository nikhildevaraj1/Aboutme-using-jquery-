$(document).ready(function(){
  $("p").hide();
	$("br").show();
  	$("#hide").click(function(){
		if (document.getElementById("hide").innerHTML == "Hide Picture") {
			var button = document.getElementById('hide');
			$("#mypicture").hide();
      button.innerHTML = ("Show Picture")
		} else {
			var button = document.getElementById('hide');
      $("#mypicture").show();
			button.innerHTML = ("Hide Picture");
		}
  	});
  
  $("#mainprojectbutton").click(function(){
    $("#projectdiv").fadeIn();
  });

  $("#button").click(function(){
    $("#div1").fadeIn();
  });


});

