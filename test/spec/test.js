(function () {
  'use strict';

  describe('Roman numerals', function () {
    describe('convert arabic numbers to roman numerals', function () {
      it('converts "1" to "I"', function () {
        expect(convertToRoman(1)).to.equal('I');
      });
      it('converts "2" to "II"', function () {
        expect(convertToRoman(2)).to.equal('II');
      });
      it('converts "3" to "III"', function () {
        expect(convertToRoman(3)).to.equal('III');
      });
    });
  });
})();
