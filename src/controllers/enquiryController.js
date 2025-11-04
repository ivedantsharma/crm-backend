// src/controllers/enquiryController.js
import Enquiry from "../models/Enquiry.js";

/**
 * POST /enquiry/public
 * Public endpoint where any client can submit an enquiry.
 */
export const submitPublicEnquiry = async (req, res, next) => {
  try {
    const { name, email, courseInterest, message } = req.body;
    const enquiry = await Enquiry.create({
      name,
      email,
      courseInterest,
      message,
    });
    return res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      data: enquiry,
    });
  } catch (err) {
    next(err);
  }
};

/**
 * GET /enquiry/public
 * Auth required. Fetch all unclaimed enquiries (claimedBy == null)
 */
export const getPublicEnquiries = async (req, res, next) => {
  try {
    const enquiries = await Enquiry.find({ claimedBy: null }).sort({
      createdAt: -1,
    });
    return res.status(200).json({ success: true, data: enquiries });
  } catch (err) {
    next(err);
  }
};

/**
 * POST /enquiry/claim/:id
 * Auth required. Claim an unclaimed enquiry; set claimedBy and claimedAt.
 */
export const claimEnquiry = async (req, res, next) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id);
    if (!enquiry)
      return res
        .status(404)
        .json({ success: false, message: "Enquiry not found" });

    if (enquiry.claimedBy)
      return res
        .status(400)
        .json({ success: false, message: "Enquiry already claimed" });

    enquiry.claimedBy = req.user.id;
    enquiry.claimedAt = new Date();
    await enquiry.save();

    return res
      .status(200)
      .json({ success: true, message: "Enquiry claimed", data: enquiry });
  } catch (err) {
    next(err);
  }
};

/**
 * GET /enquiry/private
 * Auth required. Fetch enquiries claimed by the logged-in employee.
 */
export const getPrivateEnquiries = async (req, res, next) => {
  try {
    const enquiries = await Enquiry.find({ claimedBy: req.user.id }).sort({
      claimedAt: -1,
    });
    return res.status(200).json({ success: true, data: enquiries });
  } catch (err) {
    next(err);
  }
};
