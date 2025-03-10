const { Router } = require("express");
const TestimonialModel = require("../models/TestimonialSchema");
const SlideModel = require("../models/SlideSchema");
const sliderModel = require("../models/SliderSchema");
const ServicesModel = require("../models/ServicesSchema");
const GalleryModel = require("../models/GallerySchema");
const TeamsModel = require("../models/teamsSchema");

const frontendapi = Router();




frontendapi.get("/testimonials", async (req, res) => {
    try {
      let data = await TestimonialModel.find();
      console.log(data)
      res.status(200).send(data);
    } catch (error) {
      res.status(401).send({ msg: error.message});
    }
  });

  frontendapi.post("/testimonials", async (req, res) => {
    try {
      let data = await TestimonialModel.create(req.body);
      res.status(200).send(data);
    } catch (error) {
      res.status(401).send({ msg: error.message});
    }
  });

  frontendapi.get("/slide", (async (req, res) => {
    try {
      let data = await SlideModel.find();
      res.status(200).send(data);
    } catch (error) {
      res.status(401).send({ msg: error.message});
    }
  }));

  frontendapi.post("/slide", async (req, res) => {
    try {
      let data = await SlideModel.create(req.body);
      res.status(200).send(data);
    } catch (error) {
      res.status(401).send({ msg: error.message});
    }
  });


frontendapi.get("/slider", async (req, res) => {
    try {
      let data = await sliderModel.find();
      res.status(200).send(data);
    } catch (error) {
      res.status(401).send({ msg: error.message});
    }
  });

  frontendapi.post("/slider", async (req, res) => {
    try {
      let data = await sliderModel.create(req.body);
      res.status(200).send(data);
    } catch (error) {
      res.status(401).send({ msg: error.message});
    }
  });

  frontendapi.get("/services", async (req, res) => {
    try {
      let data = await ServicesModel.find();
      res.status(200).send(data);
    } catch (error) {
      res.status(401).send({ msg: error.message});
    }
  });

  frontendapi.post("/services", async (req, res) => {
    try {
      let data = await ServicesModel.create(req.body);
      res.status(200).send(data);
    } catch (error) {
      res.status(401).send({ msg: error.message});
    }
  });



  frontendapi.get("/gallery", async (req, res) => {
    try {
      let data = await GalleryModel.find();
      res.status(200).send(data);
    } catch (error) {
      res.status(401).send({ msg: error.message});
    }
  });

  frontendapi.post("/gallery", async (req, res) => {
    try {
      let data = await GalleryModel.create(req.body);
      res.status(200).send(data);
    } catch (error) {
      res.status(401).send({ msg: error.message});
    }
  });


  frontendapi.get("/teams", async (req, res) => {
    try {
      let data = await TeamsModel.find();
      res.status(200).send(data);
    } catch (error) {
      res.status(401).send({ msg: error.message});
    }
  });

  frontendapi.post("/teams", async (req, res) => {
    try {
      let data = await TeamsModel.create(req.body);
      res.status(200).send(data);
    } catch (error) {
      res.status(401).send({ msg: error.message});
    }
  });

  frontendapi.delete("/testimonials/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await TestimonialModel.findByIdAndDelete(id);
      res.status(200).send({ msg: "Data Deleted Successfully" });
    } catch (error) {
      console.error("Delete error:", error);
      res.status(500).send({ msg: error.message });
    }
  });

  frontendapi.delete("/slide/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await SlideModel.findByIdAndDelete(id);
      res.status(200).send({ msg: "Data Deleted Successfully" });
    } catch (error) {
      console.error("Delete error:", error);
      res.status(500).send({ msg: error.message });
    }
  });


  frontendapi.delete("/slider/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await sliderModel.findByIdAndDelete(id);
      res.status(200).send({ msg: "Data Deleted Successfully" });
    } catch (error) {
      console.error("Delete error:", error);
      res.status(500).send({ msg: error.message });
    }
  });


  frontendapi.delete("/services/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await ServicesModel.findByIdAndDelete(id);
      res.status(200).send({ msg: "Data Deleted Successfully" });
    } catch (error) {
      console.error("Delete error:", error);
      res.status(500).send({ msg: error.message });
    }
  });

  frontendapi.delete("/gallery/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await GalleryModel.findByIdAndDelete(id);
      res.status(200).send({ msg: "Data Deleted Successfully" });
    } catch (error) {
      console.error("Delete error:", error);
      res.status(500).send({ msg: error.message });
    }
  });


  frontendapi.delete("/teams/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await TeamsModel.findByIdAndDelete(id);
      res.status(200).send({ msg: "Data Deleted Successfully" });
    } catch (error) {
      console.error("Delete error:", error);
      res.status(500).send({ msg: error.message });
    }
  });

  module.exports=frontendapi