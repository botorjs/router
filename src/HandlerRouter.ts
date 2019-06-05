import { IHandlerRouter } from "./contract/HandlerRouter";


export class HandlerRouter implements IHandlerRouter {
    check(path: String): boolean {
        throw new Error("Method not implemented.");
    }
    
    handle(context: any) {
        throw new Error("Method not implemented.");
    }


}