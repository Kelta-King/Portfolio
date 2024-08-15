const responseCode = {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NON_AUTHORITATIVE_INFORMATION: 203,
    NO_CONTENT: 204,
    RESET_CONTENT: 205,
    PARTIAL_CONTENT: 206,
    MULTI_STATUS: 207,
    ALREADY_REPORTED: 208,
    IM_USED: 226,
    MOVED_PERMANENTLY: 301,
    FOUND: 302,
    SEE_OTHER: 303,
    NOT_MODIFIED: 304,
    USE_PROXY: 305,
    SWITCH_PROXY: 306,
    TEMPORARY_REDIRECT: 307,
    PERMANENT_REDIRECT: 308,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    NOT_ACCEPTABLE: 406,
    PROXY_AUTHENTICATION_REQUIRED: 407,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    GONE: 410,
    LENGTH_REQUIRED: 411,
    PRECONDITION_FAILED: 412,
    PAYLOAD_TOO_LARGE: 413,
    URI_TOO_LONG: 414,
    UNSUPPORTED_MEDIA_TYPE: 415,
    RANGE_NOT_SATISFIABLE: 416,
    EXPECTATION_FAILED: 417,
    IM_A_TEAPOT: 418,
    MISDIRECTED_REQUEST: 421,
    UNPROCESSABLE_ENTITY: 422,
    LOCKED: 423,
    FAILED_DEPENDENCY: 424,
    TOO_EARLY: 425,
    UPGRADE_REQUIRED: 426,
    PRECONDITION_REQUIRED: 428,
    TOO_MANY_REQUESTS: 429,
    REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
    UNAVAILABLE_FOR_LEGAL_REASONS: 451,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
    HTTP_VERSION_NOT_SUPPORTED: 505,
    VARIANT_ALSO_NEGOTIATES: 506,
    INSUFFICIENT_STORAGE: 507,
    LOOP_DETECTED: 508,
    NOT_EXTENDED: 510,
    NETWORK_AUTHENTICATION_REQUIRED: 511
};

function sendResponse(response, code, message) {
    response.status(responseCode[code]).json({
        status: responseCode[code],
        message: message || "Default message"
    });
}

// Example functions for each HTTP response code:

function ok(response, message) {
    sendResponse(response, 'OK', message || "Request successful");
}

function created(response, message) {
    sendResponse(response, 'CREATED', message || "Resource created");
}

function accepted(response, message) {
    sendResponse(response, 'ACCEPTED', message || "Request accepted");
}

function nonAuthoritativeInformation(response, message) {
    sendResponse(response, 'NON_AUTHORITATIVE_INFORMATION', message || "Non-authoritative information");
}

function noContent(response, message) {
    sendResponse(response, 'NO_CONTENT', message || "No content");
}

function resetContent(response, message) {
    sendResponse(response, 'RESET_CONTENT', message || "Content reset");
}

function partialContent(response, message) {
    sendResponse(response, 'PARTIAL_CONTENT', message || "Partial content");
}

function multiStatus(response, message) {
    sendResponse(response, 'MULTI_STATUS', message || "Multi-status");
}

function alreadyReported(response, message) {
    sendResponse(response, 'ALREADY_REPORTED', message || "Already reported");
}

function imUsed(response, message) {
    sendResponse(response, 'IM_USED', message || "IM used");
}

function movedPermanently(response, message) {
    sendResponse(response, 'MOVED_PERMANENTLY', message || "Moved permanently");
}

function found(response, message) {
    sendResponse(response, 'FOUND', message || "Found");
}

function seeOther(response, message) {
    sendResponse(response, 'SEE_OTHER', message || "See other");
}

function notModified(response, message) {
    sendResponse(response, 'NOT_MODIFIED', message || "Not modified");
}

function useProxy(response, message) {
    sendResponse(response, 'USE_PROXY', message || "Use proxy");
}

function switchProxy(response, message) {
    sendResponse(response, 'SWITCH_PROXY', message || "Switch proxy");
}

function temporaryRedirect(response, message) {
    sendResponse(response, 'TEMPORARY_REDIRECT', message || "Temporary redirect");
}

function permanentRedirect(response, message) {
    sendResponse(response, 'PERMANENT_REDIRECT', message || "Permanent redirect");
}

function badRequest(response, message) {
    sendResponse(response, 'BAD_REQUEST', message || "Bad request");
}

function unauthorized(response, message) {
    sendResponse(response, 'UNAUTHORIZED', message || "Unauthorized");
}

function paymentRequired(response, message) {
    sendResponse(response, 'PAYMENT_REQUIRED', message || "Payment required");
}

function forbidden(response, message) {
    sendResponse(response, 'FORBIDDEN', message || "Forbidden");
}

function notFound(response, message) {
    sendResponse(response, 'NOT_FOUND', message || "Not found");
}

function methodNotAllowed(response, message) {
    sendResponse(response, 'METHOD_NOT_ALLOWED', message || "Method not allowed");
}

function notAcceptable(response, message) {
    sendResponse(response, 'NOT_ACCEPTABLE', message || "Not acceptable");
}

function proxyAuthenticationRequired(response, message) {
    sendResponse(response, 'PROXY_AUTHENTICATION_REQUIRED', message || "Proxy authentication required");
}

function requestTimeout(response, message) {
    sendResponse(response, 'REQUEST_TIMEOUT', message || "Request timeout");
}

function conflict(response, message) {
    sendResponse(response, 'CONFLICT', message || "Conflict");
}

function gone(response, message) {
    sendResponse(response, 'GONE', message || "Gone");
}

function lengthRequired(response, message) {
    sendResponse(response, 'LENGTH_REQUIRED', message || "Length required");
}

function preconditionFailed(response, message) {
    sendResponse(response, 'PRECONDITION_FAILED', message || "Precondition failed");
}

function payloadTooLarge(response, message) {
    sendResponse(response, 'PAYLOAD_TOO_LARGE', message || "Payload too large");
}

function uriTooLong(response, message) {
    sendResponse(response, 'URI_TOO_LONG', message || "URI too long");
}

function unsupportedMediaType(response, message) {
    sendResponse(response, 'UNSUPPORTED_MEDIA_TYPE', message || "Unsupported media type");
}

function rangeNotSatisfiable(response, message) {
    sendResponse(response, 'RANGE_NOT_SATISFIABLE', message || "Range not satisfiable");
}

function expectationFailed(response, message) {
    sendResponse(response, 'EXPECTATION_FAILED', message || "Expectation failed");
}

function imATeapot(response, message) {
    sendResponse(response, 'IM_A_TEAPOT', message || "I'm a teapot");
}

function misdirectedRequest(response, message) {
    sendResponse(response, 'MISDIRECTED_REQUEST', message || "Misdirected request");
}

function unprocessableEntity(response, message) {
    sendResponse(response, 'UNPROCESSABLE_ENTITY', message || "Unprocessable entity");
}

function locked(response, message) {
    sendResponse(response, 'LOCKED', message || "Locked");
}

function failedDependency(response, message) {
    sendResponse(response, 'FAILED_DEPENDENCY', message || "Failed dependency");
}

function tooEarly(response, message) {
    sendResponse(response, 'TOO_EARLY', message || "Too early");
}

function upgradeRequired(response, message) {
    sendResponse(response, 'UPGRADE_REQUIRED', message || "Upgrade required");
}

function preconditionRequired(response, message) {
    sendResponse(response, 'PRECONDITION_REQUIRED', message || "Precondition required");
}

function tooManyRequests(response, message) {
    sendResponse(response, 'TOO_MANY_REQUESTS', message || "Too many requests");
}

function requestHeaderFieldsTooLarge(response, message) {
    sendResponse(response, 'REQUEST_HEADER_FIELDS_TOO_LARGE', message || "Request header fields too large");
}

function unavailableForLegalReasons(response, message) {
    sendResponse(response, 'UNAVAILABLE_FOR_LEGAL_REASONS', message || "Unavailable for legal reasons");
}

function internalServerError(response, message) {
    sendResponse(response, 'INTERNAL_SERVER_ERROR', message || "Internal server error");
}

function notImplemented(response, message) {
    sendResponse(response, 'NOT_IMPLEMENTED', message || "Not implemented");
}

function badGateway(response, message) {
    sendResponse(response, 'BAD_GATEWAY', message || "Bad gateway");
}

function serviceUnavailable(response, message) {
    sendResponse(response, 'SERVICE_UNAVAILABLE', message || "Service unavailable");
}

function gatewayTimeout(response, message) {
    sendResponse(response, 'GATEWAY_TIMEOUT', message || "Gateway timeout");
}

function httpVersionNotSupported(response, message) {
    sendResponse(response, 'HTTP_VERSION_NOT_SUPPORTED', message || "HTTP version not supported");
}

function variantAlsoNegotiates(response, message) {
    sendResponse(response, 'VARIANT_ALSO_NEGOTIATES', message || "Variant also negotiates");
}

function insufficientStorage(response, message) {
    sendResponse(response, 'INSUFFICIENT_STORAGE', message || "Insufficient storage");
}

function loopDetected(response, message) {
    sendResponse(response, 'LOOP_DETECTED', message || "Loop detected");
}

function notExtended(response, message) {
    sendResponse(response, 'NOT_EXTENDED', message || "Not extended");
}

function networkAuthenticationRequired(response, message) {
    sendResponse(response, 'NETWORK_AUTHENTICATION_REQUIRED', message || "Network authentication required");
}

const responses = {
    ok,
    created,
    accepted,
    nonAuthoritativeInformation,
    noContent,
    resetContent,
    partialContent,
    multiStatus,
    alreadyReported,
    imUsed,
    movedPermanently,
    found,
    seeOther,
    notModified,
    useProxy,
    switchProxy,
    temporaryRedirect,
    permanentRedirect,
    badRequest,
    unauthorized,
    paymentRequired,
    forbidden,
    notFound,
    methodNotAllowed,
    notAcceptable,
    proxyAuthenticationRequired,
    requestTimeout,
    conflict,
    gone,
    lengthRequired,
    preconditionFailed,
    payloadTooLarge,
    uriTooLong,
    unsupportedMediaType,
    rangeNotSatisfiable,
    expectationFailed,
    imATeapot,
    misdirectedRequest,
    unprocessableEntity,
    locked,
    failedDependency,
    tooEarly,
    upgradeRequired,
    preconditionRequired,
    tooManyRequests,
    requestHeaderFieldsTooLarge,
    unavailableForLegalReasons,
    internalServerError,
    notImplemented,
    badGateway,
    serviceUnavailable,
    gatewayTimeout,
    httpVersionNotSupported,
    variantAlsoNegotiates,
    insufficientStorage,
    loopDetected,
    notExtended,
    networkAuthenticationRequired
}

module.exports = responses;
