export async function fig(msg) {
  if (msg.hasMedia) {
    let midia = await msg.downloadMedia();
    await msg.reply("Ok, Eu já faço isso para você");
    await msg.reply(midia, "", { sendMediaAsSticker: true });
  }
}
