// package: products
// file: products.proto

var products_pb = require("./products_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ProductsService = (function () {
  function ProductsService() {}
  ProductsService.serviceName = "products.ProductsService";
  return ProductsService;
}());

ProductsService.GetAll = {
  methodName: "GetAll",
  service: ProductsService,
  requestStream: false,
  responseStream: false,
  requestType: products_pb.Empty,
  responseType: products_pb.Products
};

ProductsService.GetById = {
  methodName: "GetById",
  service: ProductsService,
  requestStream: false,
  responseStream: false,
  requestType: products_pb.ProductRowIdFilter,
  responseType: products_pb.Product
};

ProductsService.Post = {
  methodName: "Post",
  service: ProductsService,
  requestStream: false,
  responseStream: false,
  requestType: products_pb.Product,
  responseType: products_pb.Product
};

ProductsService.Put = {
  methodName: "Put",
  service: ProductsService,
  requestStream: false,
  responseStream: false,
  requestType: products_pb.Product,
  responseType: products_pb.Product
};

ProductsService.Delete = {
  methodName: "Delete",
  service: ProductsService,
  requestStream: false,
  responseStream: false,
  requestType: products_pb.ProductRowIdFilter,
  responseType: products_pb.Empty
};

exports.ProductsService = ProductsService;

function ProductsServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ProductsServiceClient.prototype.getAll = function getAll(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProductsService.GetAll, {
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
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ProductsServiceClient.prototype.getById = function getById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProductsService.GetById, {
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
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ProductsServiceClient.prototype.post = function post(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProductsService.Post, {
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
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ProductsServiceClient.prototype.put = function put(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProductsService.Put, {
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
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ProductsServiceClient.prototype.delete = function pb_delete(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProductsService.Delete, {
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
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.ProductsServiceClient = ProductsServiceClient;

