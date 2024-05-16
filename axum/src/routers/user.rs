use crate::controllers;
use axum::{
    routing::{delete, get, post, put},
    Router,
};

/**
 * user路由
 */
pub fn user_router() -> Router {
    let user = Router::new()
        .route("/:id", get(controllers::user::user_get))
        .route("/list", get(controllers::user::user_get_list))
        .route("/", post(controllers::user::user_post))
        .route("/", delete(controllers::user::user_delete))
        .route("/", put(controllers::user::user_put));
    let app = Router::new().nest("/user", user);
    app
}
