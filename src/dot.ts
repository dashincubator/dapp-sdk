function parse(keys: any) {
    if (typeof keys === 'number') {
        keys = `${keys}`;
    }
    if ((typeof keys === 'string' || keys instanceof String) && keys.includes('.')) {
        keys = keys.split('.').map((k) => k.trim()).filter(k => k);
    }
    return Array.isArray(keys) ? keys : [keys];
}

const get = (data: Record<PropertyKey, any>, keys: any, splice = false): any => {
    let value = undefined;
    keys = parse(keys);
    if (!keys) {
        return value;
    }
    let key = keys.shift();
    if (keys.length === 0) {
        value = data[key] || value;
        if (splice) {
            data[key] = undefined;
        }
        return value;
    }
    else if (!data.hasOwnProperty(key)) {
        return value;
    }
    return get(data[key], keys, splice);
};

const has = (data: Record<PropertyKey, any>, keys: any): boolean => {
    return (get(data, keys) || false) !== false;
};

const set = (data: Record<PropertyKey, any>, keys: any, value: any) => {
    keys = parse(keys);
    let key = keys.shift();
    if (keys.length === 0) {
        if (key.endsWith('[]')) {
            key = key.substring(0, key.length - 2);
            if (!data.hasOwnProperty(key) || !data[key]) {
                data[key] = [];
            }
            data[key].push(value);
        }
        else {
            data[key] = value;
        }
        return;
    }
    else if (!data.hasOwnProperty(key)) {
        data[key] = {};
    }
    set(data[key], keys, value);
};
export default { get, has, set };
