export interface User {
    id?: string;
    role?: string;
    firstName?: string;
    lastName?: string;
    gender?: string;
    simulation?: boolean;
    email?: string;
    pass?: string;
    phone?: string;
    birth?: Date;
    nationality?: string;
    TCID?: string;
    created_at?: Date;
    active?: boolean;
}