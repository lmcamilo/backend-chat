module.exports = (sequelize, DataTypes) => {
  const ChatMessage = sequelize.define(
    'ChatMessage',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      sentBy: {
        type: DataTypes.UUID,
        field: 'sent_by',
      },
      idChat: {
        type: DataTypes.UUID,
        field: 'chat_id',
      },
      messageContent: {
        type: DataTypes.TEXT,
        field: 'message_content',
      },
      read: DataTypes.BOOLEAN,
      updatedBy: {
        type: DataTypes.UUID,
        field: 'updated_by_user_id',
      },
      createdBy: {
        type: DataTypes.UUID,
        field: 'created_by_user_id',
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
      },
    },
    {
      tableName: 'chat_messages',
      paranoid: true,
    },
  );
  ChatMessage.associate = function associate(models) {
    models.ChatMessage.belongsTo(models.ChatRoom, {
      foreignKey: 'idChat',
      as: 'chat',
    });
    models.ChatMessage.belongsTo(models.User, {
      foreignKey: 'sentBy',
    });
    models.ChatMessage.belongsTo(models.User, {
      foreignKey: 'createdBy',
    });
    models.ChatMessage.belongsTo(models.User, {
      foreignKey: 'updatedBy',
    });
  };

  return ChatMessage;
};
