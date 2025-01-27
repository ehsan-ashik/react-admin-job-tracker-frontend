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
  <Show aside={<PdfShow />}>
    <SimpleShowLayout>
      <TextField source="title" />
      <TextField source="remark" emptyText="No remark avaiable..." />
      <br />
      <ArrayField
        source="jobs"
        label="Jobs applied with this resume"
      >
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
    </SimpleShowLayout>
  </Show>
);
