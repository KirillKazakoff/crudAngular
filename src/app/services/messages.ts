type MessagesT = { [key: string]: any };

export const messages: MessagesT = {
    firstname: {
        required: 'Введите имя',
    },
    lastname: {
        required: 'Введите фамилию',
    },
    email: {
        required: 'Введите почту',
        pattern: 'Вы ввели почту неправильно',
    },
    age: {
        required: 'Введите возраст',
        wrongAge: 'Введите возраст больше 0',
    },
    gender: {
        required: 'Введите пол',
    },
};
