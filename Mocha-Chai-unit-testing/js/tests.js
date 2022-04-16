//Written by Eric Dee.

const TestArgsNum = [9, 10]
const TestArgsStr = ['TestString1', 'TestString2']
const _Assert_ = chai.assert;

////////////////////////
////                ////
//// Helper methods ////
////                ////
////////////////////////

const ExpectedAdd = 
    (argv) =>
{
    return argv[0] + argv[1];
}

const ExpectedMultiply = 
    (argv) =>
{
    return argv[0] * argv[1];
}

const ExpectedConcat = 
    (argv) =>
{
    return argv[0].toString().concat(argv[1]);
}

const ExpectedDivide =
    (argv) =>
{
    return argv[0] / argv[1];
}

const NaNErrorCheckAll = function 
    (delegate)
{
    it('Should return an error message if the first argument is not a number', function(){
        var test = delegate(NaN, 2)
        _Assert_.equal(test, 'Argument "NaN" is not a number.')
    })
    it('Should return an error message if the second argument is not a number', function(){
        var test = delegate(2, NaN)
        _Assert_.equal(test, 'Argument "NaN" is not a number.')
    })
    it('Should return an error message if neither argument is a number', function(){
        var test = delegate(NaN, NaN)
        _Assert_.equal(test, 'Arguments "NaN" and "NaN" are not numbers.')
    })
}

///////////////
////       ////
//// Tests ////
////       ////
///////////////

describe('checkIfNumbers | return', function(){
    it('Should return null if the two values are numbers.', function(){

        var test = checkIfNumbers(TestArgsNum[0], TestArgsNum[1])
        _Assert_.equal(test, null);
    })
    NaNErrorCheckAll(checkIfNumbers)
});

describe('add | return', function(){
    it('Should return the correct sum of both inputs.', function(){
        var test = add(TestArgsNum[0], TestArgsNum[1])
        _Assert_.equal(test, ExpectedAdd(TestArgsNum))
    })
    NaNErrorCheckAll(add)
})

describe('multiply | return', function(){
    it('Should return the multiplication of both inputs.', function(){
        var test = multiply(TestArgsNum[0], TestArgsNum[1])
        _Assert_.equal(test, ExpectedMultiply(TestArgsNum))
    })
    NaNErrorCheckAll(multiply)
})

describe('concat | return', function(){
    it('Should return both number inputs concatenated to a string.', function(){
        var test = concat(TestArgsNum[0], TestArgsNum[1])
        _Assert_.equal(test, ExpectedConcat(TestArgsNum))
    })
    it('Should return both string inputs concatenated to a string.', function(){
        var test = concat(TestArgsStr[0], TestArgsStr[1])
        _Assert_.equal(test, ExpectedConcat(TestArgsStr))
    })
})

describe('divide | return', function(){
    it('Should return the division of two numbers as an int or decimal.', function(){
        var test = divide(TestArgsNum[0], TestArgsNum[1])
        _Assert_.equal(test, ExpectedDivide(TestArgsNum))
    })
    NaNErrorCheckAll(divide)
})