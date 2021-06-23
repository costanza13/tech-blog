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
  },
  {
    comment_text: 'Wasn\'t there a joke about closing all the windows and restarting your car, after a crash?',
    user_id: 5,
    post_id: 5
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
