export abstract class Validator {
  abstract parse<T>(value: unknown): T;
}
