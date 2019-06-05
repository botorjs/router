

export interface IMiddleware {
    getName();
    handler(context, next: Function);
    _next(context);
    listen(context);
}