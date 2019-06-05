import { IController } from "./contract/Controller";
import { IResultHandler } from "./contract/ResultHandler";



export class Controller  implements IController {


    getPath(): String {
        throw new Error("Method not implemented.");
    }
    
    
    view(name: any, data: any): IResultHandler {
        throw new Error("Method not implemented.");
    }


}