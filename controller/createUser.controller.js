// imported the createUserDatabase function
const createUserInDatabase = require('../service/createUser.service');
const createUser = async (req, res , next) => {
  try {
    const userDetails = req.body; //User details
    const created = await createUserInDatabase(userDetails);  // Assign the created user to create variable
    res.status(201).send(`User Created\n ${created}`)
  } catch (err) {
    err.status = 400
    next(err)
  }
};
module.exports = createUser;
