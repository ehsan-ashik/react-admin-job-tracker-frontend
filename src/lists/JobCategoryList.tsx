import { Datagrid, EditButton, List, ReferenceManyCount, ShowButton, TextField } from "react-admin";

export const JobCategoryList = () => (
  <List>
    <Datagrid bulkActionButtons={false}>
      <TextField source="name" />
      <TextField source="description" />
      <ReferenceManyCount
        label="Applied jobs"
        reference="job"
        target="company_id"
        sx={{ fontWeight: "bold", color: "#9055f0" }}
        textAlign="center"
      />
      <>
        <ShowButton />
        <span style={{ paddingLeft: 5 }}></span>
        <EditButton />
      </>
    </Datagrid>
  </List>
);
