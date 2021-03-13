import {
  canonifyRomanNumber,
  deCanonifyRomanNumber,
  condenseRomanNumber,
  addNonCanonicalRomanNumbers,
  addRomanNumbers,
} from ".";

describe("deCanonifyRomanNumber", function () {

  it("decanonify CXCIX (199)", function () {
    expect(deCanonifyRomanNumber('CXCIX')).toEqual('CLXXXXVIIII');
  });

  it("decanonify CCCXCVIII (398)", function () {
    expect(deCanonifyRomanNumber('CCCXCVIII')).toEqual('CCCLXXXXVIII');
  });

  it("decanonify MMMCMXCIX (3999)", function () {
    expect(deCanonifyRomanNumber('MMMCMXCIX')).toEqual('MMMDCCCCLXXXXVIIII');
  });

});

describe("condenseRomanNumber", function () {

  it("condense 199", function () {
    expect(condenseRomanNumber('I'.repeat(199))).toEqual('CLXXXXVIIII');
  });

  it("condense 398", function () {
    expect(condenseRomanNumber('I'.repeat(398))).toEqual('CCCLXXXXVIII');
  });

  it("condense 3999", function () {
    expect(condenseRomanNumber('I'.repeat(3999))).toEqual('MMMDCCCCLXXXXVIIII');
  });

});

describe("canonifyRomanNumber", function () {

  it("canonify 'CLXXXXVIIII' (199)", function () {
    expect(canonifyRomanNumber('CLXXXXVIIII')).toEqual('CXCIX');
  });

  it("canonify 'CCCLXXXXVIII' (398)", function () {
    expect(canonifyRomanNumber('CCCLXXXXVIII')).toEqual('CCCXCVIII');
  });

  it("canonify MMMDCCCCLXXXXVIIII (3999)", function () {
    expect(canonifyRomanNumber('MMMDCCCCLXXXXVIIII')).toEqual('MMMCMXCIX');
  });

});

describe("addNonCanonicalRomanNumbers", function () {

  it("add 'CLXXXXVIIII' + 'CLXXXXVIIII' (199+199)", function () {
    expect(addNonCanonicalRomanNumbers('CLXXXXVIIII', 'CLXXXXVIIII')).toEqual('CCLLXXXXXXXXVVIIIIIIII');
  });

});

describe("addRomanNumbers", function () {

  it("add 'CXCIX' + 'CXCIX' (199+199)", function () {
    expect(addRomanNumbers('CXCIX', 'CXCIX')).toEqual('CCCXCVIII');
  });

});
