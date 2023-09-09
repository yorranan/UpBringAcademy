import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export default class AuthService{
    userData: any;
    isLoggedIn: boolean;

    constructor(private router: Router, private firebaseAuth: AngularFireAuth, private firastore: AngularFirestore){
        this.updateUser();
        this.isLoggedIn = !!sessionStorage.getItem('user');
    }

    updateUser(){
        this.firebaseAuth.authState.subscribe(user => {
            if(user){
                this.userData = user;
                sessionStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(sessionStorage.getItem('user')!);
                this.isLoggedIn = true;
            }else{
                sessionStorage.setItem('user', null);
                JSON.parse(sessionStorage.getItem('user')!);
            }
        });
    }

    logIn(email: string, password: string){
        return this.firebaseAuth.signInWithEmailAndPassword(email, password).then(result =>{
            this.updateUser();
            this.router.navigate(['dashboard']);
        }).catch((error: any) =>{
            window.alert(error);
        });
    }

    logOut(){
        return this.firebaseAuth.signOut().then(() => {
            sessionStorage.removeItem('user');
            this.router.navigate(['login']);
        });
    }

    getUserAuth(){
        return this.firastore.collection('users').doc(this.userData.uid).snapshotChanges();
    }
}