import React, { Component } from "react";
import { Table } from "react-bootstrap";

    class Theme extends Component {
            
        render(){
            return (
            <div id="registration" className="target mb-5 foothandle">
            <div className="container" >
            <h1 className="mb-3 green-heading">Registration Fees</h1>
            
            {/* <Table bordered > */}
            
                <Table bordered>
            <tbody>
            <tr>
                        <th>Early Birds</th>
                        <th>Indian Author</th>
                        <th>Foreign Author</th>
                    </tr>
            <tr>
                <td> Participants from Industries </td> 
                <td>Rs. 6000</td>
                <td>$ 250</td>
            </tr>
            <tr>
                <td> Academia </td> 
                <td>Rs. 5000</td>
                <td>$ 200</td>
            </tr>
            <tr>
                <td> Research Scholars and students </td> 
                <td>Rs. 4000</td>
                <td>$ 150</td>
            </tr>

            </tbody>
        </Table>

<p>10% fee concession to IEI and IEEE Members.  The fee entitles the delegates to participate in technical sessions, conference kit, copy of the proceedings, lunch and refreshments on each day of conference. Registration and rest proceedings will be done through the conference website: akgec2022@akgec.ac.in</p>
            
            <h1 className="green-heading">Fee Submission Details</h1>

            <Table bordered>
            <thead>
                <tr>
                    <th colSpan={2}>Details of IMPS/UPI/RTGS/NEFT:</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>Name of Beneficiary</td>
                <td>Ajay Kumar Garg Engineering College</td>
            </tr>
            <tr>
                <td> Name of the Bank </td> 
                <td>Kotak Mahindra Bank Ltd.</td>
            </tr>
            <tr>
                <td>Branch Address</td> 
                <td>30 & 31 Navyug Market, P.B. No. 75, Ghaziabad-201001 (U.P.) - INDIA </td>
            </tr>
            <tr>
                <td>Branch Code </td> 
                <td>5295</td>
            </tr>
            <tr>
                <td>Bank Account No.</td> 
                <td>508010250461</td>
            </tr>
            <tr>
                <td>Type of Bank Account</td> 
                <td>Savings Bank Accounts</td>
            </tr>
            <tr>
                <td>RTGS/NEFT/IFSC Code</td> 
                <td>KKBK0005295</td>
            </tr>
            <tr>
                <td>Contact No.</td> 
                <td>0120-2790969</td>
            </tr>

            </tbody>
        </Table>

            </div>
            </div>
            );
        }          
    }
                
              
export default Theme;