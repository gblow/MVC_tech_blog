const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');


class Post extends Model {}

Post.seeders({

       },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
   text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
 
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
})


module.exports = Post;
