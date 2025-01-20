import { Datagrid, DateField, List, NumberField, TextField } from "react-admin";

export const CompanyList = () => (
  <List>
    <Datagrid>
      <TextField source="name" />
      <NumberField source="excitement" />
      <TextField source="career_cite_link" />
    </Datagrid>
  </List>
);
