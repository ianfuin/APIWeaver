const props1 = 'a.b.c'.split('.').reduceRight(
  (acc, name, index) => ({
    [name]: index === 0 ? { type: 'number' } : { type: 'object', properties: acc },
  }),
  {},
);
const props2 = 'a.b.f'.split('.').reduceRight(
  (acc, name, index) => ({
    [name]: index === 0 ? { type: 'number' } : { type: 'object', properties: acc },
  }),
  {},
);

function mergeProps(target: any, source: any): any {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (typeof target[key] === 'object' && typeof source[key] === 'object') {
        target[key] = mergeProps(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}

const mergedProps = mergeProps({}, props1);
mergeProps(mergedProps, props2);

console.log(mergedProps);
