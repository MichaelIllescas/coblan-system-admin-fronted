import EditCompanyModal from "./EditCompanyModal";
import useCompanyUpdate from '../hooks/useCompanyUpdate';
import useEditModal from "../../../hooks/useEditModal";


const CompanyDetails = ({ company }) => {
  const { modalVisible, selectedItem, openModal, closeModal } = useEditModal();
  const { handleUpdate } = useCompanyUpdate();

  return (
    <div className="card border p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>Datos de la Empresa</h5>
        <button className="btn btn-primary mt-2" onClick={() => openModal(company)}>
            Editar datos
          </button>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <strong>Razón Social:</strong>
          <div>{company.businessName}</div>
        </div>
        <div className="col-md-6 mb-3">
          <strong>CUIT:</strong>
          <div>{company.cuit}</div>
        </div>
        <div className="col-md-6 mb-3">
          <strong>Condición IVA:</strong>
          <div>{company.ivaCondition.replaceAll("_", " ")}</div>
        </div>
        <div className="col-md-6 mb-3">
          <strong>Domicilio Fiscal:</strong>
          <div>{company.fiscalAddress}</div>
        </div>
        {company.tradeName && (
          <div className="col-md-6 mb-3">
            <strong>Nombre de Fantasía:</strong>
            <div>{company.tradeName}</div>
          </div>
        )}
        <div className="col-md-6 mb-3">
          <strong>Email:</strong>
          <div>{company.email}</div>
        </div>
        <div className="col-md-6 mb-3">
          <strong>Teléfono:</strong>
          <div>{company.phone}</div>
        </div>
      </div>

      <EditCompanyModal
        show={modalVisible}
        onClose={closeModal}
        company={selectedItem}
        onConfirm={(data) =>
          handleUpdate({
            updatedData: data,
            onSuccess: () => {
              closeModal();
            },
            onClose: closeModal,
          })
        }
      />
    </div>
  );
};

export default CompanyDetails;

