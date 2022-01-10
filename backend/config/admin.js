module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd94fe37fa6ccc0d54d0cf42336423170'),
  },
});
