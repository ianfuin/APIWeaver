import { type HttpMethods } from '@apiweaver/core';

export function isChinese(str: string) {
  return (
    str &&
    str.match(
      /[\u4E00-\u9FCC\u3400-\u4DB5\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uff1a\uff0c\uFA27-\uFA29]|[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d]|[\uff01-\uff5e\u3000-\u3009\u2026]/,
    )
  );
}

export function transformCamelCase(name: string) {
  if (!name) return '';

  let words = [] as string[];
  let result = name;

  if (typeof result !== 'string') {
    throw new Error('mod name is not a string: ' + name);
  }

  if (result.includes('-')) {
    words = result.split('-');
  } else if (result.includes(' ')) {
    words = result.split(' ');
  }
  if (words && words.length) {
    result = words
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join('');
  }

  result = result.charAt(0).toLowerCase() + result.slice(1);

  if (result.endsWith('Controller')) {
    result = result.slice(0, result.length - 'Controller'.length);
  }

  return result;
}

export function transformDashCase(name: string) {
  return name.replace(/[A-Z]/g, (ch) => '_' + ch.toLowerCase());
}

export function toDashCase(name: string) {
  const dashName = name
    .split(' ')
    .join('')
    .replace(/[A-Z]/g, (p) => '-' + p.toLowerCase());

  if (dashName.startsWith('-')) {
    return dashName.slice(1);
  }

  return dashName;
}

export function toUpperFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/** some reversed keyword in js but not in java */
const TS_KEYWORDS = ['delete', 'export', 'import', 'new', 'function'];
const REPLACE_WORDS = [
  'remove',
  'exporting',
  'importing',
  'create',
  'functionLoad',
];

export function getNameFromOperatorId(operationId: string) {
  const name = operationId.replace(/(.+)(Using.+)/, '$1');

  const index = TS_KEYWORDS.indexOf(name);

  if (index === -1) {
    return name;
  }

  return REPLACE_WORDS[index];
}

export function getMaxSamePath(paths: string[], samePath = ''): string {
  if (!paths.length) {
    return samePath;
  }

  if (paths.some((path) => !path.includes('/'))) {
    return samePath;
  }

  const segs = paths.map((path) => {
    const [firstSeg, ...restSegs] = path.split('/');
    return { firstSeg, restSegs };
  });

  if (
    segs.every(
      (seg, index) => index === 0 || seg.firstSeg === segs[index - 1].firstSeg,
    )
  ) {
    return getMaxSamePath(
      segs.map((seg) => seg.restSegs.join('/')),
      samePath + '/' + segs[0].firstSeg,
    );
  }

  return samePath;
}

export function getNameFromPath(
  url: string,
  requestType: HttpMethods,
  samePath = '',
) {
  const currUrl = url.slice(samePath.length).match(/([^.]+)/)?.[0] ?? '';

  return (
    requestType +
    currUrl
      .split('/')
      .map((str) => {
        if (str.includes('-')) {
          str = str.replace(/(-\w)+/g, (_match, p1) => {
            if (p1) {
              return p1.slice(1).toUpperCase();
            }
          });
        }

        if (str.match(/^{.+}$/gim)) {
          return 'By' + toUpperFirstLetter(str.slice(1, str.length - 1));
        }
        return toUpperFirstLetter(str);
      })
      .join('')
  );
}

export function transformModsName(mods: any[]) {
  // 检测所有接口是否存在接口名忽略大小写时重复，如果重复，以下划线命名
  mods.forEach((mod) => {
    const currName = mod.name;
    const sameMods = mods.filter(
      (mod) => mod.name.toLowerCase() === currName.toLowerCase(),
    );

    if (sameMods.length > 1) {
      mod.name = transformDashCase(mod.name);
    }
  });
}
