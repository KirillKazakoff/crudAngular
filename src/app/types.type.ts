// UserType
export type UserT = {
    firstname: string;
    lastname: string;
    email: string;
    age: number;
    gender: string;
};

export type UserIdT = {
    _id: string;
} & UserT;

// RequestType
export type RequestObj = {
    url?: string;
    settings?: RequestInit;
};
