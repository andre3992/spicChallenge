import nextConnect from "next-connect";
import middleware from "../../database/database";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  let doc = await req.db
    .collection("guests")
    .find()
    .sort({ createdAt: -1 })
    .toArray()
    .then((result) => {
      return result;
    });
  res.json(doc);
});

export default handler;
