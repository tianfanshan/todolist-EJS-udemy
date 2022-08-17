
exports.getDay = () => {
    const today = new Date();
    const options = {
        day: "numeric"
    }
    return today.toLocaleDateString("en-US", options)
}

exports.getDate = () => {
    const today = new Date();
    const options = {
        weekday: "long",
        month: "long",
        year: "numeric"
    }
    return today.toLocaleDateString("en-US", options)
}


