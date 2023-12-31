/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import { StatusCodes } from 'http-status-codes'
import { boardService } from '~/services/boardService'
import { ApiResponse } from '~/utils/ApiResponse'


const createNew = async(req, res, next) => {
  try {
    // lấy kết quả từ tầng Service
    const createdBoard = await boardService.createNew(req.body)
    res.status(StatusCodes.CREATED).json(new ApiResponse({
      code: StatusCodes.CREATED,
      data: createdBoard,
      error: !Boolean(createdBoard)
    }))
  } catch (error) {
    next(error)
  }
}

export const boardController = {
  createNew
}