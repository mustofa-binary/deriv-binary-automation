const chai = require('chai')
const driver = require('./driver')
const { By, until } = require('selenium-webdriver');

const setup_config = {
    test_url: 'https://localhost.binary.sx',
    app_id: '19112',
    server_url: 'binaryqa10.com',
    email: 'client+1580828113@binary.com',
    password: 'binary123'
}

exports.setup_config = setup_config
exports.chai = chai
exports.assert = chai.assert
exports.expect = chai.expect
exports.driver = driver
exports.By = By
exports.until = until