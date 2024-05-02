// src/index.ts
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
export {
  assertDefined,
  checkDefined,
  isDefined
};
//# sourceMappingURL=index.mjs.map