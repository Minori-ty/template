use crate::controllers;
use axum::{routing::post, Router};

pub fn login() -> Router {
    let login = Router::new().route("/login", post(controllers::auth::login));
    login
}
