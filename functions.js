const { default: axios } = require("axios");

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
    },

    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => 'error')
}

module.exports = functions;