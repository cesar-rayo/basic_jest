const functions = {

    add: function(num1, num2){
        return num1 + num2;
    },

    // Shorter definition
    add2: (num1, num2) => num1 + num2,

    isNull: () => null,

    isUndefined: () => undefined,

    checkValue: x => x,

    createUser: () => {
        const user = { firstName: 'First Name'};
        user['lastName'] = 'Last Name';
        return user;
    }
}

module.exports = functions;