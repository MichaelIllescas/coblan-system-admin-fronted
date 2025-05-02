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
        path: "/customerRegister",
        label: "Nuevo Cliente",
        icon: <UserPlus size={18} />,
      },
      { path: "/customersList", label: "Listado De Clientes", icon: <List size={18} /> },
      
    ],
  },
  {
    label: "Empleados",
    icon: <UserCog size={20} />,
    children: [
      {
        path: "/employeeRegister",
        label: "Nuevo Empleado",
        icon: <UserPlus size={18} />,
      },
      {
        path: "/employeesList",
        label: "Listado De Empleados",
        icon: <List size={18} />,
      },
      
    ],
  },

  {
    label: "Gastos",
    icon: <CreditCard size={20} />,
    children: [
      {
        path: "/expenses/create",
        label: "Nuevo Gasto",
        icon: <DollarSign size={18} />,
      },
      {
        path: "/expensesList",
        label: "Listado De Gastos",
        icon: <List size={18} />,
      },
    ],
  },
  {
    label: "Contrataciones",
    icon: <Briefcase size={20} />,
    children: [
      {
        path: "/hiring/register",
        label: "Nueva Contratacion",
        icon: <UserPlus size={18} />,
      },
      { path: "/hiring/list", label: "Listado General", icon: <List size={18} /> },
      { path: "/hiring/listMonthly", label: "Listado Mensual", icon: <List size={18} /> },
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
        path: "/salary/register",
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
        path: "/servicesList",
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
      { path: "/usersList", label: "Lisado De Usuarios", icon: <List size={18} /> },
     
    ],
  },
];



