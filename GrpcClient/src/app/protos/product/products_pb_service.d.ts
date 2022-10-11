// package: products
// file: products.proto

import * as products_pb from "./products_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ProductsServiceGetAll = {
  readonly methodName: string;
  readonly service: typeof ProductsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof products_pb.Empty;
  readonly responseType: typeof products_pb.Products;
};

type ProductsServiceGetById = {
  readonly methodName: string;
  readonly service: typeof ProductsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof products_pb.ProductRowIdFilter;
  readonly responseType: typeof products_pb.Product;
};

type ProductsServicePost = {
  readonly methodName: string;
  readonly service: typeof ProductsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof products_pb.Product;
  readonly responseType: typeof products_pb.Product;
};

type ProductsServicePut = {
  readonly methodName: string;
  readonly service: typeof ProductsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof products_pb.Product;
  readonly responseType: typeof products_pb.Product;
};

type ProductsServiceDelete = {
  readonly methodName: string;
  readonly service: typeof ProductsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof products_pb.ProductRowIdFilter;
  readonly responseType: typeof products_pb.Empty;
};

export class ProductsService {
  static readonly serviceName: string;
  static readonly GetAll: ProductsServiceGetAll;
  static readonly GetById: ProductsServiceGetById;
  static readonly Post: ProductsServicePost;
  static readonly Put: ProductsServicePut;
  static readonly Delete: ProductsServiceDelete;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ProductsServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getAll(
    requestMessage: products_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: products_pb.Products|null) => void
  ): UnaryResponse;
  getAll(
    requestMessage: products_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: products_pb.Products|null) => void
  ): UnaryResponse;
  getById(
    requestMessage: products_pb.ProductRowIdFilter,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: products_pb.Product|null) => void
  ): UnaryResponse;
  getById(
    requestMessage: products_pb.ProductRowIdFilter,
    callback: (error: ServiceError|null, responseMessage: products_pb.Product|null) => void
  ): UnaryResponse;
  post(
    requestMessage: products_pb.Product,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: products_pb.Product|null) => void
  ): UnaryResponse;
  post(
    requestMessage: products_pb.Product,
    callback: (error: ServiceError|null, responseMessage: products_pb.Product|null) => void
  ): UnaryResponse;
  put(
    requestMessage: products_pb.Product,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: products_pb.Product|null) => void
  ): UnaryResponse;
  put(
    requestMessage: products_pb.Product,
    callback: (error: ServiceError|null, responseMessage: products_pb.Product|null) => void
  ): UnaryResponse;
  delete(
    requestMessage: products_pb.ProductRowIdFilter,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: products_pb.Empty|null) => void
  ): UnaryResponse;
  delete(
    requestMessage: products_pb.ProductRowIdFilter,
    callback: (error: ServiceError|null, responseMessage: products_pb.Empty|null) => void
  ): UnaryResponse;
}

