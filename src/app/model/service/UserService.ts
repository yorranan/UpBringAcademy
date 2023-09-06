import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import User from "../entities/User";
import ICRUDService from "./ICRUDService";
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
    providedIn: 'root'
})
export default class UserService implements ICRUDService<User>{
    private PATH: string = 'users'

    constructor(private firestore: AngularFirestore, private auth: AngularFireAuth) { }

    create(user: User) {
      user.registerDate = new Date();
      user.inactivateDate = null;
      return this.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then((credendial) =>{
        return this.firestore.collection(this.PATH).doc(credendial.user.uid).set(mapper(user));
      });
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