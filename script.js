document.getElementById("bmiform").addEventListener("submit", function(e) {
        e.preventDefault();
        const gender = document.getElementById("gender").value;
        const age = parseInt(document.getElementById("age").value);
        const heightFeet = parseInt(document.getElementById("height-feet").value);
        const heightInches = parseInt(document.getElementById("height-inches").value);
        const weight = parseFloat(document.getElementById("weight").value);
        
        if(gender && !isNaN(age) && !isNaN(heightFeet )&& !isNaN(heightInches) && !isNaN(weight)){
            const heightInMetres = ((heightFeet * 12) + heightInches) * 0.0254; //height in meters
            const bmi = weight / (heightInMetres * heightInMetres);
            const resultElement = document.getElementById("result");

            let category = '';

            if(bmi < 18.5){
                category = 'Under Weight';
            }else if (bmi >= 18.5 && bmi < 24.9){
                category = 'Normal Weight';
            }else if (bmi >= 24.9 && bmi < 29.9){
                category = 'Over Weight';
            }else{
                category = 'Obese';
            }

            let resultMessage = `Your BMI is : ${bmi.toFixed(2)} <br>Category: ${category}`;

            resultElement.innerHTML = resultMessage;
        }
    });
