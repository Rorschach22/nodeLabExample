/**
 * Created by mcart046 on 1/26/15.
 */


//Just some example testing.
describe('testing basic functions', function(){
    it('should return 12', function(){
        expect(calculateAverage(4, 20)).toEqual(12);
    });

    it('should return 20', function(){
        expect(calculateAverage(20, 20)).toEqual(20);
    });

    it('should return 3', function(){
        expect(toNumber('B')).toEqual(3);
    });

    it('should return 3', function(){
        expect(gpaTotal('B', 'B', 'B', 4, 3, 2)).toEqual(3);
    });

});

