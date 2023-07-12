function getFormattedDate() {
    const date = new Date();
    const formattedDate = date.toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        meridiem: true,
    });
    return formattedDate;
}

module.exports = {
    getFormattedDate,
};