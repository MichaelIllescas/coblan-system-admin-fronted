import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import BadgeIcon from '@mui/icons-material/Badge';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BuildIcon from '@mui/icons-material/Build';
import '../styles/DashboardSummaryCards.css'; 
const summaryItems = [
  {
    title: 'Clientes registrados',
    value: 124,
    icon: <GroupIcon fontSize="large" color="primary" />,
  },
  {
    title: 'Empleados',
    value: 16,
    icon: <BadgeIcon fontSize="large" color="success" />,
  },
  {
    title: 'Contrataciones',
    value: 38,
    icon: <AssignmentIcon fontSize="large" color="error" />,
  },
  {
    title: 'Servicios',
    value: 9,
    icon: <BuildIcon fontSize="large" color="warning" />,
  },
];

const DashboardSummaryCards = () => {
  return (
    <Grid container direction="column" spacing={2}>
      {summaryItems.map((item, index) => (
        <Grid item xs={12} key={index}>
          <Paper className="summary-card">
            <Box className="summary-icon">{item.icon}</Box>
            <Box className="summary-text">
              <Typography variant="body2" color="text.secondary">
                {item.title}
              </Typography>
              <Typography variant="h6" fontWeight="bold">
                {item.value}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default DashboardSummaryCards;
