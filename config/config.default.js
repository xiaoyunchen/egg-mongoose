'use strict';

/**
  * mongoose default config
  * http://mongoosejs.com/docs/api.html#index_Mongoose-createConnection
  * @member Config#mongoose
  * @property {String} url - connect url
  * @property {Object} options - options to pass to the driver and mongoose-specific
  */
exports.mongoose = {
  url: '',
  options: {},
  plugins: [],
  loadModel: true,
  app: true,
  agent: false,
  // model所在目录，默认 app/model
  modelDir: 'model',
  // 注入model名称
  modelName: 'mongoose'
};
