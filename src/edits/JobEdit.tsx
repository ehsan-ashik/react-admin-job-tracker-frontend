import {
  BooleanInput,
  DateInput,
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { Box, Stack } from "@mui/material";
import { JobExcitementChoices, JobStatusChoices } from "../data_access/appData";
import { RichTextInput } from "ra-input-rich-text";


export const JobEdit = () => (
  <Edit redirect="show" title="Edit Job">
    <SimpleForm direction={"column"}>
      <Stack
        direction={"row"}
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
        <TextInput source="position" required />
        <ReferenceInput source="job_category_id" reference="job_category" />
      </Stack>
      <Stack
        direction={"row"}
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
        <ReferenceInput source="company_id" reference="company" />
        <TextInput source="location" />
      </Stack>
      <Stack
        direction={"row"}
        sx={{ width: 1000 }}
        divider={
          <Box
            component="hr"
            sx={{
              width: `200px`,
              border: (theme) =>
                `0px solid ${theme.palette.mode === "dark" ? "#15122100" : "#fff"}`,
            }}
          />
        }
      >
        <SelectInput
          choices={JobStatusChoices}
          source="status"
        />
        <DateInput
          source="response_date"
          parse={(date: Date) => (date ? new Date(date).toISOString() : null)}
        />
      </Stack>
      <Stack
        direction={"row"}
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
        <ReferenceInput source="resume_id" reference="resume" />
        <SelectInput choices={JobExcitementChoices} source="excitement" />
      </Stack>
      <Stack
        direction={"row"}
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
        <Stack direction={"row"} sx={{ width: 1000, alignItems: "center" }}>
          <BooleanInput source="is_referred" label="Referred?" />
          <TextInput source="referred_by" multiline minRows={2} />
        </Stack>
        <TextInput source="remark" multiline minRows={2} />
      </Stack>

      <Stack sx={{ width: 1000 }}>
        <RichTextInput
          fullWidth
          source="job_description.description"
          label="Job description"
        />
      </Stack>
    </SimpleForm>
  </Edit>
);
