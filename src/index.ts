import { NumberValidator } from './validators/number.js';
import { StringValidator } from './validators/string.js';

type CustomZod = {
  string: () => StringValidator;
  number: () => NumberValidator;
};

const z: CustomZod = {
  string: () => new StringValidator(),
  number: () => new NumberValidator(),
};

export default z;
