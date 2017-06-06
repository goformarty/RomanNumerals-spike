(function () {
  'use strict';

  describe('Roman numerals', function () {
    describe('convert arabic numbers to roman numerals', function () {
      it ("doesn't convert non integers", function(){
        expect(convertToRoman("efg")).to.equal('not an integer');;
      });
      it('converts "1" to "I"', function () {
        expect(convertToRoman(1)).to.equal('I');
      });
      it('converts "2" to "II"', function () {
        expect(convertToRoman(2)).to.equal('II');
      });
      it('converts "3" to "III"', function () {
        expect(convertToRoman(3)).to.equal('III');
      });
      it('converts "4" to "IV"', function () {
        expect(convertToRoman(4)).to.equal('IV');
      });
      it('converts "5" to "V"', function () {
        expect(convertToRoman(5)).to.equal('V');
      });
      it('converts "6" to "VI"', function () {
        expect(convertToRoman(6)).to.equal('VI');
      });
      it('converts "7" to "VII"', function () {
        expect(convertToRoman(7)).to.equal('VII');
      });
      it('converts "9" to "IX"', function () {
        expect(convertToRoman(9)).to.equal('IX');
      });
      it('converts "10" to "X"', function () {
        expect(convertToRoman(10)).to.equal('X');
      });
      it('converts "11" to "XI"', function () {
        expect(convertToRoman(11)).to.equal('XI');
      });
    });
  });
})();
