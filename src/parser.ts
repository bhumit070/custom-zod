export abstract class Validator {
  protected value: unknown = undefined;

  parse(value: unknown): [boolean, Array<string>] {
    this.value = value;
    return this._parse(value);
  }

  protected abstract _parse(value: unknown): [boolean, Array<string>];
}
