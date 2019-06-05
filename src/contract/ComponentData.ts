import { IView } from "./View";
import { IHandlerRouter } from "./HandlerRouter";
import { IManagerComponent } from "./ManagerComponent";


export interface IComponentData {
    getView(): IView;
    addController(controller);
    addHandler(hander: IHandlerRouter);
    removeHandler(hander: IHandlerRouter);
    register(manger: IManagerComponent);
    remove(manger: IManagerComponent);
    list(): Array<IHandlerRouter>;
}