require("dotenv").config();

module.exports = {
  token: process.env.TOKEN || '', // your discord bot token
  prefix: process.env.PREFIX || '?', // bot prefix
  ownerID: process.env.OWNERID || ['757243549774381099'], //your discord id
  SpotifyID: process.env.SPOTIFYID || 'bf5ee2a72bae40ffadc71a47280e5ff9', // spotify client id
  SpotifySecret: process.env.SPOTIFYSECRET || '053469ffeb3844079fab734ebf3090c2', // spotify client secret
  mongourl:
    process.env.MONGO_URI || 'mongodb+srv://xenon:waleedaamir2005@cluster0.xwsd4.mongodb.net/lmgxenon?retryWrites=true&w=majority', // MongoDb URL
  embedColor: process.env.COlOR || '#3366ff', // embed colour
  logs: process.env.LOGS || '757243549774381099', // Discord channel id 
  links: {
    support: 'https://discord.gg/ReeQ2fSPQ2',
    invite: 'https://discord.com/api/oauth2/authorize?client_id=900246137397723156&permissions=8&scope=bot',
    vote: '',
  },

  nodes: [
    {
      url: process.env.NODE_URL || 'n1.lavalink.milrato.com:10350',
      name: process.env.NODE_NAME || 'Main',
      auth: process.env.NODE_AUTH || 'discord.gg/milrato',
      secure: parseBoolean(process.env.NODE_SECURE || 'false'),
    },
  ],
};

function parseBoolean(value){
    if (typeof(value) === 'string'){
        value = value.trim().toLowerCase();
    }
    switch(value){
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
