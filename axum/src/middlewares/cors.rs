use tower_http::cors::{Any, CorsLayer};

pub fn cors() -> CorsLayer {
    return CorsLayer::new().allow_origin(Any).allow_methods(Any);
}
