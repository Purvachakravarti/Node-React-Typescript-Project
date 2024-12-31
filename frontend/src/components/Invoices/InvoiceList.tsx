import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Invoice } from "../../types/invoice";

interface InvoiceListProps {
  invoices: Invoice[];
  onInvoiceClick: (invoice: Invoice) => void;
}

const InvoiceList: React.FC<InvoiceListProps> = ({
  invoices,
  onInvoiceClick,
}) => {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Payee</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow
              key={invoice.id}
              hover
              onClick={() => onInvoiceClick(invoice)}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              <TableCell>
                {new Date(invoice.date).toLocaleDateString("en-US") ?? "-"}
              </TableCell>
              <TableCell>{invoice.vendor_name}</TableCell>
              <TableCell>{invoice.description}</TableCell>
              <TableCell>
                {new Date(invoice.due_date).toLocaleDateString("en-US")}
              </TableCell>
              <TableCell>${invoice.amount.toFixed(2)}</TableCell>
              <TableCell>{invoice.paid ? "Paid" : "Open"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InvoiceList;
