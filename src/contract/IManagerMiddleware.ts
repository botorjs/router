import { IMiddleware } from "./Middleware";


export interface IManagerMiddleware {
    get(name: any): IMiddleware;
    getByName(name: any): IMiddleware;
    getByFunc(func: Function): IMiddleware;
}