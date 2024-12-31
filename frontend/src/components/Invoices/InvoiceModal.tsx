import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

interface InvoiceModalProps {
  invoice: {
    id: number;
    vendor_name: string;
    amount: number;
    due_date: string;
    description: string;
    paid: boolean;
  };
  onClose: () => void;
}

const InvoiceModal: React.FC<InvoiceModalProps> = ({ invoice, onClose }) => {
  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>Invoice Details</DialogTitle>
      <DialogContent>
        <Typography variant="h6" gutterBottom>
          Vendor: {invoice.vendor_name}
        </Typography>
        <Typography>Amount: ${invoice.amount.toFixed(2)}</Typography>
        <Typography>Due Date: {invoice.due_date}</Typography>
        <Typography>Status: {invoice.paid ? "Paid" : "Open"}</Typography>
        <Typography>Description:</Typography>
        <Typography variant="body2" color="text.secondary">
          {invoice.description}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InvoiceModal;
