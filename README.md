# Тестовое задание CRUD приложение на Angular(v14)

<h2>Оглавление</h2>

- [Тестовое задание CRUD приложение на Angular(v14)](#тестовое-задание-crud-приложение-на-angularv14)
  - [Задачи](#задачи)
  - [Демонстрация](#демонстрация)
    - [**Загрузка таблицы**](#загрузка-таблицы)
    - [**Форма создания новых записей**](#форма-создания-новых-записей)
    - [**Изменение записей в таблице**](#изменение-записей-в-таблице)
    - [**Обработка ошибок**](#обработка-ошибок)
  - [Реализация](#реализация)
    - [**Таблица**](#таблица)
    - [**Взаимодействие с сервером**](#взаимодействие-с-сервером)
    - [**Структура и стилизация**](#структура-и-стилизация)
  - [Допущенные ошибки](#допущенные-ошибки)
    - [**Ненужные перерисовки ячеек**](#ненужные-перерисовки-ячеек)
    - [**Лишняя отработка подписок**](#лишняя-отработка-подписок)
    - [**Глобальные стили**](#глобальные-стили)
  - [Плагины](#плагины)
  - [Установка](#установка)


## Задачи

- Создать компонент для отображения таблицы с данными (First name / Last name / Email / Age / Gender).
- Получить данные с бэкэнда и вывести полученные данные в табличку. 
- Создать кнопкн добавления новой записи.
- Создать кнопку удаления записи напротив каждой строки таблицы, по клику запись удаляется запросом на бэкэнде, по успеху также удаляется на фронтэнде.
- Создать кнопку редактирования напротив каждой строки таблицы.
- По клику на нее, в таблице все инпуты становятся редактируемыми и на месте кнопки редактировать появляется кнопка "сохранить".
- По нажатию на "сохранить", отправляется запрос на бэкэнд, по успеху — инпуты опять становятся ридонли и кнопка меняется на «редактировать».

</br>

## Демонстрация
<hr />

### **Загрузка таблицы** 
- Для того, чтобы отобразить таблицу данных с сервера, был создан компонент users. При его инициализации отправляется запрос на сервер. Во время запроса пользователю показывается лоадер. 

    После загрузки отображается таблица с данными. Все поля находятся в состоянии readonly по умолчанию. Внизу таблицы есть кнопка, по нажатию которой открывается форма добавления нового пользователя. Здесь можно вносить данные в форму сразу после ее создания. 
    
### **Форма создания новых записей** 
- Для того, чтобы внести данные о новом пользователе в таблицу, нужно корректно заполнить поля формы и нажать на кнопку "сохранить". После этого, данные с формы отправятся POST-запросом на сервер, а кнопки в разделе Controls на время выполнения запроса заменятся лоадером.

    Если пользователь передумал вносить данные в таблицу, он может нажать на кнопку отмены. В этом случае, форма скрывается и её поля сбрасываются.

### **Изменение записей в таблице**
- Для того, чтобы изменить существующие разделы таблицы, пользователю нужно нажать на кнопку "редактировать". После этого, поля записи станут изменяемыми, а кнопка "редактировать" сменится на иконку сохранения. Для того, чтобы завершить редактирование, нужно нажать на кнопку "сохранить". После этого, данные с формы отправятся PUT-запросом на сервер.

    Для того, чтобы удалить запись таблицы, необходимо нажать на кнопку "Удалить". После этого, на сервер отправится DELETE-запрос. В случае успешного выполнения запроса запись будет удалена.

### **Обработка ошибок** 
- При потере соединения и попытке отправить запрос на сервер всплывет окно с ошибкой.

</br>


##  Реализация
<hr />

### **Таблица**
- Таблица представляет собой массив template-driven форм (компонент "user"), созданных с помощью Angular Form Module. Осуществлена двусторонняя привязка данных к форме через директиву ngModel. Каждый инпут обернут в компонент "user-cell", который отвечает за отображение ошибок и подсветку инпутов.

- В каждую форму передаются данные пользователей по отдельности, через *ngFor и async-pipe в компоненте "users" осуществляется подписка на изменение данных на сервере. 
  
- Форма создания новых записей и записи в таблице отличаются по нескольким параметрам:
  1. В форме создания отсутствует кнопка редактирования.
  2. Нажатие на кнопку удаления не вызывает запрос на сервер.
  3. В форме создания по submit'у уходит POST-запрос, а в форме существующей записи - PUT.
   </br></br>

    Поэтому, были созданы отдельно компоненты "user-default" (существующая запись в таблице) и "user-new" (новая запись), каждый из которых является оберткой над компонентом "user". Через ng-content они передают свою реализацию компонента "controls".

    Также, каждый родительский компонент передает в user callback-замыкание, которое реализуется по submit'у формы.

</br>

### **Взаимодействие с сервером**
- Логика для запросов на сервер хранится в сервисе "api". Каждый запрос проходит через функцию request, которая является оберткой над fetch. 
  
- В ней происходит обработка ошибок и их отправка через Subject по подписке в popup. Также, при запросе происходит отправка его статуса всем записям таблицы в "loader".

- Перед каждым запросом выполняется функция timeoutMock для эмуляции запросов на реальный сервер.

</br>

### **Структура и стилизация**
- Для того, чтобы хранить данные в одном месте, было принято решение не разделять шаблон и логику, а хранить все в одном месте.

- Для того, чтобы сохранить минимальное количество директорий, а также хранить все стили в одном месте, они хранятся глобально. Используется БЭМ-методология.    


</br>

## Допущенные ошибки
<hr />

### **Ненужные перерисовки ячеек**

- К сожалению, я не до конца понял алгоритм работы Angular-форм:
  
  1. Для того, чтобы вынести логику отображения ошибок и подсветки, был создан компонент user-cell. В него передается свойство model (модель formControl с каждого инпута). Но, так как onChanges-хук не позволяет отслеживать изменения объектов я попробовал использовать Angular reactive-формы. 

        Несмотря на возможность подписаться из любого места на изменения значения, а также статуса инпута, я не могу отслеживать изменения свойства touched. 
        
  2. После этого, я решил применить хук doCheck, пожертвовав производительностью. Однако, вместо перерисовки одной записи я получил ре-рендер всей таблицы. Видимо, поля всех форм с одинаковым значением атрибута formControlName связываются каким-то образом между собой.

</br>

### **Лишняя отработка подписок**
- Мне не удалось реализовать эффективную работу подписок в лоадерах.
По нажатию на "Сохранить" или "Удалить" отправляется запрос на сервер, в это время необходимо показать пользователю лоадер.
    
  Проблема заключается в том, что все кнопки подписаны на один Subject, который "выпускает" данные всем загрузчикам, в то время как нужно передать данные только тому лоадеру, запись которого была изменена. 
  
  Частично решил проблему передачей id и последующей проверкой на сходство переданного id пользователя и id кнопки, но решение неэффективно. 

- UPD (commit fedc0ef093c34173): свойство submitCb компонента user теперь является @Input'ом. Родительский компонент передает туда замыкание со своей реализацией onSubmit в виде промиса. В класс добавлено свойство isLoading, оно изменяется в начале submit'а и после прихода ответа с сервера. Родительские компоненты "перехватывают" его через template-переменные. 

    Теперь у каждого компонента есть свое свойство isLoading, однако, это реализовано через передачу функции в @Input-свойство.
</br>

### **Глобальные стили**
- Использование глобальных стилей было ошибкой, так как в Angular шаблон оборачивается в отдельный тэг, который можно стилизовать только при использовании псевдокласса :root, которым, в свою очередь, можно воспользоваться только из отдельного файла, подключенного напрямую к компоненту (либо в инлайновых стилях).

</br>
  
## Плагины 
<hr/>

| Plugin  | Link                                      |
| ------- | ----------------------------------------- |
| Angular | [plugins/angular/repositories][PlAngular] |
| Nanoid  | [plugins/nanoid/README.md][PlNanoid]      |

</br>

## Установка
<hr/>
Если вы хотите запустить приложение, клонируйте репозиторий, затем установите зависимости

```sh
npm run
```
И запустите angular-сборку проекту
```sh
npm run start
```
Затем, запустите json-server, на который будут отправляться запросы (данные лежат в db.json)
```sh
npm run server
```

</br>

---

PS: Спасибо, что дочитали до конца... </br> Внизу есть ёжик :3
    <details>
    <summary>🦔</summary>
    **Аккуратнее, он же колючий!** 😏
    </details>


</br>

[PlAngular]: <https://github.com/orgs/angular/repositories>
[PlNanoid]: <https://github.com/ai/nanoid>