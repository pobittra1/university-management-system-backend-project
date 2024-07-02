import express from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { enrolledCourseController } from "./enrolledCourse.controller";
import { EnrolledCourseValidations } from "./enrolledCourse.validation";

//destructure controllers
const { createEnrolledCourse } = enrolledCourseController;
//destructure validations
const { createEnrolledCourseValidationZodSchema } = EnrolledCourseValidations;
const router = express.Router();

router.post(
  "/create-enrolled-course",
  auth("student"),
  validateRequest(createEnrolledCourseValidationZodSchema),
  createEnrolledCourse
);

export const enrolledCourseRoute = router;