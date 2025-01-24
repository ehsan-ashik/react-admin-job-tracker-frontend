import {
    AutocompleteInput,
  BooleanInput,
  Create,
  DateInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  useCreate,
  useNotify,
} from "react-admin";
import { Box, Stack } from "@mui/material";
import { JobExcitementChoices, JobStatusChoices } from "../data_access/appData";
import { RichTextInput } from "ra-input-rich-text";

export const JobCreate = () => {
    const [create] = useCreate();
    const notify = useNotify();
    const handleCreateCompany = async (companyName?: string) => {
      if (!companyName) return;
      try {
        const newCompany = await create(
          "company",
          { data: { name: companyName } },
          { returnPromise: true },
        );
        return newCompany;
      } catch (error) {
        notify("An error occurred while creating the company", {
          type: "error",
        });
        throw error;
      }
    };

    return (
  <Create>
    <SimpleForm direction={"column"}>
      <Stack
        direction={"row"}
        divider={
          <Box
            component="hr"
            sx={{
              width: `1000px`,
              border: (theme) =>
                `1px solid ${theme.palette.mode === "dark" ? "#15122100" : "#fff"}`,
            }}
          />
        }
      >
        <TextInput source="position" />
        <ReferenceInput source="job_category_id" reference="job_category" />
      </Stack>
      <Stack
        direction={"row"}
        divider={
          <Box
            component="hr"
            sx={{
              width: `1000px`,
              border: (theme) =>
                `1px solid ${theme.palette.mode === "dark" ? "#15122100" : "#fff"}`,
            }}
          />
        }
      >
        <ReferenceInput source="company_id" reference="company" >
            <AutocompleteInput onCreate={handleCreateCompany} />

        </ReferenceInput>
        <TextInput source="location" />
      </Stack>
      <br />
      <Stack
        direction={"row"}
        divider={
          <Box
            component="hr"
            sx={{
              width: `997px`,
              border: (theme) =>
                `0px solid ${theme.palette.mode === "dark" ? "#15122100" : "#fff"}`,
            }}
          />
        }
      >
        <SelectInput choices={JobStatusChoices} source="status" defaultValue={"Applied"} />
        <DateInput
          source="apply_date"
          parse={(date: Date) => (date ? new Date(date).toISOString() : null)}
          defaultValue={new Date(Date.now()).toISOString()}
        />
      </Stack>
      <br />
      <Stack
        direction={"row"}
        divider={
          <Box
            component="hr"
            sx={{
              width: `1000px`,
              border: (theme) =>
                `1px solid ${theme.palette.mode === "dark" ? "#15122100" : "#fff"}`,
            }}
          />
        }
      >
        <TextInput source="referred_by" />
        <SelectInput choices={JobExcitementChoices} source="excitement" />
      </Stack>
      <BooleanInput source="is_referred" label="Referred?" />
      <br />
      <Stack
        direction={"row"}
        divider={
          <Box
            component="hr"
            sx={{
              width: `0px`,
              border: (theme) =>
                `10px solid ${theme.palette.mode === "dark" ? "#15122100" : "#fff"}`,
            }}
          />
        }
      >
        <RichTextInput source="remark" />
        <RichTextInput
          source="job_description.description"
          label="Job description"
        />
      </Stack>
    </SimpleForm>
  </Create>
);
};
