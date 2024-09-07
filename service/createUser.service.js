// Import the user model
const model = require('../model/user');

const userModel = async(userDetails) => {
    try{
        const createUser = await model.create(userDetails) 
        console.log(createUser)
        return createUser ; // Returned the the created user
    }catch(err){
       throw new Error(err.message) // Pass the error to the next error handler
    }
}
module.exports = userModel