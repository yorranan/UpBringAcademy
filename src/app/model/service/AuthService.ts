import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Injectable({
    providedIn: 'root'
})
export default class AuthService{
    user;

    constructor(private firebase: AngularFireAuth){
        this.firebase.authState.subscribe(user => {
            if(user){
                this.user = user;
            }else{
                this.user = null;
            }
        });
    }

    logIn(email: string, password: string){
        this.firebase.signInWithEmailAndPassword(email, password);
    }

    logOut(){
        this.firebase.signOut();
    }

    isLoggedIn(): boolean{
        if(this.user === null)
            return false;
        return true;
    }
}