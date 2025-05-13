import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import BadgeIcon from '@mui/icons-material/Badge';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BuildIcon from '@mui/icons-material/Build';
import useDashboardStats from '../hooks/useDashboardStats'; // Ruta real a tu hook
import '../styles/DashboardSummaryCards.css';

const DashboardSummaryCards = () => {
  const { stats, loading, error } = useDashboardStats();

  const summaryItems = [
    {
      title: 'Clientes registrados',
      value: stats.customers,
      icon: <GroupIcon fontSize="large" color="primary" />,
    },
    {
      title: 'Empleados',
      value: stats.employees,
      icon: <BadgeIcon fontSize="large" color="success" />,
    },
    {
      title: 'Contrataciones',
      value: stats.hirings,
      icon: <AssignmentIcon fontSize="large" color="error" />,
    },
    {
      title: 'Servicios',
      value: stats.services,
      icon: <BuildIcon fontSize="large" color="warning" />,
    },
  ];

  return (
    <Grid container direction="column" spacing={2}>
      {loading && <Typography className="text-center">Cargando estadísticas...</Typography>}
      {error && <Typography color="error">{error}</Typography>}

      {!loading &&
        summaryItems.map((item, index) => (
          <Grid item xs={12} key={index}>
            <Paper className="summary-card">
              <Box className="summary-icon">{item.icon}</Box>
              <Box className="summary-text">
                <Typography variant="body1"  color="text.muted" >
                  {item.title}
                </Typography>
                <Typography variant="h6" fontWeight="bold" >
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
