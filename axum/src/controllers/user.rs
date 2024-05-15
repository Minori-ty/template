use crate::models;
use crate::models::common::Response;
use crate::services;
use axum::Json;

pub async fn user_get() -> String {
    String::from("user get")
}

pub async fn user_post() -> Json<Response<models::user::User>> {
    let user = services::user::create_user();
    Json(user)
}

pub async fn user_delete() -> String {
    String::from("user delete")
}

pub async fn user_put() -> String {
    String::from("user update")
}
