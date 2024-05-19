use crate::{config::index, models::auth::Login};
use axum::Json;
// use tower_cookies::{Cookie, Cookies};
use cookie::Cookie;

pub async fn login(form: Json<Login>) {
    println!("{}", form.username);
    println!("------------");
    // cookies.add(Cookie::new("auth-cookies", index::AUTH));
    Cookie::new("auth", index::AUTH).http_only();
}
