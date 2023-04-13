import React from "react";
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

export default function Calendar() {
  const events = [
    {
      Id: 1,
      Subject: "Meeting",
      StartTime: new Date(2023, 3, 15, 10, 0),
      EndTime: new Date(2023, 3, 15, 12, 30),
    },
    {
      Id: 1,
      Subject: "Task",
      StartTime: new Date(2023, 3, 14, 10, 0),
      EndTime: new Date(2023, 3, 14, 12, 0),
    },
  ];

  // const eventTemplate = ({ [key]: Object }) => {
  //   return <div className="template-wrap">{props.Subject}</div>;
  // };

  return (
    <div className="w-full h-7/10 overflow-auto rounded-3xl">
      <ScheduleComponent
        currentView="Week"
        eventSettings={{ dataSource: events }}
        // eventSettings={{ dataSource: events, template: eventTemplate }}
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
