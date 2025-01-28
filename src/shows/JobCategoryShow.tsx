import { ArrayField, Datagrid, DateField, Labeled, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";
import { Box, Stack } from "@mui/material";

export const JobCategoryShow = () => {
  return (
    <Show title="Job Category Overview" sx={{ width: 1000 }}>
      <SimpleShowLayout direction={"column"} sx={{ width: 1000 }}>
        <Stack
          direction="column"
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
          <Labeled>
            <TextField source="name" />
          </Labeled>
          <Labeled>
            <TextField source="description" />
          </Labeled>
        </Stack>
      </SimpleShowLayout>
      <br />
      <div
        style={{
          paddingLeft: 5,
          paddingBottom: 15,
          fontWeight: "bold",
          color: "#9055f0",
        }}
      >
        Applied Jobs in this category:
      </div>
      <ArrayField source="jobs" label="Jobs applied with this resume">
        <Datagrid
          bulkActionButtons={false}
          rowClick={false}
          empty={<p>No jobs found</p>}
        >
          <TextField source="position" />
          <ReferenceField reference="company" source="company_id" />
          <TextField source="status" />
          <DateField source="apply_date" />
        </Datagrid>
      </ArrayField>
    </Show>
  );
};
