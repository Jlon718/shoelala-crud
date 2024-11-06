const Shoes = require('../models/shoes');
const slugify = require('slugify');

exports.create = async (req, res) => {
    const { productName, description, brand } = req.body;
    const slug = slugify(productName);

    switch(true) {
        case !productName:
            return res.status(400).json({ error: 'Product name is required'});

        case !description:
            return res.status(400).json({ error: 'Description is required'});
    } 
    
    try {
        const shoe = await Shoes.create({productName, description, brand, slug})
        return res.status(200).json(shoe);
    } catch (error) {
        return res.status(400).json({ error: 'Error creating new shoes' });
    }
    

}