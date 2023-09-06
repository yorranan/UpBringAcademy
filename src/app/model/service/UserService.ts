import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import User from "../entities/User";
import ICRUDService from "./ICRUDService";

@Injectable({
    providedIn: 'root'
})
export default class UserService implements ICRUDService<User>{
    private PATH: string = 'user'

    constructor(private firestore: AngularFirestore) { }

    create(user: User) {
        user.registerDate = new Date();
        user.inactivateDate = null;
        this.firestore.collection(this.PATH).add(mapper(user));
    }

    read(id: string){
        return this.firestore.collection(this.PATH).doc(id).snapshotChanges();
    }

    update(id: string, user: User) {
      return this.firestore.collection(this.PATH).doc(id).update(mapper(user));
    }
    
    delete(id: string, user: User) {
      user.inactivateDate = new Date()
      return this.firestore.collection(this.PATH).doc(id).update(mapper(user));
    }
}

function mapper(user: User){
  return {
    name: user.name,
    email: user.email,
    password: user.password,
    birthDate: user.birthDate,
    registerDate: user.registerDate,
    inactivateDate: user.inactivateDate
  }
}