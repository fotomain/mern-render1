import { MongoClient, ServerApiVersion } from "mongodb";

const localUri = "mongodb+srv://work_user:Taras777999$Taras777999$@cluster0.algml.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const URI = process.env.ATLAS_URI || localUri;
const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  appName: 'devrel.content.render'
});

try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin1").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
} catch (err) {
  console.error(err);
}

let db = client.db("employees");

export default db;
