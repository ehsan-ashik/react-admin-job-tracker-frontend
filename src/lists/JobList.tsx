import {
  BooleanField,
  CreateButton,
  Datagrid,
  DateField,
  EditButton,
  ExportButton,
  FunctionField,
  List,
  ReferenceField,
  SelectInput,
  ShowButton,
  TextField,
  TopToolbar,
} from "react-admin";
import { JobExcitementChoices, JobStatusChoices } from "../data_access/appData";

const JobListActions = () => (
  <TopToolbar>
    <CreateButton />
    <ExportButton />
  </TopToolbar>
);


const jobFilters = [
  <SelectInput
    source="status"
    choices={JobStatusChoices}
    alwaysOn
  />,
];


export const JobList = () => (
  <List
    sort={{ field: "apply_date", order: "DESC" }}
    filters={jobFilters}
    actions={<JobListActions />}
  >
    <Datagrid bulkActionButtons={false} rowClick={false}>
      <TextField source="position" />
      <ReferenceField source="company_id" reference="company" link="show" />
      <TextField source="status" />
      <DateField
        source="apply_date"
        locales={"en-US"}
        options={{ timeZone: "UTC" }}
      />
      <TextField source="location" />
      <ReferenceField
        source="job_category_id"
        reference="job_category"
        link="show"
      />
      <BooleanField source="is_referred" />
      <FunctionField source="excitement" render={record => JobExcitementChoices.find(choice => choice.id == record.excitement)?.name.slice(0, 6)} />
      <>
        <EditButton />
        <ShowButton />
      </>
    </Datagrid>
  </List>
);
