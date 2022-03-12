const verifySignUp = require("../middlewares/verifySignUp");
const Auth = require("../controllers/auth.controller");
const router = express.Router();

module.exports = (app) => {
  router.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  router.post("/signup", [verifySignUp.checkDuplicateEmail], Auth.signup);
  router.post("/signin", Auth.signin);

  app.use("/api/auth", router);
};
