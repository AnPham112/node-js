/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import express from 'express'
import { boardRoute } from './boardRoute'

const Router = express.Router()

Router.use('/boards', boardRoute)

export const APIs_V1 = Router