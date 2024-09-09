// Import the user model
const model = require("../model/user");

const createUser = async (userDetails) => {
  try {
    const createUser = await model.create(userDetails);
    console.log(createUser);
    return createUser; // Returned the the created user
  } catch (err) {
    throw new Error(err.message); // Pass the error to the next error handler
  }
};
const deleteUser = async (id) => {
  try {
    const deleteUser = await model.findByIdAndDelete(id);
    console.log(deleteUser);
    return deleteUser; //Returned deleted document
  } catch (error) {
    const err = new Error(error);
    err.status = 400;
    throw err; // Passes the error to the next error handler
  }
};
const getUser = async (id) => {
  try {
    const user = await model.findById(id);
    console.log(user);
    return user;
  } catch (err) {
    err.status = 404;
    throw new Error(err);
  }
};
const updateUser = async (id, updateDetails) => {
  try {
    const update = await model.findByIdAndUpdate(id, updateDetails, {
      new: true,
      runValidators: true,
    });
    console.log(update);
    return update; // Return the updated Document
  } catch (err) {
    throw new Error(err); // Passes the error to the next error handler
  }
};
module.exports = {
    createUser,
    deleteUser,
    updateUser,
    getUser
  };
