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
  },
  {
    title: 'Third Seed Post',
    body: 'This is the body of the third seed post. Feel free to do stuff with these seed posts.',
    user_id: 2
  },
  {
    title: 'Trademark Cluelessness: The Other White Meat',
    body: '<p class="department">from the <em>morons-in-a-hurry</em> dept</p><p>Headbhang was the first of a few of you to send in the news of favorite supplier of all things geeky, Thinkgeek, receiving an incredibly long and detailed cease and desist letter from the National Pork Board, complaining about its use of the phrase "the other white meat" on an April Fool\'s joke offering for canned unicorn meat. The NPB is somewhat notorious for defending the "the other white meat" trademark, but even its high priced lawyers must know that there\'s no likelihood of confusion here, and the parody defense would likely win out. Also, since for it to be infringement there needs to be actual "use in commerce" and this is a product that can not and will not ever be sold... does it even qualify? Not only that, but the NPB is looking for a new slogan for pork, so there won\'t be much need to eliminate the confusion between pork and unicorn products. Even more importantly, did no one think that maybe, just maybe, sending a cease-and-desist over an April Fool\'s joke might look bad?',
    user_id: 12
  },
  {
    title: 'Who Will Create A Crash Proof System First: Ford Or Microsoft?',
    body: '<p class="department">from the <em>physician-heal-thyself</em> dept</p><p>Bill Gates is the target of so much humor and ire, that it hardly seems worthwhile to make fun of him most of the time. However, sometimes he sets himself up so perfectly, that it\'s impossible to resist. Today at the Microsoft Global Automotive Summit, Gates and Bill Ford Jr. were extolling the virtues of technology and how it will help cars of the future to fix themselves and avoid accidents. Addressing summit participants, Mr. Gates (yes, the creator of notoriously crash-prone Windows) told auto industry members that their goal should be to create a car that won\'t crash... Alanis, take note: that\'s ironic.',
    user_id: 11
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
