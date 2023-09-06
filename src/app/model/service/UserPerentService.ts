import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import UserParent from '../entities/UserParent';
import ICRUDService from './ICRUDService'

@Injectable({
    providedIn: 'root'
})
export default class UserParentService implements ICRUDService<UserParent>{
    private PATH: string = 'user'

    constructor(private firestore: AngularFirestore) { }

    create(user: UserParent) {
        user.registerDate = new Date();
        user.inactivateDate = null;
        user.children = [];
        this.firestore.collection(this.PATH).add(mapper(user));
    }

    read(id: string){
        return this.firestore.collection(this.PATH).doc(id).snapshotChanges();
    }

    update(id: string, user: UserParent) {
      return this.firestore.collection(this.PATH).doc(id).update(mapper(user));
    }
    
    delete(id: string, user: UserParent) {
      user.inactivateDate = new Date()
      return this.firestore.collection(this.PATH).doc(id).update(mapper(user));
    }
}

function mapper(user: UserParent){
    return {
      name: user.name,
      email: user.email,
      password: user.password,
      birthDate: user.birthDate,
      registerDate: user.registerDate,
      inactivateDate: user.inactivateDate,
      childrenId: user.children.map(child => child.id)
    }
  }