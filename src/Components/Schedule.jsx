import React, { useState } from 'react';

function Schedule() {
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const scheduleItems = [
        {
            time: "10:00 AM",
            event: "Registration Desk"
        },
        {
            time: "10:30 AM",
            event: "Alumni Video and Presentation"
        },
        {
            time: "10:45 AM",
            event: "Lightning of Lamp"
        },
        {
            time: "10:55 AM",
            event: "Alumni Association Speeches"
        },
        {
            time: "11:05 AM",
            event: "Address by Management"
        },
        {
            time: "11:25 AM",
            event: "Honor to Donors, Oath Members, Sponsors Etc"
        },
        {
            time: "11:35 AM",
            event: "Abhinandan Felicitation"
        },
        {
            time: "12:10 PM",
            event: "Alumni Felicitation"
        },
        {
            time: "12:50 PM",
            event: "Cultural Event"
        },
        {
            time: "1:10 PM",
            event: "Alumni Speeches"
        },
        {
            time: "1:20 PM",
            event: "Honor to Alumni Donators"
        },
        {
            time: "1:25 PM",
            event: "Alumni Pre-Recorded Video Messages"
        },
        {
            time: "1:30 PM",
            event: "Vote of Thanks"
        },
        {
            time: "1:35 PM",
            event: "Group Photo"
        },
        {
            time: "1:50 PM",
            event: "Lunch"
        }
    ];


    return (
        <>
            <h1 className="my-10 text-5xl font-extrabold tracking-widest font-heading text-dark">Schedule</h1>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical bg-light">
                {scheduleItems.slice(0, showAll ? scheduleItems.length : 5).map((item, index) => (
                    <li key={index}>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-10 w-10 text-secondary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className={index % 2 === 0 ? "timeline-start md:text-end mb-10" : "timeline-end mb-10"}>
                            <time className="font-mono text-xl italic">{item.time}</time>
                            <div className="text-2xl font-bold">{item.event}</div>
                        </div>
                        <hr />
                    </li>
                ))}
            </ul>
            {!showAll ? (
                <button onClick={toggleShowAll} className="text-light bg-secondary rounded-lg px-5 py-2 m-5 hover:opacity-80 text-lg">VIEW MORE..</button>
            ) : (
                <button onClick={toggleShowAll} className="text-light bg-secondary rounded-lg px-5 py-2 m-5 hover:opacity-80 text-lg">VIEW LESS..</button>
            )}
        </>
    );
}

export default Schedule;
