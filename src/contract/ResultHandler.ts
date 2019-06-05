
export interface IResultHandler {
    getCode(): number;
    getMeta(): any;
    getContentType(): String;
    getBody(): String;
}