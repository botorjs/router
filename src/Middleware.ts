import { IMiddleware } from './contract/Middleware';

export class Middleware implements IMiddleware {
    
    getName() {
        throw new Error("Method not implemented.");
    }
    handler(context: any, next: Function) {
        throw new Error("Method not implemented.");
    }
    _next(context: any) {
        throw new Error("Method not implemented.");
    }
    listen(context: any) {
        throw new Error("Method not implemented.");
    }


}