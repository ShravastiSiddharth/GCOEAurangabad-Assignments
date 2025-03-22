const News = require("../models/news");

// @desc Get all news articles
exports.getNews = async (req, res) => {
  try {
    const news = await News.find().sort({ date: -1 });
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc Get single news article
exports.getSingleNews = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) return res.status(404).json({ message: "News not found" });
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc Create a news article
exports.createNews = async (req, res) => {
    try {
      const { headline, description, location, source } = req.body
  
      // Collect missing fields
      let missingFields = [];
      if (!headline) missingFields.push("headline");
      if (!description) missingFields.push("description");
      if (!location) missingFields.push("location");
      if (!source) missingFields.push("source");
  
      // If any field is missing, return error response
      if (missingFields.length > 0) {
        return res.status(400).json({
          message: "Missing required fields",
          missingFields: missingFields,
        });
      }
  
      // Create a new news entry
      const newNews = new News({
        headline,
        description,
        location,
        source,
      });
  
      // // Save to database
      await newNews.save();
  
      res.status(201).json({ message: "News created successfully",  news: newNews });
  
    } catch (error) {
      console.error("Error creating news:", error);
  
      // Handle validation errors
      if (error.name === "ValidationError") {
        return res.status(400).json({ message: "Validation Error", errors: error.errors });
      }
  
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
  

// @desc Update a news article
exports.updateNews = async (req, res) => {
  try {
    const updatedNews = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedNews) return res.status(404).json({ message: "News not found" });
    res.status(200).json(updatedNews);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc Delete a news article
exports.deleteNews = async (req, res) => {
  try {
    const deletedNews = await News.findByIdAndDelete(req.params.id);
    if (!deletedNews) return res.status(404).json({ message: "News not found" });
    res.status(200).json({ message: "News deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
