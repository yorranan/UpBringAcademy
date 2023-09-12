import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import UserChild from '../entities/UserChild';
import ICRUDService from './ICRUDService'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import UserParentService from './UserPerentService';
import UserParent from '../entities/UserParent';

@Injectable({
    providedIn: 'root'
})
export default class UserChildService implements ICRUDService<UserChild>{
    private PATH: string = 'users'

    constructor(private firestore: AngularFirestore, private auth: AngularFireAuth, private parentService: UserParentService) { }

    create(child: UserChild, parent: UserParent){
      child.admin = false;
      child.registerDate = new Date();
      child.inactivateDate = null;
      child.points = 0;
      return this.register(child.email, child.password)
      .then((credential) =>{
        if(credential){
          parent.childrenId.push(credential.user.uid);
          this.parentService.update(parent.id, parent);
        }
        return this.firestore.collection(this.PATH).doc(credential.user.uid).set(mapper(child));
      })
    }

    register(email: string, password: string){
      return this.auth.createUserWithEmailAndPassword(email, password);
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
    parentId: user.parentId
  }
}