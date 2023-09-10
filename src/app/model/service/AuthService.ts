import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export default class AuthService{
    userData: any;

    constructor(private router: Router, private firebaseAuth: AngularFireAuth, private firastore: AngularFirestore){
        this.firebaseAuth.authState.subscribe(user => {
            if(user){
                localStorage.setItem('user', JSON.stringify(user));
                JSON.parse(localStorage.getItem('user')!);
            }
        });
        this.userData = JSON.parse(localStorage.getItem('user'));
    }

    get isLoggedIn(): boolean{
        if(this.userData){
            return true;
        }
        return false;
    }

    logIn(email: string, password: string){
        return this.firebaseAuth.signInWithEmailAndPassword(email, password).then(result =>{
            this.userData = result.user;
            localStorage.setItem('user', JSON.stringify(this.userData));
            this.router.navigate(['dashboard']);
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