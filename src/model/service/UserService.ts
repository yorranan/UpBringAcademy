import User from "../entities/User";

export default class UserService{
    private _usuarios: User[];

    constructor(){
        const usuario: User = new User("Jose da Silva");
        this._usuarios.push(usuario);
    }

    obterPorId(id: number): User{
        return this._usuarios[id];
    }
}