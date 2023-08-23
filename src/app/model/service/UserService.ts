import User from "../entities/User";

export default class UserService{
    private _usuarios: User[] = [];

    constructor(){
        this._usuarios.push(new User("Gabriel Francisco Jose da Silva"));
    }

    obterTodos(): User[]{
        return this._usuarios;
    }

    obterPorId(id: number): User{
        return this._usuarios[id];
    }
}