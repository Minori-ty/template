use crate::{config::index, models::auth::Login};
use axum::Json;
use tower_cookies::{Cookie, Cookies};
// use cookie::Cookie;

pub async fn login(form: Json<Login>) -> String {
    println!("{}", form.username);
    println!("------------");
    // cookies.add(Cookie::new("auth-cookies", index::AUTH));
    // Cookie::new("auth-token", index::AUTH).http_only();
    // Cookie::build("base").http_only(true);
    String::from("你好")
}
