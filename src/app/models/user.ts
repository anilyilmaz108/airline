export interface UserModel {
    id?: string;
    role?: string;
    firstName?: string;
    lastName?: string;
    gender?: string;
    simulation?: boolean; //FS içine kaydetme
    email?: string;
    pass?: string;
    phone?: string;
    birth?: Date;
    nationality?: string;
    TCID?: string;
    created_at?: Date;
    active?: boolean;
}