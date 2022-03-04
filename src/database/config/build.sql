BEGIN;

DROP TABLE  IF EXISTS users CASCADE;
DROP TABLE  IF EXISTS notes CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    user_id INT REFERENCES users(id)
);

INSERT INTO users (name) VALUES 
    ('Deena'),
    ('Rand'),
    ('Sereen');

INSERT INTO notes (title, user_id) VALUES 
    ('hi', 1),
    ('his', 2),
    ('hello', 3);

COMMIT;