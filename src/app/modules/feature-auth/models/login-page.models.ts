export interface UserLogin {
    username: string;
    password: string;
}
export interface UserLoginResponse {
    id: string;
    name: string;
    jwtToken: string;
    displayName: string;
}

export interface UserLoginSecrets {
    jwtToken: string;
    isLoggedIn: boolean;
}