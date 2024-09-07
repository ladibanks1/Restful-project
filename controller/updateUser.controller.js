const updateUserInDatabase = require("../service/updateUser.service");
const updateUser = async (req, res , next) => {
  try {
    const id = req.params.id;
    const updatedDetails = req.body;
    const updated = await updateUserInDatabase(id, updatedDetails);
    res.status(201).send(`Updated Successful\n ${updated}`) 
  } catch (err) {
    // Error Handling
    err.status = 404
    next(err)
  }
};
module.exports = updateUser;
