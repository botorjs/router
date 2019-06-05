
import { IManagerMiddleware } from './contract/IManagerMiddleware';
import { IMiddleware } from './contract/Middleware';

export class ManagerMiddleware implements IManagerMiddleware{
    get(name: any): IMiddleware {
        throw new Error("Method not implemented.");
    }
    
    getByName(name: any): IMiddleware {
        throw new Error("Method not implemented.");
    }
    
    getByFunc(func: Function): IMiddleware {
        throw new Error("Method not implemented.");
    }


}