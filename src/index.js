// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (property) => {
  return property;
};

const createNotEnumerableProperty = (property) => {
  Object.defineProperty(Object.prototype, property, {
    enumerable: false,
    value: 'value'
  });
  return property;
};

const createProtoMagicObject = () => {
  var magicObj = () => {};
  magicObj.prototype = magicObj.__proto__;
  return magicObj;
};

const incrementor = () => {
};

const asyncIncrementor = () => {};

const createIncrementer = function*() {
  let index = 0;
  while(true)
      yield ++index;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(param), 1000);
    setTimeout(() => reject(new Error("Time out")), 2000);
  });
};

const getDeepPropertiesCount = () => {};

const createSerializedObject = () => {
  return null;
};

const toBuffer = () => {};

const sortByProto = (array) => {
    return array.sort((a, b) => a.__proto__ - b.__proto__);
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;