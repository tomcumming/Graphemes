import * as Mocha from "mocha";

import {} from "./tests";
import {} from "./unit";

const mocha = new Mocha({ bail: true });
mocha.addFile("./test/unit.ts");
mocha.addFile("./test/tests.ts");

mocha.run(failures => {
  process.exitCode = failures ? 1 : 0;
});
