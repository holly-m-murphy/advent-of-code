import fs from "fs";
import path from "path";

describe("day 4, challenge 1: ", async () => {
  it("should find the product of the id and minute the guard of that id slept the most", async () => {
    fs
      .readFileSync(path.resolve(__dirname, "input-04-test.txt"), "utf-8")
      .split(/\r?\n/)
      .forEach(function(line) {
        fileLines.push(line);
      });
  });
});
