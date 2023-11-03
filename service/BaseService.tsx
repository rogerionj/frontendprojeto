import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL_API
})

export class BaseService{

    url: string;

    constructor(url: string){
        this.url = url;
    }

    listarTodos(){
        return axiosInstance.get(this.url);
    }

    buscarPordId(id : number) {
        return axiosInstance.get(this.url + "/" + id);
    }

    inserir(objeto: any){
        return axiosInstance.post(this.url, objeto);
    }

    alterar(objeto : any){
        return axiosInstance.put(this.url, objeto);
    }

    excluir(id : number){
        return axiosInstance.delete(this.url + "/" + id);
    }
}