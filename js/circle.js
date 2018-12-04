 "use strict";

    // create a circle object
 var circle;
 circle = {
     radius: 5
 };

        circle.getArea = function (doRounding) {
            var pi = Math.PI;
            var radius= this.radius;
            var area = pi*(Math.pow(radius,2));
            if (doRounding === true) {
                console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(area));
                console.log("Circle information rounded to the nearest whole number");
            }

            else {
                console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
                console.log("Raw circle information");
            }
        };

