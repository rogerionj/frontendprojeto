import axios from "axios";
import { BaseService } from "./BaseService";


export class PerfilService extends BaseService {

    constructor(){
        super("/perfil");
    }

}