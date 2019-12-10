import * as Mocha from "mocha";

const mocha = new Mocha({ bail: true });
mocha.addFile("./test/unit.ts");
mocha.addFile("./test/tests.ts");

mocha.run(failures => {
  process.exitCode = failures ? 1 : 0;
});
