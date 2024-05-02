"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  assertDefined: () => assertDefined,
  checkDefined: () => checkDefined,
  isDefined: () => isDefined
});
module.exports = __toCommonJS(src_exports);
function assertDefined(value, error) {
  checkDefined(value, error);
}
function checkDefined(value, error) {
  if (!isDefined(value))
    throw error instanceof Error ? error : new Error(error ?? `Not defined ${name}: ${value}`);
  return value;
}
function isDefined(obj) {
  return null !== obj && void 0 !== obj;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assertDefined,
  checkDefined,
  isDefined
});
//# sourceMappingURL=index.js.map