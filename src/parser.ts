export abstract class Validator<Output = any> {
  readonly _output!: Output;
  abstract parse(value: unknown): Output;
}
