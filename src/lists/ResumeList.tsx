import { List, ReferenceManyCount, SimpleList } from "react-admin";

export const ResumeList = () => (
  <List>
    <SimpleList
      rowSx={(record) =>
        record
          ? {
              borderTop: "1px solid rgb(81, 81, 81)",
              paddingTop: 2,
              paddingBottom: 2,
            }
          : null
      }
      primaryText={(record) => record.title}
      secondaryText={(record) => record.remark ? record.remark : "No remark added..."}
      tertiaryText={
        <span style={{ paddingLeft: 20, color: "#9055f0" }}>
          ⟶ <span style={{ paddingLeft: 10, color: "#9055f0" }}></span> Applied
          jobs:{" "}
          <ReferenceManyCount
            reference="job"
            target="resume_id"
            sx={{ fontWeight: "bold" }}
          />
        </span>
      }
      rowClick={"show"}
    />
  </List>
);