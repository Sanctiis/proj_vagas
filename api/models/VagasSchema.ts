import * as mongoose from 'mongoose'

const VagasSchema = new mongoose.Schema({
  cargo: {type:String},
  cidade: {type:String},
  escolaridade: {type:String},
  createdAt: {type:Date},
  isActive: {type:Boolean}
});

export default VagasSchema;