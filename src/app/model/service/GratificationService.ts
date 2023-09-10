import { AngularFirestore } from "@angular/fire/compat/firestore";
import Gratification from "../entities/Gratification";
import ICRUDService from "./ICRUDService";

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
}

function mapper(gratification: Gratification){
    return {
        name: gratification.name,
        description: gratification.desciption,
        points: gratification.points,
        quantity: gratification.quantity,
        parentId: gratification.parent.id,
        reedemDateTime: gratification.redeemDateTime.map(reedem => (
            {childId: reedem.child.id, dateTime: reedem.dateTime}
        ))
    };
}