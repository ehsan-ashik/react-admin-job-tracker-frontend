import { BooleanField, DateField, FunctionField, ReferenceField, RichTextField, Show, SimpleShowLayout, TextField } from 'react-admin';
import { Divider } from "@mui/material";
import { JobExcitementChoices } from '../data_access/appData';

export const JobShow = () => (
  <Show title="Job Overview">
    <SimpleShowLayout
      direction={"row"}
      spacing={5}
      divider={<Divider flexItem={true} />}
    >
      <TextField source="position" />
      <ReferenceField source="company_id" reference="company" link="show" />
      <TextField source="location" />
      <ReferenceField
        source="job_category_id"
        reference="job_category"
        link="show"
      />
      <FunctionField
        source="excitement"
        emptyText="No excitement value..."
        render={(record) =>
          JobExcitementChoices.find((choice) => choice.id == record.excitement)
            ?.name
        }
      />
      <TextField source="status" sx={{ fontWeight: "bold" }} />
    </SimpleShowLayout>
    <br />
    <SimpleShowLayout direction={"row"} spacing={25}>
      <DateField
        source="apply_date"
        locales={"en-US"}
        options={{ timeZone: "UTC" }}
      />
      <DateField
        source="response_date"
        emptyText="No response yet..."
        locales={"en-US"}
        options={{ timeZone: "UTC" }}
      />
    </SimpleShowLayout>
    <br />
    <SimpleShowLayout
      direction={"row"}
      spacing={13}
      divider={<Divider flexItem={true} />}
    >
      <BooleanField source="is_referred" />
      <TextField
        source="referred_by"
        emptyText="No referrer for this position..."
      />
    </SimpleShowLayout>
    <br />
    <SimpleShowLayout>
      <ReferenceField
        source="resume_id"
        reference="resume"
        link="show"
        emptyText="No linked resume found..."
      />
    </SimpleShowLayout>
    <br />
    <SimpleShowLayout>
      <RichTextField
        source="remark"
        emptyText="No remarks added for the job..."
      />
    </SimpleShowLayout>
    <br />
    <SimpleShowLayout>
      <RichTextField
        source="job_description.description"
        label="Job description"
        emptyText="No job description available..."
      />
    </SimpleShowLayout>
  </Show>
);