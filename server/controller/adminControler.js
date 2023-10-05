import { Admin } from "../model/admin.js";
import cloudinary from "cloudinary";
import { User } from "../model/user.js";
import { Contact } from "../model/contact.js";
import { AdminNote } from "../model/adminNote.js";

export const register = async (req, res) => {
  try {
    const { name, email, password, number, avatar, admininvestment } = req.body;

    let admin = await Admin.findOne({ email });

    if (admin) {
      return res.status(400).json({
        success: false,
        message: "Admin already exist",
      });
    }

    const myCloude = await cloudinary.v2.uploader.upload(avatar, {
      folder: "avatar",
    });

    admin = await Admin.create({
      name,
      email,
      password,
      number,
      avatar: {
        public_id: myCloude.public_id,
        url: myCloude.secure_url,
      },
      admininvestment,
    });

    res.status(201).json({
      success: true,
      admin,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email }).select("+password");

    if (!admin) {
      return res.status(400).json({
        success: false,
        message: "Admin dose not exist",
      });
    }

    const isMatch = await admin.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalide Credintial",
      });
    }

    const token = await admin.generateToken();

    const options = {
      httpOnly: true,
      expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    };

    res.status(200).cookie("token", token, options).json({
      success: true,
      admin,
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const logout = (req, res) => {
  try {
    res
      .status(200)
      .cookie("token", null, { expires: new Date(Date.now()), httpOnly: true })
      .json({
        success: true,
        message: "logout successfully !",
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const admindetails = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin._id);

    res.status(200).json({
      success: true,
      admin,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const admininvestmentadd = async (req, res) => {
  try {
    const addinvestment = {
      name: req.body.name,
      amount: req.body.amount,
    };

    const admin = await Admin.findById(req.admin._id);

    if (!admin) {
      res.status(404).json({
        success: false,
        message: "Admin Not Found, please login",
      });
    }

    const adminNotMatch = await admin.admininvestment.every((obj) => {
      return obj.name !== addinvestment.name;
    });

    if (adminNotMatch) {
      admin.admininvestment.unshift(addinvestment);

      let totalinvest = 0;

      admin.admininvestment.forEach((item) => {
        return (totalinvest += item.amount);
      });

      admin.totalinvestment = totalinvest;

      await admin.save();

      return res.status(200).json({
        success: true,
        message: "Added investor successfully !",
      });
    } else {
      admin.admininvestment.forEach((item) => {
        if (item.name.includes(addinvestment.name)) {
          item.amount = item.amount + addinvestment.amount;
          return (admin.admininvestment.amount = item.amount);
        }
      });

      let totalinvest = 0;

      admin.admininvestment.forEach((item) => {
        return (totalinvest += item.amount);
      });

      admin.totalinvestment = totalinvest;

      await admin.save();

      return res.status(200).json({
        success: true,
        message: "Updated investor successfully !",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const addDailySaveing = async (req, res) => {
  try {
    const dailySaveing = {
      amount: req.body.amount,
      day: req.body.day,
    };

    const user = await User.findById(req.params.id);

    user.daily_saveing.unshift(dailySaveing);

    await user.save();

    res.status(200).json({
      success: true,
      message: "User Add Saveing Today successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const addDailyPaidLoan = async (req, res) => {
  try {
    const dailyPaidLoan = {
      amount: req.body.amount,
      day: req.body.day,
    };

    const user = await User.findById(req.params.id);

    user.daily_paid_loan.unshift(dailyPaidLoan);

    await user.save();

    res.status(200).json({
      success: true,
      message: "User paid loan today successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const addMonthlySaveing = async (req, res) => {
  try {
    const monthlySaveing = {
      amount: req.body.amount,
      month: req.body.month,
    };

    const user = await User.findById(req.params.id);

    user.monthly_saveing.unshift(monthlySaveing);

    const totalSaveingInMonth = user.totalsaveing + monthlySaveing.amount;

    user.totalsaveing = totalSaveingInMonth;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Monthly Saveing Update Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const addMonthlyPaidLoan = async (req, res) => {
  try {
    const monthlyPaidLoan = {
      amount: req.body.amount,
      month: req.body.month,
    };

    const user = await User.findById(req.params.id);
    const admin = await Admin.findById(req.admin._id);

    user.monthly_paid_loan.unshift(monthlyPaidLoan);

    const TotalPaidLoan = user.totalpaidloan + monthlyPaidLoan.amount;
    user.totalpaidloan = TotalPaidLoan;

    if (user.totalpaidloan > user.totalloan) {
      const DoneProfitATM = user.totalpaidloan - user.totalloan;

      if (DoneProfitATM >= user.totalprofitbyloan) {
        user.totaldueloan = 0;
      } else {
        user.totaldueloan = user.totalprofitbyloan - DoneProfitATM;
      }
    } else {
      const TotalDueLoan = user.totalloan - user.totalpaidloan;
      user.totaldueloan = TotalDueLoan + user.totalprofitbyloan;
    }

    if (user.totaldueloan === 0 || user.totaldueloan < -1) {
      admin.profitatthismonth += user.totalprofitbyloan;
      await admin.save();
      user.totalloan = 0;
      user.totalpaidloan = 0;
      user.totalprofitbyloan = 0;
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: "Monthly paid loan update Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const addWidraw = async (req, res) => {
  try {
    const Widraw = {
      amount: req.body.amount,
      date: req.body.month,
    };

    const user = await User.findById(req.params.id);

    user.widraw.unshift(Widraw);

    const totalsaveingafterWidraw = user.totalsaveing - Widraw.amount;

    user.totalsaveing = totalsaveingafterWidraw;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Widraw add successfully !",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const addTotalLoan = async (req, res) => {
  try {
    const AddTotalLoan = { totalloan: req.body.totalloan };

    // const user = await User.findByIdAndUpdate(req.params.id, AddTotalLoan, {
    //   new: true,
    //   runValidators: true,
    //   useFindAndModify: false,
    // });

    const user = await User.findById(req.params.id);

    if (user.totalloan == 0) {
      user.totalloan = AddTotalLoan.totalloan;
    } else if (user.totalloan > 0) {
      user.totalloan = user.totalloan + AddTotalLoan.totalloan;
      if (user.totaldueloan !== 0) {
        user.totaldueloan =
          user.totaldueloan +
          AddTotalLoan.totalloan +
          (AddTotalLoan.totalloan * 10) / 100;
      }
    }

    const TotalProfitByLoan = (user.totalloan * 10) / 100;

    user.totalprofitbyloan = TotalProfitByLoan;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Added loan successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const totalUserSaveing = async (req, res) => {
  try {
    const users = await User.find();
    const admin = await Admin.findById(req.admin._id);

    let totalsaveing = 0;
    let totalinvest = 0;

    for (let key in users) {
      const allUserTotalSaveing = [users[key].totalsaveing];

      allUserTotalSaveing.forEach((amount) => {
        totalsaveing += amount;
      });
    }

    admin.totalusersaveing = totalsaveing;

    admin.admininvestment.forEach((item) => {
      return (totalinvest += item.amount);
    });

    admin.totalinvestment = totalinvest + totalsaveing;

    await admin.save();

    res.status(200).json({
      success: true,
      totalsaveing,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const AddProfitToInvest = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin._id);

    if (!admin) {
      return res.status(400).json({
        success: false,
        message: "Admin dose not exist",
      });
    }

    const ComeProfit = admin.profitatthismonth;

    if (ComeProfit === 0) {
      return res.status(400).json({
        success: false,
        message: "profit has been low",
      });
    }

    admin.admininvestment.forEach((item) => {
      if (item.name.includes("profit")) {
        item.amount = item.amount + ComeProfit;
        return (admin.admininvestment.amount = item.amount);
      }
    });

    let totalinvest = 0;

    admin.admininvestment.forEach((item) => {
      return (totalinvest += item.amount);
    });

    admin.totalinvestment = totalinvest;
    admin.profitatthismonth = 0;

    await admin.save();

    res.status(200).json({
      success: true,
      message: "Add Profit to investor successfully !",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const totalLoanDetails = async (req, res) => {
  try {
    const users = await User.find();
    const admin = await Admin.findById(req.admin._id);

    let totalUserLoan = 0;
    let totalUserPaidLoan = 0;
    let totalUserDueLoan = 0;
    let totalProfitByUser = 0;

    for (let key in users) {
      const AllUserTotalLoan = [
        [users[key].totalloan],
        [users[key].totalpaidloan],
        [users[key].totaldueloan],
        [users[key].totalprofitbyloan],
      ];

      AllUserTotalLoan[0].forEach((loanAmount) => {
        totalUserLoan += loanAmount;
      });
      AllUserTotalLoan[1].forEach((paidAmount) => {
        totalUserPaidLoan += paidAmount;
      });
      AllUserTotalLoan[2].forEach((dueAmount) => {
        totalUserDueLoan += dueAmount;
      });
      AllUserTotalLoan[3].forEach((profitAmount) => {
        totalProfitByUser += profitAmount;
      });
    }

    admin.totaluserloan = totalUserLoan;
    admin.totaluserpaidloan = totalUserPaidLoan;
    admin.totaluserdueloan = totalUserDueLoan;
    admin.totalprofitbyuser = totalProfitByUser;

    await admin.save();

    const loanDetails = {
      totalUserLoan,
      totalUserPaidLoan,
      totalUserDueLoan,
      totalProfitByUser,
    };

    res.status(200).json({
      success: true,
      loanDetails,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const contact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    let contact = await Contact.findOne({ email });

    if (contact) {
      return res.status(400).json({
        success: false,
        message: "Your Previous message Already exist",
      });
    }

    contact = await Contact.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteMessage = async (req, res) => {
  try {
    const message = await Contact.findById(req.params.id);

    await message.deleteOne();

    res.status(200).json({
      success: true,
      message: "delete user message Successfull !",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getMessage = async (req, res) => {
  try {
    const messages = await Contact.find();

    res.status(200).json({
      success: true,
      messages,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const adminNote = async (req, res) => {
  try {
    let { name, message } = req.body;

    let adminNote = await AdminNote.create({
      name,
      message,
    });

    res.status(201).json({
      success: true,
      adminNote,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getNotes = async (req, res) => {
  try {
    const notes = await AdminNote.find();

    res.status(200).json({
      success: true,
      notes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const Note = await AdminNote.findById(req.params.id);

    await Note.deleteOne();

    res.status(200).json({
      success: true,
      message: "delete Admin Note Successfull !",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
