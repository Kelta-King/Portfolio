const express = require('express');
const controller = require("./src/Controller/controller");
const app = express();
controller(app);