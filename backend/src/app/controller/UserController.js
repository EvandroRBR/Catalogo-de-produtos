import Product from '../models/Product';

class ProductController {
  async index(req, res) {
    const allProduct = await Product.findAll();

    return res.json(allProduct);
  }

  async show(req, res) {
    //const { filter } = req.params
  
    const filterProduct = await Product.findAll({ where: { category : req.body.category } });

    return res.json(filterProduct);
  }

  async create(req, res) {
    const productCode = await Product.findOne({ where: { code: req.body.code } });
    const productName = await Product.findOne({ where: { name: req.body.name } })

 
    if (productCode) {
      return res.status(400).json({ error: 'Código já cadastrado' });
    } else if (productName) {
      return res.status(400).json({ error: 'Nome do produto já cadastrado' });
    }

    const { id, name, price, description, code, category } = await Product.create(req.body);

    return res.status(201).json({
      message: 'Produto cadastrado com sucesso',
      id,
      name,
      price,
      description,
      code,
      category,
    });
  }

  async update(req, res) {
    const product = await Product.findOne({ where: {id: req.body.id } });

    const productCode = await Product.findOne({ where: { code: req.body.code } });
    const productName = await Product.findOne({ where: { name: req.body.name } })

 
    if (productCode) {
      return res.status(400).json({ error: 'Código já cadastrado' });
    } else if (productName) {
      return res.status(400).json({ error: 'Nome do produto já cadastrado' });
    }

    if (!product) {
      return res.status(400).json({ error:'Produto inexistente'});
    }

    await product.update(req.body);

    return res.status(201).json({
      message: 'Produto cadastrado com sucesso',
    });
  }

  async delete(req, res) {

    const { id } = req.params;
    const product = await Product.findOne({ where: { id } });
    const { name } = product

    await product.destroy()

    return res.status(201).json({
      message: `${name} deletado com sucesso`
    })
  }
}

export default new ProductController();