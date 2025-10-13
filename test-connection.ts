// test-connection.ts
import { PrismaClient } from './src/generated/prisma/index.js';

const prisma = new PrismaClient();

async function testConnection() {
  try {
    await prisma.$connect();
    console.log('✅ Conexión exitosa a la base de datos');

    // Verify if the table exist
    const userCount = await prisma.userProfile.count();
    console.log(`📊 Usuarios en la base de datos: ${userCount}`);
  } catch (error) {
    console.error('❌ Error de conexión:', error);
  } finally {
    await prisma.$disconnect();
  }
}

await testConnection();
