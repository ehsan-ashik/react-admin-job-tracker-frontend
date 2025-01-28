import {
    ArrayField,
    Datagrid,
  DateField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import { PdfShow } from "./PdfShow";

export const ResumeShow = () => (
  <Show title="Resume Overview" aside={<PdfShow />}>
    <SimpleShowLayout>
      <TextField source="title" />
      <TextField source="remark" emptyText="No remark avaiable..." />
    </SimpleShowLayout>
    <br />
    <div
      style={{
        paddingLeft: 5,
        paddingBottom: 15,
        fontWeight: "bold",
        color: "#9055f0",
      }}
    >
      Applied Jobs with this resume:
    </div>
    <ArrayField source="jobs" label="Applied Jobs with this resume:">
      <Datagrid
        bulkActionButtons={false}
        rowClick={false}
        empty={<p>No jobs found</p>}
      >
        <TextField source="position" />
        <ReferenceField reference="company" source="company_id" />
        <TextField source="status" />
        <DateField source="apply_date" />
      </Datagrid>
    </ArrayField>
  </Show>
);
