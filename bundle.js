/// <reference path="interface.ts" /> 
var VechileNameSpace;
(function (VechileNameSpace) {
    function carDetail(car) {
        console.log(" The car details are : Model " + car.model + " ,      \n         Engine " + car.engine + " and the horespower is " + car.horsepower);
    }
    VechileNameSpace.carDetail = carDetail;
    ;
})(VechileNameSpace || (VechileNameSpace = {}));
/// <reference path="interface.ts" /> 
/// <reference path="function.ts"/> 
var myCar = { model: "Wagon R", engine: "K10B", horsepower: 1000 };
VechileNameSpace.carDetail(myCar);
