const router = require("express").Router;
const {pathMiddleware}=require("../middlewares/pathMiddleware.js")

const {
  createUser,
  getUser,
  getUsers,
  deleteUser,
  updateUser,
} = require("../controllers/users.controller");

const userRouter = router();
userRouter.route("/").get(pathMiddleware,getUsers).post(createUser);
userRouter.route("/:userId").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = userRouter;
