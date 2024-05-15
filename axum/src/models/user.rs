use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct User {
    pub username: String,
    pub age: u8,
    pub sex: Sex,
}

#[derive(Serialize, Deserialize)]
pub enum Sex {
    Male = 0,
    Female = 1,
}

impl From<u8> for Sex {
    fn from(num: u8) -> Self {
        match num {
            0 => Sex::Male,
            1 => Sex::Female,
            _ => panic!("Invalid value for Sex"),
        }
    }
}
