import axios from "axios";
import { BaseService } from "./BaseService";


export class UsuarioService extends BaseService {

    constructor(){
        super("/usuario");
    }

}