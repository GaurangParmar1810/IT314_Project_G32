const { Router } = require('express');
const authController = require('../controllers/authController');
const router = Router();
const { requireAuth, checkUser } = require('../middleware/authMiddleware');

router.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
});


router.get('*', checkUser);
router.get('/signup', authController.signup_get);
router.post('/signup', authController.signup_post);

router.get('/login', authController.login_get);
router.post('/login', authController.login_post);

router.get('/secret', requireAuth, authController.secret_get);

router.get('/logout', authController.logout_get);

router.get('/customer/:username/about', authController.customer_about_get);

router.get('/cadet/:username/about', authController.cadet_about_get);

router.get('/manager/:username/about', authController.manager_about_get);

module.exports = router;