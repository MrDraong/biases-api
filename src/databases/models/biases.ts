import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "biases",
})
export class Biases extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  })
  id_bias: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id_country!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  word!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  emoji_name!: string;
}
