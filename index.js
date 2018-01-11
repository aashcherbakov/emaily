const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
const variables = require("./config/variables");

// Create user model before initializing passport
require("./models/user");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

/**
 * Settin up cookie session management.
 * It extracts cookie data and assigns it to req.session
 */
app.use(
  cookieSession({
    maxAge: variables.sessionDuration,
    keys: [keys.cookieKey]
  })
);

/**
 * Passport pulls user id out of the passed cookie (req.session) and serializes it.
 */
app.use(passport.initialize());
app.use(passport.session());

/**
 * Passport:
passport.js initializes passport instance and sets up configuration to use GoogleStrategy for user authentication.
It also holds a completion handler that allows to access tokens, user info etc.

In addition to that we have authRoutes.js file that handles user navigation to google authentication service.
First handles redirect from /auth/google to authentication page.
Second handles callback URL that is set in Google Developer console.
 */

// Calls a function of authRouts with app object.
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
