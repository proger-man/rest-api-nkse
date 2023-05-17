create TABLE positions(
    id SERIAL PRIMARY KEY,
    post VARCHAR(50),
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
    groupStudent VARCHAR(10),
    
    address VARCHAR(100),
    fullName_mother VARCHAR(100),
    phone_mother VARCHAR(15),
    fullName_dad VARCHAR(100),
    phone_dad VARCHAR(15),
    fullName_manager VARCHAR(200)
);
