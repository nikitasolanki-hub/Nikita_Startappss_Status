export type UserRole = "user" | "admin";

export type User = {
    id:number;
    name:string;
    email:string;
    role:UserRole;
};

export type CreateUserBody = {
    name:string;
    email:string;
    role?:UserRole;
}
export type ApiResponse<T> = {
    success: boolean;
    meassgae:string;
    deta? : T;
};