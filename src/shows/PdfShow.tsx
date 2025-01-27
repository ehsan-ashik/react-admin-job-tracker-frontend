import { useRecordContext } from "react-admin";
import { useEffect, useState } from "react";
import { getSasToken } from "../data_access/sasProvider";
import { Viewer } from "@react-pdf-viewer/core";


export const PdfShow = () => {
    const record = useRecordContext();
    if (!record) return null;
    const [url, setUrl] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        const { sasToken } = await getSasToken()
        return sasToken
      };
      
      const sasData = localStorage.getItem("azuresas")
      const now = new Date()
      if (!sasData || now.getTime() > JSON.parse(sasData).expirationTime ) {
        fetchData().then((sasToken) => {
          setUrl(record.url + sasToken);
          localStorage.setItem(
            "azuresas",
            JSON.stringify({
              sasToken,
              expirationTime: now.getTime() + 24 * 60 * 60 * 1000,
            }),
          );
        });
      } else {
        setUrl(record.url + JSON.parse(sasData).sasToken);
      }
      
    }, []);
    return (
      <div
        style={{
          width: 700,
          overflow: "hidden",
          margin: "1em",
        }}
      >
        {url ? <Viewer fileUrl={url} /> : <p>Loading...</p>}
      </div>
    );
}
