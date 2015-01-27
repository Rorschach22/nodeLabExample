// Javascript for the SERVER side.

exports.stringLength = function(str){
    return str.length;
};

exports.squareNumber = function(int){
    return (int * int);
};

exports.calculateAverage = function(int, int1){
    var x = int + int1;
    return x/2;
};

exports.toNumber = function(grade){
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
    }
};

exports.gpaTotal = function(grade1, grade2, grade3, credit1, credit2, credit3){
    gpa = ((exports.toNumber(grade1) * credit1) + (exports.toNumber(grade2) * credit2) + (exports.toNumber(grade3) * credit3)) / ((credit1) + (credit2) + (credit3));
    return gpa;
};