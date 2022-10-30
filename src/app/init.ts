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
        age: 50,
        gender: 'male',
        id: nanoid(),
    },
    {
        firstname: 'Guzka',
        lastname: 'Hitrayu',
        email: '@mail.com',
        age: 50,
        gender: 'female',
        id: nanoid(),
    },
];
