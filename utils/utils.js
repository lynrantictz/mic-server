const formatResponse = (success, message, data) => {
    return {
        success: success,
        message: message,
        data: data
    }
}
const formatErrorResponse = (message, errors) => {
    return {
        success: false,
        message: message,
        errors: errors
    }
}

const uppercaseFirst = str => `${str[0].toUpperCase()}${str.substr(1)}`

global.formatResponse = formatResponse
global.formatErrorResponse = formatErrorResponse
global.uppercaseFirst = uppercaseFirst