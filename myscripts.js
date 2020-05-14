function calculate() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const bmi = (weight / (height * height)) * 10000;
    if (!weight || !height) {
        document.getElementById('test').innerHTML =
            'Please enter a valid input';
    } else if (bmi >= 18.5 && bmi <= 25) {
        document.getElementById('test').innerHTML = 'You are FIT';
    } else if (bmi > 25) {
        document.getElementById('test').innerHTML = 'Overweight';
    } else if (bmi < 18.5) {
        document.getElementById('test').innerHTML = 'Underweight';
    }
}
