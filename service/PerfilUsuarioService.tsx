import axios from "axios";
import { BaseService } from "./BaseService";


export class PerfilUsuarioService extends BaseService {

    constructor(){
        super("/perfil-usuario");
    }

}