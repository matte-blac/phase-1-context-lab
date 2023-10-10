/* Your Code Here */

// Creates an employee record using destructing from an array
function createEmployeeRecord([firstName, familyName, title, payPerHour]){
    return{
        firstName,
        familyName,
        title,
        payPerHour,
        // Initialize events as an empty array
        timeInEvents: [],
        timeOutEvents: []
    }
}

// Creates multiple employee records from an array of arrays
function createEmployeeRecords(employeeData){
    // Use map to apply createEmployeeRecord to each sub-array
    return employeeData.map(createEmployeeRecord)
}

// Creates a time in event for an employee
function createTimeInEvent(dateTime){
    // Pushes a new event
    this.timeInEvents.push(createEvent('TimeIn', dateTime))
    // Updates the employee record
    return this
}

// Repeates the some function as above for time out events
function createTimeOutEvent(dateTime){
    this.timeOutEvents.push(createEvent('TimeOut', dateTime))
    return this
}

// Creates an event with a type (TimeIn or TimeOut), date, and hour
function createEvent(type, dateTime){
    // Split the dateTime string into date and hour
    const [date, hour] = dateTime.split(' ')
    return {
        type,
        date,
        // Convert hours to int
        hour: parseInt(hour, 10)
    }
}

// Calculates the hours worked on a specific date by an employee
function hoursWorkedOnDate(date){
    // Find the relative time in event
    const inEvent = this.timeInEvents.find(e => e.date === date)
    // Find the relative time out event
    const outEvent = this.timeOutEvents.find(e => e.date === date)
    // Calculates the hours worked
    return (outEvent.hour - inEvent.hour) / 100
}

// Calculates the wages earned on a specif date by an employee
function wagesEarnedOnDate(date){
    // Calculates the hours worked
    const hoursWorked = hoursWorkedOnDate.call(this, date)
    // Calculates the wages earned
    return hoursWorked * this.payPerHour
}

// Finds an employee by their first name from an array of employee records
function findEmployeeByFirstName(srcArray, firstName){
    // Finds and return the employee record with the matching first name
    return srcArray.find(rec => rec.firstName === firstName)
}

// Calculates the total payroll from an array of employee records
function calculatePayroll(employeeRecords){
    // Use reduce to calculate the total payroll
    return employeeRecords.reduce((total, rec) => total + allWagesFor.call(rec), 0)
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

