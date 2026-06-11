const mineflayer = require("mineflayer");

const bot = mineflayer.createBot({
  host: "W123-eREI.aternos.me",
  port: 18445,
  username: "DEIN_NAME",
  version: "1.20.4"
});

bot.on("login", () => {
  console.log("[Bot] Logging in...");
});

bot.on("spawn", () => {
  console.log("[Bot] Erfolgreich auf dem Server!");
});

bot.on("kicked", (reason) => {
  console.log("[Bot] KICKED:", reason);
});

bot.on("end", () => {
  console.log("[Bot] Verbindung verloren");
});

bot.on("error", (err) => {
  console.log("[Bot Error]", err.message);
});
