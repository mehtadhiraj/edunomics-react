import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../Test/Test.css'
import './modForm.css'
import axios from 'axios'
import ReactTable from 'react-table'
import 'react-table/react-table.css'


const API_URL = 'http://34.93.244.58/api/bom/';


export class modApproved extends Component {
  constructor(props) {
    super(props)

    this.state = {
      approvedData: []
    }
  }

  async componentDidMount() {
    const tokenvalue = localStorage.getItem('token')
    try {
      const response = await axios.get(API_URL + `approved-bom`, (axios.defaults.headers.common['x-access-token'] = tokenvalue), {
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      })
      if (response.status === 200) {
        this.setState({ approvedData: response.data })
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const temp = 15

    const columns = [
      {
        Header: 'FG Code',
        accessor: 'FG_Code',
        sortable: false
      },
      {
        Header: 'Organisation Code',
        accessor: 'Org_Code',
        sortable: false
      },
      {
        Header: 'Type',
        accessor: 'type',
        sortable: false
      },
      {
        Header: 'Updated by',
        accessor: 'update_by',
        sortable: false
      },
      {
        Header: 'Update Time',
        accessor: 'update_time',
        sortable: false
      },
      {
        Header: 'Approved by',
        accessor: 'verified_by',
        sortable: false
      }
    ]

    return (
      <div className='skin-blue fixed-layout'>
        <div className='page-wrapper'>
          <div className='container-fluid'>
            <div className='row page-titles'>
              <div className='col-md-5 align-self-center'>
                <nav aria-label='breadcrumb'>
                  <ol class='breadcrumb'>
                    <li className='breadcrumb-item'>
                      <Link to={process.env.PUBLIC_URL + '/'}>Home</Link>
                    </li>
                    <li className='breadcrumb-item active' aria-current='page'>
                      Mod Table
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <div className='container my-3 w-100'>
            <NavLink to='modPending' className='mx-4'>
              <button className='btn btn-info' id='pendingBtn' > View Pending</button>
            </NavLink>
            <NavLink to='modApproved' className='mx-4'>
              <button className='btn btn-info' id='approvedBtn' disabled > View Approved</button>
            </NavLink>
            <NavLink to='modRejected' className='mx-4'>
              <button className='btn btn-info' id='rejectedBtn'> View Rejected</button>
            </NavLink>
            <NavLink to='modPurged' className='mx-4'>
              <button className='btn btn-info' id='purgedBtn'> View Purged</button>
            </NavLink>
            {
              localStorage.getItem('user_type') === 'plant technical officer' &&
              <NavLink to='modCreate' className='mx-4' style={{ float: 'right' }}>
                <button className='btn btn-info'>Create BOM</button>
              </NavLink>
            }
            {
              localStorage.getItem('user_type') === 'plant technical officer' &&
              <NavLink to='modUpdate' className='mx-4' style={{ float: 'right' }}>
                <button className='btn btn-info'>Update BOM</button>
              </NavLink>
            }
          </div>
          <div className='container'>
            <ReactTable
              columns={columns}
              data={Array.isArray(this.state.approvedData) ? this.state.approvedData : []}
              className='table table-light -striped -highlight table-responsive text-center'
              headerClassName='bg-info'
              showPagination={false}
              defaultPageSize={temp}
              id='approvedTable'
            />
          </div>
        </div>
      </div>
    )
  }
}

export default modApproved
