import { createApp } from "./createApp.js";

const app = createApp();

//consts
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
