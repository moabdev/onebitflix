import { database } from "../database";
import { DataTypes, Model, Optional } from "sequelize";
import bcrypt from "bcrypt";

// Definindo a interface para os atributos do usuário
export interface UserAttributes {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  birth: Date;
  email: string;
  password: string;
  role: "admin" | "user";
}

// Definindo a interface para os atributos opcionais ao criar um usuário
export interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

// Definindo a interface para a instância do usuário
export interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {}

// Definindo o modelo User
export const User = database.define<UserInstance, UserAttributes>("users", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  firstName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  birth: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  email: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
    validate: {
      isEmail: true,
    },
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
  },
});

// Definindo hooks para o modelo User
User.addHook('beforeSave', async (user: UserInstance) => {
  if (user.isNewRecord || user.changed("password")) {
    user.password = await bcrypt.hash(user.password.toString(), 10);
  }
});
