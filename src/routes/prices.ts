// const express = require('express');
// const Price = require('../schemas/prices');

// const router = express.Router();

// router.post('/add', async (req: any, res: any, next: any) => {
//     try {
//         const price = await Price.create({
//             'name': String,
//             24000: Number
//         })
//         console.log(price);
//         const result = await Price.populate(price, { path: 'priceadd' });
//         res.status(201).json(result);
//     } catch (err) {
//         console.error(err);
//         next(err);
//     }
// })

// router.use('/comment', require('../schemas/prices'));

// module.exports = router;