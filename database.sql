create TABLE admins(
    id SERIAL PRIMARY KEY,
    login VARCHAR(30),
    password VARCHAR(30)
);
create TABLE mainDatabase(
    id SERIAL PRIMARY KEY,
    section VARCHAR(100),
    room VARCHAR(100),
    name VARCHAR(50),
    surname VARCHAR(50),
    patronymic VARCHAR(50),
    groupStudent VARCHAR(10)
);