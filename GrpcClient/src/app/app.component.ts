import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { grpc } from "@improbable-eng/grpc-web";
// import services 
// crud operation for mannual process to use ProductsService  
// crud operation for already created method process to use ProductsServiceClient  
import { ProductsService, ProductsServiceClient } from "./protos/product/products_pb_service";
import { Empty, Product, Products } from "./protos/product/products_pb";
import { ProductModel } from './models/productmodel'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GrpcClient';


  grpcClient: ProductsServiceClient;
  public produtsmodel: ProductModel[] = [];
  public produtsmodelN?: ProductModel[] = [];
  public productForm = new FormGroup({
    productname: new FormControl('', [Validators.required]),
    categoryname: new FormControl(''),
    manufacturer: new FormControl(''),
    price: new FormControl(''),
  });
  constructor(
    public fb: FormBuilder,

  ) {
    this.grpcClient = new ProductsServiceClient("https://localhost:7205")
  }
  public ngOnInit() {
    this.onDataBind();
    this.OnClearFormData();
  }
  OnClearFormData() {
    this.productForm = new FormGroup({
      productname: new FormControl('', [Validators.required]),
      categoryname: new FormControl(''),
      manufacturer: new FormControl(''),
      price: new FormControl(''),
    });
  }
  onDataBind() {
    const getAllRequest = new Empty()

    // already created method in ProductsServiceClient
    this.grpcClient.getAll(getAllRequest, (error,responseMessage) => {
      this.produtsmodelN = responseMessage?.getItemsList().map(x =>
        <ProductModel>({
          categoryname: x.getCategoryname().toString(),
          manufacturer: x.getManufacturer()!.toString(),
          price: Number(x.getPrice!().toString()),
          productid: x.getProductid!().toString(),
          productname: x.getProductname()!.toString(),
          productrowid:Number(x.getProductrowid()!.toString())
        }));
    });


 //   manual methd in ProductsService

    grpc.unary(ProductsService.GetAll, {
      request: getAllRequest, host: "https://localhost:7205",
      onEnd: res => {
        const { status, message } = res;
        if (status === grpc.Code.OK && message) {
          var result = message.toObject() as Products.AsObject;
          this.produtsmodel = result.itemsList.map(x =>
            <ProductModel>({
              categoryname: x.categoryname,
              manufacturer: x.manufacturer,
              price: x.price,
              productid: x.productid,
              productname: x.productname,
              productrowid: x.productrowid
            }));
        }
      }
    })
  }

  submitForm() {
    this.OnSave();
    console.log('Product created!')
    this.OnClearFormData();

  }


  OnSave() {

    console.log(this.productForm.controls.categoryname.toString())
    console.log(this.productForm.value.categoryname);
    const queryProductRequest = new Product();
    queryProductRequest.setProductrowid(0);
    queryProductRequest.setCategoryname(this.productForm.value.categoryname!.toString());
    queryProductRequest.setManufacturer(this.productForm.value.manufacturer!.toString());
    queryProductRequest.setPrice(Number(this.productForm.value.price!.toString()));
    queryProductRequest.setProductid("0");
    queryProductRequest.setProductname(this.productForm.value.productname!.toString());
    queryProductRequest.setProductrowid(0);


    // already created method in ProductsServiceClient

    this.grpcClient.post(queryProductRequest,(error,responseMessage) => {
      if (responseMessage?.getProductrowid()!=null)
      {
        this.onDataBind();
         console.log("all ok")
      }
    });

 //   manual methd in ProductsService
    grpc.invoke(ProductsService.Post, {
      request: queryProductRequest, host: "https://localhost:7205",
      onMessage: (message: Product) => {
        console.log("got book: ", message.toObject());
      },
      onEnd: (code: grpc.Code, msg: string | undefined, trailers: grpc.Metadata) => {
        if (code == grpc.Code.OK) {
          this.onDataBind();
          // console.log("all ok")
        } else {
          console.log("hit an error", code, msg, trailers);
        }
      }
    })
  }

  OnSaveFoorLoop() {

    console.log("Hello")
    for (let index = 0; index <= 10000; index++) {


      const queryProductRequest = new Product();
      queryProductRequest.setProductrowid(0);
      queryProductRequest.setCategoryname("Cat" + index.toString());
      queryProductRequest.setManufacturer("MMM");
      queryProductRequest.setPrice(index);
      queryProductRequest.setProductid("0");
      queryProductRequest.setProductname("Product Name " + index.toString());
      queryProductRequest.setProductrowid(0);

      grpc.invoke(ProductsService.Post, {
        request: queryProductRequest, host: "https://localhost:7205",
        onMessage: (message: Product) => {
          console.log("got book: ", message.toObject());
        },
        onEnd: (code: grpc.Code, msg: string | undefined, trailers: grpc.Metadata) => {
          if (code == grpc.Code.OK) {
            this.onDataBind();
            // console.log("all ok")
          } else {
            console.log("hit an error", code, msg, trailers);
          }
        }
      })
    }

  }


  getGeneratedCode() {

    console.log("Hello")
    for (let index = 0; index <= 10000; index++) {


      const queryProductRequest = new Product();
      queryProductRequest.setProductrowid(0);
      queryProductRequest.setCategoryname("Cat" + index.toString());
      queryProductRequest.setManufacturer("MMM");
      queryProductRequest.setPrice(index);
      queryProductRequest.setProductid("0");
      queryProductRequest.setProductname("Product Name " + index.toString());
      queryProductRequest.setProductrowid(0);

      grpc.invoke(ProductsService.Post, {
        request: queryProductRequest, host: "https://localhost:7205",
        onMessage: (message: Product) => {
          console.log("got book: ", message.toObject());
        },
        onEnd: (code: grpc.Code, msg: string | undefined, trailers: grpc.Metadata) => {
          if (code == grpc.Code.OK) {
            this.onDataBind();
            // console.log("all ok")
          } else {
            console.log("hit an error", code, msg, trailers);
          }
        }
      })
    }

  }

}
