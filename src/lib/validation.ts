export type ValidationFunction<T> = (value: T) => boolean;

// Verifica se il valore è un'email valida
export const isEmail: ValidationFunction<string> = (value) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

// Verifica se una stringa non è vuota
export const isNotEmpty: ValidationFunction<string> = (value) =>
  value?.trim().length > 0;

// Verifica che un array non sia vuoto
export const isArrayNotEmpty: ValidationFunction<unknown[]> = (value) =>
  value?.length > 0;

// Verifica che una stringa abbia una lunghezza minima
export const hasMinLength =
  (min: number): ValidationFunction<string> =>
  (value) =>
    value.length >= min;

// Verifica se il valore è un numero
export const isNumber: ValidationFunction<number | string> = (value) =>
  !isNaN(Number(value));

// Verifica se il numero è positivo
export const isPositiveNumber: ValidationFunction<number> = (value) =>
  value > 0;

// Verifica se il valore rispetta un pattern specifico
export const matchesPattern =
  (pattern: RegExp): ValidationFunction<string> =>
  (value) =>
    pattern.test(value);

// Verifica che la password sia forte
export const isStrongPassword: ValidationFunction<string> = (value) =>
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
    value
  );
