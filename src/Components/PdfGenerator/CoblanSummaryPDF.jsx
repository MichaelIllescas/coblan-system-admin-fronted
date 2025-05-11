
import { formatDateToDDMMYYYY } from "../../utils/formatDateToDDMMYYYY"; 
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import logo from "../../assets/logo-removebg.png";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 11,
    backgroundColor: "#ffffff",
    color: "#000",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    height: 100,
    borderBottom: "1px solid #000",
  },
  companyInfo: {
    flex: 1,
  },
  logo: {
    width: 125,
    height: 95,
    marginTop: -10,
  },
  sectionTitle: {
    fontSize: 13,
    marginTop: 10,
    marginBottom: 5,
    fontWeight: "bold",
    borderBottom: "1px solid #000",
    paddingBottom: 3,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  column: {
    flex: 1,
    minWidth: "45%",
  },
  tableHeader: {
    flexDirection: "row",
    borderBottom: 1,
    marginTop: 5,
    paddingBottom: 2,
  },
  tableRow: {
    flexDirection: "row",
    borderBottom: 0.5,
    paddingVertical: 2,
  },
  col: {
    flex: 1,
    paddingHorizontal: 2,
  },
  footer: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 9,
    color: "gray",
  },
});

const formatCurrency = (value) => `$${(value ?? 0).toFixed(2)}`;

const dayLabels = {
  MONDAY: "Lunes",
  TUESDAY: "Martes",
  WEDNESDAY: "Miércoles",
  THURSDAY: "Jueves",
  FRIDAY: "Viernes",
  SATURDAY: "Sábado",
  SUNDAY: "Domingo",
};

const CoblanSummaryPDF = ({ data, company }) => {
  if (!data || !company) return null;
  const now = new Date().toLocaleString();

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header} fixed>
          <View style={styles.companyInfo}>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", marginBottom: 15 }}
            >
              {company.businessName}
            </Text>
            <Text>CUIT: {company.cuit}</Text>
            <Text>Dirección: {company.fiscalAddress}</Text>
            <Text>Teléfono: {company.phone}</Text>
            <Text>Email: {company.email}</Text>
          </View>
          <Image style={styles.logo} src={logo} />
        </View>

        <Text style={{ fontSize: 18, textAlign: "center", marginBottom: 10 }}>
          Resumen de Cuenta
        </Text>

        <Text style={styles.sectionTitle}>Datos del Cliente</Text>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text>Nombre: {data.customerName}</Text>
            <Text>Apellido: {data.customerLastName}</Text>
            <Text>DNI: {data.customerdocumentNumber}</Text>
          </View>
          <View style={styles.column}>
            <Text>Teléfono: {data.customerPhone}</Text>
            <Text>Dirección: {data.customerAddress}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Detalle de Contratación</Text>
        <View style={styles.tableHeader}>
          <Text style={styles.col}>ID</Text>
          <Text style={styles.col}>Inicio</Text>
          <Text style={styles.col}>Servicio</Text>
       
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.col}>{data.id}</Text>
          <Text style={styles.col}>{formatDateToDDMMYYYY(data.startDate)}</Text>
          <Text style={styles.col}>{data.serviceName}</Text>
      
        </View>

        <Text style={styles.sectionTitle}>Cronograma</Text>
        {data.schedule?.length > 0 ? (
          <View style={{ flexDirection: "column", gap: 2 }}>
            {data.schedule.map((item, index) => (
              <Text key={index}>
                - {dayLabels[item.day] || item.day} - {item.hour.slice(0, 5)}
              </Text>
            ))}
          </View>
        ) : (
          <Text>No hay horarios asignados.</Text>
        )}

        <Text style={styles.sectionTitle}>Totales</Text>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text>Recargo: 0%</Text>
            <Text>Descuento: 0%</Text>
          </View>
          <View style={styles.column}>
            <Text>Total:</Text>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              {formatCurrency(data.totalAmount)}
            </Text>
          </View>
        </View>

        <Text style={styles.footer}>
          Documento generado automáticamente por el sistema Coblan. Fecha: {now}
        </Text>
      </Page>
    </Document>
  );
};

export default CoblanSummaryPDF;
