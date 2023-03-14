export async function repeat(msg) {
  if (msg.body) {
    // Send a new message to the same chat
    await client.sendMessage(msg.from, "pong");
  }
}
