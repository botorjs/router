import { IResultHandler } from "./ResultHandler";


export interface IController {
    getPath(): String;
    view(name, data): IResultHandler;
}