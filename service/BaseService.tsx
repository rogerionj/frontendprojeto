import axios from "axios";
import { Router, useRouter } from "next/router";

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL_API
})


export class BaseService{

    url: string;

    constructor(url: string){
        this.url = url;

        axiosInstance.interceptors.request.use((config) => {
            const token = localStorage.getItem('TOKEN_APLICACAO_FRONTEND');          
            const authRequestToken = token ? `Bearer ${token}` : '';
            config.headers['Authorization'] = authRequestToken;
            return config;
        },
            (error) => Promise.reject(error)
        );

        axiosInstance.interceptors.response.use((response) => {            
            return response;
        }, async (erro) => {
            const originalConfig = erro.config;          
            console.log(erro.response.status);
            if (erro.response.status == 401) {
                localStorage.removeItem('TOKEN_APLICACAO_FRONTEND');
                window.location.reload();         
            }
            return Promise.reject(erro);
        });

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