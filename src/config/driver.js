const { Builder, Capabilities } = require('selenium-webdriver');

const chromeCapabilities = Capabilities.chrome();
//setting chrome options to start the browser fully maximized
const chromeOptions = {
    'w3c': false,
};

chromeCapabilities.set('chromeOptions', chromeOptions);

const driver = new Builder().withCapabilities(chromeCapabilities).build();

module.exports = driver;