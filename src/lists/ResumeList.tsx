import { Datagrid, DateField, List, SimpleList, TextField, UrlField } from "react-admin";

export const ResumeList = () => (
  <List>
    <SimpleList
      primaryText={(record) => record.title}
      secondaryText={(record) => record.url}
      rowClick={(id, resource, record) => (record.canEdit ? "edit" : "show")}
    />
  </List>
);
