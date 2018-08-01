
            //HOME PAGE TYPE FUNCTION//
            var i = 0;
            var txt = "Welcome to my portfolio website. I am Connie. Front-end developer, foodie, and traveler.";
            var speed = 200;
            
            function type() {
              if (i < txt.length) {
                document.getElementById("typing").innerHTML += txt.charAt(i);
                i++;
                setTimeout(type, speed);
              }
            }