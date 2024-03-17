CREATE TABLE IF NOT EXISTS user (
    id TEXT PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    created_at INTEGER NOT NULL,
    updated_at INTEGER,
    deleted_at INTEGER
);

CREATE TABLE IF NOT EXISTS session (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    expires_at INTEGER NOT NULL,
    created_at INTEGER NOT NULL,
    updated_at INTEGER,
    deleted_at INTEGER,

    FOREIGN KEY (user_id) REFERENCES user (id)
);

CREATE TABLE IF NOT EXISTS oauth_provider (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    created_at INTEGER NOT NULL,
    updated_at INTEGER,
    deleted_at INTEGER
);

CREATE TABLE IF NOT EXISTS oauth_account (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    oauth_provider_id TEXT NOT NULL,
    email TEXT NOT NULL,
    created_at INTEGER NOT NULL,
    updated_at INTEGER,
    deleted_at INTEGER,

    FOREIGN KEY (user_id) REFERENCES user (id),
    FOREIGN KEY (oauth_provider_id) REFERENCES oauth_provider (id)
);
