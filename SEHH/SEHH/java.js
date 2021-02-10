function check(){
	var c=0;
	var q1=document.quiz.question1.value;
	var q2=document.quiz.question2.value;
	var q3=document.quiz.question3.value;
	var q4=document.quiz.question4.value;
	var q5=document.quiz.question5.value;
	var result= document.getElementById('result');
	var quiz= document.getElementById("quiz");
	if(q1=="Goal1"){
		c++
}
	if(q2=="Goal4"){
		c++
		
		}
	if(q3=="Goal5"){
		c++
		
		}
	if(q4=="Goal4"){
		c++
		
		}
	if(q5=="Goal3"){
		c++
		
		}
		quiz.style.display= "none";
		//result.textContent='$(c)';
		
		if(c<=3){
		result.textContent="Your result is"+$(c)+ "Try Again?"
		}
		else{
		result.textContent='Your result is ${c}. Great Work!'
		}
}



