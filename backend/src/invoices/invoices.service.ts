import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class InvoicesService {
  constructor(private prisma: PrismaService) {}

  async getAllInvoices(pagination: { skip: number; limit: number }) {
    return this.prisma.invoice.findMany({
      skip: pagination.skip,
      take: pagination.limit,
    });
  }

  async getInvoiceById(id: number) {
    return this.prisma.invoice.findUnique({
      where: { id },
    });
  }

  async getTotalAmount() {
    const result = await this.prisma.invoice.aggregate({
      _sum: {
        amount: true,
      },
    });
    return { totalAmount: result._sum.amount || 0 };
  }
}
