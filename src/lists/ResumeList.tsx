import { List, ReferenceManyCount, SimpleList } from "react-admin";

export const ResumeList = () => (
  <List>
    <SimpleList
      rowSx={(record) =>
        record
          ? {
              borderTop: "1px solid rgb(81, 81, 81)",
            }
          : null
      }
      primaryText={(record) => record.title}
      tertiaryText={
        <span style={{ paddingLeft: 20, color: "#ccc", fontStyle: "italic" }}>
          (Total applied jobs:{" "}
          <ReferenceManyCount reference="job" target="resume_id" />)
        </span>
      }
      rowClick={"show"}
    />
  </List>
);
