CREATE TABLE Users (
    user_id VARCHAR(255) PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    created_at int NOT NULL,
    updated_at int,
    deleted_at int
);
