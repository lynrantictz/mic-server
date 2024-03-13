const formatResponse = (success, message, data) => {
    return {
        success: success,
        message: message,
        data: data
    };
};

global.formatResponse = formatResponse;