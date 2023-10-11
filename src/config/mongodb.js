/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import { MongoClient, ServerApiVersion } from 'mongodb'
import { env } from '~/config/environment'

// ban đầu là null vì chưa connect tới mongodb
let trelloDatabaseInstance = null

const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
    }
})

// Ket noi toi Database
export const CONNECT_DB = async () => {
    // Goi ket noi toi MongoDB atlas voi URI da khai bao trong than cua mongoClientInstance
    await mongoClientInstance.connect()
    trelloDatabaseInstance = mongoClientInstance.db(env.DATABASE_NAME)
    
}

export const CLOSE_DB = async () => {
    await mongoClientInstance.close()
    trelloDatabaseInstance = null
}

export const GET_DB = () => {
    if(!trelloDatabaseInstance) throw new Error('Must connect to Database first')
    return trelloDatabaseInstance
}