const model = require('../model/user');

const getUser = async(id) => {
    try{
const user = await model.findById(id)
    console.log(user)
    return user
    }catch(err){
        err.status = 404
        throw new Error(err)
    }
    
}
module.exports = getUser