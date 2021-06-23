const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'An example comment so that we have at least one.',
    user_id: 11,
    post_id: 3
  },
  {
    comment_text: 'A second one, so that we can see how a second one makes things look.',
    user_id: 2,
    post_id: 3
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
