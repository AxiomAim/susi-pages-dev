export class AuthModel {
    public uid: string;
    public displayName: string;
    public photoURL: string;
}

export interface AuthDto {
    uid: string;
    displayName: string;
    photoURL: string;
}