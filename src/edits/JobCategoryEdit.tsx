import { Edit, SimpleForm, TextInput } from "react-admin";
import { Box, Stack } from "@mui/material";

export const JobCategoryEdit = () => {
  return (
    <Edit title="Edit Job Category" redirect="list" sx={{ width: 1000 }}>
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
          <TextInput source="name" />
          <TextInput source="description" multiline minRows={3} />
        </Stack>
      </SimpleForm>
    </Edit>
  );
};
