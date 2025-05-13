import React from "react";
import MonthlyProfitChart from "../components/MonthlyProfitChart";
import { useAuth } from "../../../Context/AuthContext";
import DashboardSummaryCards from "../../Dashboard/components/DashboardSummaryCards";
import img from '../../../../src/assets/img/image-employee.png'

const DashboardPage = () => {
  const { user } = useAuth();
  return (
    <div className="container mt-4">
      <h1 className="text-white mb-4 fst-italic">Bienvenido {user.firstName}</h1>
      <div className="col-12 d-flex gap-3 flex-wrap mb-3">
        <div className="col-lg-5 col-sm-10 ">
          <MonthlyProfitChart />
        </div>
        <div className="col-lg-2 col-sm-10 conteiner-cards">
          <DashboardSummaryCards />
        </div>
        <div className="col-lg-3 col-sm-1 conteiner-img-employee">
          <img src={img} alt="imagen empleado de limpieza" />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
