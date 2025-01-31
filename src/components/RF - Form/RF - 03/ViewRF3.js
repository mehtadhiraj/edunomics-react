import React, { Component } from 'react'
import { Link, Redirect, withRouter, NavLink } from "react-router-dom";
import "../RF-02/Rf2.css";
import axios from "axios";
import authService from "../../../services/auth-service";
import axiosService from "../../../services/axios-service";
import { API_URL } from "../../../services/url";
import SimpleReactValidator from "simple-react-validator";
import { RfButtonLink } from "../RfButtonLink";
import { SuccessModal } from "../../Test/SuccessModal";
export class ViewRF3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            verify_comment : "",
          btnstatus: false,
          userdata : [],
          supplier: "",
          source: "",
          plant: "",
          date: "",
        
          remarks: ""
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.validator = new SimpleReactValidator();
      }
      // componentDidMount() {
      //   this.getFormDetail();
      // }
      // getFormDetail = async () => {
      //   let tokenvalue = localStorage.getItem("token");
      //   // try {
      //   console.log(this.props.match.params.id);
      //   const response = await axios.get(
      //     `${API_URL}rf_form/view/${this.props.match.params.id}`,
      //     (axios.defaults.headers.common["x-access-token"] = tokenvalue)
      //   );
      //   console.log("verifyrf21 data", response);
      //   let res = response.data.data;
      //   const map = {};
      //   res.map(async (item, i) => {
      //     console.log(item.question + "  " + item.answer);
      //     map[item.question] = item.answer;
      //   });
    
      //   console.log(map);
      //   await this.setState({
      //       verify_comment : response.data.meta.verify_comment,
      //       type: "RF_3",
      //       btnstatus:false,
      //       amount_status : false,
      //      plant : map.plant,
      //     date : map.date
      //   });
      //   console.log(this.state);
      
      // };
      async componentDidMount() {
        await this.handleClick();
        await this.getFormDetail();
      }
      async handleClick() {
        let tokenvalue = localStorage.getItem("token");
        console.log("value", tokenvalue);
        try {
          const response = await axios.get(
            `${API_URL}asset/view_rf3`,
            (axios.defaults.headers.common["x-access-token"] = tokenvalue)
          );
          console.log("userdata response view rf3", response);
          // console.log("userdata response", response.data.assetTypedata);
          // if (response.status === 200) {
          //   this.setState({ userdata: response.data.assetTypedata });
          // }
          // console.log("userdata", this.state.userdata);
        } catch (error) {
          console.log(error);
        }
      }
      getFormDetail = async () => {
        let tokenvalue = localStorage.getItem("token");
        // try {
        console.log(this.props.match.params.id);
        const response = await axios.get(
          `${API_URL}rf_form/view/${this.props.match.params.id}`,
          (axios.defaults.headers.common["x-access-token"] = tokenvalue)
        );
        console.log("verifyr3 data", response);
        let res = response.data.data;
        const map = {};
        res.map(async (item, i) => {
          console.log(item.question + "  " + item.answer);
          map[item.question] = item.answer;
        });
    
        console.log(map);
        await this.setState({
            verify_comment : response.data.meta.verify_comment,
            type: "RF_3",
            btnstatus:false,
            amount_status : false,
           plant : map.plant,
          date : map.date
        });
        console.log(this.state);
      
      };
      componentWillMount = () => {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
    
        if (dd < 10) {
          dd = "0" + dd;
        }
    
        if (mm < 10) {
          mm = "0" + mm;
        }
    
        today = mm + "/" + dd + "/" + yyyy;
        console.log("date here", today);
        this.state.date = today;
        console.log(this.state.date);
      };
    
  
      openModal() {
        this.setState({
            visible : true
        });
    }
    
      closeModal() {
        this.setState({
            visible : false
        });
      }
      change = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };
    
      handlechange = (event,id) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        const na = name + "_" + id;
        const name2 = na
        console.log(name2, name, na, value)
        this.setState({
          [na]: value
        });
      };
      getWebsite = () => {
        fetch("/").then(console.log(this.state));
      };
      async onSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        if (this.validator.allValid()) {
          let tokenvalue = localStorage.getItem("token");
          let body = {
            supplier: this.state.supplier,
            source: this.state.source,
            plant: localStorage.getItem("plant_name"),
            date: this.state.date,
            s_t1: this.state.s_t1,
            s_t2: this.state.s_t2,
            s_t3: this.state.s_t3,
            s_t4: this.state.s_t4,
            s_t5: this.state.s_t5,
            s_t6: this.state.s_t6,
            s_t7: this.state.s_t7,
            s_t8: this.state.s_t8,
            s_t9: this.state.s_t9,
            s_t10: this.state.s_t10,
            s_t11: this.state.s_t11,
            s_t12: this.state.s_t12,
            s_t13: this.state.s_t13,
            s_t14: this.state.s_t14,
            s_t15: this.state.s_t15,
            s_t16: this.state.s_t16,
            s_t17: this.state.s_t17,
            s_t18: this.state.s_t18,
            s_t19: this.state.s_t19,
            s_t20: this.state.s_t20,
            s_t21: this.state.s_t21,
            s_t22: this.state.s_t22,
            s_t23: this.state.s_t23,
            s_t24: this.state.s_t24,
            s_t25: this.state.s_t25,
            remarks: this.state.remarks,
            type: "RF_03"
          };
          console.log("body here", body);
          this.openModal();
          this.setState({
            btnstatus : true
          })
          try {
            const response = await axios.post(
              `${API_URL}rf_form/submit`,
              this.state,
              (axios.defaults.headers.common["x-access-token"] = tokenvalue)
            );
            console.log(response);
            //   .then(console.log(this.state));
    
            if (response.data.success) {
              alert(response.data.msg);
              //   this.props.history.push("/ViewTestEight");
            } else {
              alert(response.data.msg);
            }
          } catch (error) {
            console.log(error);
          }
        } else {
          this.validator.showMessages();
          // rerender to show messages for the first time
          this.forceUpdate();
        }
      }
      totalshow = e => {
        e.preventDefault();
        let total_sample_sieving = this.state.weight_sample_sieving;
        let total_sample_testing = this.state.weight_sample_testing;
        let total_amount =
          ((total_sample_testing - total_sample_sieving) / total_sample_testing) *
          100;
        this.state.total = total_amount;
        console.log(total_amount);
        this.setState({
          amount_status: true
        });
      };
      render() {
             // let showmodal;
             let sbmtbtn, btnmsg;
             if(this.state.visible)
             {
               // showmodal = (
               //   <div>
               //     <SuccessModal  
               //          visible={this.state.visible}
               //               width={this.props.width}
               //               height={this.props.height}
               //               effect={this.props.effect}
               //               onClickAway={() => this.closeModal()} />
               //   </div>
               // )
             }
             if(this.state.btnstatus)
             {
               sbmtbtn = (
                 <button
                 class="btn btn-primary"
                 onClick={this.onSubmit.bind(this)}
                 disabled
               >
                 Submit
               </button>
               )
               btnmsg = (
                 <div>
                 <hr />
                 <p>Your Form Has Already Been Submitted.Please Don't Click SUMBIT Button AGAIN!!</p>
                 </div>
               )
             }
             else
             {
               sbmtbtn=(
                 <button
                 class="btn btn-primary"
                 onClick={this.onSubmit.bind(this)}
               >
                 Submit
               </button>
               )
             }
        return (
          <div>
            <div className="skin-blue fixed-layout">
              <div className="page-wrapper">
                <div className="container-fluid">
                  <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                      {/* <h4 className="text-themecolor">Forms</h4> */}
                      <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                          <li className="breadcrumb-item">
                            <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
                          </li>
                          <li
                            className="breadcrumb-item active"
                            aria-current="page"
                          >
                            RF - 03
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
                {/*form comtent begin */}
    
                <div className="product-form-upper">
                  <div className="container">
                    <div className="below-custom-form">
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          {/* <RfButtonLink /> */}
    
                          <hr />
                        </div>
    
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <p style={{ textAlign: "center" }}>
                            RF-3 Verification of dimensions of concrete moulds
                          </p>
                          <hr />
                        </div>
                      </div>
                      <form className="custom-content-form">
                        <div className="form-row">
                          <div class="form-group col-md-6">
                            <div class="form-group row">
                              <label
                                for="inputPassword"
                                class="col-sm-2 col-form-label"
                              >
                                Plant
                              </label>
                              <div class="col-sm-10">
                               <input type="text" className="form-control" value={this.state.plant} name="plant" disabled />
                              </div>
                            </div>
                          </div>
                          <div class="form-group col-md-6">
                            <div class="form-group row">
                              <label
                                for="inputPassword"
                                class="col-sm-2 col-form-label"
                              >
                                date
                              </label>
                              <div class="col-sm-10">
                              <input type="text" className="form-control" value={this.state.date} name="date" disabled />
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/*test form */}
                    <div className="below-custom-form">
                      <form className="custom-content-form">
                        <div className="form-row">
                          <div class="form-group col-md-12">
                          <table className="table table-hover table-bordered ">
                              <thead className="bg-info custom-thead-color">
                                <tr>
                                <th scope="col">S.No.</th>
                                  <th scope="col">Mould Number</th>
                                  <th scope="colgroup" colspan="2">Length(L1 |L1)</th>
                                  <th scope="colgroup" colspan="2">Breadth(B2 | B2)</th>
                                  <th scope="col" colspan="2">Height (h1 | h2)</th>
                                  <th scope="col" colspan="2">Diagonal (D1 | D2)</th>
                                  <th scope="col">Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                {this.state.userdata.length ? (
                                  this.state.userdata
                                    .map(function(item, id) {
                                      {/* let newid = {id} */}
                                      return (
                                        <tr key={id}>
                                          <th>#</th>
                                          <th scope="row">
                                         {item.asset_description}
                                          </th>
                                          <td>
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="len"
                                              value={item.id}
                                              onChange={e => this.handlechange(e,id)}
                                              disabled
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="length"
                                              value={item.id}
                                              onChange={e => this.handlechange(e,id)}
                                            
                                              disabled
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="bre"
                                              value={item.id}
                                              onChange={e => this.handlechange(e,id)}
                                            
                                              disabled
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="breadth"
                                              value={item.id}
                                              onChange={e => this.handlechange(e,id)}
                                            
                                              disabled
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="h1"
                                              value={item.id}
                                              onChange={e => this.handlechange(e,id)}
                                            
                                              disabled
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="h2"
                                              value={item.id}
                                              onChange={e => this.handlechange(e,id)}
                                            
                                              disabled
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="diagonal1"
                                              value={item.id}
                                              onChange={e => this.handlechange(e,id)}
                                            
                                              disabled
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="diagonal2"
                                              value={item.id}
                                              onChange={e => this.handlechange(e,id)}
                                            
                                              disabled
                                            />
                                          </td>
                                          <td className="customrf2status">  <select className="form-control" name="status1" value={item.id} onChange={e => this.handlechange(e, id)}>
                                                  <option value="None">Choose...</option>            
                                                  <option value="OK">OK</option>
                                                  <option value="Need Repair">Need Repair</option>
                                                  <option value="Need Replacement">Need Replacement</option>
                                            </select></td>
                                        </tr>
                                      );
                                    }, this)
                                    .reverse()
                                ) : (
                                  <span>Data is loading....</span>
                                )}
                              </tbody>
                            </table>
                            {/* <table class="table table-bordered">
                              <thead class="thead-light">
                                <tr>
                                  <th scope="col">S.No.</th>
                                  <th scope="col">Mould Number</th>
                                  <th scope="col">Length(L1 |L1)</th>
                                  <th scope="col">Breadth(B2 | B2)</th>
                                  <th scope="col">Height (h1 | h2)</th>
                                  <th scope="col">Diagonal (D1 | D2)</th>
                                  <th scope="col">Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="s_t1"
                                      value={this.state.s_t1}
                                      onChange={e => this.change(e)}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="s_t2"
                                      value={this.state.s_t2}
                                      onChange={e => this.change(e)}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="s_t3"
                                      value={this.state.s_t3}
                                      onChange={e => this.change(e)}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="s_t4"
                                      value={this.state.s_t4}
                                      onChange={e => this.change(e)}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="s_t5"
                                      value={this.state.s_t5}
                                      onChange={e => this.change(e)}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="s_t6"
                                      value={this.state.s_t6}
                                      onChange={e => this.change(e)}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="s_t7"
                                      value={this.state.s_t7}
                                      onChange={e => this.change(e)}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="s_t7"
                                      value={this.state.s_t7}
                                      onChange={e => this.change(e)}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="s_t8"
                                      value={this.state.s_t8}
                                      onChange={e => this.change(e)}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="s_t9"
                                      value={this.state.s_t9}
                                      onChange={e => this.change(e)}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="s_t10"
                                      value={this.state.s_t10}
                                      onChange={e => this.change(e)}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="s_t11"
                                      value={this.state.s_t11}
                                      onChange={e => this.change(e)}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="s_t12"
                                      value={this.state.s_t12}
                                      onChange={e => this.change(e)}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="s_t13"
                                      value={this.state.s_t13}
                                      onChange={e => this.change(e)}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="s_t13"
                                      value={this.state.s_t13}
                                      onChange={e => this.change(e)}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="s_t14"
                                      value={this.state.s_t14}
                                      onChange={e => this.change(e)}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="s_t15"
                                      value={this.state.s_t15}
                                      onChange={e => this.change(e)}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="s_t16"
                                      value={this.state.s_t16}
                                      onChange={e => this.change(e)}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="s_t17"
                                      value={this.state.s_t17}
                                      onChange={e => this.change(e)}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="s_t18"
                                      value={this.state.s_t18}
                                      onChange={e => this.change(e)}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="s_t19"
                                      value={this.state.s_t19}
                                      onChange={e => this.change(e)}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="s_t19"
                                      value={this.state.s_t19}
                                      onChange={e => this.change(e)}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="s_t20"
                                      value={this.state.s_t20}
                                      onChange={e => this.change(e)}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="s_t21"
                                      value={this.state.s_t21}
                                      onChange={e => this.change(e)}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="s_t22"
                                      value={this.state.s_t22}
                                      onChange={e => this.change(e)}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="s_t23"
                                      value={this.state.s_t23}
                                      onChange={e => this.change(e)}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="s_t24"
                                      value={this.state.s_t24}
                                      onChange={e => this.change(e)}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="s_t25"
                                      value={this.state.s_t25}
                                      onChange={e => this.change(e)}
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table> */}
                          </div>
                        </div>
                      </form>
                    </div>
                    {/*test form */}
                    {/*remark form */}
                    <div className="below-custom-form">
                      <form className="custom-content-form">
                        <div className="form-row">
                          <div class="form-group col-md-12">
                            <div class="form-group row">
                              <label
                                for="inputPassword"
                                class="col-sm-2 col-form-label"
                              >
                                Remarks
                              </label>
                              <div class="col-sm-10">
                                <textarea
                                  className="form-control"
                                  name="remarks"
                                  value={this.state.remarks}
                                  onChange={e => this.change(e)}
                                  disabled
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <small>* This Fields are Mandatory . </small>
                        <br />
                        {sbmtbtn}
                    
                    {btnmsg} */}
                    </form>
                    <form className="custom-content-form">
                        <div className="form-row">
                          <div class="form-group col-md-12">
                            <div class="form-group row">
                              <label
                                for="inputPassword"
                                class="col-sm-2 col-form-label"
                              >
                                Verify Comment
                              </label>
                              <div class="col-sm-10">
                                <textarea
                                  className="form-control"
                                  name="verify_comment"
                                  value={this.state.verify_comment}
                                  onChange={e => this.change(e)}
                                  disabled
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <small>* This Fields are Mandatory . </small>
                        <br />
                        {sbmtbtn}
                    
                    {btnmsg} */}
                    </form>
                     {/*modal experiment */}
                   {/* {showmodal} */}
                   
                  
                   {/* <SuccessModal  
                   visible={this.state.visible}
                        width={this.props.width}
                        height={this.props.height}
                        effect={this.props.effect}
                        onClickAway={() => this.closeModal()} /> */}
                    {/*end model experiment */}
                    </div>
                    {/*end remark */}
                  </div>
                </div>
              </div>
              {/*ed form content */}
            </div>
          </div>
        );
      }
    }

export default ViewRF3
