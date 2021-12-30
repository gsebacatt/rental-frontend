export function serialize(obj: any) {
    let str = [];
    for (let p in obj)
        if (obj.hasOwnProperty(p) && obj[p] !== "" && obj[p] !== undefined && obj[p] !== 0) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
}
