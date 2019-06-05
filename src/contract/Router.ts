import { IHandlerRouter } from "./HandlerRouter";



export interface IRouter {
    get(name: any);
    addHandler(handler: IHandlerRouter);
    handle(context); 
    list();
}