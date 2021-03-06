import {
  expandRomanNumber,
  condenseRomanNumber,
  canonifyRomanNumber,
  addExpendedRomanNumbers,
  addRomanNumbers,
} from ".";

describe("expandRomanNumber", function () {

  it("expands CXCIX (199)", function () {
    expect(expandRomanNumber('CXCIX')).toEqual('CLXXXXVIIII');
  });

  it("expands CCCXCVIII (398)", function () {
    expect(expandRomanNumber('CCCXCVIII')).toEqual('CCCLXXXXVIII');
  });

  it("expands MMMCMXCIX (3999)", function () {
    expect(expandRomanNumber('MMMCMXCIX')).toEqual('MMMDCCCCLXXXXVIIII');
  });

});

describe("symplifyRomanNumber", function () {

  it("symplify 199", function () {
    expect(condenseRomanNumber('I'.repeat(199))).toEqual('CLXXXXVIIII');
  });

  it("symplify 398", function () {
    expect(condenseRomanNumber('I'.repeat(398))).toEqual('CCCLXXXXVIII');
  });

  it("symplify 3999", function () {
    expect(condenseRomanNumber('I'.repeat(3999))).toEqual('MMMDCCCCLXXXXVIIII');
  });

});

describe("canonifyRomanNumber", function () {

  it("canonifies 'CLXXXXVIIII' (199)", function () {
    expect(canonifyRomanNumber('CLXXXXVIIII')).toEqual('CXCIX');
  });

  it("canonifies 'CCCLXXXXVIII' (398)", function () {
    expect(canonifyRomanNumber('CCCLXXXXVIII')).toEqual('CCCXCVIII');
  });

  it("canonifies MMMDCCCCLXXXXVIIII (3999)", function () {
    expect(canonifyRomanNumber('MMMDCCCCLXXXXVIIII')).toEqual('MMMCMXCIX');
  });

});

describe("addExpendedRomanNumbers", function () {

  it("add 'CLXXXXVIIII' + 'CLXXXXVIIII' (199+199)", function () {
    expect(addExpendedRomanNumbers('CLXXXXVIIII', 'CLXXXXVIIII')).toEqual('CCLLXXXXXXXXVVIIIIIIII');
  });

});

describe("addRomanNumbers", function () {

  it("add 'CXCIX' + 'CXCIX' (199+199)", function () {
    expect(addRomanNumbers('CXCIX', 'CXCIX')).toEqual('CCCXCVIII');
  });

});
