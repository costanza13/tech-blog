const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'An example comment so that we have at least one.',
    user_id: 11,
    post_id: 3
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
