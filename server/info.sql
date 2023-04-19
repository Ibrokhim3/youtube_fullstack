

CREATE TABLE users(
    id VARCHAR UNIQUE NOT NULL DEFAULT gen_random_uuid(),
    user_name VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR NOT NULL,
    image_title VARCHAR UNIQUE
);

-- CREATE TABLE images(
--     image_id  VARCHAR UNIQUE NOT NULL DEFAULT gen_random_uuid(),
--     img_name TEXT NOT NULL,
--     img bytea NOT NULL
-- );


CREATE TABLE jwt(
     user_id VARCHAR UNIQUE NOT NULL,
     user_name VARCHAR(50) NOT NULL,
     image_title VARCHAR NOT NULL,
     token VARCHAR
     
);

CREATE TABLE videos(
    id VARCHAR UNIQUE NOT NULL DEFAULT gen_random_uuid(),
    video_title VARCHAR NOT NULL,
    created_by VARCHAR(50) UNIQUE NOT NULL,

    CONSTRAINT fk_created_by
    FOREIGN KEY(created_by)
    REFERENCES users(user_id)
);

