import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        price: Sequelize.FLOAT,
        description: Sequelize.STRING,
        code: Sequelize.STRING,
        category: Sequelize.STRING        
      },
      {
        sequelize,
      }
    );
  }
}

export default Product;
