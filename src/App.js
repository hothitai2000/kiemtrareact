// // import logo from './logo.svg';
import './App.css';
// // import ProductList from './ProductList';
// import student from 'Data.js';
import axios from 'axios';
// import { useState,useEffect } from 'react';
// import { ReactDOM } from 'react';
import Add from "./Component/Add";
import ShowProduct from './Component/ShowProduct';
// class Admin extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         product: [],
//         id: null,
//         Tensp: "",
//         Gia: "",
//         Soluong: "",
//         Hinhanh: "",
//         Mota:""
//       };
//   }
//   setStatus = () => {
//       this.setState({ showAddForm: !this.state.showAddForm });
//   }
//   componentDidMount() {
//       axios
//           .get("https://63a572122a73744b008e28d5.mockapi.io/api/Sanpham/")
//           .then(response => {
//               this.setState({ product: response.data });
//           })
//           .catch(error => {
//               console.log(error);
//           });
//   }
//   deleteBook = (id) => {
//       axios
//           .delete("https://63a572122a73744b008e28d5.mockapi.io/api/Sanpham/" + id)
//           .then(response => {
//               console.log(response);
//               const product = this.state.product.filter(item => item.id !== id);
//               this.setState({ product });
//           })
//           .catch(error => {
//               console.log(error);
//           });
//   }
//   addBook = () => {
//       const Productlist = {
//         Tensp: this.state.Tensp,
//           Gia:this.state.Gia,
//           Soluong: this.state.Soluong,
//           Hinhanh: this.state.Hinhanh
//       };
//       axios
//           .post("https://63a572122a73744b008e28d5.mockapi.io/api/Sanpham/", Productlist)
//           .then(response => {
//               console.log(response);
//               const product = [...this.state.product, response.data];
//               this.setState({ product });
//           })
//           .catch(error => {
//               console.log(error);
//           });
//   }
//   editBook = (id) => {
//       const Productlist = this.state.product.find(item => item.id === id);
//       this.setState({
//           id: id,
//           Tensp: Productlist.Tensp,
//           Gia: Productlist.Gia,
//           Soluong: Productlist.Soluong,
//           Hinhanh: Productlist.Hinhanh,
//           showEditForm: true
//       });
//   }
//   formAddBook = () => {
//       return (
//           <div className="container">
//               <div className="row">
//                   <div className="col-sm-12">
//                       <div className="card">
//                           <div className="card-body">
//                               <div className="form-group">
//                                   <label>Ten San Pham</label>
//                                   <input type="text" className="form-control" value={this.state.Tensp} onChange={(e) => this.setState({ Tensp: e.target.value })} />
//                               </div>
//                               <div className="form-group">
//                                   <label> Gia</label>
//                                   <input type="text" className="form-control" value={this.state.Gia} onChange={(e) => this.setState({ Gia: e.target.value })} />
//                               </div>
//                         <div className="col-sm-12">
//                           <div className="card">
//                               <div className="card-body">
//                                   <h4 class="Title_table">Product</h4>
//                                   <p className="card-text">
//                                   <button class="AddBtn" onClick={this.setStatus}>Add Sản Phẩm Mới</button>
//                                       {/* <button class="AddBtn" onClick={this.setStatus}>Add Book</button> */}
//                                   </p>
//                                   {this.state.showAddForm ? this.formAddBook() : null}

//                                   <table className="table table-bordered ">
//                                       <thead className="bg-success text-white">
//                                           <tr>
//                                               <th>ID</th>
//                                               <th>Tên Sản Phẩm</th>
//                                               <th>Giá</th>
//                                               <th>Số Lượng</th>
//                                               <th>Hinhanh</th>
//                                                 <th>Xóa</th>
//                                                 <th>Sửa</th>
//                                               {/* <th>Action</th> */}
//                                           </tr>
//                                       </thead>
//                                       <tbody>
//                                           {this.state.product.map((products) => (
//                                               <tr>
//                                                   <td><textbox type="text" name="id" onChange={this.handleChange} /> {products.id}</td>
//                                                   <td>{products.Tensp}</td>
//                                                   <td>{products.Gia}</td>
//                                                   <td>{products.Soluong}</td>
//                                                   <td><img src={products.Hinhanh} alt={products.Hinhanh}/></td>
//                                                   <td><button class="deleteBtn" onClick={() => this.deleteBook(products.id)}>Delete</button></td>
//                                                   <td><button class="editBtn" onClick={() => this.editBook(products.id)}>Edit</button></td>
//                                               </tr>
//                                            ))}
//                                       </tbody>
//                                   </table>

//                               </div>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//               {this.state.showEditForm ? this.formEditBook() : null}
//            </div>
//       );
//    }

// }
function App() {
  return (
    <div>
      <ShowProduct />
    </div>
  );
}
export default App;
