const Users = require("../models/users");
const { createAsessionToken } = require('../services/utils');


const login = async (email, password) => {

    try {
        // check if email existed
        const user = await Users.findOne({email})
        if (!user)
            throw 'The user is not found~'
        
        if (!user.matchesPassword(password)) {
            throw "Ther user's information is incorrect~"
        }
          const token = createAsessionToken(user?._id, user?.email);
         // req.session.jwt = token;
        return {
            suscess: true,
            data: {user, token},
        }
        
    } catch (err) {
        return {
            success: false,
            err: err || 'error'
        }
    }
};



const updateUser = async (username, firstname, lastname, email) => {
    console.log(username, firstname, lastname, email )
    return {
        suscess: true,
        data: username, firstname, lastname, email
    }
   
};





module.exports = {
    login,updateUser
}