const { getStreamFromURL } = require("fb-watchman");

module.exports = {
  config: {
    name: "stats",
    aliases: ["upt"],
    version: "1.0",
    author: "OtinXSandip",
    role: 0,
    shortDescription: {
      en: "stats",
    },
    longDescription: {
      en: "shows stats of bot.",
    },
    category: "system",
    guide: {
      en: "Use {p}stats to see stats of bot.",
    },
  },

  onStart: async function ({ api, event, args, usersData, threadsData }) {
    try {
      const allUsers = await usersData.getAll();
      const allThreads = await threadsData.getAll();
      const uptime = process.uptime();

      const hours = Math.floor(uptime / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = Math.floor(uptime % 60);

      const uptimeString = `${hours}Hrs ${minutes}min ${seconds}sec`;

      const currentDate = new Date();
      const options = { year: "numeric", month: "numeric", day: "numeric" };
      const date = currentDate.toLocaleDateString("en-US", options);
      const time = currentDate.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kathmandu",
        hour12: true,
      });

      const timeStart = Date.now();
      await api.sendMessage({
        body: "𝙏𝙀𝙈𝙋𝙎 𝘿𝙀 𝙈𝘼𝙍𝘾𝙃𝙀......🚶",
      }, event.threadID);

      const ping = Date.now() - timeStart;

      let pingStatus = "Not smooth throw your router, buddy";
      if (ping < 400) {
        pingStatus = "Smooth like your tiny pussy";
      }

      // Assuming global.utils.getStreamFromURL(img) is correctly defined
      const imgURL= "https://i.ibb.co/Df1G1WT/image.jpg";
      const attachment = await global.utils.getStreamFromURL(imgURL); api.sendMessage({
        body: `𝙏𝙊𝙈𝘽𝙀𝘼𝙐 𝘿𝙀 𝙉𝘼𝙕𝘼𝙍𝙄𝙆  \n────────\n

💀 | 𝙈𝙊𝙈𝙊𝙉𝙂𝘼 𝙏𝙍𝘼𝙑𝙀𝙇𝙄𝙉𝙂 𝙏𝙄𝙈𝙀﹞\n ${uptimeString}\n──────── \n

📅 | 𝗗𝗔𝗧𝗘﹞: ${date}\n────────\n 𝗧𝗲𝗺𝗽: ${time}\n────────\n

🙇| 𝘛𝘰𝘵𝘢𝘭  slaves﹞:$ {Users.length}\n────────\n

🏢 | 𝘛𝘰𝘵𝘢𝘭 𝘛𝘩𝘳𝘦𝘢𝘥𝘴﹞:$ {Threads.length}\n| 𝗔𝗶𝗻𝗲 ﹞: ${ping}ms\n────────\n status: ${pingStatus}`,
        attachment: attachment,
      }, event.threadID);
    } catch (error) {
      console.error(error);
      api.sendMessage("An error occurred while retrieving data.", event.threadID);
    }
  }
                                                  }
