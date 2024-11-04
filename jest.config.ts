/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  modulePathIgnorePatterns: ["./dist", "./__tests__/__mocks__"],
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
};
