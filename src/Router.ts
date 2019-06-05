import { IHandlerRouter } from "./contract/HandlerRouter";
import { IRouter } from "./contract/Router";


export class Router implements IRouter {
    get(name: any) {
        throw new Error("Method not implemented.");
    }
    addHandler(handler: IHandlerRouter) {
        throw new Error("Method not implemented.");
    }
    handle(context: any) {
        throw new Error("Method not implemented.");
    }
    list() {
        throw new Error("Method not implemented.");
    }


}