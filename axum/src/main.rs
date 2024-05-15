mod controllers;
mod models;
mod routers;
mod services;
mod types;

use axum::{routing::get, Router};

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/", get(handler))
        .merge(routers::user::user_router())
        .merge(routers::admin::admin_router());

    let listener = tokio::net::TcpListener::bind("127.0.0.1:3000")
        .await
        .unwrap();
    axum::serve(listener, app).await.unwrap();
}

async fn handler() -> String {
    String::from("axum")
}
