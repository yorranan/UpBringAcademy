import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import UserRequestDTO from "../dto/User/UserRequestDTO";
import UserResponseDTO from "../dto/User/UserResponseDTO";
import User from "../entities/User";
import ICRUDService from "./ICRUDService";

@Injectable({
    providedIn: 'root'
  })
export default class UserService implements ICRUDService<UserRequestDTO, UserResponseDTO>{
    private _usuarios: User[] = [];
    private PATH: string = 'user'

    constructor(private firestore: AngularFirestore){
        this._usuarios.push(new User());
    }
    create(dto: UserRequestDTO) {
        const user: User = new User()
        user.id = null;
        user.name = dto.name;
        user.email = dto.email;
        user.password = dto.password;
        user.age = dto.age;
        user.registerDate = new Date();
        user.inactivateDate = null;

        return this.firestore.collection(this.PATH).add({name: user.name, email: user.email, password: user.password, age: user.age, registerDate: user.registerDate, inactivateDate: user.inactivateDate});
    }

    read(id: number): UserResponseDTO {
        throw new Error("Method not implemented.");
    }

    update(id: number, dto: UserRequestDTO) {
        throw new Error("Method not implemented.");
    }
    
    delete(id: number) {
        throw new Error("Method not implemented.");
    }

    obterTodos(): User[]{
        return this._usuarios;
    }

    obterPorId(id: number): User{
        return this._usuarios[id-1];
    }
}