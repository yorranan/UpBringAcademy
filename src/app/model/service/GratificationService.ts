import { AngularFirestore } from "@angular/fire/compat/firestore";
import Gratification from "../entities/Gratification";
import ICRUDService from "./ICRUDService";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export default class GratificationService implements ICRUDService<Gratification>{
  private PATH: string = 'gratifications'

  constructor(private firestore: AngularFirestore){}

  create(gratification: Gratification){
    gratification.redeemDateTime = [];
    return this.firestore.collection(this.PATH).add(mapper(gratification));
  }

  read(id: string){
    return this.firestore.collection(this.PATH).doc(id).snapshotChanges();
  }

  update(id: string, gratification: Gratification){
    return this.firestore.collection(this.PATH).doc(id).update(mapper(gratification))
  }

  delete(id: string){
    return this.firestore.collection(this.PATH).doc(id).delete()
  }

  getByParent(parentId: string){
    return this.firestore.collection(this.PATH, ref => ref.where('parentId', '==', parentId)).snapshotChanges()
  }
}

function mapper(gratification: Gratification){
  return {
    name: gratification.name,
    description: gratification.description,
    points: gratification.points,
    quantity: gratification.quantity,
    parentId: gratification.parentId,
    redeemDateTime: gratification.redeemDateTime.map(redeem => (
      {childId: redeem.childId, dateTime: redeem.dateTime}
    ))
  };
}
