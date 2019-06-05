import { IRouterStore } from "./contract/RouterStore";
import { IHandlerRouter } from "./contract/HandlerRouter";



export class RouterStore implements IRouterStore {
    add(handler: IHandlerRouter) {
        throw new Error("Method not implemented.");
    }
    remove(handler: IHandlerRouter) {
        throw new Error("Method not implemented.");
    }
    list() {
        throw new Error("Method not implemented.");
    }


}