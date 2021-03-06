import typecast = require('typecast');

import { TypeDefinition, Validator } from '../type';

const numberType: TypeDefinition = {
  validate: (value: any) => {
    if (!isNaN(parseFloat(value)) && isFinite(value)) return;
    return `Value ${value} is not a number`;
  },
  cast: typecast.number.bind(typecast),
};

export default numberType;
