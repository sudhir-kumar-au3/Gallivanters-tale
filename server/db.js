const Sequelize = require('sequelize');
//import all the models in database connection file

// const UserModel = require('./models/user');
const BlogModel = require('./models/blog');
// const TagModel = require('./models/tag');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('testdb', 'postgres', 'mike1462', {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Blog = BlogModel(sequelize, Sequelize);

//to create table automatically in psql
sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.export = {
    // User,
    Blog
    // Tag
  };