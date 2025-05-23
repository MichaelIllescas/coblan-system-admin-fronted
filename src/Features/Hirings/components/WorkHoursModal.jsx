import React, { useState } from "react";
import { Modal, Button, Table, Pagination } from "react-bootstrap";
import {formatDateToDDMMYYYY} from  '../../../utils/formatDateToDDMMYYYY'

const WorkHoursModal = ({ show, onClose, workHours = [], hiringId }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(workHours.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = workHours.slice(startIndex, startIndex + itemsPerPage);


  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPagination = () => {
    const items = [];

    items.push(
      <Pagination.Prev
        key="prev"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      />
    );

    for (let number = 1; number <= totalPages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </Pagination.Item>
      );
    }

    items.push(
      <Pagination.Next
        key="next"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      />
    );

    return (
      <Pagination className="justify-content-center mt-3">{items}</Pagination>
    );
  };

  return (
    <Modal show={show} onHide={onClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Horas trabajadas - Contratación #{hiringId}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {workHours.length === 0 ? (
          <p>No hay horas registradas.</p>
        ) : (
          <>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Duración (Mins.)</th>
                  <th>Precio</th>

                  <th>Tipo</th>
                  <th>Estado</th>
                  <th>Empleado</th>
                  <th>Observación</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((hour) => (
                  <tr key={hour.id}>
                    <td>{formatDateToDDMMYYYY(hour.date)}</td>
                    <td>{hour.hour}</td>
                    <td className="text-center">{hour.duration}</td>
                    <td className="text-center">${hour.price}</td>
                    <td>{hour.type}</td>
                    <td>
                      {hour.status === "PENDING"
                        ? "Pendiente"
                        : hour.status === "CANCELLED"
                        ? "Cancelada"
                        : "Confirmada"}
                    </td>
                    <td>{hour.employeeName}</td>
                    <td>{hour.note || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            {totalPages > 1 && renderPagination()}
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            setCurrentPage(1); // Reinicia al cerrar
            onClose();
          }}
        >
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WorkHoursModal;
