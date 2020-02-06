const imTest = (name, path) => {
  describe(name, () => {
    require(path);
  });
};

describe("What you want to do", () => {
  imTest("Login", "./deriv/login");
  imTest("Go to p2p", "./deriv/p2p/check-availability");
});
