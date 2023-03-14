export async function delmsg(msg) {
  if (msg.hasQuotedMsg) {
    try {
      const quotedMsg = await msg.getQuotedMessage();
      await quotedMsg.delete(true);
      msg.reply("Mensagem apagada pelo bot :)");
    } catch (error) {
      await msg.reply("Não foi possivel apagar esta mensagem");
    }
  }
}
