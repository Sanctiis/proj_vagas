import * as mongoose from 'mongoose'
import VagasSchema from '../models/VagasSchema'

export default mongoose.model('vagas', VagasSchema);