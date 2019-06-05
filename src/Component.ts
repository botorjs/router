import { IController } from "./contract/Controller";


export class Component {
    public path: String;
    public path_view: String = "view";
    public name: String;
    public controllers: Array<IController>;
    public area: String  = "" ;
}