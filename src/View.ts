import { IView } from "./contract/View";


export class View implements IView {
    render(path: String, context: any, view: String, data: any): string {
        throw new Error("Method not implemented.");
    }
}