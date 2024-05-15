use crate::models;
use crate::models::common::{create_response, Response};
use crate::models::user::Sex;

pub fn create_user() -> Response<models::user::User> {
    let user = models::user::User {
        age: 20,
        sex: Sex::Female,
        username: String::from("张三"),
    };
    let res = create_response(user);

    return res;
}
