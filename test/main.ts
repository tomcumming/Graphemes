import * as Mocha from "mocha";

import {} from "./tests";

const mocha = new Mocha({ bail: true });
mocha.addFile("./test/tests.ts");

mocha.run(failures => {
  process.exitCode = failures ? 1 : 0;
});
