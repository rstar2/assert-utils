import { isDefined } from '../src';

test('adds two numbers correctly', () => {
  expect(isDefined(1)).toBe(true);
  expect(isDefined("string")).toBe(true);
  expect(isDefined({})).toBe(true);

  expect(isDefined(undefined)).toBe(false);
  expect(isDefined(null)).toBe(false);
});