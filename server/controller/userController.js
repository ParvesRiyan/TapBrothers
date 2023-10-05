import { User } from "../model/user.js";
import cloudinary from "cloudinary";

export const userregister = async (req, res) => {
  try {
    const { trxid, name, email, number, avatar, nationalid, perday } = req.body;

    let user = await User.findOne({ nationalid });

    if (user) {
      return res.status(400).json({
        success: false,
        message: "user already exist",
      });
    }

    const myCloude = await cloudinary.v2.uploader.upload(avatar, {
      folder: "avatar",
    });

    user = await User.create({
      trxid,
      name,
      email,
      number,
      avatar: {
        public_id: myCloude.public_id,
        url: myCloude.secure_url,
      },
      nationalid,
      perday,
    });

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const userDetails = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User Not Found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const userDelete = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    await cloudinary.v2.uploader.destroy(user.avatar.public_id);

    await user.deleteOne();

    res.status(200).json({
      success: true,
      message: "User Deleted Successfully !",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllusers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const newUserData = {
      trxid: req.body.trxid,
      name: req.body.name,
      avatar: req.body.avatar,
      email: req.body.email,
      number: req.body.number,
      nationalid: req.body.nationalid,
      totalsaveing: req.body.totalsaveing,
      totalloan: req.body.totalloan,
      totalpaidloan: req.body.totalpaidloan,
      totaldueloan: req.body.totaldueloan,
      perday: req.body.perday,
    };

    if (req.body.avatar !== "") {
      const user = await User.findById(req.params.id);

      const imageId = user.avatar.public_id;

      await cloudinary.v2.uploader.destroy(imageId);

      const myCloude = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: "avatar",
        width: 150,
        crop: "scale",
      });

      newUserData.avatar = {
        public_id: myCloude.public_id,
        url: myCloude.secure_url,
      };
    }

    const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
