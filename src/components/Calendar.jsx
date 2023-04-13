import React, { useState, useRef } from "react";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  ViewDirective,
  ViewsDirective,
  DragAndDrop,
  Resize,
} from "@syncfusion/ej2-react-schedule";

import "../style/Calendar.css";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { isNullOrUndefined } from "@syncfusion/ej2-base";

export default function Calendar(props) {
  const { events } = props;
  const { handleChange } = props;

  let scheduleObj;
  let startObj;
  let endObj;

  function onPopupClose(args) {
    if (args.type === "Editor" && !isNullOrUndefined(args.data)) {
      let subjectElement = args.element.querySelector("#Summary");
      if (subjectElement) {
        args.data.Subject = subjectElement.value;
      }
      let statusElement = args.element.querySelector("#EventType");
      if (statusElement) {
        args.data.EventType = statusElement.value;
      }
      args.data.StartTime = startObj.value;
      args.data.EndTime = endObj.value;
      let descriptionElement = args.element.querySelector("#Description");
      if (descriptionElement) {
        args.data.Description = descriptionElement.value;
      }
    }
    console.log("ARGS: ", args);
    console.log("Events: ", events);
    handleChange(events);
  }

  const editorWindowTemplate = (props) => {
    const ref = useRef(null);
    return (
      <table className="custom-event-editor" style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td className="e-textlabel">Title</td>
            <td>
              <input
                id="Summary"
                className="e-field e-input"
                type="text"
                name="Subject"
                style={{ width: "100%" }}
                defaultValue={props.Subject || null}
              />
            </td>
          </tr>

          <tr>
            <td className="e-textlabel">Status</td>
            <td>
              <DropDownListComponent
                id="EventType"
                placeholder="Choose status"
                data-name="EventType"
                className="e-field"
                style={{ width: "100%" }}
                value={props.EventType || null}
                dataSource={["New", "Requested", "Confirmed"]}
              ></DropDownListComponent>
            </td>
          </tr>

          <tr>
            <td className="e-textlabel">From</td>
            <td>
              <DateTimePickerComponent
                format="dd/MM/yy hh:mm a"
                id="StartTime"
                data-name="StartTime"
                value={new Date(props.startTime || props.StartTime)}
                className="e-field"
                ref={(date) => {
                  startObj = date;
                }}
              ></DateTimePickerComponent>
            </td>
          </tr>

          <tr>
            <td className="e-textlabel">To</td>
            <td>
              <DateTimePickerComponent
                format="dd/MM/yy hh:mm a"
                id="EndTime"
                data-name="EndTime"
                value={new Date(props.endTime || props.EndTime)}
                className="e-field"
                ref={(date) => {
                  endObj = date;
                }}
              ></DateTimePickerComponent>
            </td>
          </tr>

          <tr>
            <td className="e-textlabel">Reason</td>
            <td>
              <textarea
                id="Description"
                className="e-field e-input"
                name="Description"
                rows={3}
                cols={50}
                style={{
                  width: "100%",
                  height: "60px !important",
                  resize: "vertical",
                }}
                defaultValue={props.Description || null}
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <div className="w-full h-7/10 overflow-auto rounded-3xl">
      <ScheduleComponent
        currentView="Week"
        eventSettings={{ dataSource: events }}
        className="template-wrap"
        editorTemplate={editorWindowTemplate}
        popupClose={onPopupClose}
        ref={(schedule) => (scheduleObj = schedule)}
      >
        <ViewsDirective>
          <ViewDirective option="Day"></ViewDirective>
          <ViewDirective option="Week"></ViewDirective>
          <ViewDirective option="Month"></ViewDirective>
        </ViewsDirective>
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]}
        />
      </ScheduleComponent>
    </div>
  );
}
