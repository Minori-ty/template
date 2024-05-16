use crate::models;
use crate::models::common::Response;
use crate::services;
use axum::Json;

pub async fn user_get() -> Json<Response<Vec<models::user::User>>> {
    let list = services::user::get_user_list();
    Json(list)
}

pub async fn user_post() -> Json<Response<models::user::User>> {
    let list = services::user::create_user();
    Json(list)
}

pub async fn user_delete() -> Json<Response<Vec<models::user::User>>> {
    let list = services::user::delete_user_list();
    Json(list)
}

pub async fn user_put() -> String {
    String::from("user update")
}
