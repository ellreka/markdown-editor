use pulldown_cmark::{html, Options, Parser};
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn parse_markdown(value: &str) -> String {
  let mut options = Options::empty();
  options.insert(Options::ENABLE_STRIKETHROUGH);
  let parser = Parser::new_ext(value, options);
  // Write to String buffer.
  let mut html_output = String::new();
  html::push_html(&mut html_output, parser);

  return html_output;
}
