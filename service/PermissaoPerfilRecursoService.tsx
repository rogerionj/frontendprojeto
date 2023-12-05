import axios from "axios";
import { BaseService } from "./BaseService";


export class PermissaoPerfilRecursoService extends BaseService {

    constructor(){
        super("/permissao-perfil-recurso");
    }

}