#![allow(unused)]

use anyhow::Result;
use serde_json::json;

#[tokio::test]
async fn main() -> Result<()> {
    let hc = httpc_test::new_client("http://127.0.0.1:3000")?;

    hc.do_post(
        "/login",
        json!({
            "username":"admin",
            "password":"123"
        }),
    )
    .await?
    .print()
    .await?;
    hc.do_get("/user/123").await?.print().await?;
    hc.do_post("/user?id=1", "12").await?.print().await?;

    Ok(())
}
