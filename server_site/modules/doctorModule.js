import express from "express";
import doctorModel from "../usermodel/doctorSchema.js";

export const doctorInfo = async (req, res) => {
     try {
       const doctor = await doctorModel.findOne({ userId: req.body.userId });
       res.status(200).json({
         success: true,
         data: doctor,
         msg: "Doctor info fetched successfully",
       });
     } catch (error) {
       return res
         .status(500)
         .json({ msg: "Error getting doctor info ", success: false, error });
     }
   };
   

// controllers/doctorController.js

export const updateDoctorInfo = async (req, res) => {
  try {
    const doctor = await doctorModel.findOneAndUpdate(
      { userId: req.body.userId },
      req.body,
      { new: true }  
    );
    res.status(200).json({
      success: true,
      msg: "Doctor info updated successfully",
      data: doctor,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error updating doctor info",
      success: false,
      error,
    });
  }
};

     


export const doctorInformation = async (req, res) => {
  try {
    const doctor = await doctorModel.findOne({ _id: req.body.doctorId });
    console.log(doctor);
    if (!doctor) {
      return res.status(404).json({ msg: "Doctor not found", success: false });
    }
    res.status(200).json({
      success: true,
      data: doctor,
      msg: "Doctor info fetched successfully",
    });
  } catch (error) {
    console.error("Error getting doctor info: ", error);
    return res.status(500).json({ msg: "Error getting doctor info", success: false, error });
  }
};

     