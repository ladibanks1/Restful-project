const account = require("../service/account.service");

const createUser = async (req, res, next) => {
  try {
    const userDetails = req.body; //User details
    const created = await account.createUser(userDetails); // Assign the created user to create variable
    res.status(201).send(`User Created\n ${created}`);
  } catch (err) {
    err.status = 400;
    next(err);
  }
};


const deleteUser = async (req, res, next) => {
  try {
    const deleted = await account.deleteUser(req.params.id);
    if (deleted) {
      res.status(200).send(`User Details deleted Successfully\n ${deleted}`);
    } else {
      const err = new Error("Id not Found");
      err.status = 400;
      throw err;
    }
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
    try {
      const user = await account.getUser(req.params.id);
      if (user) {
        res.status(200).send("Document Found\n" + user);
      } else {
        throw new Error(" Counld't Find Document Check Id And Try Again");
      }
    } catch (error) {
      error.status = 404
      next(error);
    }
  };

  const updateUser = async (req, res , next) => {
    try {
      const id = req.params.id;
      const updatedDetails = req.body;
      const updated = await account.updateUser(id, updatedDetails);
      res.status(201).send(`Updated Successful\n ${updated}`) 
    } catch (err) {
      // Error Handling
      err.status = 404
      next(err)
    }
  };

  module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser
  }