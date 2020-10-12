import * as first from "./first.mjs";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const invoice = require("./invoice.json");
const plays = require("./plays.json");

var result = first.statement(invoice, plays);
console.log(result);