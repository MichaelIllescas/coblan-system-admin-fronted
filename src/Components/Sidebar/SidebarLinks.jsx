import {
  Users,
  UserCog,
  CreditCard,
  Briefcase,
  BarChart2,
  DollarSign,
  Settings,
  UserCircle2,
  FileText,
  PieChart,
  PlusCircle,
  UserPlus,
  List,
  Ban,
  Clock,
} from "lucide-react";

export const sidebarLinks = [
  {
    label: "Clientes",
    icon: <Users size={20} />,
    children: [
      {
        path: "/clients/create",
        label: "Nuevo Cliente",
        icon: <UserPlus size={18} />,
      },
      { path: "/clients/list", label: "Listado De Clientes", icon: <List size={18} /> },
      {
        path: "/clients/inactives",
        label: "Clientes Inactivos",
        icon: <Ban size={18} />,
      },
    ],
  },
  {
    label: "Empleados",
    icon: <UserCog size={20} />,
    children: [
      {
        path: "/employees/create",
        label: "Nuevo Empleado",
        icon: <UserPlus size={18} />,
      },
      {
        path: "/employees/list",
        label: "Listado De Empleados",
        icon: <List size={18} />,
      },
      {
        path: "/employees/inactives",
        label: "Empleados Inactivos",
        icon: <Ban size={18} />,
      },
    ],
  },

  {
    label: "pagos",
    icon: <CreditCard size={20} />,
    children: [
      {
        path: "/expenses/create",
        label: "Nuevo Pago",
        icon: <DollarSign size={18} />,
      },
      {
        path: "/expenses/list",
        label: "Listado De Pagos",
        icon: <List size={18} />,
      },
    ],
  },
  {
    label: "Contrataciones",
    icon: <Briefcase size={20} />,
    children: [
      {
        path: "/hiring/create",
        label: "Nueva Contratacion",
        icon: <UserPlus size={18} />,
      },
      { path: "/hiring/list", label: "Listado De Contrataciones", icon: <List size={18} /> },
      {
        path: "/hiring/pending-hours",
        label: "Horas Pendientes",
        icon: <Clock size={18} />,
      },
    ],
  },
  {
    label: "Reportes",
    icon: <BarChart2 size={20} />,
    children: [
      {
        path: "/reports/hiring",
        label: "Reporte De Contrataciones",
        icon: <FileText size={18} />,
      },
      {
        path: "/reports/employees-hours",
        label: "Horas De Empleados",
        icon: <Clock size={18} />,
      },
      {
        path: "/reports/financial",
        label: "Reporte Financiero",
        icon: <PieChart size={18} />,
      },
    ],
  },

  {
    label: "Salarios",
    icon: <DollarSign size={20} />,
    children: [
      {
        path: "/salary/create",
        label: "Nuevo Pago Salario",
        icon: <PlusCircle size={18} />,
      },
      {
        path: "/salary/list",
        label: "Listado Pago De Salarios",
        icon: <List size={18} />,
      },
    ],
  },

  {
    label: "Servicios",
    icon: <Settings size={20} />,
    children: [
      {
        path: "/services/create",
        label: "Nuevo Servicio",
        icon: <PlusCircle size={18} />,
      },
      {
        path: "/services/list",
        label: "Listado De Servicios",
        icon: <List size={18} />,
      },
    ],
  },
  {
    label: "Usuarios",
    icon: <UserCircle2 size={20} />,
    children: [
      {
        path: "/users/create",
        label: "Crear Usuario",
        icon: <UserPlus size={18} />,
      },
      { path: "/users/list", label: "Lisado De Usuarios", icon: <List size={18} /> },
     
    ],
  },
];
