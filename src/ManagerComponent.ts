import { IManagerComponent } from "./contract/ManagerComponent";
import { IComponentData } from "./contract/ComponentData";

export class ManagerComponent implements IManagerComponent {
    register(component: IComponentData) {
        throw new Error("Method not implemented.");
    } 
    remove(component: IComponentData) {
        throw new Error("Method not implemented.");
    }
    removeAll() {
        throw new Error("Method not implemented.");
    }


}