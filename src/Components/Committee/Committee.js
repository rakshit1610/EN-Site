import React, { Component } from "react";
import { Table } from "react-bootstrap";
import ItemCard from "./Item";

class Theme extends Component {
  state = {
    data: [
      ["1", "Harish", "IIT"],
      ["177", "77", "88"],
    ],
  };

  render() {
    const itemcards = this.state.data.map((itemcard) => {
      return (
        <ItemCard
          num={itemcard[0]}
          name={itemcard[1]}
          institute={itemcard[2]}
        />
      );
    });

    return (
      <div id="theme" className="target">
        <div className="container">
          <h1 className="mb-3 green-heading">Committee </h1>

          <Table borderless className="mb-5 borderbtm">
            <tbody>
              <tr>
                <th className="noborder">Chair Person/ Chief Patron</th>
                {/* <th className="noborder">Patron</th> */}
              </tr>
              <tr>
                <td className="tdborder">
                  {" "}
                  Dr. R.K. Agarwal
                  <br />
                  Director General, AKGEC Ghaziabad
                </td>
                {/* <td className="tdborder">Dr. P.K. Chopra<br/>Director, AKGEC</td> */}
              </tr>
            </tbody>
          </Table>

          <Table borderless className="mb-5 borderbtm">
            <tbody>
              <tr>
                <th className="noborder">Honorary General Chair </th>
              </tr>
              <tr>
                <td className="tdborder">
                  {" "}
                  Dr. S N Singh <br />
                  Fellow IEEE
                  <br />
                  Director, Atal Bihari Vajpayee- Indian Institute of
                  Information Technology and Management (ABV-IIITM), Gwalior,
                  India
                </td>
              </tr>
            </tbody>
          </Table>

          <Table>
            <thead>
              <th className="noborder">General Chairs</th>
            </thead>
            <tbody className="tableNew">
              <tr>
                <td>
                  Dr. Hemant Ahuja
                  <br />
                  Director & HOD EN, AKGEC Ghaziabad
                </td>
                <td>
                  Dr Satish K. Singh
                  <br />
                  Associate Professor IIIT Allahabad
                  <br />
                  Immediate Past Chair, IEEE UP Section, India
                </td>
                <td>
                  Dr Prabhakar Tiwari
                  <br />
                  Associate Professor MMMUT, Gorakhpur <br />
                  Conference Committee Chair, IEEE UP Section
                </td>
              </tr>
            </tbody>
          </Table>
          <br />

          {/* <Table borderless className="mb-5 borderbtm">
                        <tbody>
                            <tr>
                                <th className="noborder">Organizing Chair</th>
                            </tr>
                            <tr>
                                <td className="tdborder"> Dr. Pallab Biswas<br />
                                    Professor & Head (ME), AKGEC
                                    <br /><br />
                                    Dr. Anu Chaudhary<br />
                                    Professor & Head (IT), AKGEC</td>
                                <td className="tdborder">Dr. Neelesh Kumar Gupta<br />
                                    Professor & Head (ECE), AKGEC<br />
                                    <br />
                                    Prof. V.K. Parashar<br />
                                    Professor (EN), AKGEC</td>
                            </tr>
                        </tbody>
                    </Table> */}

          <Table>
            <thead>
              <th className="noborder">Organizing Secretary </th>
            </thead>
            <tbody className="tableNew">
              <tr>
                <td>
                  Dr. Vani Bhargava
                  <br />
                  Associate Professor (EN), AKGEC
                </td>
              </tr>
            </tbody>
          </Table>
          <br />
          {/* honory advisory */}
          <Table borderless className="mb-5 borderbtm" responsive="md">
            <tbody>
              <tr>
                <th colSpan="2">Honory Advisory Committee</th>
              </tr>

              <tr>
                <th className="snowidth">S&nbsp;No.</th>
                <th className="nametd">Name and Designation</th>
                <th className="afftd">Affiliation</th>
              </tr>
              <tr>
                <td class="snowidth text-center">1</td>
                <td class="nametd">Dr. Adel Nasiri</td>
                <td class="afftd">
                  CEC Distinguished Professor, University of South Carolina
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">2</td>
                <td class="nametd">Dr. Akshay Kumar Rathore</td>
                <td class="afftd">
                  Professor and Program Director, SIT Singapore
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">3</td>
                <td class="nametd">Dr. Anurag Srivastava</td>
                <td class="afftd">
                  Lane Professor and Chairperson of Computer Science and
                  Electrical Engineering at West Virginia University
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">4</td>
                <td class="nametd">Dr. Bhim Singh</td>
                <td class="afftd">
                  SERB National Science Chair & Emeritus Professor
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">5</td>
                <td class="nametd">Dr. Brij N. Singh</td>
                <td class="afftd">
                  R4 Manager External Relationships, John Deere Fellow, IEEE
                  Fellow
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">6</td>
                <td class="nametd">Dr. Celia Shahnaz</td>
                <td class="afftd">Chair IEEE WIE</td>
              </tr>
              <tr>
                <td class="snowidth text-center">7</td>
                <td class="nametd">Dr. Frede Blaabjerg</td>
                <td class="afftd">Professor, AAU Energy</td>
              </tr>
              <tr>
                <td class="snowidth text-center">8</td>
                <td class="nametd">Dr. G Bhuvneshwari</td>
                <td class="afftd">Professor, Mahindra University, Hyderabad</td>
              </tr>
              <tr>
                <td class="snowidth text-center">9</td>
                <td class="nametd">Dr. Harish Sarma Krishnamoorthy</td>
                <td class="afftd">
                  Assistant Professor, University of Houston
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">10</td>
                <td class="nametd">Dr. Mohan Lal Kolhe</td>
                <td class="afftd">
                  Professor, Smart and Renewable Energy, Faculty of Engineering
                  and Science, University of Agder, Norway
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">11</td>
                <td class="nametd">Dr. Muhammad H Rashid</td>
                <td class="afftd">Professor, Florida Polytechnic University</td>
              </tr>
              <tr>
                <td class="snowidth text-center">12</td>
                <td class="nametd">Dr. Pratima Mohanthy</td>
                <td class="afftd">Program Management Officer, UNEP, Bangkok</td>
              </tr>
              <tr>
                <td class="snowidth text-center">13</td>
                <td class="nametd">Dr. Pramod Agarwal</td>
                <td class="afftd">Professor, IIT Roorkee</td>
              </tr>
              <tr>
                <td class="snowidth text-center">14</td>
                <td class="nametd">Dr. Prasad Enjeti</td>
                <td class="afftd">
                  Professor, Electrical and Computer Engineering, Texas A & M
                  University
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">15</td>
                <td class="nametd">Dr. Prerna Gaur</td>
                <td class="afftd">Director NSUT, West Campus, Delhi</td>
              </tr>
              <tr>
                <td class="snowidth text-center">16</td>
                <td class="nametd">Dr. R Balasubramanian</td>
                <td class="afftd">Professor IIT Delhi</td>
              </tr>
              <tr>
                <td class="snowidth text-center">17</td>
                <td class="nametd">Dr. Ramkrishan Maheshwari</td>
                <td class="afftd">Ex Professor, IIT Roorkee</td>
              </tr>
              <tr>
                <td class="snowidth text-center">18</td>
                <td class="nametd">Prof Rajiv K Verma</td>
                <td class="afftd">
                  Professor, Electrical and Computer Engineering, The University
                  of Western Ontario, Canada
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">19</td>
                <td class="nametd">Dr. Sanjeet Dwivedi</td>
                <td class="afftd">Technology Project Manager, Everfuel</td>
              </tr>
              <tr>
                <td class="snowidth text-center">20</td>
                <td class="nametd">Dr. Sheldon Williams</td>
                <td class="afftd">
                  Professor and NSERC Canada Research Chair, University of
                  Ontario Institute of Technology
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">21</td>
                <td class="nametd">Dr. Vinod Khadkikar</td>
                <td class="afftd">Professor, Khalifa University, Abu Dhabi</td>
              </tr>
            </tbody>
          </Table>
          {/* Advisory */}
          <Table borderless className="mb-5 borderbtm" responsive="md">
            <tbody>
              <tr>
                <th colSpan="2">Advisory Committee</th>
              </tr>

              <tr>
                <th className="snowidth">S&nbsp;No.</th>
                <th className="nametd">Name and Designation</th>
                <th className="afftd">Affiliation</th>
              </tr>
              <tr>
                <td className="snowidth text-center">1</td>
                <td className="nametd">Dr. Asheesh Singh</td>
                <td className="afftd">Professor, MNNIT Prayagraj</td>
              </tr>
              <tr>
                <td className="snowidth text-center">2</td>
                <td className="nametd">Dr. Arun Kumar Verma</td>
                <td className="afftd">Associate Professor, IIT Jammu</td>
              </tr>
              <tr>
                <td className="snowidth text-center">3</td>
                <td className="nametd">Dr. Mini Thomos</td>
                <td className="afftd">Prof, JMI</td>
              </tr>
              <tr>
                <td className="snowidth text-center">4</td>
                <td className="nametd">Dr. Phaneendra Babu Bobba</td>
                <td className="afftd">
                  Prof & Head, Dept of Electrical Engg, GRIET Hyderabad
                </td>
              </tr>
              <tr>
                <td className="snowidth text-center">5</td>
                <td className="nametd">Dr. Mazid Jamil</td>
                <td className="afftd">Professor, JMI Delhi</td>
              </tr>
              <tr>
                <td className="snowidth text-center">6</td>
                <td className="nametd">Dr. D K Khatod</td>
                <td className="afftd">IIT Roorkee</td>
              </tr>
              <tr>
                <td className="snowidth text-center">7</td>
                <td className="nametd">Dr. Manish Saraswat</td>
                <td className="afftd">
                  Professor & Head Lloyd Skill Centre, Lloyd Group of
                  Institutions
                </td>
              </tr>
              <tr>
                <td className="snowidth text-center">8</td>
                <td className="nametd">Dr. Manpreet Singh Manna</td>
                <td className="afftd">
                  Associate Professor, EIE SLITE Longowal, Ex Director AICTE,
                  MHRD, New Delhi
                </td>
              </tr>
              <tr>
                <td className="snowidth text-center">9</td>
                <td className="nametd">Dr. Arvind Kumar Sharma</td>
                <td className="afftd">Professor, KIET Ghaziabad</td>
              </tr>
              <tr>
                <td className="snowidth text-center">10</td>
                <td className="nametd">Mr. A B Sengupta</td>
                <td className="afftd">
                  Alt-CISO & Chief Manager (Engineering), Corporate Centre,
                  GRID-INDIA
                </td>
              </tr>
              <tr>
                <td className="snowidth text-center">11</td>
                <td className="nametd">Dr. Bhavnesh Kumar</td>
                <td className="afftd">Associate Professor, NSUT Delhi</td>
              </tr>
              <tr>
                <td className="snowidth text-center">12</td>
                <td className="nametd">Dr. Ritula Thakur</td>
                <td className="afftd">NITTTR</td>
              </tr>
              <tr>
                <td className="snowidth text-center">13</td>
                <td className="nametd">Dr. Vivek Srivastava</td>
                <td className="afftd">Associate professor, NIT Delhi</td>
              </tr>
              <tr>
                <td className="snowidth text-center">14</td>
                <td className="nametd">Dr. Pradyumn Chaturvedi</td>
                <td className="afftd">Associate Professor, VNIT Nagpur</td>
              </tr>
              <tr>
                <td className="snowidth text-center">15</td>
                <td className="nametd">Dr. Trapti Jain</td>
                <td className="afftd">Professor, IIT Indore</td>
              </tr>
              <tr>
                <td className="snowidth text-center">16</td>
                <td className="nametd">Dr. R K Nema</td>
                <td className="afftd">Professor & HOD MANIT, Bhopal</td>
              </tr>
              <tr>
                <td className="snowidth text-center">17</td>
                <td className="nametd">Dr. Rajveev Singh</td>
                <td className="afftd">Professor IIT BHU</td>
              </tr>
              <tr>
                <td className="snowidth text-center">18</td>
                <td className="nametd">Dr. Alok Ranjan Verma</td>
                <td className="afftd">IIT Kanpur</td>
              </tr>
              <tr>
                <td className="snowidth text-center">19</td>
                <td className="nametd">Dr. Pallab Biswas</td>
                <td className="afftd">HOD ME, AKGEC Ghaziabad</td>
              </tr>
              <tr>
                <td className="snowidth text-center">20</td>
                <td className="nametd">Dr. Rahul Sharma</td>
                <td className="afftd">HOD IT, AKGEC Ghaziabad</td>
              </tr>
              <tr>
                <td className="snowidth text-center">21</td>
                <td className="nametd">Dr. Anu Chaudhary</td>
                <td className="afftd">HOD CSE, AKGEC Ghaziabad</td>
              </tr>
              <tr>
                <td className="snowidth text-center">22</td>
                <td className="nametd">Dr. Neelesh Gupta</td>
                <td className="afftd">HOD ECE, AKGEC Ghaziabad</td>
              </tr>
              <tr>
                <td className="snowidth text-center">23</td>
                <td className="nametd">Dr. R K Srivastava</td>
                <td className="afftd">HOD CE, AKGEC Ghaziabad</td>
              </tr>
              <tr>
                <td className="snowidth text-center">24</td>
                <td className="nametd">Dr B K Sharma</td>
                <td className="afftd">HOD MCA, AKGEC Ghaziabad</td>
              </tr>
            </tbody>
          </Table>

          {/* honorary tech*/}
          <Table borderless className="mb-5 borderbtm">
            <tbody>
              <tr>
                <th colSpan="2">Technical Program Chairs</th>
              </tr>

              <tr>
                <th className="nametd">Name</th>
                <th className="afftd">Designation</th>
              </tr>

              <tr>
                <td className="nametd">Dr Mohammad Rihan </td>
                <td className="afftd">
                  Professor, Electrical Engineering Department Founder Director
                  & Coordinator, Centre for Integrated Green and Renewable
                  Energy
                </td>
              </tr>
              <tr>
                <td className="nametd">Dr Ashish Srivastava </td>
                <td className="afftd">
                  Professor and Dean (SFASH & IQAC) Shri Vishwakarma Skill
                  University,Palwal Haryana
                </td>
              </tr>
              <tr>
                <td className="nametd">Dr A K Rai </td>
                <td className="afftd">Professor, AKGEC Ghaziabad</td>
              </tr>
              <tr>
                <td className="nametd">Dr Sarika Kalra</td>
                <td className="afftd">Associate Professor, AKGEC Ghaziabad</td>
              </tr>
            </tbody>
          </Table>

          <Table borderless className="mb-5 borderbtm">
            <thead>
              <th className="noborder">Publication Chair </th>
            </thead>
            <tbody className="tableNew">
              <tr>
                <td>
                  Dr. Vani Bhargava
                  <br />
                  Associate Professor, AKGEC Ghaziabad
                </td>
              </tr>
            </tbody>
          </Table>

          {/* technical program committee */}
          <Table borderless className="mb-5 borderbtm" responsive="md">
            <tbody>
              <tr>
                <th colSpan="2">Technical Program Committee</th>
              </tr>
              <tr>
                <th className="snowidth">S&nbsp;No.</th>
                <th className="nametd">Name and Designation</th>
                <th className="afftd">Affiliation</th>
              </tr>
              <tr>
                <td className="snowidth text-center">1</td>
                <td className="nametd">Dr. A.N. Tiwari</td>
                <td className="afftd">
                  Professor, Electrical Engineering Department, MMMUT, Gorakhpur
                </td>
              </tr>
              <tr>
                <td className="snowidth text-center">2</td>
                <td className="nametd">Dr. A.K. Tandon</td>
                <td className="afftd">Former Professor, DTU Delhi</td>
              </tr>
              <tr>
                <td className="snowidth text-center">3</td>
                <td className="nametd">Dr. Ajay Sekhar Pandey</td>
                <td className="afftd">Professor, EE, KNIT Sultanpur</td>
              </tr>
              <tr>
                <td className="snowidth text-center">4</td>
                <td className="nametd">Dr. Amit Jain</td>
                <td className="afftd">
                  Associate Professor, Electrical Engineering Department, IIt
                  Delhi
                </td>
              </tr>
              <tr>
                <td className="snowidth text-center">5</td>
                <td className="nametd">Dr. Apurva Anand</td>
                <td className="afftd">BBDIT University Lucknow</td>
              </tr>
              <tr>
                <td className="snowidth text-center">6</td>
                <td className="nametd">Dr. Arun Sharma</td>
                <td className="afftd">
                  Professor and Hear, Department of Artificila Intelligence and
                  Data Science, Indira Gandhi Delhi Technical University for
                  Women (IGTDUV), Delhi
                </td>
              </tr>
              <tr>
                <td className="snowidth text-center">7</td>
                <td className="nametd">Dr. Aseem Chandel</td>
                <td className="afftd">
                  Associate Professor, Govt Engineering College, Mainpuri, UP
                </td>
              </tr>
              <tr>
                <td className="snowidth text-center">8</td>
                <td className="nametd">Dr. Ashish Malik</td>
                <td className="afftd">
                  Director Axis Group of Colleges, Kanpur, UP
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">9</td>
                <td class="nametd">Dr. Bhavesh Bhalija</td>
                <td class="afftd">IIT Roorkee</td>
              </tr>
              <tr>
                <td class="snowidth text-center">10</td>
                <td class="nametd">Dr. Bedatri Maulik</td>
                <td class="afftd">Amity University, Noida</td>
              </tr>
              <tr>
                <td class="snowidth text-center">11</td>
                <td class="nametd">Dr. J S Lather</td>
                <td class="afftd">Professor, NIT, Kurukshetra</td>
              </tr>
              <tr>
                <td class="snowidth text-center">12</td>
                <td class="nametd">Dr. Jay Singh</td>
                <td class="afftd">
                  Associate Professor, GL Bajaj Institute of Technology and
                  Management, Greater Noida
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">13</td>
                <td class="nametd">Dr. Gunjan Varshney</td>
                <td class="afftd">Associate Professor, JSS Noida</td>
              </tr>
              <tr>
                <td class="snowidth text-center">14</td>
                <td class="nametd">Dr. K P Singh</td>
                <td class="afftd">Deputy Director, NPTI Faridabad</td>
              </tr>
              <tr>
                <td class="snowidth text-center">15</td>
                <td class="nametd">Dr. K S Verma</td>
                <td class="afftd">
                  Professor, Electrical Engineering Department, KNIT Sultanpur
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">16</td>
                <td class="nametd">Dr. Kirti Pal</td>
                <td class="afftd">Associate Professor, GBU Greater Noida</td>
              </tr>
              <tr>
                <td class="snowidth text-center">17</td>
                <td class="nametd">Dr. Kuldeep Sahay</td>
                <td class="afftd">
                  Professor, Electrical Engineering, IET Lucknow
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">18</td>
                <td class="nametd">Dr. M A Ansari</td>
                <td class="afftd">Professor, GBU, Greater Noida</td>
              </tr>
              <tr>
                <td class="snowidth text-center">19</td>
                <td class="nametd">Dr. Mohd Rizwan</td>
                <td class="afftd">Professor, DTU Delhi</td>
              </tr>
              <tr>
                <td class="snowidth text-center">20</td>
                <td class="nametd">Dr. Narendra Kumar</td>
                <td class="afftd">Professor, DTU, Delhi</td>
              </tr>
              <tr>
                <td class="snowidth text-center">21</td>
                <td class="nametd">Dr. Nidhi Singh</td>
                <td class="afftd">
                  Assistant Professor, Electrical Engineering Department, GBU,
                  Greater Noida
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">22</td>
                <td class="nametd">Dr. Nilanjan Sen Roy</td>
                <td class="afftd">
                  Professor, Department of Electrical Engineering, IIT Delhi
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">23</td>
                <td class="nametd">Dr. Pawan Kumar</td>
                <td class="afftd">
                  Assistant Professor, Thapar Institute of Engineering &
                  Technology, Patiala
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">24</td>
                <td class="nametd">Dr. Pratul Arvind</td>
                <td class="afftd">
                  Associate Professor, Department of Electrical Engineering,
                  ADGITM, New Delhi
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">25</td>
                <td class="nametd">Dr. Rachna Garg</td>
                <td class="afftd">
                  Professor, Electrical Engineering Department, DTU Delhi
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">26</td>
                <td class="nametd">Dr. Rajendra Kumar Shukla</td>
                <td class="afftd">
                  Professor & Head, Mechanical Engineering Department, Medicaps
                  University Indore
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">27</td>
                <td class="nametd">Dr. Rajesh Kumar</td>
                <td class="afftd">
                  Associate Professor, North Eastern Regional Institute of
                  Science & Technology, Nirjhuli, Itanagar, Arunachal Pradesh
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">28</td>
                <td class="nametd">Dr. Rishi Asthana</td>
                <td class="afftd">
                  Professor & Director, Goel Group of Institutions, Lucknow
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">29</td>
                <td class="nametd">Dr. Sachin Sharma</td>
                <td class="afftd">
                  Associate Professor, Graphic Era University, Dehradun
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">30</td>
                <td class="nametd">Dr. Sachin Singh</td>
                <td class="afftd">
                  Assistant Professor, Institute of Engineering & Technology,
                  Lucknow, UP
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">31</td>
                <td class="nametd">Dr. Sanjay Gairola</td>
                <td class="afftd">
                  Professor EE, Govind Vallabh Pant Institute of Engineering &
                  Technology, Ghurdauri, Uttarakhand
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">32</td>
                <td class="nametd">Dr. Sanjeeba Bisoyi</td>
                <td class="afftd">
                  Associate Professor, JSS Academy of Technical Education, Noida
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">33</td>
                <td class="nametd">Dr. Sanjeev Singh Chauhan</td>
                <td class="afftd">Professor, EE, MANIT Bhopal</td>
              </tr>
              <tr>
                <td class="snowidth text-center">34</td>
                <td class="nametd">Dr. Sarsingh Gao</td>
                <td class="afftd">Professor, NERIST, Arunchal Pradesh</td>
              </tr>
              <tr>
                <td class="snowidth text-center">35</td>
                <td class="nametd">Dr. Shailendrra Jain</td>
                <td class="afftd">Professor & Director SLITE Longowal</td>
              </tr>
              <tr>
                <td class="snowidth text-center">36</td>
                <td class="nametd">Dr. Sachin Kumar</td>
                <td class="afftd">
                  Professor, Galgotia University, Greater Noida
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">37</td>
                <td class="nametd">Dr. Subrahmanyam Murala</td>
                <td class="afftd">
                  Associate Professor, Department of Electrical Engineering, IIT
                  Ropar
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">38</td>
                <td class="nametd">Dr. Surjit Singh</td>
                <td class="afftd">
                  Assistant Professor, Thapar Institute of Engineering &
                  Technology, Patiala
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">39</td>
                <td class="nametd">Dr. T Visalakshi</td>
                <td class="afftd">
                  Professor, Department of Civil Engineering at Ecole Centrale
                  School of Engineering, Mahindra University
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">40</td>
                <td class="nametd">Dr. Tariqul Islam</td>
                <td class="afftd">Professor, Jamia Milia Islamia</td>
              </tr>
              <tr>
                <td class="snowidth text-center">41</td>
                <td class="nametd">Dr. Tarun Varshey</td>
                <td class="afftd">
                  Professor & Head, Department of Electrical, Electronics and
                  Communication Engineering, Sharda University, Greater Noida
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">42</td>
                <td class="nametd">Dr. Vikas Bhadoria</td>
                <td class="afftd">Training & Placement Officer, SVSU Palwal</td>
              </tr>
              <tr>
                <td class="snowidth text-center">43</td>
                <td class="nametd">Dr. Vivek Shrivastava</td>
                <td class="afftd">Professor & Dean, NIT Uttarakhand</td>
              </tr>
              <tr>
                <td class="snowidth text-center">44</td>
                <td class="nametd">Dr. VSKV Harish</td>
                <td class="afftd">
                  Assistant Professor, Electrical Engineering Department, NSUT,
                  Delhi
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">45</td>
                <td class="nametd">Dr. Obbu Chandrasekhar</td>
                <td class="afftd">Professor, NIT Delhi</td>
              </tr>
              <tr>
                <td class="snowidth text-center">46</td>
                <td class="nametd">Dr. Ankit Kumar Singh</td>
                <td class="afftd">Assistant Professor, NIT Delhi</td>
              </tr>
              <tr>
                <td class="snowidth text-center">47</td>
                <td class="nametd">Dr. Sanjay Sinha</td>
                <td class="afftd">Professor, Amity University, Noida</td>
              </tr>
              <tr>
                <td class="snowidth text-center">48</td>
                <td class="nametd">Dr. Dipankar Debnath</td>
                <td class="afftd">Assistant Professor, IIT Kharagpur</td>
              </tr>
              <tr>
                <td class="snowidth text-center">49</td>
                <td class="nametd">Dr. Saumya Subhra Nag</td>
                <td class="afftd">Assistant Professor, IIT Delhi</td>
              </tr>
              <tr>
                <td class="snowidth text-center">50</td>
                <td class="nametd">Dr. Krishna Raj R</td>
                <td class="afftd">Assistant Professor, IIT Delhi</td>
              </tr>
              <tr>
                <td class="snowidth text-center">51</td>
                <td class="nametd">Dr. Sanjiv Kumar</td>
                <td class="afftd">HBTU , Kanpur</td>
              </tr>
              <tr>
                <td class="snowidth text-center">52</td>
                <td class="nametd">Dr. Ram Krishna</td>
                <td class="afftd">NIT Warangal</td>
              </tr>
              <tr>
                <td class="snowidth text-center">53</td>
                <td class="nametd">Dr. Ranjeeta Patel</td>
                <td class="afftd">Associate Professor, KIIT, Bhuvaneshwar</td>
              </tr>
              <tr>
                <td class="snowidth text-center">54</td>
                <td class="nametd">Dr. Sandeep Anand</td>
                <td class="afftd">IIT Mumbai</td>
              </tr>
              <tr>
                <td class="snowidth text-center">55</td>
                <td class="nametd">Dr. Sweta Tripathi</td>
                <td class="afftd">Amity University, Gurugram</td>
              </tr>
              <tr>
                <td class="snowidth text-center">56</td>
                <td class="nametd">Dr. Sreejith S</td>
                <td class="afftd">NIT, Silchar</td>
              </tr>
              <tr>
                <td class="snowidth text-center">57</td>
                <td class="nametd">Dr. Gaurav Dwivedi</td>
                <td class="afftd">MNIT Bhopal</td>
              </tr>
              <tr>
                <td class="snowidth text-center">58</td>
                <td class="nametd">Dr. Mohit Bajaj</td>
                <td class="afftd">NIT Delhi</td>
              </tr>
              <tr>
                <td class="snowidth text-center">59</td>
                <td class="nametd">Dr. Gaurav Khanna</td>
                <td class="afftd">
                  Jaypee Institute of Information Technology, Noida
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">60</td>
                <td class="nametd">Dr. Sarika Jain</td>
                <td class="afftd">Amity Institute of Information Technology</td>
              </tr>
              <tr>
                <td class="snowidth text-center">61</td>
                <td class="nametd">Dr. Suman Yadav</td>
                <td class="afftd">Amity University, Greater Noida</td>
              </tr>
              <tr>
                <td class="snowidth text-center">62</td>
                <td class="nametd">Dr. Vandana Sharma</td>
                <td class="afftd">Krist University, Ghaziabad</td>
              </tr>
              <tr>
                <td class="snowidth text-center">63</td>
                <td class="nametd">Dr. Smita Sharma</td>
                <td class="afftd">
                  Associate Professor, Amity University Greater Noida
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">64</td>
                <td class="nametd">Dr. Suman M</td>
                <td class="afftd">
                  Motilal Nehru National Institute of Technology
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">65</td>
                <td class="nametd">Dr. Tripurari Nath Gupta</td>
                <td class="afftd">
                  National Institute of Technology Uttarakhand
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">66</td>
                <td class="nametd">Dr. Abhilasha Singh</td>
                <td class="afftd">
                  SRM Group of Educational Institutions, SRM Institute of
                  Science and Technology – Delhi NCR Campus
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">67</td>
                <td class="nametd">Dr. Gopisetti Manikanta</td>
                <td class="afftd">Dayanand Sagar College of Engineering</td>
              </tr>
              <tr>
                <td class="snowidth text-center">68</td>
                <td class="nametd">Dr. Avadhesh Kumar Gupta</td>
                <td class="afftd">
                  Karnavati Medical and Educational Trust, Karnavati University
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">69</td>
                <td class="nametd">Dr. Ebha Koley</td>
                <td class="afftd">National Institute of Technology Raipur</td>
              </tr>
              <tr>
                <td class="snowidth text-center">70</td>
                <td class="nametd">Dr. Anuradha</td>
                <td class="afftd">Associate Professor, AKGEC, Ghaziabad</td>
              </tr>
              <tr>
                <td class="snowidth text-center">71</td>
                <td class="nametd">Dr. Rashmi Sharma</td>
                <td class="afftd">Associate Professor, AKGEC, Ghaziabad</td>
              </tr>
              <tr>
                <td class="snowidth text-center">72</td>
                <td class="nametd">Dr. Shivani Agarwal</td>
                <td class="afftd">Assistant Professor, AKGEC Ghaziabad</td>
              </tr>
              <tr>
                <td class="snowidth text-center">73</td>
                <td class="nametd">Dr. Gaurav Khanna</td>
                <td class="afftd">
                  Jaypee Institute of Information Technology
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">74</td>
                <td class="nametd">Dr. Harsh Khattar</td>
                <td class="afftd">
                  KIET Group of Institutions, Delhi NCR, Ghaziabad
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">75</td>
                <td class="nametd">Dr. Inderjeet kaur</td>
                <td class="afftd">
                  Professor , Galgotia University, Greater Noida
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">76</td>
                <td class="nametd">Dr. Jitender Chhabra</td>
                <td class="afftd">
                  Associate Professor, Ajay Kumar Garg Engineering College,
                  Ghaziabad
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">77</td>
                <td class="nametd">Dr. Kumud Kundu</td>
                <td class="afftd">Inderprastha Engineering College</td>
              </tr>
              <tr>
                <td class="snowidth text-center">78</td>
                <td class="nametd">Dr. Mohit Bansal</td>
                <td class="afftd">
                  G. L. Bajaj Institute of Technology and Management
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">79</td>
                <td class="nametd">Dr. Namrata Gangil</td>
                <td class="afftd">
                  Ajay Kumar Garg Engineering College, Ghaziabad
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">80</td>
                <td class="nametd">Dr. Neelesh Kumar Gupta</td>
                <td class="afftd">
                  Ajay Kumar Garg Engineering College, Ghaziabad
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">81</td>
                <td class="nametd">Dr. Soumava Boral</td>
                <td class="afftd">University of Leeds</td>
              </tr>
              <tr>
                <td class="snowidth text-center">82</td>
                <td class="nametd">Dr. Suman M</td>
                <td class="afftd">
                  Motilal Nehru National Institute of Technology
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">83</td>
                <td class="nametd">Dr. SURJIT SINGH</td>
                <td class="afftd">Thapar University</td>
              </tr>
              <tr>
                <td class="snowidth text-center">84</td>
                <td class="nametd">Dr. Saroj Bala</td>
                <td class="afftd">Ajay Kumar Garg Engineering College</td>
              </tr>
              <tr>
                <td class="snowidth text-center">85</td>
                <td class="nametd">Dr. Preeti</td>
                <td class="afftd">Shri Vishwakarma Skill University</td>
              </tr>
              <tr>
                <td class="snowidth text-center">86</td>
                <td class="nametd">Prof. (Dr.) Anish Gupta</td>
                <td class="afftd">
                  Apex Institute of Technology, Chandigarh University
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">87</td>
                <td class="nametd">Dr. Rajeev Agrawal</td>
                <td class="afftd">Malaviya National Institute of Technology</td>
              </tr>
              <tr>
                <td class="snowidth text-center">88</td>
                <td class="nametd">Dr. RUCHIRA</td>
                <td class="afftd">Amity University</td>
              </tr>
              <tr>
                <td class="snowidth text-center">89</td>
                <td class="nametd">Dr. Rudra Prakash Maheshwari</td>
                <td class="afftd">Indian Institute of Technology Roorkee</td>
              </tr>
              <tr>
                <td class="snowidth text-center">90</td>
                <td class="nametd">Dr. SHUBHAM TIWARI</td>
                <td class="afftd">ABES Engineering College Ghaziabad</td>
              </tr>
              <tr>
                <td class="snowidth text-center">91</td>
                <td class="nametd">Ms. Deepti Singh</td>
                <td class="afftd">KIET Ghaziabad</td>
              </tr>
              <tr>
                <td class="snowidth text-center">92</td>
                <td class="nametd">Dr. Desh Deepak Sharma</td>
                <td class="afftd">M.J.P. Rohilkhand University</td>
              </tr>
              <tr>
                <td class="snowidth text-center">93</td>
                <td class="nametd">Dr. Aditya Pratap Singh</td>
                <td class="afftd">Ajay Kumar Garg Engineering College</td>
              </tr>
              <tr>
                <td class="snowidth text-center">94</td>
                <td class="nametd">Dr. Arvind Kumar</td>
                <td class="afftd">
                  Galgotias University School of Computing Science and
                  Engineering
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">95</td>
                <td class="nametd">Dr. Avdhesh Gupta</td>
                <td class="afftd">Ajay Kumar Garg Engineering College</td>
              </tr>
              <tr>
                <td class="snowidth text-center">96</td>
                <td class="nametd">Dr. Sumant Anand</td>
                <td class="afftd">Sandip University</td>
              </tr>
              <tr>
                <td class="snowidth text-center">97</td>
                <td class="nametd">Dr. Amit Agrawal</td>
                <td class="afftd">Associate Professor, ABESEC, Ghaziabad</td>
              </tr>
              <tr>
                <td class="snowidth text-center">98</td>
                <td class="nametd">Dr. Manoj Badoni</td>
                <td class="afftd">
                  Thapar Institute of Engineering & Technology, Patiala
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">99</td>
                <td class="nametd">Dr. Pawan Kumar</td>
                <td class="afftd">
                  Thapar Institute of Engineering & Technology, Patiala
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">100</td>
                <td class="nametd">Dr. Anmol Ratan Saxena</td>
                <td class="afftd">Associate Professor and HoD, NIT Delhi</td>
              </tr>
              <tr>
                <td class="snowidth text-center">101</td>
                <td class="nametd">Dr. Amit Kumar Singh</td>
                <td class="afftd">NIT Delhi</td>
              </tr>
              <tr>
                <td class="snowidth text-center">102</td>
                <td class="nametd">Dr. Asha Rani M A</td>
                <td class="afftd">NIT Silchar</td>
              </tr>
              <tr>
                <td class="snowidth text-center">103</td>
                <td class="nametd">Dr. Jiwanjot Singh</td>
                <td class="afftd">NIT Silchar</td>
              </tr>
              <tr>
                <td class="snowidth text-center">104</td>
                <td class="nametd">Dr. VISHNU MOHAN MISHRA</td>
                <td class="afftd">
                  Professor, Govind Ballabh Pant Institute of Engineering &
                  Technology, Pauri Garhwa
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">105</td>
                <td class="nametd">Dr. Arun Kumar G.</td>
                <td class="afftd">Professor, JSSATEN, Noida</td>
              </tr>
              <tr>
                <td class="snowidth text-center">106</td>
                <td class="nametd">Dr. K S SUJATHA</td>
                <td class="afftd">Professor & Head EN, JSSATEN, Noida</td>
              </tr>
              <tr>
                <td class="snowidth text-center">107</td>
                <td class="nametd">Dr. Sanjeev Kumar Sharma</td>
                <td class="afftd">Professor & Head EE, JSSATEN, Noida</td>
              </tr>
              <tr>
                <td class="snowidth text-center">108</td>
                <td class="nametd">Dr. Bharatiraja Chokkalingam</td>
                <td class="afftd">
                  Centre Head - SRM Centre of Electric Mobility (SCEM) &
                  Professor, Dept of Electrical & Electronics Engg, SRM IST
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">109</td>
                <td class="nametd">Dr. Sandeep Anand</td>
                <td class="afftd">Professor, IIT Mumbai</td>
              </tr>
              <tr>
                <td class="snowidth text-center">110</td>
                <td class="nametd">Dr. Gaurav Dwivedi</td>
                <td class="afftd">Assistant Professor, MANIT Bhopal</td>
              </tr>
              <tr>
                <td class="snowidth text-center">111</td>
                <td class="nametd">Dr. Surekha Deshmukh</td>
                <td class="afftd">
                  Domain Consultant, Tata Consultancy Services, Pune
                </td>
              </tr>
              <tr>
                <td class="snowidth text-center">112</td>
                <td class="nametd">Dr. Neelu Nagpal</td>
                <td class="afftd">Associate Professor, MAIT Delhi</td>
              </tr>
              <tr>
                <td class="snowidth text-center">113</td>
                <td class="nametd">Dr. Peeyush Pant</td>
                <td class="afftd">Associate Professor and HOD, BPIT Delhi</td>
              </tr>
              <tr>
                <td class="snowidth text-center">114</td>
                <td class="nametd">Dr. Arvind Kumar</td>
                <td class="afftd">Assistant Professor, IET Lucknow</td>
              </tr>
              <tr>
                <td class="snowidth text-center">115</td>
                <td class="nametd">Dr. Arvind Kumar Sharma</td>
                <td class="afftd">Professor, KIET Ghaziabad</td>
              </tr>
              <tr>
                <td class="snowidth text-center">116</td>
                <td class="nametd">Dr. Ravindra Kumar Singh</td>
                <td class="afftd">Professor, MNNIT Prayagraj</td>
              </tr>
              <tr>
                <td class="snowidth text-center">117</td>
                <td class="nametd">Dr. Niraj Kumar Choudhary</td>
                <td class="afftd">MNNIT, Prayagraj</td>
              </tr>
              <tr>
                <td class="snowidth text-center">118</td>
                <td class="nametd">Dr. Sanjeev Kumar</td>
                <td class="afftd">Sandip University, Madhubani</td>
              </tr>
            </tbody>
          </Table>
          {/* <Table borderless className="mb-5 borderbtm">
                        <tbody>
                            <tr>
                                <th className="noborder">Steering Committee </th>
                            </tr>
                            <tr>
                                <td className="tdborder"> Dr. Ashiv Shah<br />
                                    Professor & Head, AKGEC Skills
                                    <br /><br />
                                    Dr. Sunita Yadav<br />
                                    Professor & Head (CSE), AKGEC</td>
                                <td className="tdborder">Dr. B. K. Sharma<br />
                                    Professor & Head, AKGEC-MCA<br />
                                    <br />
                                    Dr. Rakesh Srivastava<br />
                                    Professor & Head (CE), AKGEC</td>
                            </tr>

                        </tbody>
                    </Table> */}

          {/* <Table borderless className="mb-5 borderbtm">
            <tbody>
            <tr>
                        <th className="noborder">Technical Chair </th>
                    </tr>
            <tr>
                <td className="tdborder">Dr. Pramod Bhatia<br/>Professor and Dean R&D, AKGEC</td> 
                <td className="tdborder">Dr. A.K. Rai<br/>Professor (EN), AKGEC</td>
            </tr>

            </tbody>
        </Table> */}

          <Table borderless className="mb-5 borderbtm">
            <tbody>
              <tr>
                <th className="noborder">Publicity Chair</th>
              </tr>
              <tr>
                <td className="tdborder">
                  Mr Parveen Kumar Dhull <br />
                  Assistant Professor (EN), AKGEC Ghaziabad
                  <br />
                  <br />
                  Mr. Neeraj Gupta
                  <br />
                  Assistant Professor (EN), AKGEC Ghaziabad
                </td>
                <td className="tdborder">
                  Dr Namrata Gangil <br />
                  Assistant Professor(ME) , AKGEC Ghaziabad
                  <br />
                  <br />
                  Dr Anupama Sharma <br />
                  Professor, IT, AKGEC Ghaziabad
                </td>
              </tr>
            </tbody>
          </Table>

          <Table borderless className="mb-5 borderbtm">
            <tbody>
              <tr>
                <th className="noborder">Finance Chair</th>
              </tr>
              <tr>
                <td className="tdborder">
                  Mr. Ravindra Kumar
                  <br />
                  Assistant Professor (EN), AKGEC Ghaziabad
                </td>
                <td className="tdborder">
                  Dr. J.G. Yadav
                  <br />
                  Associate Professor (EN) , AKGEC Ghaziabad
                </td>
              </tr>
            </tbody>
          </Table>

          {/* <Table borderless className="mb-5 borderbtm">
                        <tbody>
                            <tr>
                                <th className="noborder">Publication Chair</th>
                            </tr>
                            <tr>
                                <td className="tdborder">
                                    Dr. Sarika Kalra<br />
                                    Associate Professor (EN), AKGEC</td>
                                <td className="tdborder">
                                    Dr. Namrata Gangil<br />
                                    Associate Professor(ME) , AKGEC</td>
                            </tr>

                        </tbody>
                    </Table>

                    <Table>
                        <thead>
                            <th>Screening Committee </th>
                        </thead>
                        <tbody className="tableNew">
                            <tr>
                                <td>Dr. Inderjeet Kaur<br />Professor (CSE), AKGEC</td>
                                <td>Dr. Sachin Kumar<br />Professor (CSE), AKGEC</td>
                                <td>Dr. Anupama Sharma<br />Associate Professor (IT), AKGEC</td>
                            </tr>
                            <tr>
                                <td>Dr. Amrita Jyoti<br />Assistant Professor (IT), AKGEC</td>
                                <td>Dr. Alok Vardhan<br />Assistant Professor (ME), AKGEC</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table> */}

          <Table borderless className="mb-5 borderbtm">
            <tbody>
              <tr>
                <th>Organizing Committee</th>
              </tr>
              <tr>
                <td className="tdborder">Mr. Ritesh Sharma</td>
                <td className="tdborder">
                  Assistant Professor EN, AKGEC Ghaziabad
                </td>
              </tr>
              <tr>
                <td className="tdborder">Mr. Gaurav Srivastava</td>
                <td className="tdborder">
                  Assistant Professor EN, AKGEC Ghaziabad
                </td>
              </tr>
              <tr>
                <td className="tdborder">Ms. Nidhi Singh</td>
                <td className="tdborder">
                  Assistant Professor EN, AKGEC Ghaziabad
                </td>
              </tr>
              <tr>
                <td className="tdborder">Ms. Nupur Mittal</td>
                <td className="tdborder">
                  Assistant Professor EN, AKGEC Ghaziabad
                </td>
              </tr>
              <tr>
                <td className="tdborder">Ms. Navjyoti Sharma</td>
                <td className="tdborder">
                  Assistant Professor EN, AKGEC Ghaziabad
                </td>
              </tr>
              <tr>
                <td className="tdborder">Mr. Mahesh Sharma</td>
                <td className="tdborder">
                  Assistant Professor EN, AKGEC Ghaziabad
                </td>
              </tr>
              <tr>
                <td className="tdborder">Mr. Dinanath Prasad</td>
                <td className="tdborder">
                  Assistant Professor EN, AKGEC Ghaziabad
                </td>
              </tr>
              <tr>
                <td className="tdborder">Mr. Mahendra Dutt Dwivedi</td>
                <td className="tdborder">
                  Assistant Professor EN, AKGEC Ghaziabad
                </td>
              </tr>
              <tr>
                <td className="tdborder">Mr. Arun Kumar Maurya</td>
                <td className="tdborder">
                  Assistant Professor EN, AKGEC Ghaziabad
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Theme;
