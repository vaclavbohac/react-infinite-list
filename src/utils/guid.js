import uuid from './uuid';

export const GUID_KEY = '__infID';

export function guidFor(obj) {
    if (!obj) return '(null)';

    if (obj[GUID_KEY]) return obj[GUID_KEY];

    let stamp = `infID-${uuid.generate()}`;

    Object.defineProperty(obj, GUID_KEY, {
        writable: false,
        configurable: false,
        enumerable: false,
        value: stamp
    });

    return stamp;
}
