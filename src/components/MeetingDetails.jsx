import React, { useState, useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

export default function MeetingDetails() {
  const modules = {
    toolbar: [
      [{ size: ["small", "medium", "large"] }],
      [{ align: [] }, { list: "bullet" }, { color: [] }, "link"],
      ["bold"],
    ],
  };

  const { quill, quillRef } = useQuill({ modules });
  const [value, setValue] = useState();

  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(
        "<br/> <h2> 🎯 <strong> Goal: </strong> </h2> <br/> <h3> Accept Our new Logo Proposal</h3><br/> <h2> 📝 <strong> Notes: </strong> </h2> <br/> <h3> - the shape and font are already very good</h3> <h3> - the still need to work on the color palette</h3> <h3> - the back&white is very satisfying, but the color is not</h3><br/> <h2> ⏰ <strong> Deadline: </strong> </h2> <br/> <h3> July 21</h3>"
      );
      quill.on("text-change", () => {
        console.log(quillRef.current.firstChild.innerHTML);
        setValue(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill]);

  return (
    <div className="h-full border-l-grey border-l-2 border-l-solid p-2">
      <div className="w-full p-4 text-3xl text-gray-700 font-bold border-b-2 border-b-solid border-b-grey">
        Meeting Minutes
      </div>
      <div className="w-full h-7/10">
        <div ref={quillRef} className="w-full h-full border-none" />
      </div>
    </div>
  );
}
