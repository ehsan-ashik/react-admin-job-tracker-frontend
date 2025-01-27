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
      edit={JobEdit}
      create={JobCreate}
    />
    <Resource name="resume" list={ResumeList} show={ResumeShow} create={ResumeCreate} />
    <Resource name="company" list={CompanyList} edit={CompanyEdit} />
    <Resource name="job_category" list={JobCategoryList} />
  </Admin>
);
