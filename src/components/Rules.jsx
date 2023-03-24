import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Rules = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div class="mx-20 sm:mx-2 mt-16">
    <div className="h-[80vh] md:h-[66vh] overflow-y-scroll">
      <h1 className="drummer text-3xl md:text-6xl text-white border-b-0.5 border-white/50 p-4 w-fit mb-10 sm:w-full">
        RULES AND REGULATIONS
      </h1>
      <div className="quicksand text-xl text-white p-4  mb-10 sm:w-full">
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

        <br />
        <br />
        <br />
        <h1 className="drummer text-3xl md:text-6xl text-white border-b-0.5 border-white/50 p-4 mb-10 sm:w-full">
          THE FOLLOWING ARE THE RULES FOR CULTURAL EVENTS
        </h1>
        <h1>
          1. Songs, Background music or any Karaoke shall be given to the
          respective committee members one day before the event
        </h1>

        <br />
        <h1>
          2. The participants should report 30 minutes before the event at the
          venue and collect the chest numbers.
        </h1>

        <br />
        <h1>
          3. There will be a maximum of three calls for a team/participant
          within which the participant should report to the stage for
          performance.
        </h1>

        <br />
        <h1>
          4. The appeal request will be considered only if the difference in
          results is within 10% of the final score.
        </h1>

        <br />
        <h1>
          5. The appeal must be submitted within 1 hour of the result
          declaration.
        </h1>

        <br />
        <h1>
          6. The appeal request must be submitted to the judges through the
          event committee and the decision of the judges shall be final.
        </h1>

        <br />
        <h1>
          7. If there are fewer than 5 team registrations for any event, the
          college has the authority to cancel the event.
        </h1>

        <br />
        <h1>
          8. A Bonafide of all participants (including substitutes) printed on
          the institutional letterhead duly signed by the head of the
          institution should be presented during the registration upon arrival
          at college, bonafide will be verified with the student IDs
        </h1>

        <br />
        <h1>
          9. After the coordinators confirm the registration and payments of
          events, refunds will not be provided under any circumstances.
        </h1>
      </div>
    </div>
      <Link to="/schedule">
        <button
          className=" mt-8 ml-4 text-white rounded-lg quicksand font-bold mx-auto  py-2 px-4 border-white-2 bg-opacity-70 border-white/30 border text-lg backdrop-blur bg-white/10 mb-10"
        >
          Agree and Proceed
        </button>
      </Link>
      </div>
  );
};

export default Rules;
