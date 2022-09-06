const express = require("express");
const userRouter = require("./routes/users.route.js");
const { globalMiddleware } = require("./middlewares/globalMiddleware")

//initialise app
const app = express();
app.use(globalMiddleware);

app.use("/users", userRouter);

//check server
app.get("/", async (request, response) => {
  response
    .status(200)
    .send("Welcome to my server. Please use /users to get all users");
});

//ports
app.listen(4000, (error) => {
  console.log(`Server Running on https://localhost:4000`);
});
