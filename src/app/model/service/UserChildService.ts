import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import UserChild from '../entities/UserChild';
import ICRUDService from './ICRUDService'

@Injectable({
    providedIn: 'root'
})
export default class UserChildService implements ICRUDService<UserChild>{
    private PATH: string = 'users'

    constructor(private firestore: AngularFirestore) { }

    create(user: UserChild) {
        user.registerDate = new Date();
        user.inactivateDate = null;
        this.firestore.collection(this.PATH).add(mapper(user));
    }

    read(id: string){
        return this.firestore.collection(this.PATH).doc(id).snapshotChanges();
    }

    update(id: string, user: UserChild) {
      return this.firestore.collection(this.PATH).doc(id).update(mapper(user));
    }
    
    delete(id: string, user: UserChild) {
      user.inactivateDate = new Date()
      return this.firestore.collection(this.PATH).doc(id).update(mapper(user));
    }
}

function mapper(user: UserChild){
  return {
    name: user.name,
    email: user.email,
    password: user.password,
    birthDate: user.birthDate,
    registerDate: user.registerDate,
    inactivateDate: user.inactivateDate,
    points: user.points,
    parentId: user.parent.id
  }
}