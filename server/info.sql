

CREATE TABLE users(
    id VARCHAR UNIQUE NOT NULL DEFAULT gen_random_uuid(),
    user_name VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR NOT NULL,
    image_id VARCHAR UNIQUE,

    CONSTRAINT fk_image_id
    FOREIGN KEY(image_id)
    REFERENCES images(image_id)
);

CREATE TABLE images(
    image_id  VARCHAR UNIQUE NOT NULL DEFAULT gen_random_uuid(),
    img_name TEXT NOT NULL,
    img bytea NOT NULL
);


CREATE TABLE jwt(
     user_id VARCHAR UNIQUE NOT NULL,
     user_name VARCHAR(50) NOT NULL,
     token VARCHAR
     
);

