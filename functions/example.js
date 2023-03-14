export function example(message) {
  if (message.body === "!ping") {
    message.reply("pong");
  }
}
