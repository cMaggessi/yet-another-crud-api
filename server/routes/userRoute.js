const express = require("express");
const UserController = require("../controller/UserController");

const router = express.Router();


//@POST(/create-user)
router.post("/create-user", UserController.createUser);

//@GET(/users)
router.get('/users', UserController.getAll)

//@GET(/users/{id})
router.get('/users/:id', UserController.getOne)

module.exports = router;