(() => {

    // variable 

    let cookie = 1,multi = 2,price = 10,autoPrice = 10,lifecookie = 0, currentcookie = 0,timer = 0,persec = 0.5,bonus,random,elements;


    setInterval(() => {
        if(currentcookie<price) {
            
            document.getElementById("multi").className = "disabled";
        } else{
        document.getElementById("multi").className = "myButton";}  
    },500);

    setInterval(() => {
        if(currentcookie<autoPrice) {
            document.getElementById("auto-clicker").className = "disabled";
            
        } else{document.getElementById("auto-clicker").className = "myButton";
        }  
    },500);




    // Multiplicateur


    
    


    setInterval(() => {
        if(currentcookie<price) {
            
            document.getElementById("multi").className = "disabled";
        } else{
        document.getElementById("multi").className = "myButton";}  
    },500);

    setInterval(() => {
        if(currentcookie<autoPrice) {
            document.getElementById("auto-clicker").className = "disabled";
            
        } else{document.getElementById("auto-clicker").className = "myButton";
        }  
    },500);

    document.getElementById("multi").addEventListener("click", () => {

        
        if (currentcookie >= price) {
           
        

				if (price<=currentcookie) {
        cookie = cookie*multi;
        currentcookie = currentcookie - price;
        multi = multi*2;
        price = price*price/2;
        }

        document.getElementById("showcookie").innerHTML = cookie;
        document.getElementById("showprice").innerHTML = price;
        document.getElementById("target").innerHTML = currentcookie;
    }

    });
    
    // cookie click


    document.getElementById("cookie").addEventListener("click", () => {

        currentcookie += cookie;
        lifecookie += cookie;

        document.getElementById("target").innerHTML = currentcookie;
        document.getElementById("life").innerHTML = lifecookie;


        let x = event.clientX;
        let y = event.clientY;
        let miniCookie = document.getElementById("miniCookie");
        miniCookie.style.display = 'block';
        miniCookie.style.position = 'absolute';
        miniCookie.style.left = x + 'px';
        miniCookie.style.top = y + 'px';
        setTimeout(() => {
            miniCookie.style.display = 'none';
        }, 150);




    });


        //  Bonus special



        bonus = document.getElementById("bonus"); // take id bonus
        random =entierAleatoire(90000,120000); // random entre 30 secondes et 2 minutes

        function entierAleatoire(min, max) // fonction de random
            {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }


        setInterval(() => { // display or not bonus
            bonus.style.display ="block";
            setTimeout(() => {
                bonus.style.display ="none";
            }, 30000);
            
        },random);


        setInterval(function(){ 
            if (timer > 0) {
            timer = timer-1; // reduce timer by one every seconde
            }
            document.getElementById("timer").innerHTML = timer; // display countdown
        }, 1000)

        document.getElementById("bonus").addEventListener("click", () => {

            timer = 30 // set timer at 30 

            cookie = cookie*2  // double cookies income 
            persec = persec*2 // double cookies income
            bonus.style.display ="none" // display none bonus after click
            setTimeout(special,30000); // time 30 secondes bonus
            function special() { 
                cookie = cookie/2 // take of the bonus
            }

        });
        
        document.getElementById("auto-clicker").addEventListener("click", () => {
            if (currentcookie >= autoPrice) {

            if (autoPrice<=currentcookie) {
                
                currentcookie = currentcookie - autoPrice
                
                setInterval(function(){ 
                    currentcookie += persec;
                    lifecookie += persec;

                    document.getElementById("life").innerHTML = lifecookie;   
                    document.getElementById("target").innerHTML = currentcookie;   
                    document.getElementById("click").innerHTML = persec;   
                }, 1000)
 
                persec =persec*2 // multi per seconde bonus by 2
                autoPrice = autoPrice*2; // multi price by itself
                document.getElementById("autoprice").innerHTML = autoPrice;
            }
        }
    });
})();
