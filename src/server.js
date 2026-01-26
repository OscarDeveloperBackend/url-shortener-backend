const { config } = require("dotenv");
const connectDB = require("./config/mongodb");
const app = require("./app");
config();
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});
