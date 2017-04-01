import { Injectable } from "@angular/core";
import { tokenNotExpired } from 'angular2-jwt';

import { options } from '../auth.options';

declare var Auth0Lock: any;

@Injectable()
export class AuthService {
    //new Auth0Lock('clientId','domain',{auth0customOptions});
    lock = new Auth0Lock('1t0l33OA3gLjZ250l75vNCFW6U26R0LL', 'kkspizza.eu.auth0.com', options);

    constructor() {
        this.lock.on('authenticated', (authResult: any) => {
            this.lock.getProfile(authResult.idToken, function (error: any, profile: any) {
                if (error) {
                    throw new Error(error);
                }
                //Set Profile
                localStorage.setItem("profile", JSON.stringify(profile));
                //Set Token
                localStorage.setItem("id_token", authResult.idToken);
            })
        });
    }

    login() {
        this.lock.show();
    }
    authenticated() {
        return tokenNotExpired();
    }
    logout() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
    }
}