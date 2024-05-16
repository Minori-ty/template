use crate::models;
use crate::models::common::Response;
use crate::services;
use axum::extract::{Path, Query};
use axum::Json;
use serde::Deserialize;

pub async fn user_get(Path(id): Path<String>) -> Json<Response<models::user::User>> {
    let id_clone = id.clone();
    let list = services::user::create_user(id);
    println!("{}", id_clone);
    Json(list)
}

#[derive(Deserialize)]
pub struct MyParams {
    pub id: String,
}
pub async fn user_post(Query(my_params): Query<MyParams>) -> Json<Response<models::user::User>> {
    let list = services::user::create_user(String::from("123"));
    println!("{}", my_params.id);
    Json(list)
}

pub async fn user_delete() -> Json<Response<Vec<models::user::User>>> {
    let list = services::user::delete_user_list();
    Json(list)
}

pub async fn user_put() -> String {
    String::from("user update")
}

pub async fn user_get_list() -> Json<Response<Vec<models::user::User>>> {
    let list = services::user::get_user_list();
    Json(list)
}
