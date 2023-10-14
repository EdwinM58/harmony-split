import React, { useCallback, useState, useMemo } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import FileDropzone from "./FileDropZone";
import { postAudioFiles } from '../api'; // Import the API functions

const Splitter = () => {

  {/** Splitter component can contain files so set dropped files state with inital array */}
  const [droppedFiles, setDroppedFiles] = useState([]);
  
  const handleFileDrop = useCallback(
   async (item) => {
      if (item) {
        const files = item.files;

        setDroppedFiles(files);

        // Sending audio data to python for source seperation
        postAudioFiles(files[0].name, files[0])
      }
    },
    [setDroppedFiles]
  );


  return (
    <div className="split-content">
      <div className="dnd">
        <h1>Drag n Drop File Upload</h1>

        {/* Using React Dnd api for drag n drop functionality */}
        <DndProvider backend={HTML5Backend}>
          <FileDropzone onDrop={handleFileDrop} droppedFiles={droppedFiles} />
        </DndProvider>
      </div>
    </div>
  );
};

export default Splitter;
