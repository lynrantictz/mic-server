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

global.formatResponse = formatResponse
global.formatErrorResponse = formatErrorResponse