import React from "react";
import { Link } from "react-router-dom";

const Rules = () => {
  return (
    <div className="h-screen mt-20 mx-20 sm:mx-2">
      <h1 className="drummer text-3xl text-white border-b-2 p-4 w-1/2 mb-10 sm:w-full">
        GENERAL RULES AND REGULATIONS CULTURAL EVENTS
      </h1>
      <div className="quicksand text-3xl text-white border-b-2 p-4  mb-10 sm:w-full">
      <h1>
      1.	Each participant is requested to have their college ID with them at all times. 
      </h1>
      <br />
      <h1>
      2.	Participants must maintain decorum inside the campus. Any misbehaviour will be
          dealt with severely.
      </h1>
      <br />
      <h1>
      3.	Songs, Background music or any Karaoke shall be given to the respective committee
          members one day before the event.
      </h1>
      <br />
      <h1>
      4.	Cross college teams are not allowed for group events.
      </h1>
      <br />
      <h1>
      5.	Any form of vulgarity or obscenity is strictly prohibited and any such behaviour on
          stage will call for immediate disqualification of the team or participant.
      </h1>
      <br />
      <h1>
      6.	Please do not carry sharp objects, inflammable objects or any other objects that might
          be potentially dangerous.
      </h1>
      <br />
      <h1>
      7.	Please do not carry/consume any intoxicant, liquor, any narcotics, drugs, cigarettes or
          additives or any sort. Smoking is strictly prohibited within the campus.
      </h1>
      <br />
      <h1>
      8.	Any sort of profanity or obscenity in any form will lead to immediate disqualification.
      </h1>
      <br />
      <h1>
      9.	Any misbehaviour on part of the participants and visitors will lead to expulsion from
          the premises and will reflect on their college.
      </h1>
      <br />
      <h1>
      10.	Anything that can be perceived as being offensive to any national and/or religious
          sentiments, gender, caste, race etc will lead to immediate disqualification.
      </h1>
      <br />
      <h1>
      11.	If a participant is found violating any of these rules, it would lead to the
          disqualification of the participant, who would also be required to leave the premises
          immediately.
      </h1>
      <br />
      <h1>
      12.	Rules listed are subject to change as per the discretion of the Event Heads and the
          Organizing Committee.
      </h1>
      <br />
      <h1>
      13.	Please bear in mind that all events, venues and timings are subject to change.
      </h1>
      <br />
      <h1>
      14.	The decision of the Organizing Committee and judges shall be final in all matters.
      </h1>
      <br />
      <h1>
      15.	The participants should report 30 minutes prior to the event at the venue and collect
          the chest numbers.
      </h1>
      <br />
      16.	There will be maximum of three calls for a team/participant within which the
          participant should report to the stage for performance.
      <h1>
      <br />
      17.	The appeal request will be considered only if the difference in results are within 10%
          of the final score.
      </h1>
      <br />
      <h1>
      18.	The appeal must be submitted within 1 hour of the result declaration.
      </h1>
      <br />
      <h1>
      19.	The appeal request must be submitted to the judges through event committee and the
          decision of the judges shall be final.
      </h1>
      <br />
      <h1>
      20.	If there are less than 5 team registrations for any event, the college has the authority to cancel the event.
      </h1>
      <br />
      <h1>
      21.	A Bonafide of all participants (including substitutes) printed on the institutional letter head duly signed by the head of institution should be presented during registration at arrival at clg, bonafide will be verified with the student ID's
      </h1>
      <br />
      <h1>
      22.	After the coordinators confirm the registration, refunds will not be provided.
      </h1>
      </div>
      <Link to="/schedule">
        <button className="text-white rounded-lg drummer mx-auto  p-2 border-white-2 bg-opacity-70 border-white/30 border text-sm backdrop-blur bg-white/10 mb-10">
          Agree and Proceed
        </button>
      </Link>
    </div>
  );
};

export default Rules;
