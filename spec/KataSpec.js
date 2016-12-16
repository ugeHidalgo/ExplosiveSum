describe('Kata', function() {    
    beforeEach(function() { 
    });

    it('should be able to test', function() {
      expect(true).toBeTruthy();
    });

    describe ('Trivial cases',function () {

        it('should calculate explosive sum of -1', function() {
          var num = -1,
              expected = 0;
              
          expect(sum(num)).toEqual(expected,'sum(' + num + ') should be ' + expected);
        });

        it('should calculate explosive sum of 0', function() {
          var num = 0,
              expected = 0;

          expect(sum(num)).toEqual(expected,'sum(' + num + ') should be ' + expected);
        });

        it('should calculate explosive sum of 1', function() {
          var num = 1,
              expected = 1;

          expect(sum(num)).toEqual(expected,'sum(' + num + ') should be ' + expected);
        });

        it('should calculate explosive sum of 2', function() {
          var num = 2,
              expected = 2;

          expect(sum(num)).toEqual(expected,'sum(' + num + ') should be ' + expected);
        });

        it('should calculate explosive sum of 3', function() {
          var num = 3,
              expected = 5;

          expect(sum(num)).toEqual(expected,'sum(' + num + ') should be ' + expected);
        });
    });   
});