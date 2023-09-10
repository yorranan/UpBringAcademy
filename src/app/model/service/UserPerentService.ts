import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import UserParent from '../entities/UserParent';
import ICRUDService from './ICRUDService'
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
    providedIn: 'root'
})
export default class UserParentService implements ICRUDService<UserParent>{
    private PATH: string = 'users'

    constructor(private firestore: AngularFirestore, private auth: AngularFireAuth) { }

    create(user: UserParent) {
      user.admin = true;
      user.registerDate = new Date();
      user.inactivateDate = null;
      user.childrenId = [];
      return this.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then((credendial) =>{
        return this.firestore.collection(this.PATH).doc(credendial.user.uid).set(mapper(user));
      });
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
      admin: user.admin,
      email: user.email,
      password: user.password,
      birthDate: user.birthDate,
      registerDate: user.registerDate,
      inactivateDate: user.inactivateDate,
      childrenId: user.childrenId
    }
  }