// source: products.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.products.Empty', null, global);
goog.exportSymbol('proto.products.Product', null, global);
goog.exportSymbol('proto.products.ProductRowIdFilter', null, global);
goog.exportSymbol('proto.products.Products', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.products.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.products.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.products.Empty.displayName = 'proto.products.Empty';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.products.Product = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.products.Product, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.products.Product.displayName = 'proto.products.Product';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.products.ProductRowIdFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.products.ProductRowIdFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.products.ProductRowIdFilter.displayName = 'proto.products.ProductRowIdFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.products.Products = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.products.Products.repeatedFields_, null);
};
goog.inherits(proto.products.Products, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.products.Products.displayName = 'proto.products.Products';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.products.Empty.prototype.toObject = function(opt_includeInstance) {
  return proto.products.Empty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.products.Empty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.products.Empty.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.products.Empty}
 */
proto.products.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.products.Empty;
  return proto.products.Empty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.products.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.products.Empty}
 */
proto.products.Empty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.products.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.products.Empty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.products.Empty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.products.Empty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.products.Product.prototype.toObject = function(opt_includeInstance) {
  return proto.products.Product.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.products.Product} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.products.Product.toObject = function(includeInstance, msg) {
  var f, obj = {
    productrowid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    productid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    productname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    categoryname: jspb.Message.getFieldWithDefault(msg, 4, ""),
    manufacturer: jspb.Message.getFieldWithDefault(msg, 5, ""),
    price: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.products.Product}
 */
proto.products.Product.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.products.Product;
  return proto.products.Product.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.products.Product} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.products.Product}
 */
proto.products.Product.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProductrowid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategoryname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setManufacturer(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPrice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.products.Product.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.products.Product.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.products.Product} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.products.Product.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProductrowid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getProductid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProductname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCategoryname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getManufacturer();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional int32 ProductRowId = 1;
 * @return {number}
 */
proto.products.Product.prototype.getProductrowid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.products.Product} returns this
 */
proto.products.Product.prototype.setProductrowid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string ProductId = 2;
 * @return {string}
 */
proto.products.Product.prototype.getProductid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.products.Product} returns this
 */
proto.products.Product.prototype.setProductid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string ProductName = 3;
 * @return {string}
 */
proto.products.Product.prototype.getProductname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.products.Product} returns this
 */
proto.products.Product.prototype.setProductname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string CategoryName = 4;
 * @return {string}
 */
proto.products.Product.prototype.getCategoryname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.products.Product} returns this
 */
proto.products.Product.prototype.setCategoryname = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string Manufacturer = 5;
 * @return {string}
 */
proto.products.Product.prototype.getManufacturer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.products.Product} returns this
 */
proto.products.Product.prototype.setManufacturer = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 Price = 6;
 * @return {number}
 */
proto.products.Product.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.products.Product} returns this
 */
proto.products.Product.prototype.setPrice = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.products.ProductRowIdFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.products.ProductRowIdFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.products.ProductRowIdFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.products.ProductRowIdFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    productrowid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.products.ProductRowIdFilter}
 */
proto.products.ProductRowIdFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.products.ProductRowIdFilter;
  return proto.products.ProductRowIdFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.products.ProductRowIdFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.products.ProductRowIdFilter}
 */
proto.products.ProductRowIdFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProductrowid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.products.ProductRowIdFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.products.ProductRowIdFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.products.ProductRowIdFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.products.ProductRowIdFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProductrowid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 productRowId = 1;
 * @return {number}
 */
proto.products.ProductRowIdFilter.prototype.getProductrowid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.products.ProductRowIdFilter} returns this
 */
proto.products.ProductRowIdFilter.prototype.setProductrowid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.products.Products.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.products.Products.prototype.toObject = function(opt_includeInstance) {
  return proto.products.Products.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.products.Products} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.products.Products.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.products.Product.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.products.Products}
 */
proto.products.Products.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.products.Products;
  return proto.products.Products.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.products.Products} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.products.Products}
 */
proto.products.Products.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.products.Product;
      reader.readMessage(value,proto.products.Product.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.products.Products.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.products.Products.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.products.Products} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.products.Products.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.products.Product.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Product items = 1;
 * @return {!Array<!proto.products.Product>}
 */
proto.products.Products.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.products.Product>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.products.Product, 1));
};


/**
 * @param {!Array<!proto.products.Product>} value
 * @return {!proto.products.Products} returns this
*/
proto.products.Products.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.products.Product=} opt_value
 * @param {number=} opt_index
 * @return {!proto.products.Product}
 */
proto.products.Products.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.products.Product, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.products.Products} returns this
 */
proto.products.Products.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};


goog.object.extend(exports, proto.products);
