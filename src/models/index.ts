import { Course } from "./Course";
import { Category } from "./Category";

Category.hasMany(Course)

Course.belongsTo(Category)

export {
  Course,
  Category
}