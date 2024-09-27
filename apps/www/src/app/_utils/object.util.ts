import cloneDeep from 'lodash-es/cloneDeep';

export const clone = (obj: unknown) => {
    return cloneDeep(obj);
}
