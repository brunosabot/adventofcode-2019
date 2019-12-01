import kleur from "kleur";
import fs from "fs";

const { blue, green, yellow } = kleur;

const withTimer = async (method, input) => {
  const startTime = new Date().getTime();
  const result = await method(input);
  const endTime = new Date().getTime();

  const timeInSeconds = Math.round((100 * (endTime - startTime)) / 1000) / 100;

  // eslint-disable-next-line no-console
  console.log(
    `${blue("Result day 1 part 1")} (${yellow(`${timeInSeconds}s`)}): "${green(
      result
    )}"`
  );
};

const getInputDay = day => fs.readFileSync(`./day${day}/input-1.txt`);
const getScriptFile = (day, part) => `./day${day}/part-${part}.js`;

if (process.env.NODE_ENV !== "test") {
  (async function run() {
    if (!process.argv[3] || process.argv[3] === "1") {
      const inputBuffer = getInputDay(process.argv[2]);

      import(getScriptFile(process.argv[2], 1)).then(({ main }) => {
        withTimer(main, inputBuffer.toString());
      });
    }

    if (!process.argv[3] || process.argv[3] === "2") {
      const inputBuffer = getInputDay(process.argv[2]);

      import(getScriptFile(process.argv[2], 2)).then(({ main }) => {
        withTimer(main, inputBuffer.toString());
      });
    }
  })();
}
