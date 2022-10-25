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

// {
//     "user": [
//       {
//         "firstname": "Homer",
//         "lastname": "Sympson",
//         "email": "homer@mail.com",
//         "age": 30,
//         "gender": "male",
//         "id": "ydPSo9nPWbWnqO_tu6FGv"
//       },
//       {
//         "firstname": "Alexander",
//         "lastname": "Rosenbaum",
//         "email": "alexros@mail.com",
//         "age": 50,
//         "gender": "male",
//         "id": "FOw1g0F1lEBHNNa1UN67l"
//       },
//       {
//         "firstname": "Guzka",
//         "lastname": "Hitrayu",
//         "email": "@mail.com",
//         "age": 50,
//         "gender": "female",
//         "id": "w2REjvuGTtkxl8CSIh5Lk"
//       }
//     ]
//   }
