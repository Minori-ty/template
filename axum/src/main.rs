mod config;
mod controllers;
mod middlewares;
mod models;
mod routers;
mod services;
mod types;

use axum::Router;
use routers::{admin, auth, user};
use std::net::SocketAddr;
use tower_cookies::CookieManagerLayer;
use tower_http::trace::TraceLayer;
use tracing::Level;
use tracing_subscriber::fmt::Subscriber;

#[tokio::main]
async fn main() {
    let subscriber = Subscriber::builder().with_max_level(Level::DEBUG).finish();
    tracing::subscriber::set_global_default(subscriber).expect("setting default subscriber failed");

    let app = Router::new()
        .merge(user::user_router())
        .merge(admin::admin_router())
        .merge(auth::login())
        .layer(middlewares::cors::cors())
        .layer(CookieManagerLayer::new())
        .layer(TraceLayer::new_for_http());

    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));

    let listener = tokio::net::TcpListener::bind(addr).await.unwrap();
    axum::serve(listener, app).await.unwrap();
}
