import { Datagrid, DateField, List, NumberField, ReferenceManyCount, TextField } from "react-admin";

export const CompanyList = () => (
  <List>
    <Datagrid bulkActionButtons={false}>
      <TextField source="name" />
      <NumberField source="excitement" />
      <TextField source="career_cite_link" />
      <ReferenceManyCount
        label="Applied jobs"
        reference="job"
        target="company_id"
        link
      />
    </Datagrid>
  </List>
);
