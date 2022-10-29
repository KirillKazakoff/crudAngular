type MessagesT = { [key: string]: any };

export const messages: MessagesT = {
    firstname: {
        valueMissing: 'Введите имя',
    },
    lastname: {
        valueMissing: 'Введите фамилию',
    },
    email: {
        valueMissing: 'Введите почту',
        typeMismatch: 'Вы ввели почту неправильно',
    },
    age: {
        valueMissing: 'Введите возраст',
        wrongAge: 'Введите возраст больше 0',
    },
    gender: {
        valueMissing: 'Введите пол',
    },
};
