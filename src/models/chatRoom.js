module.exports = (sequelize, DataTypes) => {
  const ChatRoom = sequelize.define(
    'ChatRoom',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      userId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        field: 'user_id',
      },
      createdBy: {
        type: DataTypes.INTEGER,
        field: 'created_by_user_id',
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        field: 'updated_by_user_id',
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
      },
    },
    {
      tableName: 'chat_rooms',
    },
  );

  ChatRoom.associate = function associate(models) {
    models.ChatRoom.belongsTo(models.User, {
      foreignKey: 'idUser',
    });
    models.ChatRoom.belongsTo(models.User, {
      foreignKey: 'createdBy',
    });
    models.ChatRoom.belongsTo(models.User, {
      foreignKey: 'updatedBy',
    });
  };

  return ChatRoom;
};
