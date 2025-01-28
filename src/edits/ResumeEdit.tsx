import {
  Edit,
  FileField,
  FileInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { PdfShow } from "../shows/PdfShow";

export const ResumeEdit = () => {
  return (
    <Edit title="Edit Resume" redirect="list" aside={<PdfShow />}>
      <SimpleForm direction={"column"}>
        <TextInput source="title" />
        <TextInput source="remark" multiline />
        <FileInput source="resume" accept={{ "application/pdf": [".pdf"] }}>
          <FileField source="src" title="title" />
        </FileInput>
      </SimpleForm>
    </Edit>
  );
};
