
export interface IHandlerAction {
    handler(context, next: Function);
    _next(context);
    listen(context);
}