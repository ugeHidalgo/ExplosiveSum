describe('Kata', function() {    
    beforeEach(function() { 
    });

    it('should be able to test', function() {
      expect(true).toBeTruthy();
    });

    describe ('basic cases',function () {

        it('should calculate explosive sum of -1', function() {
          var num = -1,
              expected = 0;
              
          expect(sum(num)).toEqual(expected,'sum(' + num + ') should be ' + expected);
        });

        it('should calculate explosive sum of 0', function() {
          var num = 0,
              expected = 1;

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
              expected = 3;

          expect(sum(num)).toEqual(expected,'sum(' + num + ') should be ' + expected);
        });

        it('should calculate explosive sum of 4', function() {
          var num = 4,
              expected = 5;

          expect(sum(num)).toEqual(expected,'sum(' + num + ') should be ' + expected);
        });

        it('should calculate explosive sum of 5', function() {
          var num = 5,
              expected = 7;

          expect(sum(num)).toEqual(expected,'sum(' + num + ') should be ' + expected);
        });

        it('should calculate explosive sum of 10', function() {
          var num = 10,
              expected = 42;

          expect(sum(num)).toEqual(expected,'sum(' + num + ') should be ' + expected);
        });
    }); 

    describe ('explosive cases',function () {

        it('should calculate explosive sum of 12', function() {
          var num = 12,
              expected = 77;
              
          expect(sum(num)).toEqual(expected,'sum(' + num + ') should be ' + expected);
        });

        it('should calculate explosive sum of 13', function() {
          var num = 13,
              expected = 101;
              
          expect(sum(num)).toEqual(expected,'sum(' + num + ') should be ' + expected);
        });

        it('should calculate explosive sum of 15', function() {
          var num = 15,
              expected = 176;
              
          expect(sum(num)).toEqual(expected,'sum(' + num + ') should be ' + expected);
        });

        it('should calculate explosive sum of 20', function() {
          var num = 20,
              expected = 627;
              
          expect(sum(num)).toEqual(expected,'sum(' + num + ') should be ' + expected);
        });

        it('should calculate explosive sum of 33', function() {
          var num = 33,
              expected = 10143;
              
          expect(sum(num)).toEqual(expected,'sum(' + num + ') should be ' + expected);
        });

        it('should calculate explosive sum of 34', function() {
          var num = 34,
              expected = 12310;
              
          expect(sum(num)).toEqual(expected,'sum(' + num + ') should be ' + expected);
        });

        it('should calculate explosive sum of 35', function() {
          var num = 35,
              expected = 14883;
              
          expect(sum(num)).toEqual(expected,'sum(' + num + ') should be ' + expected);
        });

        it('should calculate explosive sum of 50', function() {
          var num = 50,
              expected = 204226;
              
          expect(sum(num)).toEqual(expected,'sum(' + num + ') should be ' + expected);
        });

        it('should calculate explosive sum of 80', function() {
          var num = 80,
              expected = 15796476;
              
          expect(sum(num)).toEqual(expected,'sum(' + num + ') should be ' + expected);
        });

        it('should calculate explosive sum of 100', function() {
          var num = 100,
              expected = 190569292;
              
          expect(sum(num)).toEqual(expected,'sum(' + num + ') should be ' + expected);
        });
    });  
});