import {
  Admin,
  Resource,
  radiantLightTheme,
  radiantDarkTheme,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./data_access/dataProvider";
import { JobList } from "./lists/JobList";
import { CompanyList } from "./lists/CompanyList";
import { ResumeList } from "./lists/ResumeList";
import { JobCategoryList } from "./lists/JobCategoryList";
import { JobShow } from "./shows/JobShow";
import { JobEdit } from "./edits/JobEdit";
import { JobCreate } from "./creates/JobCreate";
import { ResumeShow } from "./shows/ResumeShow";
import { ResumeCreate } from "./creates/ResumeCreate";
import { CompanyEdit } from "./edits/CompanyEdit";
import { ResumeEdit } from "./edits/ResumeEdit";
import { CompanyShow } from "./shows/CompanyShow";
import { CompanyCreate } from "./creates/CompanyCreate";
import { JobCategoryEdit } from "./edits/JobCategoryEdit";
import { JobCategoryShow } from "./shows/JobCategoryShow";
import { JobCategoryCreate } from "./creates/JobCategoryCreate";

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    theme={radiantLightTheme}
    darkTheme={radiantDarkTheme}
  >
    <Resource
      name="job"
      list={JobList}
      show={JobShow}
      create={JobCreate}
      edit={JobEdit}
    />
    <Resource
      name="resume"
      list={ResumeList}
      show={ResumeShow}
      create={ResumeCreate}
      edit={ResumeEdit}
    />
    <Resource
      name="company"
      list={CompanyList}
      show={CompanyShow}
      create={CompanyCreate}
      edit={CompanyEdit}
    />
    <Resource
      name="job_category"
      list={JobCategoryList}
      show={JobCategoryShow}
      create={JobCategoryCreate}
      edit={JobCategoryEdit}
    />
  </Admin>
);
