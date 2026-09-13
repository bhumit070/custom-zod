import { NumberValidator } from './validators/number/index.js';
import { StringValidator } from './validators/string/index.js';

type CustomZod = {
  string: () => StringValidator;
  number: () => NumberValidator;
};

const z: CustomZod = {
  string: () => new StringValidator(),
  number: () => new NumberValidator(),
};

export default z;
