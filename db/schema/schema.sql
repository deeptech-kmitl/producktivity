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
    name TEXT UNIQUE NOT NULL,
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

CREATE TABLE IF NOT EXISTS template (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    name TEXT NOT NULL,
    created_at INTEGER NOT NULL,
    updated_at INTEGER,
    deleted_at INTEGER,

    FOREIGN KEY (user_id) REFERENCES user (id)
);

CREATE TABLE IF NOT EXISTS project (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    template_id TEXT NOT NULL,
    name TEXT NOT NULL,
    created_at INTEGER NOT NULL,
    updated_at INTEGER,
    deleted_at INTEGER,

    FOREIGN KEY (user_id) REFERENCES user (id),
    FOREIGN KEY (template_id) REFERENCES template (id)
);

CREATE TABLE IF NOT EXISTS generate (
    id TEXT PRIMARY KEY,
    project_id TEXT NOT NULL,
    args TEXT,
    created_at INTEGER NOT NULL,
    deleted_at INTEGER,

    FOREIGN KEY (project_id) REFERENCES project (id)
);
