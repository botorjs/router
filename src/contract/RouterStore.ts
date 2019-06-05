import { IHandlerRouter } from "./HandlerRouter";


export interface IRouterStore {
    add(handler: IHandlerRouter);
    remove(handler: IHandlerRouter);
    list();
}