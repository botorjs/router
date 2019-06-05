import { IComponentData } from "./ComponentData";


export interface IManagerComponent {
    register(component: IComponentData);
    remove(component: IComponentData);
    removeAll();
}