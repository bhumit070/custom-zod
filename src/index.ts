import { StringValidator } from './validators/string.js';

type CustomZod = {
  string: () => StringValidator;
};

const z: CustomZod = {
  string: () => new StringValidator(),
};

export default z;
