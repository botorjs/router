import { IHandlerAction } from "./contract/HandlerAction";

export class HandlerAction implements IHandlerAction {
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