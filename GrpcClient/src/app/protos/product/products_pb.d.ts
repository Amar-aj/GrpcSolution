// package: products
// file: products.proto

import * as jspb from "google-protobuf";

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class Product extends jspb.Message {
  getProductrowid(): number;
  setProductrowid(value: number): void;

  getProductid(): string;
  setProductid(value: string): void;

  getProductname(): string;
  setProductname(value: string): void;

  getCategoryname(): string;
  setCategoryname(value: string): void;

  getManufacturer(): string;
  setManufacturer(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Product.AsObject;
  static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Product;
  static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
}

export namespace Product {
  export type AsObject = {
    productrowid: number,
    productid: string,
    productname: string,
    categoryname: string,
    manufacturer: string,
    price: number,
  }
}

export class ProductRowIdFilter extends jspb.Message {
  getProductrowid(): number;
  setProductrowid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductRowIdFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ProductRowIdFilter): ProductRowIdFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductRowIdFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductRowIdFilter;
  static deserializeBinaryFromReader(message: ProductRowIdFilter, reader: jspb.BinaryReader): ProductRowIdFilter;
}

export namespace ProductRowIdFilter {
  export type AsObject = {
    productrowid: number,
  }
}

export class Products extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<Product>;
  setItemsList(value: Array<Product>): void;
  addItems(value?: Product, index?: number): Product;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Products.AsObject;
  static toObject(includeInstance: boolean, msg: Products): Products.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Products, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Products;
  static deserializeBinaryFromReader(message: Products, reader: jspb.BinaryReader): Products;
}

export namespace Products {
  export type AsObject = {
    itemsList: Array<Product.AsObject>,
  }
}

