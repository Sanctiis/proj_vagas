import VagasRepository from '../repositories/VagasRepository'

class VagasService {

  get(){
    return VagasRepository.find({});
  }

  getById(_id) {
    return VagasRepository.findById(_id);
  }

  create(vagas){
    return VagasRepository.create(vagas);
  }

  update(_id, vagas) {
    return VagasRepository.findByIdAndUpdate(_id, vagas);
  }

  delete(_id) {
    return VagasRepository.findByIdAndRemove(_id);
  }

}

export default new VagasService();
