const {Schema , model} = require('mongoose');
// Schema Declaration
const userSchema = new Schema({
    first_name : String,
    last_name : String,
    email : {
        // email is a string ,it is required and it must be unique
        type : String,
        lowercase : true,
        required : true,
        unique : true
    }
})
module.exports = model("User_Detail", userSchema) //Declared the model