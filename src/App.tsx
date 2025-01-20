import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  radiantLightTheme,
  radiantDarkTheme,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./data_access/dataProvider";
import { JobList } from "./lists/JobList";
import { CompanyList } from "./lists/CompanyList";

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    theme={radiantLightTheme}
    darkTheme={radiantDarkTheme}
  >
    <Resource name="job" list={JobList} />
    <Resource name="company" list={CompanyList} />
  </Admin>
);
