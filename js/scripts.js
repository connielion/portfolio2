
            //HOME PAGE TYPE FUNCTION//
            var i = 0;
            var txt = "I'm Connie. Front-end web developer. Based in Fresno, CA.";
            var speed = 180;
            
            function type() {
              if (i < txt.length) {
                document.getElementById("typing").innerHTML += txt.charAt(i);
                i++;
                setTimeout(type, speed);
              }
            }

          