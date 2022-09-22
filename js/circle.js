// (function() {
    "use strict";

    // create a circle object
    let circle = {
        radius: 3,
        getArea: function () {
            return Math.PI * (this.radius * this.radius);
        },
        logInfo: function (doRounding) {
            if (doRounding === true){
                console.log( Math.round(this.getArea()));
            } else
               console.log("Area of a circle with radius: " + this.radius + ", is: "+ circle.getArea());
        }

    };
    let circle2 = {
        radius: 5,
        getArea2: function () {
            return Math.PI * (this.radius * this.radius);
    },
        logInfo2: function (doRounding) {
            if (doRounding === true){
                console.log(Math.round(this.getArea2()));
            } else
                console.log("Area of a circle with radius: " + this.radius + ", is: "+ circle2.getArea2());
    }

};

    //log info about the circle
    console.log("Raw circle information "+ circle.getArea());
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number "+Math.round(circle.getArea()));
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    console.log("Raw circle information "+ circle2.getArea2());
    circle2.logInfo2(false);
    console.log("Circle information rounded to the nearest whole number "+Math.round(circle2.getArea2()));
    circle2.logInfo2(true);
// })();
