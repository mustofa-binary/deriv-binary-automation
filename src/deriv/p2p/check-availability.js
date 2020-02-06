const {
  setup_config,
  By,
  until,
  expect,
  driver
} = require("../../config/setup");

describe("check p2p availability", () => {
  it("hi p2p", async () => {
    await driver.get(`${setup_config.test_url}/cashier/p2p#show_p2p`);
  });
});
