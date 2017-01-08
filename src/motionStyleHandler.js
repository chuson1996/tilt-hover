import set from 'lodash/set';
import get from 'lodash/get';

const secret = 'akbsd827zsvasdv';


export const serializeStyle = (obj) => {
  const result = {};
  Object.keys(obj).forEach((childKey) => {
    Object.keys(obj[childKey]).forEach((childProp) => {
      result[`${childKey}_${secret}_${childProp}`] = obj[childKey][childProp];
    });
  });
  return result;
};

export const deserializeStyle = (input) => {
  const result = {};
  Object.keys(input).forEach((parProp) => {
    const [selector, selectorProp] = parProp.split(`_${secret}_`);
    set(result, `${selector}.${selectorProp}`, input[parProp]);
  });
  return result;
};

export const returnToInitialState = (initialState, springFunc, customOption) => {
  const result = {};
  Object.keys(initialState).forEach((childKey) => {
    Object.keys(initialState[childKey]).forEach((childProp) => {
      // result[`${childKey}_${secret}_${childProp}`] = obj[childKey][childProp];
      const val = get(initialState, `${childKey}.${childProp}`);
      set(result, `${childKey}.${childProp}`, springFunc(val));
    });

    if (customOption) {
      Object.keys(customOption).forEach((propPath) => {
        const customSpringFunc = customOption[propPath];
        set(
          result,
          propPath,
          customSpringFunc(get(initialState, propPath))
        );
      });
    }
  });
  return result;
}
