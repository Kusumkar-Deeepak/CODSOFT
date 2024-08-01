var header= document.getElementById("header");
            var ms= document.getElementById("Scorpio");
            var m3= document.getElementById("Fortuner");
            var mx= document.getElementById("Thar");
            var my= document.getElementById("Bolero");
            var model= document.getElementById("model");
            var mph= document.getElementById("mph");
            var speed= document.getElementById("speed");
            var range= document.getElementById("range");


            ms.onclick=function(){
                header.style.backgroundImage="url(https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iTBWcW8rJD6s/v1/-1x-1.jpg)";
                model.innerHTML="SSC Tuatara";
                mph.innerHTML="4.5s";
                speed.innerHTML="455.3 km/h";
                range.innerHTML="480 km";
            }


            m3.onclick=function(){
                header.style.backgroundImage="url(https://images.unsplash.com/photo-1596906673164-fffb05b8333d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
                model.innerHTML="Koenigsegg Agera";
                mph.innerHTML="5.0s";
                speed.innerHTML="447 km/h";
                range.innerHTML="620 mi";
            }
            mx.onclick=function(){
                header.style.backgroundImage="url(https://images.unsplash.com/photo-1652992252915-f9b6592a61a3?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
                model.innerHTML="McLaren Speedtail"
                mph.innerHTML="6.4s";
                speed.innerHTML="403 km/h";
                range.innerHTML="402 km";
            }
            my.onclick=function(){
                header.style.backgroundImage="url(https://images.unsplash.com/photo-1594454376767-bbbc04c58c3c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
                model.innerHTML="Rolls-Royce Boat Tail";
                mph.innerHTML="10-15s";
                speed.innerHTML="250 km/h";
                range.innerHTML="805 km";
            }