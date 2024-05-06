const express = require("express");
const { Sequelize } = require("sequelize");
const { Category, Post } = require("./models");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

const sequelize = new Sequelize({
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  database: "postgres",
  username: "postgres.zezlbythneurwyctdeqz",
  password: "89qwAa4)in)@*2c",
  host: "aws-0-eu-west-2.pooler.supabase.com",
  port: "5432",
});

sequelize
  .authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection failed:", err));

Post.belongsTo(Category);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const { Category, Post } = require("./models");

const postRoutes = require("./routes/postRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

// Routes
app.use("/api/posts", postRoutes);
app.use("/api/categories", categoryRoutes);
