describe('Kata', function() {    
    beforeEach(function() { 
    });

    it('should be able to test', function() {
      expect(true).toBeTruthy();
    });

    describe ('removeDuplicateds',function () {

        it('should reorder each element in the array', function() {
          var sums = ['4213'], result = [];
              
          result = removeDuplicateds(sums);
          expect(result[0]).toEqual('1234','4213 should be 1234');
        });

        it('should reorder the elements in the array', function() {
          var sums = ['31','231','4213'], result = [];
              
          result = removeDuplicateds(sums);
          expect(result[0]).toEqual('123','231 should be 123');
          expect(result[1]).toEqual('1234','4213 should be 1234');
          expect(result[2]).toEqual('13','31 should be 13');
        }); 

        it('should remove duplicated elements in the array', function() {
          var sums = ['123','12','321','13','231'], result = [];
              
          result = removeDuplicateds(sums);
          expect(result[0]).toEqual('12','First element should be 12.');
          expect(result.length).toEqual( 3,'Should have removed duplicated elements only.');
        });
    });

    describe ('sum',function () {

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
              expected = 3;

          expect(sum(num)).toEqual(expected,'sum(' + num + ') should be ' + expected);
        });

        it('should calculate explosive sum of 4', function() {
          var num = 4,
              expected = 5;

          expect(sum(num)).toEqual(expected,'sum(' + num + ') should be ' + expected);
        });
    });   
});