import { useState } from "react";
import { getMembers } from "./data/members";
import { getAbsences } from "./data/absences";

function App() {
    return (
        <>
            <h1>Hello World!</h1>
            <p>Project with some configurations</p>
            <p>
                There is a total of {getMembers().size} members and{" "}
                {getAbsences().size} absences in the project.
            </p>
        </>
    );
}

export default App;
