module.exports = {
  apps: [
    {
      args: 'start',
      autorestart: true,
      combine_logs: true,
      error_file: 'logs/metaix-nft/error.log',
      max_restarts: 5,
      min_uptime: '10s',
      name: 'metaix-nft',
      out_file: 'logs/metaix-nft/normal.log',
      restart_delay: 5000,
      script: 'yarn',
    }
  ]
};