import fs from "fs";
import path from "path";

describe("3rd day of advent", async () => {
  let fileLines = [];
  const parseLines = lines => {
    return fileLines.reduce((acc, line) => {
      const numberSignInd = line.indexOf("#");
      const atSignInd = line.indexOf("@");
      const commaInd = line.indexOf(",");
      const colonInd = line.indexOf(":");
      const xInd = line.indexOf("x");

      acc.push({
        id: line.substring(numberSignInd + 1, atSignInd - 1),
        fromTheLeft: line.substring(atSignInd + 2, commaInd),
        fromTheTop: line.substring(commaInd + 1, colonInd),
        width: line.substring(colonInd + 2, xInd),
        height: line.substring(xInd + 1)
      });
      return acc;
    }, []);
  };

  const count = vals => {
    return vals.reduce((acc, item) => {
      if (item === "X") {
        acc++;
      }
      return acc;
    }, 0);
  };

  it("should find the overlapping fabric", async () => {
    fs
      .readFileSync(path.resolve(__dirname, "input-03.txt"), "utf-8")
      .split(/\r?\n/)
      .forEach(function(line) {
        fileLines.push(line);
      });

    const input = parseLines(fileLines);

    let fabricSquares = [];
    input.map(i => {
      // add arrays to fabricSquares for each height value, starting at the fromTheTop value
      let anArr = [];
      for (let q = 0; q < i.height; q++) {
        // populate the array line with the id for each spot between the width
        for (let p = 0; p < i.width; p++) {
          anArr[Number(i.fromTheLeft) + p] = i.id;
        }
        // if the location already has an array, update the array; if not, simply add the array
        if (
          fabricSquares[Number(i.fromTheTop) + q] &&
          fabricSquares[Number(i.fromTheTop) + q].length === undefined
        ) {
          fabricSquares[Number(i.fromTheTop) + q] = anArr;
          anArr = [];
        } else {
          for (let t = 0; t < anArr.length; t++) {
            if ((anArr[t] && anArr[t].length) !== undefined) {
              if (
                (fabricSquares[Number(i.fromTheTop) + q] &&
                  fabricSquares[Number(i.fromTheTop) + q].length) === undefined
              ) {
                fabricSquares[Number(i.fromTheTop) + q] = [];
                fabricSquares[Number(i.fromTheTop) + q][t] = anArr[t];
              } else {
                if (
                  (fabricSquares[Number(i.fromTheTop) + q][t] &&
                    fabricSquares[Number(i.fromTheTop) + q][t].length) ===
                  undefined
                ) {
                  fabricSquares[Number(i.fromTheTop) + q][t] = i.id;
                } else {
                  fabricSquares[Number(i.fromTheTop) + q][t] = "X";
                }
              }
            }
          }
        }
      }
    });

    // reduce fabricSquares to the count of Xs
    const answer = fabricSquares.reduce((acc, square) => {
      acc += count(square);
      return acc;
    }, 0);

    console.log(`Answer: `, answer);
  });
});
