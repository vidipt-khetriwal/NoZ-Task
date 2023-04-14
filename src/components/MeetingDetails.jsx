import React, { useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

import fontSize from "../assets/icons/fontSize.png";
import alignLeft from "../assets/icons/alignLeft.png";
import alignCenter from "../assets/icons/alignCenter.png";
import alignRight from "../assets/icons/alignRight.png";
import fontColor from "../assets/icons/fontColour.png";
import menu from "../assets/icons/menu.png";
import attachments from "../assets/icons/attachments.png";
import smiley from "../assets/icons/smiley.png";
import goal from "../assets/icons/goal.png";
import notes from "../assets/icons/notes.png";
import danger from "../assets/icons/danger.png";

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

  React.useEffect(() => {
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
      {/* <div className="w-full p-4 flex justify-around border-b-2 border-b-solid border-b-grey">
        <div className="w-1/10">
          <img src={fontSize} alt="Font Size" />
        </div>
        <div className="flex w-3/10 justify-around">
          <div className="w-3/10">
            <img src={alignLeft} alt="Align Left" />
          </div>
          <div className="w-3/10">
            <img src={alignCenter} alt="Align Center" />
          </div>
          <div className="w-3/10">
            <img src={alignRight} alt="Align Right" />
          </div>
        </div>
        <div className="w-1/10">
          <img src={fontColor} alt="Font Color" />
        </div>
        <div className="w-1/10">
          <img src={menu} alt="Menu" />
        </div>
        <div className="w-1/10">
          <img src={attachments} alt="Attachments" />
        </div>
        <div className="w-1/10">
          <img src={smiley} alt="Smiley" />
        </div>
      </div>
      <div className="pt-8 flex w-full ">
        <div className="p-2 w-1/10">
          <img src={goal} alt="Goal" />
        </div>
        <div>
          <div className="font-bold text-lg">Goal:</div>
          <div className="text-md">Accept Our new Logo Proposal</div>
        </div>
      </div>
      <div className="pt-8 flex w-full">
        <div className="p-2 w-1/10">
          <img src={notes} alt="Notes" />
        </div>
        <div>
          <div className="font-bold text-lg">Notes:</div>
          <div className="text-md">
            - the shape and font are already very good
          </div>
          <div className="text-md">
            - the still need to work on the color palette
          </div>
          <div className="text-md">
            - the back&white is very satisfying, but the color is not
          </div>
        </div>
      </div>
      <div className="pt-8 flex w-full items-center">
        <div className="p-2 w-1/10">
          <img src={danger} alt="Deadline" />
        </div>
        <div className="font-bold text-lg">Deadline:</div>
        <div className="text-md">&nbsp;July 21</div>
      </div> */}
    </div>
  );
}
