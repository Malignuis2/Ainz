module.exports = {
    config: {
        name: "ok",
        version: "1.0",
        author: "ʬɸʬ Shïsûį Dånïęl ʬɸʬ",
        countDown: 5,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
    onStart: async function(){}, 
    onChat: async function({
        event,
        message,
        getLang
    }) {
        if (event.body && event.body.toLowerCase() == "ok") return message.reply("𝗨𝗻 𝗽'𝘁𝗶𝘁 𝘀𝗲𝗰𝗿𝗲𝘁 😏 𝘀𝗲𝗶𝗴𝗻𝗲𝘂𝗶𝗿 𝗔𝗜𝗡𝗭 𝘀'𝗮𝗽𝗽𝗲𝗹𝗹𝗲.....😶");
    }
}
