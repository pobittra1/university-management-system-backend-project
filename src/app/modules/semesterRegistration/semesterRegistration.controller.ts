import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { semesterRegistrationService } from "./semesterRegistration.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await semesterRegistrationService.createSemesterRegistrationIntoDB(
        req.body
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Semester Registration is created successfully!",
      data: result,
    });
  }
);

const getAllSemesterRegistrations = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await semesterRegistrationService.getAllSemesterRegistrationsFromDB(
        req.query
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Semester Registration is retrieved successfully !",
      data: result,
    });
  }
);

const getSingleSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const result =
      await semesterRegistrationService.getSingleSemesterRegistrationsFromDB(
        id
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Semester Registration is retrieved successfully",
      data: result,
    });
  }
);

const updateSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result =
      await semesterRegistrationService.updateSemesterRegistrationIntoDB(
        id,
        req.body
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Semester Registration is updated successfully",
      data: result,
    });
  }
);

export const semesterRegistrationController = {
  createSemesterRegistration,
  getAllSemesterRegistrations,
  getSingleSemesterRegistration,
  updateSemesterRegistration,
};
