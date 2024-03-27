import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService{
    signup(){
            return {msg: 'I am signed in!'};
        }
    login(){
        return {msg: 'I am signed up, yeah!'};
    }
}