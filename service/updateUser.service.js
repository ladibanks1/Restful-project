// Imported the model
const model = require('../model/user');

const updateUser = async(id , updateDetails) => {
    try{
       const update = await model.findByIdAndUpdate(id , updateDetails,{new : true , runValidators:true});
       console.log(update)
       return update // Return the updated Document
    }catch(err){
        throw new Error(err) // Passes the error to the next error handler
    }
    
}
module.exports = updateUser