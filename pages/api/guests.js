import nextConnect from "next-connect";
import middleware from "../../database/database";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  let doc = await req.db.collection("guests").findOne();
  console.log(doc);
  res.json(doc);
});

export default handler;
