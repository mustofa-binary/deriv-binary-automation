const imTest = (name, path) => {
  describe(name, () => {
    require(path);
  });
};

describe("What i want to do", () => {
  imTest("Login", "./deriv/login");
});
