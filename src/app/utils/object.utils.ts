const arrayConstructor = [].constructor;
const objectConstructor = ({}).constructor;

export function isJson(object: any) {
    return [arrayConstructor, objectConstructor].includes(object?.constructor);
}