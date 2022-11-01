import { nanoid } from 'nanoid';

export const initialDb = [
    {
        firstname: 'Homer',
        lastname: 'Sympson',
        email: 'homer@mail.com',
        age: 30,
        gender: 'male',
        id: nanoid(),
    },
    {
        firstname: 'Alexander',
        lastname: 'Rosenbaum',
        email: 'alexros@mail.com',
        age: 53,
        gender: 'male',
        id: nanoid(),
    },
    {
        firstname: 'Elena',
        lastname: 'Vaenga',
        email: 'Vaenga@mail.com',
        age: 50,
        gender: 'female',
        id: nanoid(),
    },
];
