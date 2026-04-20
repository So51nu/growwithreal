import React from "react";
import Image from "next/image";

export default function Attachments({ property }) {
  const attachments = Array.isArray(property?.attachments) ? property.attachments : [];

  if (!attachments.length) return null;

  return (
    <>
      <div className="wg-title text-11 fw-6 text-color-heading">
        File Attachments
      </div>

      <div className="row">
        {attachments.map((item) => (
          <div className="col-sm-6" key={item.id}>
            <a
              href={item.file_url}
              target="_blank"
              rel="noreferrer"
              className="attachments-item"
            >
              <div className="box-icon w-60">
                <Image
                  alt="file"
                  src="/images/items/download-1.png"
                  width={80}
                  height={80}
                />
              </div>
              <span>{item.title || item.file_name || "Attachment"}</span>
              <i className="icon icon-DownloadSimple" />
            </a>
          </div>
        ))}
      </div>
    </>
  );
}