const sequelize = require('../config/connection');
const { Post } = require('../models');

const postdata = [
  {
    title: 'First Seed Post',
    body: 'This is the body of the first seed post. Not much to it.',
    user_id: 1
  },
  {
    title: 'Second Seed Post',
    body: 'This is the body of the second seed post. Only a bit different from the first.',
    user_id: 2
  }
];

const seedPosts = () => Post.bulkCreate(postdata, {individualHooks: true});

module.exports = seedPosts;
