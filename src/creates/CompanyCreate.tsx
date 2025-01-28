import { Create, SelectInput, SimpleForm, TextInput } from "react-admin";
import { Box, Stack } from "@mui/material";
import { CompanyExcitementChoices } from "../data_access/appData";

export const CompanyCreate = () => {
  return (
    <Create title="Create New Company" redirect="list" sx={{ width: 1000 }}>
      <SimpleForm direction={"column"} sx={{ width: 1000 }}>
        <Stack
          direction="row"
          sx={{ width: 950 }}
          divider={
            <Box
              component="hr"
              sx={{
                width: `200px`,
                border: (theme) =>
                  `1px solid ${theme.palette.mode === "dark" ? "#15122100" : "#fff"}`,
              }}
            />
          }
        >
          <TextInput source="name" required />
          <SelectInput choices={CompanyExcitementChoices} source="excitement" />
        </Stack>
        <Stack
          direction="row"
          sx={{ width: 950 }}
          divider={
            <Box
              component="hr"
              sx={{
                width: `200px`,
                border: (theme) =>
                  `1px solid ${theme.palette.mode === "dark" ? "#15122100" : "#fff"}`,
              }}
            />
          }
        >
          <TextInput source="career_cite_link" label="Career website" />
        </Stack>
      </SimpleForm>
    </Create>
  );
};
