const mongoose = require("mongoose");

const testConnection = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect("mongodb://localhost:27017/blogs");
    console.log("MongoDB connected");

    // Define a schema and model
    const testSchema = new mongoose.Schema({ name: String });
    const Test = mongoose.model("Test", testSchema);

    // Insert a sample document
    await Test.create({ name: "Sample Document" });
    console.log("Sample document inserted");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // Disconnect from MongoDB
    mongoose.disconnect();
  }
};

testConnection();
