// package: proto.metronion.v1
// file: proto/metronion/v1/metronion.proto

var proto_metronion_v1_metronion_pb = require('../../../proto/metronion/v1/metronion_pb');
var grpc = require('@improbable-eng/grpc-web').grpc;

var MetronionService = (function () {
  function MetronionService() {}
  MetronionService.serviceName = 'proto.metronion.v1.MetronionService';
  return MetronionService;
})();

MetronionService.GetMetadata = {
  methodName: 'GetMetadata',
  service: MetronionService,
  requestStream: false,
  responseStream: false,
  requestType: proto_metronion_v1_metronion_pb.GetMetadataRequest,
  responseType: proto_metronion_v1_metronion_pb.GetMetadataResponse,
};

MetronionService.GetListMetadata = {
  methodName: 'GetListMetadata',
  service: MetronionService,
  requestStream: false,
  responseStream: false,
  requestType: proto_metronion_v1_metronion_pb.GetListMetadataRequest,
  responseType: proto_metronion_v1_metronion_pb.GetListMetadataResponse,
};

MetronionService.GetMetronionActivities = {
  methodName: 'GetMetronionActivities',
  service: MetronionService,
  requestStream: false,
  responseStream: false,
  requestType: proto_metronion_v1_metronion_pb.GetMetronionActivitiesRequest,
  responseType: proto_metronion_v1_metronion_pb.GetMetronionActivitiesResponse,
};

MetronionService.GetMetronionListing = {
  methodName: 'GetMetronionListing',
  service: MetronionService,
  requestStream: false,
  responseStream: false,
  requestType: proto_metronion_v1_metronion_pb.GetMetronionListingRequest,
  responseType: proto_metronion_v1_metronion_pb.GetMetronionListingResponse,
};

MetronionService.GetMetronionOffers = {
  methodName: 'GetMetronionOffers',
  service: MetronionService,
  requestStream: false,
  responseStream: false,
  requestType: proto_metronion_v1_metronion_pb.GetMetronionOffersRequest,
  responseType: proto_metronion_v1_metronion_pb.GetMetronionOffersResponse,
};

exports.MetronionService = MetronionService;

function MetronionServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MetronionServiceClient.prototype.getMetadata = function getMetadata(
  requestMessage,
  metadata,
  callback,
) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MetronionService.GetMetadata, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    },
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    },
  };
};

MetronionServiceClient.prototype.getListMetadata = function getListMetadata(
  requestMessage,
  metadata,
  callback,
) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MetronionService.GetListMetadata, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    },
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    },
  };
};

MetronionServiceClient.prototype.getMetronionActivities =
  function getMetronionActivities(requestMessage, metadata, callback) {
    if (arguments.length === 2) {
      callback = arguments[1];
    }
    var client = grpc.unary(MetronionService.GetMetronionActivities, {
      request: requestMessage,
      host: this.serviceHost,
      metadata: metadata,
      transport: this.options.transport,
      debug: this.options.debug,
      onEnd: function (response) {
        if (callback) {
          if (response.status !== grpc.Code.OK) {
            var err = new Error(response.statusMessage);
            err.code = response.status;
            err.metadata = response.trailers;
            callback(err, null);
          } else {
            callback(null, response.message);
          }
        }
      },
    });
    return {
      cancel: function () {
        callback = null;
        client.close();
      },
    };
  };

MetronionServiceClient.prototype.getMetronionListing =
  function getMetronionListing(requestMessage, metadata, callback) {
    if (arguments.length === 2) {
      callback = arguments[1];
    }
    var client = grpc.unary(MetronionService.GetMetronionListing, {
      request: requestMessage,
      host: this.serviceHost,
      metadata: metadata,
      transport: this.options.transport,
      debug: this.options.debug,
      onEnd: function (response) {
        if (callback) {
          if (response.status !== grpc.Code.OK) {
            var err = new Error(response.statusMessage);
            err.code = response.status;
            err.metadata = response.trailers;
            callback(err, null);
          } else {
            callback(null, response.message);
          }
        }
      },
    });
    return {
      cancel: function () {
        callback = null;
        client.close();
      },
    };
  };

MetronionServiceClient.prototype.getMetronionOffers =
  function getMetronionOffers(requestMessage, metadata, callback) {
    if (arguments.length === 2) {
      callback = arguments[1];
    }
    var client = grpc.unary(MetronionService.GetMetronionOffers, {
      request: requestMessage,
      host: this.serviceHost,
      metadata: metadata,
      transport: this.options.transport,
      debug: this.options.debug,
      onEnd: function (response) {
        if (callback) {
          if (response.status !== grpc.Code.OK) {
            var err = new Error(response.statusMessage);
            err.code = response.status;
            err.metadata = response.trailers;
            callback(err, null);
          } else {
            callback(null, response.message);
          }
        }
      },
    });
    return {
      cancel: function () {
        callback = null;
        client.close();
      },
    };
  };

exports.MetronionServiceClient = MetronionServiceClient;
