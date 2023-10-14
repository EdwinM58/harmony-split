import React, { useMemo } from "react";
import { useDrop } from "react-dnd";
import { NativeTypes } from "react-dnd-html5-backend";

function FileDropzone({ onDrop, droppedFiles }) {

  // Extract necessary functions from react dnd useDrop hook 
  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: [NativeTypes.FILE],
      drop(item) {
        if (onDrop) {
          onDrop(item);
        }
      },
      canDrop(item) {
        console.log("canDrop", item.files, item.items[0]);
        return true;
      },
      hover(item) {
        console.log("hover", item.items);
      },
      collect: (monitor) => {
        const item = monitor.getItem();
        if (item) {
          console.log("collect", item);
        }
        return {
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        };
      },
    }),
    [onDrop]
  );

  const isActive = canDrop && isOver;

  return (
    <div ref={drop} className={`dropbox ${isActive ? "active" : ""}`}>
      <div className="drop-content">
        <div> {isActive ? "Release to drop" : "Drag file here"}</div>
        <FileList files={droppedFiles} />

        <label className="file-upload-button" htmlFor="fileInput">
          Upload File
        </label>
        <input type="file" id="fileInput" />
      </div>
    </div>
  );
}


// Display file's that were dropped into file drop zone 
function list(files) {
  const label = (file) =>
    `'${file.name}' of size '${file.size}' and type '${file.type}'`;
  return files.map((file) => <li key={file.name}>{label(file)}</li>);
}

export const FileList = ({ files }) => {
  const fileList = useMemo(() => list(files), [files]);

  if (files.length === 0) {
    return <div>Nothing to display</div>;
  }

  return <div>{fileList}</div>;
};

export default FileDropzone;
