require("dotenv").config({ path: "/.env" });
const chai = require("chai");
const driver = require("./driver");
const { By, until } = require("selenium-webdriver");

// agent: agent+1580828113@binary.com
// client: client+1580828113@binary.com
const setup_config = {
  test_url: process.env.test_url,
  email: process.env.email,
  password: process.env.password,
  app_id: process.env.app_id,
  server_url: process.env.server_url
};

exports.setup_config = setup_config;
exports.chai = chai;
exports.assert = chai.assert;
exports.expect = chai.expect;
exports.driver = driver;
exports.By = By;
exports.until = until;
