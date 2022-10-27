const { Database, aql } = require("arangojs");

const getConnection = () => {
  return new Database({
    url: "http://127.0.0.1:8529/",
    databaseName: "SKI",
    auth: { username: "ski", password: "ski12345" },
  });
};

const getCollection = async (cName, db) => {
  const collections = await db.collections();

  if (collections.find((c) => c._name === cName)) {
    return await db.collection(cName);
  } else {
    return db.createCollection(cName);
  }
};

export const checkUid = async (uid) => {
  const db = getConnection();

  await getCollection("user_ski", db);

  let result = [];

  const resx = await db.query(aql`
    FOR u IN user_ski
      FILTER u._key == ${uid}
    RETURN u
  `);

  for await (let config of resx) {
    result.push(config);
  }

  return result;
};

export const allCst = async (start, length) => {
  const db = getConnection();

  await getCollection("customer", db);

  let result = [];

  const resx = await db.query(aql`
  for i in customer
  sort i.created_at DESC
  limit ${start},${length}
  return 
  {
      "key" : i._key,
      "username": i.username,
      "fullname": i.fullname,
      "email" : i.email,
      "male" : i.male,
      "address" : i.address.detail,
      "pict": i.pict,
      "phone" : i.phone,
      "date_of_birth" : i.date_of_birth,
      "active" : i.active,
      "created_at" : i.created_at
  }
  `);

  for await (let config of resx) {
    result.push(config);
  }

  return result;
};

export const getTotalCust = async () => {
  const db = getConnection();

  await getCollection("customer", db);

  let result = [];

  const resx = await db.query(aql`
  for i in customer
  collect with count into length
  return 
  {
    "total" : length
  }`);

  for await (let config of resx) {
    result.push(config);
  }

  return result;
};
