import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import User from "../entities/User";
import ICRUDService from "./ICRUDService";
import UserMapper from '../mappers/UserMapper';

@Injectable({
    providedIn: 'root'
  })
export default class UserService implements ICRUDService<User>{
    private PATH: string = 'user'
    private userMapper: UserMapper = new UserMapper();
    user;

    constructor(private firestore: AngularFirestore) { }

    create(user: User) {
        user.id = null;
        user.registerDate = new Date();
        user.inactivateDate = null;
        this.firestore.collection(this.PATH).add(this.userMapper.mapEntity(user));
    }

    read(id: string){
        return this.firestore.collection(this.PATH).doc(id).snapshotChanges();
    }

    update(id: string, user: User) {
      return this.firestore.collection(this.PATH).doc(id).update(this.userMapper.mapEntity(user));
    }
    
    delete(id: string, user: User) {
      user.inactivateDate = new Date()
      return this.firestore.collection(this.PATH).doc(id).update(this.userMapper.mapEntity(user));
    }
}