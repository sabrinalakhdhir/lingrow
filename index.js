function readInformation() {
    alert("Reading Information");
}

function readCommunication() {
    alert("Reading Communication");
}

function readActivities() {
    alert("Reading Activities");
}

function openPortal() {
    // needs to bring in a value to say which portal to open
    let userIndex = document.getElementById("userType").selectedIndex;
    let userType;
    if (userIndex === 0) {
        userType = "Parent";
    }
    else if (userIndex === 1) {
        userType = "Teacher";
    }
    else {
        userType = "Researcher";
    }
    document.getElementById("user").innerHTML = userType;
}

function teacherPortal() {
    alert("Opening Teacher Portal");
}

function parentPortal() {
    alert("Opening Parent Portal");
}

function researchPortal() {
    alert("Opening Researcher Portal");
}