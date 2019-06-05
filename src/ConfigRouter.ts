import { IMiddleware } from "./contract/Middleware";


export class ConfigRouter {
    middleware: Object = {};
    middleware_global: Array<IMiddleware>;
}