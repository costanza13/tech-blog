const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    res.redirect('/login');
  } else {
    next();
  }
};

const withAuthApi = (req, res, next) => {
  if (!req.session.user_id) {
    res.json({ error: 'Access denied. You must be logged in to access this resource.'});
  } else {
    next();
  }
};

module.exports = { withAuth, withAuthApi };
