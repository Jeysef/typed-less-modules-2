import fs from "fs";
import slash from "slash";
import { generate } from "../../lib/core";

describe("generate", () => {
  beforeEach(() => {
    // Only mock the write, so the example files can still be read.
    fs.writeFileSync = jest.fn();
    console.log = jest.fn(); // avoid console logs showing up
  });

  it("generates types for all files matching the pattern", async () => {
    const pattern = slash(`${__dirname}/../dummy-styles/**/*.less`);

    await generate(pattern, {
      banner: "",
      watch: false,
      ignoreInitial: false,
      exportType: "named",
      exportTypeName: "ClassNames",
      exportTypeInterface: "Styles",
      listDifferent: false,
      ignore: [],
      quoteType: "single",
      updateStaleOnly: false,
      logLevel: "verbose",
      outputFolder: null,
    });

    expect(fs.writeFileSync).toHaveBeenCalledTimes(6);
  });
});
