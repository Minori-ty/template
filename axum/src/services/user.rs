use crate::models::common::{create_response, Response};
use crate::models::user::Sex;
use crate::models::user::User;
use crate::types::user::Data;

pub fn get_user_list() -> Response<Vec<User>> {
    let mut user_list = vec![];
    let user = User {
        age: 20,
        sex: Sex::Male,
        username: String::from("张三"),
    };
    user_list.push(user);
    let user2 = User {
        age: 20,
        sex: Sex::Male,
        username: String::from("李四"),
    };
    user_list.push(user2);
    let res = create_response(user_list);
    return res;
}

pub fn create_user() -> Response<User> {
    let user = User {
        age: 20,
        sex: Sex::Male,
        username: String::from("张三"),
    };
    let res = create_response(user);

    return res;
}

pub fn delete_user_list() -> Data {
    let mut user_list = vec![];
    let user = User {
        age: 20,
        sex: Sex::Male,
        username: String::from("张三"),
    };
    user_list.push(user);
    let user2 = User {
        age: 20,
        sex: Sex::Male,
        username: String::from("李四"),
    };
    user_list.push(user2);
    let res = create_response(user_list);
    return res;
}
