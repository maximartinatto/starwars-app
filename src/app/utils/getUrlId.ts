export function getUrlId(url: string) {
    const splitedUrl = url && url.split('/');
    const id = splitedUrl[5];
    return id;
}