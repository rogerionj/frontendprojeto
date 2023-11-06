import axios from "axios";
import { BaseService } from "./BaseService";


export class RecursoService extends BaseService {

    constructor(){
        super("/recurso");
    }

}