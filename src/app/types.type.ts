import { FormControl, FormGroup } from '@angular/forms';

// UserType
export type UserT = {
    firstname: string;
    lastname: string;
    email: string;
    age: number;
    gender: string;
    id: string;
};

export type UserEmptyT = {
    firstname: string;
    lastname: string;
    email: string;
    age: string | number;
    gender: string;
    id: string;
};

export type UserControlsT = {
    firstname: FormControl<string>;
    lastname: FormControl<string>;
};

export type UserFormT = FormGroup<{
    firstname: FormControl<string>;
    lastname: FormControl<string>;
}>;

// RequestType
export type RequestObj = {
    url?: string;
    settings?: RequestInit;
    id: string;
};

// InfoType
export type InfoT = {
    title: string;
    desc: string;
} | null;

// FetchStatusType
export type FetchStatusT = {
    status: 'idle' | 'loading' | 'loaded' | 'failed';
    id?: string;
};
