const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () =>{
    expect(functions.add(2,2)).toBe(4);
})

test('Adds 3 + 2 to equal 5', () =>{
    expect(functions.add(3,2)).toBe(5);
})

test('Adds 3 + 2 to NOT equal 6', () =>{
    expect(functions.add(3,2)).not.toBe(6);
})

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined
// toBeTruthy
// toBeFalsy

test('Should be null', () =>{
    expect(functions.isNull()).toBeNull();
})

test('Should be undefined', () =>{
    expect(functions.isUndefined()).toBeUndefined();
})

test('Should be falsy', () =>{
    expect(functions.checkValue(null)).toBeFalsy();
    expect(functions.checkValue(0)).toBeFalsy();
    expect(functions.checkValue(undefined)).toBeFalsy();
    expect(functions.checkValue(false)).toBeFalsy();
})

test('Should be truthy', () =>{
    expect(functions.checkValue(2)).toBeTruthy();
    expect(functions.checkValue(true)).toBeTruthy();
})

// toBe does not work in objects, use toEqual instead
test('Should return user object', () =>{
    expect(functions.createUser()).toEqual({
        firstName: 'First Name',
        lastName: 'Last Name',
    });
})

test('Should be under 1600', () =>{
    const load1 = 800;
    const load2 = 700;
    const load3 = 800;

    expect(load1 + load2).toBeLessThan(1600);
    expect(load1 + load3).toBeLessThanOrEqual(1600);
})

// Regex
test('There is no I in team', () =>{
    expect('team').not.toMatch(/I/);
    expect('team').toMatch(/am/);
})