import { Controller, Get, Param, Req } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('invoices')
export class InvoicesController {
  constructor(private invoicesService: InvoicesService) {}

  @Get()
  async getInvoices(@Req() req: Request & { pagination: any }) {
    return this.invoicesService.getAllInvoices(req.pagination);
  }

  @Get(':id')
  async getInvoice(@Param('id') id: string) {
    return this.invoicesService.getInvoiceById(Number(id));
  }

  @Get('total')
  async getTotal() {
    return this.invoicesService.getTotalAmount();
  }
}
