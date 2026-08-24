// Task. Convert a number of seconds into a clock string of the form "HH:MM:SS". Every part is padded to two digits.

const secondsToTime = (seconds) => {
  
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const totalSeconds = seconds % 60

    const clockString = 
        `${String(hours).padStart(2, "0")}:`+
        `${String(minutes).padStart(2, "0")}:`+
        `${String(totalSeconds).padStart(2, "0")}:`

    return clockString
};

// console.log(secondsToTime(0));
console.log(secondsToTime(3661));
console.log(secondsToTime(60));
console.log(secondsToTime(5));
