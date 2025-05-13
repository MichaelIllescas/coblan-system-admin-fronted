import React from "react";
import EmployeeSelect from "../../../Components/Selects/EmployeeSelect";
import ServiceSelect from "../../../Components/Selects/ServiceSelect";
import CustomerSelect from "../../../Components/Selects/CustomerSelect";
import ScheduleSelector from "../components/ScheduleSelector";
import useHiringForm from "../hooks/useHiringForm";
import FullScreenLoader from "../../../Components/Loading/FullScreenLoader";
import {formatDateToDDMMYYYY} from '../../../utils/formatDateToDDMMYYYY';
import { daysOfWeek } from '../../../utils/dayOptions';

const HiringRegisterPage = () => {
  const {
    startDate,
    employee,
    service,
    customer,
    schedule,
    errors,
    loading,
    setStartDate,
    setEmployee,
    setService,
    setCustomer,
    setSchedule,
    handleSubmit,
  } = useHiringForm();

  const getDayLabel = (value) => {
  const match = daysOfWeek.find((d) => d.value === value);
  return match ? match.label : value;
}; 
  return (
    <div className="container mt-2">
      {loading && <FullScreenLoader/>}
      <div className="row">
        <div className="col-md-6">
          <div className="card shadow p-4 mb-4">
            <h4 className="mb-4">Registrar Contratación</h4>

            <div className="mb-2">
              <label htmlFor="startDate" className="form-label">
                Fecha de Inicio
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                className={`form-control ${
                  errors.startDate ? "is-invalid" : ""
                }`}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              {errors.startDate && (
                <div className="invalid-feedback">{errors.startDate}</div>
              )}
            </div>

            <div className="mb-2">
              <EmployeeSelect onSelect={setEmployee} value={employee} />
              {errors.employee && (
                <div className="text-danger small">{errors.employee}</div>
              )}
            </div>

            <div className="mb-2">
              <ServiceSelect onSelect={setService} value={service} />
              {errors.service && (
                <div className="text-danger small">{errors.service}</div>
              )}
            </div>

            <div className="mb-2">
              <CustomerSelect onSelect={setCustomer} value={customer} />
              {errors.customer && (
                <div className="text-danger small">{errors.customer}</div>
              )}
            </div>

            <div className="mb-2">
              <ScheduleSelector onChange={setSchedule} value={schedule} />
              {errors.schedule && (
                <div className="text-danger small">{errors.schedule}</div>
              )}
            </div>

          
          </div>
        </div>

        <div className="col-md-5">
          <div className="card shadow p-4">
            <h5 className="mb-3">Detalle de la Contratación</h5>
            <p>
              <strong>Fecha de Inicio:</strong> {formatDateToDDMMYYYY(startDate) || "No seleccionada"}
            </p>
            <p>
              <strong>Empleado:</strong> {employee?.label || "No seleccionado"}
            </p>
            <p>
              <strong>Servicio:</strong> {service?.label || "No seleccionado"}
            </p>
            <p>
              <strong>Cliente:</strong> {customer?.label || "No seleccionado"}
            </p>

            <h6 className="mt-3">Horarios Seleccionados:</h6>
            {schedule.length === 0 ? (
              <p className="text-muted">No hay horarios seleccionados aún.</p>
            ) : (
              <ul className="list-group">
                {schedule.map((entry, index) => (
                  <li key={index} className="list-group-item">
                    {getDayLabel(entry.day)} – {entry.hour}
                  </li>
                ))}
              </ul>
            )}
            <p>
              <strong>Total:</strong> $
              {service?.raw?.totalAmount ?? ""}
            </p>
            <div className="text-end mt-4">
              <button className="btn btn-success" onClick={handleSubmit}>
                Confirmar Contratación
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringRegisterPage;
