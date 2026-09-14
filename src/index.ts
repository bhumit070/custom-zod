import { Validator } from './parser.js';
import { NumberValidator } from './validators/number.js';
import { StringValidator } from './validators/string.js';

type CustomZod = {
  string: () => StringValidator;
  number: () => NumberValidator;
};

export namespace z {
  export type infer<T extends Validator<any>> = T['_output'];
}

const z: CustomZod = {
  string: () => new StringValidator(),
  number: () => new NumberValidator(),
};

export default z;
