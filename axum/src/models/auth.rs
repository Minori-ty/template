use serde::{Deserialize, Serialize};

#[derive(Deserialize, Serialize, Debug)]
pub struct Login {
    pub username: String,
    pub password: String,
}
