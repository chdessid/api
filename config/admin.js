module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9eefb8994346fce81a7a6168f07fe8c7'),
  },
});
