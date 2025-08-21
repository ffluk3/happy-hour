/** @type {import("jest").Config} **/
export default {
  testEnvironment: "node",
  // Treat TypeScript (and optionally .js under type:module) as ESM
  extensionsToTreatAsEsm: [".ts"],
  // Only run unit tests under tools/__tests__; ignore Playwright e2e tests under tests/
  testMatch: ["<rootDir>/tools/__tests__/**/*.test.ts"],
  testPathIgnorePatterns: ["<rootDir>/tests/"],
  transform: {
    // Override the ts-jest config to force ESM output matching tsconfig (module: node20)
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
        tsconfig: "tsconfig.json",
      },
    ],
  },
  // Jest 30 with ESM sometimes needs explicit module resolution for JSON when using import assertions.
  moduleNameMapper: {
    // Allow bare JSON imports without needing to mock; ts-jest will handle them via resolveJsonModule.
    "^(.+\\.json)$": "$1",
  },
};