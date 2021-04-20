interface User {
  name: string
  age: number
}

interface Admin {
  name: number
  role: number
}

type PPE<T, U> = Partial<Pick<T, Exclude<keyof T, keyof U>>>

type Merge<T, U> = PPE<T, U> &
  PPE<U, T> &
  {
    [K in Extract<keyof T, keyof U>]: T[K] | U[K]
  }

type AdminUser = Merge<User, Admin>

const b: AdminUser = {
  name: 1,
  age: 1,
  role: 1,
}

/**
 * Make all properties in T optional
 */
// Partial
type Partial<T> = {
  [K in keyof T]?: T[K]
}

/**
 * Make all properties in T required
 */
// Required
type Required<T> = {
  [K in keyof T]-?: T[K]
}

/**
 * Make all properties in T readonly
 */
// Readonly
type Readonly<T> = {
  readonly [K in keyof T]: T[K]
}

/**
 * From T, pick a set of properties whose keys are in the union K
 */
// Pick
type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}

/**
 * Construct a type with a set of properties K of type T
 */
// Record
type Record<K extends keyof any, T> = {
  [P in K]: T
}

/**
 * Exclude from T those types that are assignable to U
 */
// Exclude
type Exclude<T, U> = T extends U ? never : T

/**
 * Extract from T those types that are assignable to U
 */
// Extract
type Extract<T, U> = T extends U ? T : never

/**
 * Construct a type with the properties of T except for those in type K.
 */
// Omit
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>

/**
 * Exclude null and undefined from T
 */
// NonNullable

/**
 * Obtain the parameters of a function type in a tuple
 */
// Parameters

/**
 * Obtain the parameters of a constructor function type in a tuple
 */
// ConstructorParameters

/**
 * Obtain the return type of a function type
 */
// ReturnType

/**
 * Obtain the return type of a constructor function type
 */
// InstanceType
