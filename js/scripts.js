
            //HOME PAGE TYPE FUNCTION//
            var i = 0;
            var txt = "A front-end web developer, based in Fresno, CA.";
            var speed = 180;
            
            function type() {
              if (i < txt.length) {
                document.getElementById("typing").innerHTML += txt.charAt(i);
                i++;
                setTimeout(type, speed);
              }
            }

          