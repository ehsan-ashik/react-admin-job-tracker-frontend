import { Datagrid, List, TextField } from "react-admin";

export const JobCategoryList = () => (
  <List>
    <Datagrid bulkActionButtons={false}>
      <TextField source="name" />
      <TextField source="description" />
    </Datagrid>
  </List>
);
