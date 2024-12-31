import { useState } from "react";
import { useQuery } from "react-query";
import { fetchInvoices } from "../api/invoices";
import InvoiceList from "../components/Invoices/InvoiceList";
import InvoiceModal from "../components/Invoices/InvoiceModal";
import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Alert,
  Grid,
  AppBar,
  List,
  Drawer,
  Avatar,
  IconButton,
  InputBase,
  ListItem,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Invoice } from "../types/invoice";
import { Notifications, Settings, Brightness4 } from "@mui/icons-material";
const Dashboard = () => {
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const { data, isLoading, error } = useQuery("invoices", fetchInvoices);
  console.log({ data, isLoading, error });

  if (isLoading) return <CircularProgress />;
  if (error) return <Alert severity="error">Error fetching invoices</Alert>;

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 240,
            boxSizing: "border-box",
            background: "linear-gradient(180deg, #dfe9f3, #ffffff)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 64,
          }}
        >
          <Typography variant="h6">LOGO</Typography>
        </Box>
        <List>
          {["Home", "Invoices", "Bills", "Expenses", "Reports"].map((text) => (
            <ListItem component="div" key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {/* Top Navigation Bar */}
        <AppBar
          position="static"
          color="inherit"
          elevation={0}
          sx={{ borderBottom: "1px solid #ddd" }}
        >
          <Toolbar>
            <Typography variant="body1" sx={{ flexGrow: 1 }}>
              Home / Invoices
            </Typography>
            <Box
              sx={{
                position: "relative",
                borderRadius: 2,
                backgroundColor: "#f0f0f0",
                marginRight: 2,
                width: "300px",
              }}
            >
              <InputBase
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
                sx={{ paddingLeft: 2, width: "100%" }}
              />
            </Box>
            <IconButton>
              <Notifications />
            </IconButton>
            <IconButton>
              <Settings />
            </IconButton>
            <IconButton>
              <Brightness4 />
            </IconButton>
            <Avatar sx={{ marginLeft: 2 }}>A</Avatar>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg" sx={{ paddingTop: "2rem" }}>
          <Typography variant="h4" gutterBottom>
            Invoice Management
          </Typography>

          {isLoading && <CircularProgress />}
          {error && <Alert severity="error">Error fetching invoices</Alert>}

          {data && (
            <Box sx={{ marginTop: "2rem" }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <InvoiceList
                    invoices={data}
                    onInvoiceClick={(invoice) => setSelectedInvoice(invoice)}
                  />
                </Grid>
              </Grid>
            </Box>
          )}

          {selectedInvoice && (
            <InvoiceModal
              invoice={selectedInvoice}
              onClose={() => setSelectedInvoice(null)}
            />
          )}
        </Container>
      </Box>
    </Box>
  );
};
export default Dashboard;
