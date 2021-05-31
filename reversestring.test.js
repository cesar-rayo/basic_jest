const reverseString = require('./reversestring');

test('reverseString function exist', () =>{
    expect(reverseString).toBeDefined();
});

test('String reverses', () =>{
    expect(reverseString('hello')).toEqual('olleh');
});

test('String reverses with UpperCase', () =>{
    expect(reverseString('HeLLo')).toEqual('olleh');
});