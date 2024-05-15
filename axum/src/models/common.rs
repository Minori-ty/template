use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct Response<T> {
    pub msg: String,
    pub code: u16,
    pub data: T,
}

pub fn create_response<T>(data: T) -> Response<T> {
    let res = Response {
        msg: String::from("成功"),
        code: 200,
        data,
    };

    return res;
}
