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
          1. Only students from Engineering colleges are allowed to participate
          in the Techno-Cultural Events
        </h1>

        <br />
        <h1>
          2. Each participant is requested to have their college ID with them at
          all times.
        </h1>

        <br />
        <h1>
          3. Participants must maintain decorum inside the campus. Any
          misbehavior will be dealt with severely.
        </h1>

        <br />
        <h1>4. Cross-college teams are not allowed for group events.</h1>

        <br />
        <h1>
          5. Any form of vulgarity or obscenity is strictly prohibited and any
          such behaviour on stage will call for immediate disqualification of
          the team or participant.
        </h1>

        <br />
        <h1>
          6. Please do not carry sharp objects, inflammable objects or any other
          objects that might be potentially dangerous.
        </h1>

        <br />
        <h1>
          7. Please do not carry/consume any intoxicant, liquor, narcotics,
          drugs, cigarettes or additives of any sort. Smoking is strictly
          prohibited within the campus.
        </h1>

        <br />
        <h1>
          8. Any sort of profanity or obscenity in any form will lead to
          immediate disqualification.
        </h1>

        <br />
        <h1>
          9. Any misbehaviour on part of the participants and visitors will lead
          to expulsion from the premises and will reflect on their college.
        </h1>

        <br />
        <h1>
          10. Anything that can be perceived as being offensive to any national
          and/or religious sentiments, gender, caste, race etc will lead to
          immediate disqualification.
        </h1>

        <br />
        <h1>
          11. If a participant is found violating any of these rules, it would
          lead to the disqualification of the participant, who would also be
          required to leave the premises immediately.
        </h1>

        <br />
        <h1>
          12. Rules listed are subject to change at the discretion of the Event
          Heads and the Organizing Committee.
        </h1>

        <br />
        <h1>
          13. Please bear in mind that all events, venues and timings are
          subject to change.
        </h1>

        <br />
        <h1>
          14. The decision of the Organizing Committee and judges shall be final
          in all matters.
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
