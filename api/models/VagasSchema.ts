import * as mongoose from 'mongoose'

const VagasSchema = new mongoose.Schema({
  cargo: {type:String},
  cidade: {type:String},
  escolaridade: {type:String},
  isActive: {type:Boolean},
  timestamps: {type:Boolean}
});

export default VagasSchema;