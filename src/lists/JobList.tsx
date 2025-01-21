import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";

export const JobList = () => (
  <List>
    <Datagrid bulkActionButtons={false}>
      <TextField source="position" />
      <ReferenceField source="company_id" reference="company" link="show"/>
      <TextField source="status" />
      <DateField source="apply_date" />
      <TextField source="response_date" />
      <TextField source="location" />
      <TextField source="job_category.name" />
      <BooleanField source="is_referred" />
      <TextField source="referred_by" />
      <NumberField source="excitement" />
      <TextField source="remark" />
    </Datagrid>
  </List>
);
