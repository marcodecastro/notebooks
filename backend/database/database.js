import mongoose from 'mongoose';
import dotenv from 'dotenv';


const database = {
  connect: async () => {
    try {
      const connectionString = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/notebook';

      if (!connectionString) {
        throw new Error('A variável de ambiente DB_CONNECTION_STRING não está definida.');
      }

      await mongoose.connect(connectionString, {
//        useNewUrlParser: true,
//        useUnifiedTopology: true,
      });

      console.log('Conexão com o banco de dados estabelecida');
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  },
  disconnect: async () => {
    await mongoose.disconnect();
    console.log('Conexão com o banco de dados encerrada');
  },
};

export default database;