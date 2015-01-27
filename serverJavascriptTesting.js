/**
 * Created by mcart046 on 1/26/15.
 */
// Javascript for the SERVER side.

var stringLength = function(str){
    return str.length;
};

var squareNumber = function(int){
    return (int * int);
};

var calculateAverage = function(int, int1){
    var x = int + int1;
    return x/2;
};

var toNumber = function(grade){
    if(grade=='A'){
        return 4;
    } else if(grade=='B'){
        return 3;
    } else if(grade=='C'){
        return 2;
    } else if(grade=='D'){
        return 1;
    } else if(grade=='F'){
        return 0;
    };
};