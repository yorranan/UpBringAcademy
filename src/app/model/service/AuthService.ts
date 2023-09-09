import { Injectable, NgZone } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export default class AuthService{
    userData: any;

    constructor(private router: Router, private firebaseAuth: AngularFireAuth, private firastore: AngularFirestore, private ngZone: NgZone){
        this.firebaseAuth.authState.subscribe(user => {
            if(user){
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user')!);
            }else{
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user')!);
            }
        });
    }

    get isLoggedIn(): boolean{
        const user = JSON.parse(localStorage.getItem('user')!);
        if(user == null){
            return false;
        }else{
            return true;
        }
    }

    logIn(email: string, password: string){
        return this.firebaseAuth.signInWithEmailAndPassword(email, password).then((result: any) =>{
            this.ngZone.run(() => {
                this.router.navigate(['dashboard']);
            })
        }).catch((error: any) =>{
            window.alert(error);
        });
    }

    logOut(){
        return this.firebaseAuth.signOut().then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['login']);
        });
    }

    getUserAuth(){
        return this.firastore.collection('users').doc(this.userData.uid).snapshotChanges();
    }
}