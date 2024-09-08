const calculateBMI = (weight, height) => {
	const BMI = weight / (height**2);
	return BMI;
};
 

const onCalcBMIPress = () => {
	let height = $("#height-m").val();
	let weight = $("#weight-m").val();
	const bmi = calculateBMI(weight, height);
	$('#results').removeClass('bg-danger bg-succcess bg-warning');

	$('#results').html('');
	$("#results").append("<p> Your BMI is " + bmi.toFixed(1) + "</p>");

	if(bmi < 18.5){
		$('#results').append("<p class= 'mb-0'> Hello skinny, eat more to grow well</p>")
		$('#results').addClass('bg-danger')
	}
	else if (bmi <25){
		$('#results').append('<p class="mb-0"> Hello healthy, you are doing well')
		$('#results').addClass('bg-success')
	}
	else if (bmi <30){
		$('#results').append('<p class="mb-0"> Hey fatty, You should start shaking off with workout</p>')
		$('#results').addClass('bg-warning')
	}
	else {
		$('#results').append('<p class="mb-0"> Shake it off for a healthier and longer life')
		$('#results').addClass('bg-danger')
	}
	
}