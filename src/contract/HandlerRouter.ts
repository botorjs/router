

export interface IHandlerRouter {
    check(path: String): boolean;
    handle(context);
}