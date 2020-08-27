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

handler.post(async (req, res) => {
  let data = req.body;
  data = JSON.parse(data);
  data.date = new Date(data.date);
  let doc = await req.db.collection("guests").insertOne(
    {
      name: data.name,
      email: data.email,
      phone: data.phone,
      birthday: data.birthday,
      country: data.country,
      town: data.town,
      address: data.address,
      company: data.company,
    },
    { upsert: true }
  );
  res.json({ message: "Guest adicionado" });
});

export default (req, res) => handler.apply(req, res);
