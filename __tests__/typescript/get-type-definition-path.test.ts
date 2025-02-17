import path from "path";
import slash from "slash";
import { DEFAULT_OPTIONS } from "../../lib/load";
import { getTypeDefinitionPath } from "../../lib/typescript";

describe("getTypeDefinitionPath", () => {
  const cssFilePath = slash(
    path.resolve(process.cwd(), "some/path/style.less")
  );

  it("returns the type definition path", () => {
    const outputPath = getTypeDefinitionPath(cssFilePath, DEFAULT_OPTIONS);

    expect(outputPath).toEqual(`${cssFilePath}.d.ts`);
  });

  describe("when outputFolder is passed", () => {
    it("returns the type definition path", () => {
      const outputPath = getTypeDefinitionPath(cssFilePath, {
        ...DEFAULT_OPTIONS,
        outputFolder: "__generated__",
      });

      const generatedFilePath = slash(
        path.resolve(process.cwd(), "__generated__/some/path/style.less.d.ts")
      );

      expect(outputPath).toEqual(generatedFilePath);
    });
  });
});
