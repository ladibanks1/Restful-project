const deleteUserInDatabase = require('../service/deleteUser.service');
const deleteUser = async(req , res , next) => {
    try {
        const deleted = await deleteUserInDatabase(req.params.id)
        if(deleted){
            res.status(200).send(`User Details deleted Successfully\n ${deleted}`)
        }else{
            const err = new Error("Id not Found")
            err.status = 400
            throw err
        }
       
    } catch (error) {
        next(error)
    }
}
module.exports = deleteUser