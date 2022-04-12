const Users = require('../models/users');

const login = async (email, password) => {

    try {
        
        //check if email existed
        const user = await Users.findOne({email: email});
        if(user < 0)
            throw 'The user is not found~'

        //check matching pwd
        if(!user.matchesPassword(password)){
            throw "The user's information is incorrect~"
        }
        // return user's information
        return {
            suscess: true,
            data: null,
        }
        
    }  catch (err) {
        return {
            success: false,
            err: err || 'error'
        }
    }
}

module.exports = {
    login,
}