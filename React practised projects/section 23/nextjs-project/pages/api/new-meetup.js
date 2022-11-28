// //these js files are notcfor definig,rendering or returning recat components
// //this contains functions with server side codes
// //this only runs on the server

// //url for this file
// // /api/new-meetp

// import { MongoClient } from "mongodb";

// //this function only triggers for the POST requests
// async function handler(req, res) {
//   // req for incoming request and res for response
//   if (req.method === "POST") {
//     const data = req.body;
//     // const { title, image, address, description } = data;
//     const client = await MongoClient.connect(
//       "mongodb+srv://anshida:anshida123@cluster0.wrsppj1.mongodb.net/meetups?retryWrites=true&w=majority"
//     ); //datanbase name meetup here
//     const db = client.db();
//     const meetupsCollection = db.collection("meetups");
//     const result = await meetupsCollection.insertOne(data);
//     console.log(result);
//     client.close();
//     res.status(201).json({ message: "Meetup inserted!" });
//   }
// }

// export default handler;

import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);

    const client = await MongoClient.connect(
      "mongodb+srv://anshida:anshida123@cluster0.wrsppj1.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
