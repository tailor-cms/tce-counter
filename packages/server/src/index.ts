import { initState, type } from 'tce-manifest';
import type { Element } from 'tce-manifest';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function beforeSave(element: any, services: any) {
  console.log('aaaaa');
  console.log('aaaaa');
  console.log('aaaaa');
  console.log('aaaaa');
  if (element.data.count >= 10) {
    element.data = {
      ...element.data,
      count: 0,
    };
  }

  return element;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function afterSave(element: Element, services: any) {
  console.log('After save hook', element);
  return element;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function afterLoaded(element: Element, services: any) {
  console.log('After loaded hook', element);
  return element;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function afterRetrieve(element: Element, services: any) {
  console.log('After retrieve hook', element);
  return element;
}

export const hookMap = new Map(
  Object.entries({
    beforeSave,
    afterSave,
    afterLoaded,
    afterRetrieve,
  }),
);

export default {
  type,
  initState,
  hookMap,
  beforeSave,
  afterSave,
  afterLoaded,
  afterRetrieve,
};

export { type, initState };
