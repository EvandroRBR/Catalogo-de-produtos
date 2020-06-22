module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'nbp',
  database: 'products',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};