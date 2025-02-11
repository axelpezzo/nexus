import { API_STATUS } from "@/config/settings";

interface ApiStatusMessage {
  title: string;
  description: string;
  status: "success" | "info" | "warning" | "error";
}

export const getApiStatusMessage = (statusCode: number): ApiStatusMessage => {
  const getStatus = (code: number): ApiStatusMessage["status"] => {
    if (code >= 200 && code < 300) return "success";
    if (code >= 300 && code < 400) return "info";
    if (code >= 400 && code < 500) return "warning";
    return "error";
  };

  switch (statusCode) {
    case API_STATUS.OK:
      return {
        title: "200 OK",
        description:
          "The request has succeeded. The information returned with the response is dependent on the method used in the request.",
        status: "success",
      };
    case API_STATUS.CREATED:
      return {
        title: "201 Created",
        description:
          "The request has been fulfilled and resulted in a new resource being created. The newly created resource can be referenced by the URI(s) returned in the entity of the response.",
        status: "success",
      };
    case API_STATUS.ACCEPTED:
      return {
        title: "202 Accepted",
        description:
          "The request has been accepted for processing, but the processing has not been completed. The request might or might not eventually be acted upon, as it might be disallowed when processing actually takes place.",
        status: "success",
      };
    case API_STATUS.NO_CONTENT:
      return {
        title: "204 No Content",
        description:
          "The server has fulfilled the request but does not need to return an entity-body, and might want to return updated metainformation.",
        status: "success",
      };
    case API_STATUS.BAD_REQUEST:
      return {
        title: "400 Bad Request",
        description:
          "The request could not be understood by the server due to malformed syntax. The client SHOULD NOT repeat the request without modifications.",
        status: "warning",
      };
    case API_STATUS.UNAUTHORIZED:
      return {
        title: "401 Unauthorized",
        description:
          "The request requires user authentication. The response MUST include a WWW-Authenticate header field containing a challenge applicable to the requested resource.",
        status: "warning",
      };
    case API_STATUS.FORBIDDEN:
      return {
        title: "403 Forbidden",
        description:
          "The server understood the request but is refusing to fulfill it. Authorization will not help and the request SHOULD NOT be repeated.",
        status: "warning",
      };
    case API_STATUS.NOT_FOUND:
      return {
        title: "404 Not Found",
        description:
          "The server has not found anything matching the Request-URI. No indication is given of whether the condition is temporary or permanent.",
        status: "warning",
      };
    case API_STATUS.METHOD_NOT_ALLOWED:
      return {
        title: "405 Method Not Allowed",
        description:
          "The method specified in the Request-Line is not allowed for the resource identified by the Request-URI. The response MUST include an Allow header containing a list of valid methods for the requested resource.",
        status: "warning",
      };
    case API_STATUS.CONFLICT:
      return {
        title: "409 Conflict",
        description:
          "The request could not be completed due to a conflict with the current state of the resource. This code is only allowed in situations where it is expected that the user might be able to resolve the conflict and resubmit the request.",
        status: "warning",
      };
    case API_STATUS.UNPROCESSABLE_ENTITY:
      return {
        title: "422 Unprocessable Entity",
        description:
          "The server understands the content type of the request entity, and the syntax of the request entity is correct, but was unable to process the contained instructions.",
        status: "warning",
      };
    case API_STATUS.TOO_MANY_REQUESTS:
      return {
        title: "429 Too Many Requests",
        description:
          'The user has sent too many requests in a given amount of time ("rate limiting"). The response representations SHOULD include details explaining the condition, and MAY include a Retry-After header indicating how long to wait before making a new request.',
        status: "warning",
      };
    case API_STATUS.INTERNAL_SERVER_ERROR:
      return {
        title: "500 Internal Server Error",
        description:
          "The server encountered an unexpected condition which prevented it from fulfilling the request.",
        status: "error",
      };
    case API_STATUS.BAD_GATEWAY:
      return {
        title: "502 Bad Gateway",
        description:
          "The server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed in attempting to fulfill the request.",
        status: "error",
      };
    case API_STATUS.SERVICE_UNAVAILABLE:
      return {
        title: "503 Service Unavailable",
        description:
          "The server is currently unable to handle the request due to a temporary overloading or maintenance of the server. The implication is that this is a temporary condition which will be alleviated after some delay.",
        status: "error",
      };
    case API_STATUS.GATEWAY_TIMEOUT:
      return {
        title: "504 Gateway Timeout",
        description:
          "The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server specified by the URI or some other auxiliary server it needed to access in attempting to complete the request.",
        status: "error",
      };
    default:
      return {
        title: `${statusCode} Unknown Status Code`,
        description:
          "The server returned a status code that is not recognized or handled by the client application.",
        status: getStatus(statusCode),
      };
  }
};
