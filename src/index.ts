/**
 * Asserts that object is not null/undefined
 * @param obj
 */
export function assertDefined<T>(value: T, error?: Error | string): asserts value is Exclude<T, undefined | null> {
    checkDefined(value, error);
}

/**
 * Validates whether object is not null/undefined
 * @param obj
 */
export function checkDefined<T>(value: T, error?: Error | string): Exclude<T, undefined | null> {
    if (!isDefined(value)) throw error instanceof Error ? error : new Error(error ?? `Not defined ${name}: ${value}`);
    return value;
}

/**
 * Returns whether object is not null/undefined
 * @param obj
 */
export function isDefined<T>(obj: T): obj is Exclude<T, undefined | null> {
    return null !== obj && undefined !== obj;
}
