export type Id<T> = { [K in keyof T]: T[K] } & {};
export type WithRequiredProp<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
export type Override<T1, T2> = T2 extends any ? Omit<T1, keyof T2> & T2 : never;
export function assertCast<T>(v: any): asserts v is T {}

export function safeAssign<T extends object>(target: T, ...args: Array<Partial<NoInfer<T>>>) {
  Object.assign(target, ...args);
}

/**
 * Convert a Union type `(A|B)` to and intersecion type `(A&B)`
 */
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

export type NonOptionalKeys<T> = { [K in keyof T]-?: undefined extends T[K] ? never : K }[keyof T];

export type HasRequiredProps<T, True, False> = NonOptionalKeys<T> extends never ? False : True;

export type OptionalIfAllPropsOptional<T> = HasRequiredProps<T, T, T | never>;

export type NoInfer<T> = [T][T extends any ? 0 : never];

export type UnwrapPromise<T> = T extends PromiseLike<infer V> ? V : T;

export type MaybePromise<T> = T | PromiseLike<T>;
