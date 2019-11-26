ExternalConfig = {};

// Port API Runs On
ExternalConfig.Server = {
  port: 2000
};

// Database Connection Configs
ExternalConfig.Database = {
  connectionLimit: 100,
  host: "localhost",
  user: "root",
  password: "",
  database: "lsstory"
};

// API Configs
ExternalConfig.API = {
  route: "/external/api",
  secret: "lsstory"
};

ExternalConfig.DevModeActive = true;

module.exports.config = ExternalConfig;
module.exports.server = ExternalConfig.Server;
module.exports.database = ExternalConfig.Database;
module.exports.api = ExternalConfig.API;
module.exports.dev = ExternalConfig.DevModeActive;
