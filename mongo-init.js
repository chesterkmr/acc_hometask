db.createUser({
  user: "root",
  pwd: "password",
  roles: [{ role: "readWrite", db: "testdb" }],
});

db.createCollection("users");

db.users.insertOne({
  name: "John Doe",
  email: "john.doe@example.com",
  password: "password123",
  token: null,
});
