window.onload = () => {
    let button = document.querySelector("#calculate-btn");
    
    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
    };
    
    function calculateBMI() {
    
    /* Getting input from user into height variable.
    Input is string so typecasting is necessary. */
    let height = parseInt(document
            .querySelector("#height").value);
    
    /* Getting input from user into weight variable. 
    Input is string so typecasting is necessary.*/
    let weight = parseInt(document
            .querySelector("#weight").value);
    
    let result = document.querySelector("#bmi-result");
    
    // Checking the user providing a proper
    // value or not
    if (height === "" || isNaN(height)) 
        result.innerHTML = "Provide a valid Height!";
    
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Provide a valid Weight!";
    
    // If both input is valid, calculate the bmi
    else {
    
        // Fixing upto 2 decimal places
        let bmi = (weight / ((height / 100)^2)) ;
    
        // Dividing as per the bmi conditions
        if (bmi < 18.5) result.innerHTML = "Your BMI is " + (bmi) + " which means you are underweight";
    
        else if (bmi >= 18.5 && bmi < 24.9) 
            result.innerHTML = 
                "Your BMI is " + (bmi) + " which means you are Normal";
    
        else if (bmi >= 25 && bmi <= 29.9) 
          result.innerHTML =
            "Your BMI is " + (bmi) + " which means you are overweight";
      
      else result.innerHTML = "Obesity";
    }
    }