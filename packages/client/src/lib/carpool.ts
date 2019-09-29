/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as Parameters from "./models/parameters";
import { CarpoolContext } from "./carpoolContext";

class Carpool extends CarpoolContext {
  /**
   * Initializes a new instance of the Carpool class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, options?: Models.CarpoolOptions) {
    super(credentials, options);
  }

  /**
   * Sign up a new user
   * @summary Sign up
   * @param signUpDto
   * @param [options] The optional parameters
   * @returns Promise<Models.SignUpResponse>
   */
  signUp(signUpDto: Models.SignUpDto, options?: msRest.RequestOptionsBase): Promise<Models.SignUpResponse>;
  /**
   * @param signUpDto
   * @param callback The callback
   */
  signUp(signUpDto: Models.SignUpDto, callback: msRest.ServiceCallback<Models.UserDto>): void;
  /**
   * @param signUpDto
   * @param options The optional parameters
   * @param callback The callback
   */
  signUp(signUpDto: Models.SignUpDto, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.UserDto>): void;
  signUp(signUpDto: Models.SignUpDto, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.UserDto>, callback?: msRest.ServiceCallback<Models.UserDto>): Promise<Models.SignUpResponse> {
    return this.sendOperationRequest(
      {
        signUpDto,
        options
      },
      signUpOperationSpec,
      callback) as Promise<Models.SignUpResponse>;
  }

  /**
   * Sign in an existing user
   * @summary Sign in
   * @param authDto
   * @param [options] The optional parameters
   * @returns Promise<Models.SignInResponse>
   */
  signIn(authDto: Models.AuthDto, options?: msRest.RequestOptionsBase): Promise<Models.SignInResponse>;
  /**
   * @param authDto
   * @param callback The callback
   */
  signIn(authDto: Models.AuthDto, callback: msRest.ServiceCallback<Models.UserDto>): void;
  /**
   * @param authDto
   * @param options The optional parameters
   * @param callback The callback
   */
  signIn(authDto: Models.AuthDto, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.UserDto>): void;
  signIn(authDto: Models.AuthDto, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.UserDto>, callback?: msRest.ServiceCallback<Models.UserDto>): Promise<Models.SignInResponse> {
    return this.sendOperationRequest(
      {
        authDto,
        options
      },
      signInOperationSpec,
      callback) as Promise<Models.SignInResponse>;
  }

  /**
   * Create a new Event
   * @summary Create Event
   * @param createEventDto
   * @param [options] The optional parameters
   * @returns Promise<Models.CreateEventResponse>
   */
  createEvent(createEventDto: Models.CreateEventDto, options?: msRest.RequestOptionsBase): Promise<Models.CreateEventResponse>;
  /**
   * @param createEventDto
   * @param callback The callback
   */
  createEvent(createEventDto: Models.CreateEventDto, callback: msRest.ServiceCallback<Models.Event>): void;
  /**
   * @param createEventDto
   * @param options The optional parameters
   * @param callback The callback
   */
  createEvent(createEventDto: Models.CreateEventDto, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Event>): void;
  createEvent(createEventDto: Models.CreateEventDto, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Event>, callback?: msRest.ServiceCallback<Models.Event>): Promise<Models.CreateEventResponse> {
    return this.sendOperationRequest(
      {
        createEventDto,
        options
      },
      createEventOperationSpec,
      callback) as Promise<Models.CreateEventResponse>;
  }

  /**
   * Update an Event
   * @summary Update Event
   * @param updateEventDto
   * @param id
   * @param [options] The optional parameters
   * @returns Promise<Models.UpdateEventResponse>
   */
  updateEvent(updateEventDto: Models.UpdateEventDto, id: string, options?: msRest.RequestOptionsBase): Promise<Models.UpdateEventResponse>;
  /**
   * @param updateEventDto
   * @param id
   * @param callback The callback
   */
  updateEvent(updateEventDto: Models.UpdateEventDto, id: string, callback: msRest.ServiceCallback<Models.Event>): void;
  /**
   * @param updateEventDto
   * @param id
   * @param options The optional parameters
   * @param callback The callback
   */
  updateEvent(updateEventDto: Models.UpdateEventDto, id: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Event>): void;
  updateEvent(updateEventDto: Models.UpdateEventDto, id: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Event>, callback?: msRest.ServiceCallback<Models.Event>): Promise<Models.UpdateEventResponse> {
    return this.sendOperationRequest(
      {
        updateEventDto,
        id,
        options
      },
      updateEventOperationSpec,
      callback) as Promise<Models.UpdateEventResponse>;
  }

  /**
   * Retrieve an Event
   * @summary Get Event
   * @param id
   * @param [options] The optional parameters
   * @returns Promise<Models.GetEventResponse>
   */
  getEvent(id: string, options?: msRest.RequestOptionsBase): Promise<Models.GetEventResponse>;
  /**
   * @param id
   * @param callback The callback
   */
  getEvent(id: string, callback: msRest.ServiceCallback<Models.Event>): void;
  /**
   * @param id
   * @param options The optional parameters
   * @param callback The callback
   */
  getEvent(id: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Event>): void;
  getEvent(id: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Event>, callback?: msRest.ServiceCallback<Models.Event>): Promise<Models.GetEventResponse> {
    return this.sendOperationRequest(
      {
        id,
        options
      },
      getEventOperationSpec,
      callback) as Promise<Models.GetEventResponse>;
  }

  /**
   * Delete an Event
   * @summary Delete Event
   * @param id
   * @param [options] The optional parameters
   * @returns Promise<Models.DeleteEventResponse>
   */
  deleteEvent(id: string, options?: msRest.RequestOptionsBase): Promise<Models.DeleteEventResponse>;
  /**
   * @param id
   * @param callback The callback
   */
  deleteEvent(id: string, callback: msRest.ServiceCallback<Models.Event>): void;
  /**
   * @param id
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteEvent(id: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Event>): void;
  deleteEvent(id: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Event>, callback?: msRest.ServiceCallback<Models.Event>): Promise<Models.DeleteEventResponse> {
    return this.sendOperationRequest(
      {
        id,
        options
      },
      deleteEventOperationSpec,
      callback) as Promise<Models.DeleteEventResponse>;
  }

  /**
   * Create a new Carpool
   * @summary Create Carpool
   * @param createCarpoolDto
   * @param [options] The optional parameters
   * @returns Promise<Models.CreateCarpoolResponse>
   */
  createCarpool(createCarpoolDto: Models.CreateCarpoolDto, options?: msRest.RequestOptionsBase): Promise<Models.CreateCarpoolResponse>;
  /**
   * @param createCarpoolDto
   * @param callback The callback
   */
  createCarpool(createCarpoolDto: Models.CreateCarpoolDto, callback: msRest.ServiceCallback<Models.CarpoolModel>): void;
  /**
   * @param createCarpoolDto
   * @param options The optional parameters
   * @param callback The callback
   */
  createCarpool(createCarpoolDto: Models.CreateCarpoolDto, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CarpoolModel>): void;
  createCarpool(createCarpoolDto: Models.CreateCarpoolDto, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CarpoolModel>, callback?: msRest.ServiceCallback<Models.CarpoolModel>): Promise<Models.CreateCarpoolResponse> {
    return this.sendOperationRequest(
      {
        createCarpoolDto,
        options
      },
      createCarpoolOperationSpec,
      callback) as Promise<Models.CreateCarpoolResponse>;
  }

  /**
   * Retrieve a Carpool
   * @summary Get Carpool
   * @param id
   * @param [options] The optional parameters
   * @returns Promise<Models.GetCarpoolResponse>
   */
  getCarpool(id: string, options?: msRest.RequestOptionsBase): Promise<Models.GetCarpoolResponse>;
  /**
   * @param id
   * @param callback The callback
   */
  getCarpool(id: string, callback: msRest.ServiceCallback<Models.CarpoolModel>): void;
  /**
   * @param id
   * @param options The optional parameters
   * @param callback The callback
   */
  getCarpool(id: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CarpoolModel>): void;
  getCarpool(id: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CarpoolModel>, callback?: msRest.ServiceCallback<Models.CarpoolModel>): Promise<Models.GetCarpoolResponse> {
    return this.sendOperationRequest(
      {
        id,
        options
      },
      getCarpoolOperationSpec,
      callback) as Promise<Models.GetCarpoolResponse>;
  }

  /**
   * Update a Carpool
   * @summary Update Carpool
   * @param updateCarpoolDto
   * @param id
   * @param [options] The optional parameters
   * @returns Promise<Models.UpdateCarpoolResponse>
   */
  updateCarpool(updateCarpoolDto: Models.UpdateCarpoolDto, id: string, options?: msRest.RequestOptionsBase): Promise<Models.UpdateCarpoolResponse>;
  /**
   * @param updateCarpoolDto
   * @param id
   * @param callback The callback
   */
  updateCarpool(updateCarpoolDto: Models.UpdateCarpoolDto, id: string, callback: msRest.ServiceCallback<Models.CarpoolModel>): void;
  /**
   * @param updateCarpoolDto
   * @param id
   * @param options The optional parameters
   * @param callback The callback
   */
  updateCarpool(updateCarpoolDto: Models.UpdateCarpoolDto, id: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CarpoolModel>): void;
  updateCarpool(updateCarpoolDto: Models.UpdateCarpoolDto, id: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CarpoolModel>, callback?: msRest.ServiceCallback<Models.CarpoolModel>): Promise<Models.UpdateCarpoolResponse> {
    return this.sendOperationRequest(
      {
        updateCarpoolDto,
        id,
        options
      },
      updateCarpoolOperationSpec,
      callback) as Promise<Models.UpdateCarpoolResponse>;
  }

  /**
   * Delete a Carpool
   * @summary Delete Carpool
   * @param id
   * @param [options] The optional parameters
   * @returns Promise<Models.DeleteCarpoolResponse>
   */
  deleteCarpool(id: string, options?: msRest.RequestOptionsBase): Promise<Models.DeleteCarpoolResponse>;
  /**
   * @param id
   * @param callback The callback
   */
  deleteCarpool(id: string, callback: msRest.ServiceCallback<Models.CarpoolModel>): void;
  /**
   * @param id
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteCarpool(id: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CarpoolModel>): void;
  deleteCarpool(id: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CarpoolModel>, callback?: msRest.ServiceCallback<Models.CarpoolModel>): Promise<Models.DeleteCarpoolResponse> {
    return this.sendOperationRequest(
      {
        id,
        options
      },
      deleteCarpoolOperationSpec,
      callback) as Promise<Models.DeleteCarpoolResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const signUpOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "api/v1/auth/signup",
  requestBody: {
    parameterPath: "signUpDto",
    mapper: {
      ...Mappers.SignUpDto,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.UserDto
    },
    default: {}
  },
  serializer
};

const signInOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "api/v1/auth/signin",
  requestBody: {
    parameterPath: "authDto",
    mapper: {
      ...Mappers.AuthDto,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.UserDto
    },
    default: {}
  },
  serializer
};

const createEventOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "api/v1/event",
  requestBody: {
    parameterPath: "createEventDto",
    mapper: {
      ...Mappers.CreateEventDto,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Event
    },
    default: {}
  },
  serializer
};

const updateEventOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "api/v1/event/{id}",
  urlParameters: [
    Parameters.id
  ],
  requestBody: {
    parameterPath: "updateEventDto",
    mapper: {
      ...Mappers.UpdateEventDto,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Event
    },
    404: {},
    default: {}
  },
  serializer
};

const getEventOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "api/v1/event/{id}",
  urlParameters: [
    Parameters.id
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Event
    },
    404: {},
    default: {}
  },
  serializer
};

const deleteEventOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "api/v1/event/{id}",
  urlParameters: [
    Parameters.id
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Event
    },
    404: {},
    default: {}
  },
  serializer
};

const createCarpoolOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "api/v1/carpool",
  requestBody: {
    parameterPath: "createCarpoolDto",
    mapper: {
      ...Mappers.CreateCarpoolDto,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CarpoolModel
    },
    default: {}
  },
  serializer
};

const getCarpoolOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "api/v1/carpool/{id}",
  urlParameters: [
    Parameters.id
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CarpoolModel
    },
    404: {},
    default: {}
  },
  serializer
};

const updateCarpoolOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "api/v1/carpool/{id}",
  urlParameters: [
    Parameters.id
  ],
  requestBody: {
    parameterPath: "updateCarpoolDto",
    mapper: {
      ...Mappers.UpdateCarpoolDto,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CarpoolModel
    },
    404: {},
    default: {}
  },
  serializer
};

const deleteCarpoolOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "api/v1/carpool/{id}",
  urlParameters: [
    Parameters.id
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CarpoolModel
    },
    404: {},
    default: {}
  },
  serializer
};

export {
  Carpool,
  CarpoolContext,
  Models as CarpoolModels,
  Mappers as CarpoolMappers
};
