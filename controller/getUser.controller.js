const getUserFromDataBase = require("../service/getUser.service");
const getUser = async (req, res, next) => {
  try {
    const user = await getUserFromDataBase(req.params.id);
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
module.exports = getUser;
