import { Datagrid, EditButton, FunctionField, List, ReferenceManyCount, ShowButton, TextField } from "react-admin";
import { CompanyExcitementChoices } from "../data_access/appData";

export const CompanyList = () => (
  <List>
    <Datagrid bulkActionButtons={false}>
      <TextField source="name" />
      <FunctionField
        source="excitement"
        render={(record) => record.excitement ?
          CompanyExcitementChoices.find(
            (choice) => choice.id == record.excitement,
          )?.name : "No excitement value assigned..."
        }
      />
      <ReferenceManyCount
        label="Applied jobs"
        reference="job"
        target="company_id"
      />
      <TextField
        source="career_cite_link"
        label="Career website"
        emptyText="No career website present..."
      />
      <>
        <ShowButton />
        <span style={{paddingLeft: 5}}></span>
        <EditButton />
      </>
    </Datagrid>
  </List>
);
