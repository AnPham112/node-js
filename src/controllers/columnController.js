import { StatusCodes } from 'http-status-codes'
import { columnService } from '~/services/columnService'
import { ApiResponse } from '~/utils/ApiResponse'


const createNew = async(req, res, next) => {
  try {
    const createdColumn = await columnService.createNew(req.body)
    res.status(StatusCodes.CREATED).json(new ApiResponse({
      code: StatusCodes.CREATED,
      data: createdColumn,
      error: !Boolean(createdColumn)
    }))
  } catch (error) {
    next(error)
  }
}

export const columnController = {
  createNew
}