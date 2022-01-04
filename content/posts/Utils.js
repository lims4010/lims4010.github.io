import React from "react";

function S3ImageDiv(props) {
  const url = `https://lims4011-personal-site.s3.amazonaws.com/${props.bucket}/${props.name}`;

  return (
    <div style={{ textAlign: "center" }}>
      <img style={{ maxWidth: "100%", maxHeight: "50em"}} src={url} />
    </div>
  );
}

function S3VideoDiv(props) {
  const url = `https://lims4011-personal-site.s3.amazonaws.com/${props.bucket}/${props.name}`;

  return (
    <div style={{ textAlign: "center" }}>
      <video style={{ maxWidth: "100%", maxHeight: "50em" }} controls muted>
        <source src={url}></source>
      </video>
    </div>
  );
}

export { S3ImageDiv, S3VideoDiv };
