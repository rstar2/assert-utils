/**
 * Asserts that object is not null/undefined
 * @param obj
 */
declare function assertDefined<T>(value: T, error?: Error | string): asserts value is Exclude<T, undefined | null>;
/**
 * Validates whether object is not null/undefined
 * @param obj
 */
declare function checkDefined<T>(value: T, error?: Error | string): Exclude<T, undefined | null>;
/**
 * Returns whether object is not null/undefined
 * @param obj
 */
declare function isDefined<T>(obj: T): obj is Exclude<T, undefined | null>;

export { assertDefined, checkDefined, isDefined };
