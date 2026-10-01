/* EXAMPLE */

import { Base10_to_BaseAny, conversion } from "./index.js"

let targetBase = 16
let base16digits = "0123456789abcdef"
let base10 = 0

console.log(conversion(Base10_to_BaseAny(base10, targetBase), base16digits))

/* EXAMPLE */