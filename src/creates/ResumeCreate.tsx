import {
  Create,
  FileField,
  FileInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const ResumeCreate = () => {
  return (
    <Create>
      <SimpleForm direction={"column"}>
        <TextInput source="title" />
        <TextInput source="remark" multiline />
        <FileInput source="resume" accept={{ "application/pdf": [".pdf"] }}>
          <FileField source="src" title="title" />
        </FileInput>
      </SimpleForm>
    </Create>
  );
};
