import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('password', 10);

  const user = await prisma.user.create({
    data: {
      email: 'demo@example.com',
      password: hashedPassword,
      name: 'Demo User',
      invoices: {
        create: [
          {
            vendor_name: 'Amazon',
            amount: 100.5,
            due_date: new Date('2024-12-31'),
            date: new Date('2024-11-13'),
            description: 'Rental',
            paid: false,
          },
          {
            vendor_name: 'Sysco',
            amount: 200.0,
            due_date: new Date('2024-11-30'),
            date: new Date('2024-11-13'),
            description: 'Rental',
            paid: true,
          },
        ],
      },
    },
  });

  console.log('Seeded user:', user);
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
