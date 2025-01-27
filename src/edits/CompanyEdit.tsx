import {
  Edit,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { Box, Stack } from "@mui/material";
import { CompanyExcitementChoices } from "../data_access/appData";

export const CompanyEdit = () => {
  return (
    <Edit redirect="list" aside={<div style={{ width: 350 }}></div>}>
      <SimpleForm direction={"column"} sx={{ width: 1000 }}>
        <Stack
          direction="row"
          sx={{ width: 1000 }}
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
          <TextInput source="name" />
          <SelectInput choices={CompanyExcitementChoices} source="excitement" />
        </Stack>
        <Stack
          direction="row"
          sx={{ width: 1000 }}
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
    </Edit>
  );
};
