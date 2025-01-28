import {
    ArrayField,
    Datagrid,
  DateField,
  FunctionField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import { CompanyExcitementChoices } from "../data_access/appData";

export const CompanyShow = () => (
  <Show title="Company Overview" sx={{ width: 1000 }}>
    <SimpleShowLayout>
      <TextField source="name" />
      <FunctionField
        source="excitement"
        emptyText="No excitement value..."
        render={(record) =>
          CompanyExcitementChoices.find(
            (choice) => choice.id == record.excitement,
          )?.name
        }
      />
      <TextField
        source="career_cite_link"
        emptyText="No career website present..."
      />
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
      Applied Jobs in this company:
    </div>
    <ArrayField source="jobs" label="Applied Jobs in this company:">
      <Datagrid
        bulkActionButtons={false}
        rowClick={false}
        empty={<p>No jobs found</p>}
      >
        <TextField source="position" />
        <ReferenceField reference="job_category" source="job_category_id" />
        <TextField source="status" />
        <DateField source="apply_date" />
      </Datagrid>
    </ArrayField>
  </Show>
);
