

CREATE TABLE users(
    user_id VARCHAR UNIQUE NOT NULL DEFAULT gen_random_uuid(),
    user_name VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR NOT NULL,
    profile_img VARCHAR UNIQUE NOT NULL
);




CREATE TABLE jwt(
     user_id VARCHAR UNIQUE NOT NULL,
     user_name VARCHAR(50) UNIQUE NOT NULL,
     profile_img VARCHAR NOT NULL,
     token VARCHAR
     
);

CREATE TABLE videos(
    id VARCHAR UNIQUE NOT NULL DEFAULT gen_random_uuid(),
    video_title VARCHAR NOT NULL,
    video_url VARCHAR NOT NULL,
    size INT NOT NULL,
    created_by VARCHAR NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    create_at TIMESTAMP(0) DEFAULT current_timestamp

);




