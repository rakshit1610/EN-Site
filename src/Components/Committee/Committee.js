import React, { Component } from "react";
import { Table } from "react-bootstrap";
import ItemCard from './Item';

class Theme extends Component {
    state = {
        data: [
            ["1", "Harish", "IIT"],
            ["177", "77", "88"],
        ],
    }

    render() {

        const itemcards = this.state.data.map(itemcard => {
            return <ItemCard num={itemcard[0]} name={itemcard[1]} institute={itemcard[2]} />
        })


        return (
            <div id="theme" className="target">
                <div className="container" >
                    <h1 className="mb-3 green-heading">Committee </h1>


                    <Table borderless className="mb-5 borderbtm">
                        <tbody>
                            <tr>
                                <th className="noborder">Chair Person/ Chief Patron</th>
                                {/* <th className="noborder">Patron</th> */}
                            </tr>
                            <tr>
                                <td className="tdborder"> Dr. R.K. Agarwal<br />Director General, AKGEC Ghaziabad</td>
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
                                <td className="tdborder"> Dr. S N Singh </td>
                            </tr>
                        </tbody>
                    </Table>

                    <Table >
                        <thead>
                            <th className="noborder">General Chairs</th>
                        </thead>
                        <tbody className="tableNew">
                            <tr>
                                <td>Dr. Hemant Ahuja<br />Director & HOD EN, AKGEC Ghaziabad</td>
                                <td>Dr  Satish K. Singh<br />Chair, IEEE UP Section, India </td>
                                <td>Dr Prabhakar Tiwari<br />MMMUT, Gorakhpur </td>
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

                    <Table >
                        <thead>
                            <th className="noborder">Organizing Secretary  </th>
                        </thead>
                        <tbody className="tableNew">
                            <tr>
                                <td>Dr. Vani Bhargava
                                    <br />Associate Professor (EN), AKGEC
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <br />
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
                                <td className="afftd">Prof & Head, Dept of Electrical Engg, GRIET Hyderabad</td>
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
                                <td className="afftd">Professor & Head Lloyd Skill Centre, Lloyd Group of Institutions</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">8</td>
                                <td className="nametd">Dr. Manpreet Singh Manna</td>
                                <td className="afftd">Associate Professor, EIE SLITE Longowal, Ex Director AICTE, MHRD, New Delhi</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">9</td>
                                <td className="nametd">Dr. Arvind Kumar Sharma</td>
                                <td className="afftd">Professor, KIET Ghaziabad</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">10</td>
                                <td className="nametd">Mr. A B Sengupta</td>
                                <td className="afftd">Alt-CISO & Chief Manager (Engineering), Corporate Centre, GRID-INDIA</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">11</td>
                                <td className="nametd">Mr. S K Saha</td>
                                <td className="afftd">GM, WRLDC, Grid-India, Mumbai</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">12</td>
                                <td className="nametd">Dr. Bhavnesh Kumar</td>
                                <td className="afftd">Associate Professor, NSUT Delhi</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">13</td>
                                <td className="nametd">Dr. Ritula Thakur</td>
                                <td className="afftd">NITTTR</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">14</td>
                                <td className="nametd">Dr. Vivek Srivastava</td>
                                <td className="afftd">Associate professor, NIT Delhi</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">15</td>
                                <td className="nametd">Dr. Pradyumn Chaturvedi</td>
                                <td className="afftd">Associate Professor, VNIT Nagpur</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">16</td>
                                <td className="nametd">Dr. Trapti Jain</td>
                                <td className="afftd">Professor, IIT Indore</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">17</td>
                                <td className="nametd">Dr. R K Nema</td>
                                <td className="afftd">Professor & HOD MANIT, Bhopal</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">18</td>
                                <td className="nametd">Dr. Rajveev Singh</td>
                                <td className="afftd">Professor IIT BHU</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">19</td>
                                <td className="nametd">Dr. Alok Ranjan Verma</td>
                                <td className="afftd">IIT Kanpur</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">20</td>
                                <td className="nametd">Dr. Pallab Biswas</td>
                                <td className="afftd">HOD ME, AKGEC Ghaziabad</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">21</td>
                                <td className="nametd">Dr. Rahul Sharma</td>
                                <td className="afftd">HOD IT, AKGEC Ghaziabad</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">22</td>
                                <td className="nametd">Dr. Anu Chaudhary</td>
                                <td className="afftd">HOD CSE, AKGEC Ghaziabad</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">23</td>
                                <td className="nametd">Dr. Neelesh Gupta</td>
                                <td className="afftd">HOD ECE, AKGEC Ghaziabad</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">24</td>
                                <td className="nametd">Dr. R K Srivastava</td>
                                <td className="afftd">HOD CE, AKGEC Ghaziabad</td>
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
                                <td className="afftd">Professor, Electrical Engineering Department
                                    Founder Director & Coordinator, Centre for Integrated Green and Renewable Energy
                                </td>
                            </tr>
                            <tr>
                                <td className="nametd">Dr Ashish Srivastava </td>
                                <td className="afftd">Professor and Dean (SFASH & IQAC) Shri Vishwakarma Skill University,Palwal Haryana
                                </td>
                            </tr>
                            <tr>
                                <td className="nametd">Dr A K Rai </td>
                                <td className="afftd">Professor, AKGEC Ghaziabad
                                </td>
                            </tr>
                            <tr>
                                <td className="nametd">Dr Sarika Kalra</td>
                                <td className="afftd">Associate Professor, AKGEC Ghaziabad
                                </td>
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
                                    Assistant  Professor (EN), AKGEC Ghaziabad<br />
                                    <br />
                                    Mr. Neeraj Gupta<br />
                                    Assistant  Professor (EN), AKGEC Ghaziabad</td>
                                <td className="tdborder">
                                    Dr Namrata Gangil <br />
                                    Assistant Professor(ME) , AKGEC Ghaziabad<br /><br />
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
                                <td className="tdborder">Mr. Ravindra Kumar<br />Assistant Professor (EN), AKGEC Ghaziabad</td>
                                <td className="tdborder">Dr. J.G. Yadav<br />Associate Professor (EN) , AKGEC Ghaziabad</td>
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
                                <td className="tdborder">Assistant Professor EN, AKGEC Ghaziabad</td>
                            </tr>
                            <tr>
                                <td className="tdborder">Mr. Gaurav Srivastava</td>
                                <td className="tdborder">Assistant Professor EN, AKGEC Ghaziabad</td>
                            </tr>
                            <tr>
                                <td className="tdborder">Ms. Nidhi Singh</td>
                                <td className="tdborder">Assistant Professor EN, AKGEC Ghaziabad</td>
                            </tr>
                            <tr>
                                <td className="tdborder">Ms. Nupur Mittal</td>
                                <td className="tdborder">Assistant Professor EN, AKGEC Ghaziabad</td>
                            </tr>
                            <tr>
                                <td className="tdborder">Ms. Navjyoti Sharma</td>
                                <td className="tdborder">Assistant Professor EN, AKGEC Ghaziabad</td>
                            </tr>
                            <tr>
                                <td className="tdborder">Mr. Mahesh Sharma</td>
                                <td className="tdborder">Assistant Professor EN, AKGEC Ghaziabad</td>
                            </tr>
                            <tr>
                                <td className="tdborder">Mr. Dinanath Prasad</td>
                                <td className="tdborder">Assistant Professor EN, AKGEC Ghaziabad</td>
                            </tr>
                            <tr>
                                <td className="tdborder">Mr. Mahendra Dutt Dwivedi</td>
                                <td className="tdborder">Assistant Professor EN, AKGEC Ghaziabad</td>
                            </tr>
                            <tr>
                                <td className="tdborder">Mr. Arun Kumar Maurya</td>
                                <td className="tdborder">Assistant Professor EN, AKGEC Ghaziabad</td>
                            </tr>

                        </tbody>
                    </Table>

                </div>
            </div>
        );
    }
}


export default Theme;