const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://admin:532453@ds157469.mlab.com:57469/production_justcoders',
  port: process.env.PORT || 3000,
};

export default config;
