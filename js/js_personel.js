// Fonction pour ajouter un écouteur d'évènement au tableau
	var q1 = document.getElementById("question_1");
	q1.addEventListener("click", function(){ShowHide("reponse_1")}, false);
	
	var q2 = document.getElementById("question_2");
	q2.addEventListener("click", function(){ShowHide("reponse_2")}, false);
	
	var q3 = document.getElementById("question_3");
	q3.addEventListener("click", function(){ShowHide("reponse_3")}, false);
	
	var q4 = document.getElementById("question_4");
	q4.addEventListener("click", function(){ShowHide("reponse_4")}, false);

	var q5 = document.getElementById("question_5");
	q5.addEventListener("click", function(){ShowHide("reponse_5")}, false);
	
	var q6 = document.getElementById("question_6");
	q6.addEventListener("click", function(){ShowHide("reponse_6")}, false);
	
	function ShowHide(argHide) {
		var x = document.getElementById(argHide);
		if (x.style.display === "none") {
			x.style.display = "block";
		} else {
			x.style.display = "none";
    }
}