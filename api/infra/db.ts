import * as mongoose from 'mongoose'

class Db {
    private DB_URL = 'mongodb://localhost:27017/vagas_db'

    createConnection() {
        mongoose.connect(this.DB_URL)
    }
}

export default Db