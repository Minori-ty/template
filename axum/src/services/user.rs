use crate::models;
use crate::models::common::{create_response, Response};

pub fn create_user() -> Response<models::user::User> {
    let user = models::user::User {
        age: 20,
        sex: 0,
        username: String::from("张三"),
    };
    let res = create_response(user);

    return res;
}
