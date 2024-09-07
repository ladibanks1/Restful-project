const model = require('../model/user');
const deleteUser = async(id) => {
    try {
        const deleteUser =  await  model.findByIdAndDelete(id)
        console.log(deleteUser)
        return deleteUser //Returned deleted document
    } catch (error) {
        const err = new Error(error);
        err.status = 400
        throw err // Passes the error to the next error handler
    }
}
module.exports = deleteUser