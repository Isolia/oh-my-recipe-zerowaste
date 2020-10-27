### user
| Field    | Type | Constraint | Comment |
| -------- | ---- | ---------- | ------- |
| id | INT | GENERATED ALWAYS AS IDENTITY PRIMARY KEY | - |
| username | TEXT | NOT NULL | - |
| email | TEXT | NOT NULL | - |
| password | TEXT | NOT NULL | - |
| role | TEXT | DEFAULT 'user' | - |

### recipe
| Field    | Type | Constraint | Comment |
| -------- | ---- | ---------- | ------- |
| id | INT | GENERATED ALWAYS AS IDENTITY PRIMARY KEY | - |
| title | TEXT | NOT NULL | - |
| description | TEXT | NOT NULL | - |
| ingredient | TEXT | NOT NULL | - |
| equipment | TEXT | NOT NULL | - |
| difficulty | ENUM | difficulty choice_difficulty | CREATE TYPE choice_difficulty AS ENUM ('Débutant', 'Avancé', 'Confirmé'); |
| duration | TEXT | NOT NULL | - |
| shelf_life | TEXT | NOT NULL | - |
| preparation_step | TEXT | NOT NULL | - |
| url | TEXT | - | - |
| img | TEXT | - | - |
| created_at | TIMESTAMPTZ | NOT NULL DEFAULT NOW() | - |
| uptade_at | TIMESTAMPTZ |  | - |

### comment
| Field    | Type | Constraint | Comment |
| -------- | ---- | ---------- | ------- |
| id | INT | GENERATED ALWAYS AS IDENTITY PRIMARY KEY | - |
| text | TEXT | NOT NULL | - |

### tag
| Field    | Type | Constraint | Comment |
| -------- | ---- | ---------- | ------- |
| id | INT | GENERATED ALWAYS AS IDENTITY PRIMARY KEY | - |
| name | TEXT | NOT NULL | - |

### user_has_favorite_recipe
| Field    | Type | Constraint | Comment |
| -------- | ---- | ---------- | ------- |
| recipe_id | INT | NOT NULL REFERENCES "recipe"(id) | - |
| user_id | INT | NOT NULL REFERENCES "user"(id) | - |