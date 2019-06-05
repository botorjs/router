import { IComponentData } from "./contract/ComponentData";
import { IView } from "./contract/View";
import { IHandlerRouter } from "./contract/HandlerRouter";
import { IManagerComponent } from "./contract/ManagerComponent";

export class ComponentData  implements IComponentData {

    getView(): IView {
        throw new Error("Method not implemented.");
    }
    
    addController(controller: any) {
        throw new Error("Method not implemented.");
    }

    addHandler(hander: IHandlerRouter) {
        throw new Error("Method not implemented.");
    }

    removeHandler(hander: IHandlerRouter) {
        throw new Error("Method not implemented.");
    }

    register(manager: IManagerComponent) {
        throw new Error("Method not implemented.");
    }

    remove(manager: IManagerComponent) {
        throw new Error("Method not implemented.");
    }
    
    list(): IHandlerRouter[] {
        throw new Error("Method not implemented.");
    }


}