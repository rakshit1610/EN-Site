import React, { Component } from "react";
import { Table } from "react-bootstrap";

class Theme extends Component {
  render() {
    return (
      <div id="registration" className="target mb-5 foothandle">
        {/* <div class="container">
          <h1 className="mb-3 green-heading" style={{ height: "40vh" }}>
            Will be Updated Soon...
          </h1>
        </div> */}
        <div className="container">
          <h1 className="mb-3 green-heading">Registration Fees</h1>
          <ul className="my-3">
            <li>
              At least one author of each accepted paper must register at{" "}
              <b>Full Fee</b> before the deadline for the paper to be presented
              in the conference and included in IEEE Xplore.
            </li>
            <li>
              The manuscripts may contain six pages. Up to two (2) additional
              pages are permissible with over-length page charges . The maximum
              number of pages per manuscript allowed is eight (8).
            </li>
            <li>
              <b>Extra pages Charges : Rs 2000 or USD 25 Per Extra Page</b>
            </li>
          </ul>
          <Table bordered>
            <tbody>
              <tr>
                <th>Registration Category</th>
                <th>Registration Fees</th>
              </tr>
              <tr>
                <td>Non-IEEE Professional</td>
                <td>INR 8000</td>
              </tr>
              <tr>
                <td> IEEE Professional Members</td>
                <td>INR 7000</td>
              </tr>
              <tr>
                <td> Non-IEEE Students </td>
                <td>INR 7000</td>
              </tr>
              <tr>
                <td>IEEE Student Members</td>
                <td>INR 6000</td>
              </tr>
              <tr>
                <td>Industry Participants </td>
                <td>INR 8000</td>
              </tr>
              <tr>
                <td>Non-IEEE Foreign Participants </td>
                <td>$ 200</td>
              </tr>
              <tr>
                <td>IEEE Foreign Participants </td>
                <td>$ 150</td>
              </tr>
            </tbody>
          </Table>

          <p>
            <b>Full registration includes: </b>
            Access to plenary sessions (on prior booking only), all the
            conference sessions, conference registration kit, lunches, tea/
            coffee breaks, and inclusion of presented papers in IEEE Xplore.
          </p>

          <p>
            <b>Student registration includes: </b>
            Access to plenary sessions (on prior booking only), all the
            conference sessions, conference registration kit, lunches , tea/
            coffee breaks, and inclusion of presented papers in IEEE Xplore.
            Students must provide valid proof (copy of valid student ID card or
            letter from their institution or program director) by e-mail when
            submitting their registration and payment. Registration will not be
            effective until the validity of this document is confirmed.
          </p>
          <h1 className="green-heading">Payment Details</h1>

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
                <td>
                  30 & 31 Navyug Market, P.B. No. 75, Ghaziabad-201001 (U.P.) -
                  INDIA{" "}
                </td>
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
