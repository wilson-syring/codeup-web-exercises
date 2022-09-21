// (function() {
    "use strict";

    // create a circle object
    let circle = {
        radius: 3,
        getArea: function () {
            return Math.PI * (this.radius * this.radius);
        },
        logInfo: function (doRounding) {
            if (doRounding == true){
                console.log("Area of a circle with radius: " + this.radius + ", is: "+ circle.getArea());
                return Math.round(circle.getArea());
            } else
            return circle.getArea();

        }
    };

    //log info about the circle
    console.log("Raw circle information "+ circle.getArea());
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number "+circle.logInfo(circle.getArea()));
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.getArea(5);
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
// })();
