export function setGaugeValue(value) { 
            
    //     if (value < 0 || value > 1){

    //     return;
    // }

        document.querySelector(".gauge__fill").style.transform = `rotate(${value / 200}turn)`;
        document.querySelector(".gauge__cover").textContent = `${Math.round(value)}%`;
    
    }