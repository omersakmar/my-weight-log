import Log from "../models/Log.js";

export const createLog = async (req, res, next) => {
  const newLog = new Log(req.body);

  try {
    const savedLog = await newLog.save();
    res.status(200).json(savedLog);
  } catch (err) {
    next(err);
  }
};

// POSSIBLE EXTRA FEATURES

// export const updateLog = async (req, res, next) => {
//   try {
//     const updateLog = await Log.findByIdAndUpdate(
//       req.params.id,
//       { $set: req.body },
//       { new: true }
//     );
//     res.status(200).json(updateLog);
//   } catch (err) {
//     next(err);
//   }
// };
// export const deleteLog = async (req, res, next) => {
//   try {
//     await Log.findByIdAndDelete(req.params.id);
//     res.status(200).json("Log has been deleted.");
//   } catch (err) {
//     next(err);
//   }
// };
export const getLog = async (req, res, next) => {
  try {
    const log = await Log.findById(req.params.id);
    res.status(200).json(log);
  } catch (err) {
    next(err);
  }
};
export const getLogs = async (req, res, next) => {
  try {
    const logs = await Log.find();
    res.status(200).json(logs);
  } catch (err) {
    next(err);
  }
};
