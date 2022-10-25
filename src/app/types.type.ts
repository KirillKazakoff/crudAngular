// UserType
export type UserT = {
    firstname: string;
    lastname: string;
    email: string;
    age: number;
    gender: string;
    id: string;
};

// RequestType
export type RequestObj = {
    url?: string;
    settings?: RequestInit;
};
