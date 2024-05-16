use serde::{Deserialize, Serialize, Serializer};

#[derive(Serialize, Deserialize)]
pub struct User {
    pub id: String,
    pub username: String,
    pub age: u8,
    #[serde(serialize_with = "serialize_sex")]
    pub sex: Sex,
}

#[derive(Serialize, Deserialize)]
#[repr(u8)]
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

fn serialize_sex<S>(sex: &Sex, serializer: S) -> Result<S::Ok, S::Error>
where
    S: Serializer,
{
    // 使用模式匹配来获取枚举的数值，然后序列化
    match *sex {
        Sex::Male => serializer.serialize_u8(0),
        Sex::Female => serializer.serialize_u8(1),
    }
}
