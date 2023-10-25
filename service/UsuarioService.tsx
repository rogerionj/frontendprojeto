import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: "http://localhost:8080"
})

export class UsuarioService{

    listarTodos(){
        return axiosInstance.get("/usuario");
    }

    inserir(usuario : Projeto.Usuario){
        return axiosInstance.post("/usuario", usuario);
    }

    alterar(usuario : Projeto.Usuario){
        return axiosInstance.put("/usuario", usuario);
    }

    excluir(id : number){
        return axiosInstance.delete("/usuario/" + id);
    }
}