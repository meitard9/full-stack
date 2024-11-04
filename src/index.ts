import { createApp } from "./createApp";

const app = createApp();

//consts
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
