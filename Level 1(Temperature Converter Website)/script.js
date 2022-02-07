function convertTemperature(){
    let val = document.getElementById("value");
    let result = document.getElementById("result");
    let input = document.getElementById("input");
    let output = document.getElementById("output");

    val.addEventListener("keyup", convertTemperature);
    input.addEventListener("change", convertTemperature);
    output.addEventListener("change", convertTemperature);

    let inputValue = input.value;
    let outputValue = output.value;
        
    //Celsius
    if(inputValue == "celsius" && outputValue == "fahrenheit"){
        result.value = Number((val.value) * 1.8) + 32;
    }
    else if(inputValue == "celsius" && outputValue == "kelvin"){
        result.value = Number(val.value) + 273.15;
    }
    else if(inputValue == "celsius" && outputValue == "rankine"){
        result.value = Number((val.value) * 1.8) + 491.67;
    }
    else if(inputValue == "celsius" && outputValue == "celsius"){
        result.value = Number(val.value);
    }

    //Fahrenheit
    if(inputValue == "fahrenheit" && outputValue == "celsius"){
        result.value = Number(val.value - 32) / 1.8;
    }
    else if(inputValue == "fahrenheit" && outputValue == "kelvin"){
        result.value = Number((val.value - 32) / 1.8) + 273.15;
    }
    else if(inputValue == "fahrenheit" && outputValue == "rankine"){
        result.value = Number(val.value) + 459.67;
    }
    else if(inputValue == "fahrenheit" && outputValue == "fahrenheit"){
        result.value = Number(val.value);
    }

    //Kelvin
    if(inputValue == "kelvin" && outputValue == "celsius"){
        result.value = Number(val.value) - 273.15;
    }
    else if(inputValue == "kelvin" && outputValue == "fahrenheit"){
        result.value = Number((val.value -273.15) * 1.8) + 32;
    }
    else if(inputValue == "kelvin" && outputValue == "rankine"){
        result.value = Number(val.value) * 1.8;
    }
    else if(inputValue == "kelvin" && outputValue == "kelvin"){
        result.value = Number(val.value);
    } 

    //Rankine
    if(inputValue == "rankine" && outputValue == "celsius"){
        result.value = Number((val.value) * (5/9)) - 273.15;
    }
    else if(inputValue == "rankine" && outputValue == "fahrenheit"){
        result.value = Number(val.value) - 459.67;
    }
    else if(inputValue == "rankine" && outputValue == "kelvin"){
        result.value = Number(val.value) * (5/9);
    }
    else if(inputValue == "rankine" && outputValue == "rankine"){
        result.value = Number(val.value);
    }
}

function reset(){
    convertTemperature();
}
