var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        requred: true,
        validate: {
            validator: async val => Users.doesntExist({username: val}),
            message: ({value}) => `Username ${value} has already been taken.`
        }
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
},  {
    timestamps: true,
    
});

//encrypt function
userSchema.pre('save',function(next){
    if(this.isModified('password')) {
        var salt = bcrypt.genSaltSync(10);
        this.password = bcrypt.hashSync(this.password, salt);
    }
    next();
});
//check if matching pwd
userSchema.methods.mathchesPass = function(password){
    return bcrypt.compareSync(password, this.password);
}

//
userSchema.statics.doesntExist = async function (options) {
   return (await this.where(options).countDocuments() === 0)
}

var Users = mongoose.model('users',userSchema);
module.exports = Users;

