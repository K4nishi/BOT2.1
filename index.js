import { fig } from "./functions/fig.js";
import { delmsg } from "./functions/delmsg.js";
import qrcode from "qrcode-terminal";
import whatsappJs from "whatsapp-web.js";

const { Client, LocalAuth, MessageMedia } = whatsappJs;
const client = new Client({
  authStrategy: new LocalAuth(),
});
client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});
client.on("ready", () => {
  console.log("Bot online");
});

//comando para figurinha
client.on("message", async (msg) => {
  switch (msg) {
    case "!test":
      await msg.reply("teste feito");
      break;
  }
});
// fim de teste função
//teste
//teste
//teste
//teste

// começo comandos do bot
client.on("message", async (msg) => {
  var mensagem = msg.body.toLowerCase();
  switch (mensagem) {
    //area para interação bot e funções
    case "!calibrar":
      await msg.reply("Bot ta funcionando linda :)");
      await msg.react("✅");
      break;
    //davi teste
    //figurinha
    case "!fig":
      await fig(msg);
      break;
    //figurinha

    case "!del":
      await delmsg(msg);
      break;
  }
});

client.initialize();
