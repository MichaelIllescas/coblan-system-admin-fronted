import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { FaDownload } from "react-icons/fa";
import CoblanSummaryPDF from "./CoblanSummaryPDF";

const BtnDownloadCoblanSummary = ({ hiring, company }) => {
  if (!hiring || !company) return null;

  return (
    <PDFDownloadLink 
      document={<CoblanSummaryPDF data={hiring} company={company} />}
      fileName={`resumen_contratacion_${hiring.id || "sin_id"}.pdf`}
      className="btn btn-action btn-sm p-2"
    >
      {({ loading }) =>
        loading ? "Generando PDF..." : (
          <span
            title="Descargar resumen de contratación"
            style={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            <FaDownload size={16}/> 
          </span>
        )
      }
    </PDFDownloadLink>
  );
};

export default BtnDownloadCoblanSummary;