mod controllers;
mod middlewares;
mod models;
mod routers;
mod services;
mod types;

use axum::Router;
use routers::{admin, user};
use std::net::SocketAddr;

#[tokio::main]
async fn main() {
    let app = Router::new()
        .merge(user::user_router())
        .merge(admin::admin_router())
        .layer(middlewares::cors::cors());

    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));

    let listener = tokio::net::TcpListener::bind(addr).await.unwrap();
    axum::serve(listener, app).await.unwrap();
}
