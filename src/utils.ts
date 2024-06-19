export const formatDate = (date: number, format: 1 | 2) => {
    const newDate = new Date(date );

    const dateString = newDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    const day = String(newDate.getDate()).padStart(2, "0");
    const month = String(newDate.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = newDate.getFullYear();
    // Extract hours and minutes
    let hours = newDate.getHours();
    let minutes: string | number = newDate.getMinutes();

    // Determine AM/PM
    const period = hours >= 12 ? "PM" : "AM";

    // Convert hours to 12-hour format
    hours = hours % 12 || 12;

    // Pad minutes with a leading zero if necessary
    minutes = minutes < 10 ? "0" + minutes : minutes;



    if (isNaN(Date.parse(dateString))) {
        return ["Unknown"];
    }
    if (format === 2) return [dateString];
    return [`${day}-${month}-${year}`, `${hours}:${minutes} ${period}`];
};