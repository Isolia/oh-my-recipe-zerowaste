const { Router } = require('express');

const router = Router();

router.get('/', (_, res) => {
    res.json(`Bienvenue sur le site O'Recipe`);
});

module.exports = router; 