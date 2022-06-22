// package: proto.wearables.v1
// file: proto/wearables/v1/wearables.proto

var proto_wearables_v1_wearables_pb = require('../../../proto/wearables/v1/wearables_pb');
var grpc = require('@improbable-eng/grpc-web').grpc;

var WearablesService = (function () {
  function WearablesService() {}
  WearablesService.serviceName = 'proto.wearables.v1.WearablesService';
  return WearablesService;
})();

WearablesService.GetWearables = {
  methodName: 'GetWearables',
  service: WearablesService,
  requestStream: false,
  responseStream: false,
  requestType: proto_wearables_v1_wearables_pb.GetWearablesRequest,
  responseType: proto_wearables_v1_wearables_pb.GetWearablesResponse,
};

WearablesService.GetListWearables = {
  methodName: 'GetListWearables',
  service: WearablesService,
  requestStream: false,
  responseStream: false,
  requestType: proto_wearables_v1_wearables_pb.GetListWearablesRequest,
  responseType: proto_wearables_v1_wearables_pb.GetListWearablesResponse,
};

exports.WearablesService = WearablesService;

function WearablesServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

WearablesServiceClient.prototype.getWearables = function getWearables(
  requestMessage,
  metadata,
  callback,
) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WearablesService.GetWearables, {
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

WearablesServiceClient.prototype.getListWearables = function getListWearables(
  requestMessage,
  metadata,
  callback,
) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WearablesService.GetListWearables, {
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

exports.WearablesServiceClient = WearablesServiceClient;
