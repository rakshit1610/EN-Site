import React, { Component } from "react";
import poster from "../../assets/desktop.png";
import previous from "../../assets/previous.png";
import posterMob from "../../assets/mobile.png";

class Home extends Component {
  render() {
    return (
      <div id="home">
        {/* <div className="d-flex container pt-5 justify-content-between">
            <div>
                <img src={logopath} class="nayi"/>
                <div id="bg-green" className="d-inline-block p-2 mt-3">
                INTERNATIONAL CONFERENCE on
                </div>
                <h5 className="greytext mt-2 ">Advancements and Key Challenges in</h5>
                <h2 className="text-uppercase greenhead bold-text display-4">Green Energy<br/>and Computing</h2>
                <Calendar/> <h5 className="greytext d-inline m-auto">24-25 Feb 2023</h5>
            </div>
            <div className="w-50 d-flex deskicon" ><Desktop className="d-inline-block w-50 m-auto"/></div>
</div> */}

        <img src={poster} className="posterHome" alt="poster"></img>
        <img src={posterMob} className="posterHomeMob" alt="poster"></img>

        {/* <div className="container mt-4">
            <Desktop className="w-50 mobicon"/>
            </div> */}

        <div id="date" className="target mt-3">
          <div className="container">
            <h1 className="mb-3 green-heading">
              Date and Venue of the Conference
            </h1>
            <p>
              The conference AKGEC2024 hosted by Department of Electrical and
              Electronics Engineering, will be held offline at AKGEC, Ghaziabad,
              Uttar Pradesh, India from November 21-23, 2024. The conference
              will include regular sessions with poster/oral presentations,
              global and technical sessions, panel discussions and poster
              presentations organized in AKGEC. The conference is Technically
              Sponsored by IEEE UP Section.{" "}
            </p>
          </div>
        </div>

        <div id="theme" className="target">
          <div className="container mb-3">
            <h1 className="mb-3 green-heading">Important Dates</h1>
            <p>
              <span className="bold-text">Paper Submission Starts: </span> 20th
              March 2024
              <br />
              <span className="bold-text">
                Full Paper Submission Date:{" "}
              </span>{" "}
              15th July 2024 <br />
              <span className="bold-text">
                Notification of Acceptance:{" "}
              </span>{" "}
              15th November 2024{" "}
              <br />
              <span className="bold-text">Final Paper Submission: </span>15th
              October 2024
              <br />
            </p>
          </div>
        </div>

        {/* <div className="judgesImg">
          <img src={judges} alt="judges" />
        </div> */}
        <div id="date" className="target mt-3">
          <div className="container">
            <h1 className="mb-3 green-heading">
              About the 2nd International Conference AKGEC 2024
            </h1>
            <div className="prevImg">
              <img src={previous} alt="judges" />
            </div>
            <p>
              The first conference on &quot;Advancements and Challenges in Green
              Energy and Computing&quot; was organized by the Department of
              Electrical &amp; Electronics Engineering at Ajay Kumar Garg
              Engineering College (AKGEC) on 21-23 November 2024. The prime
              objective of the conference was to bring together researchers,
              scientists, students, and industry professionals to discuss
              innovative ideas, opportunities, challenges, advancements, and
              research results in the fields of Green Energy, Computing and
              Security, Sustainable Development, Artificial Intelligence, and
              Embedded Systems on an international premier forum. Green Energy,
              Electric Drives and Smart Grid, Computing and Security,
              Sustainable Technology and Development, and Artificial
              Intelligence were the four tracks of the conference.
            </p>
            <p>
              The conference received an overwhelming response with over 205
              entries under 4 tracks. All the papers were blind peer-reviewed by
              our esteemed reviewers from across the globe. After a rigorous
              review process, 71 papers have been finalized and presented under
              various tracks of the conference in two days. The program flow of
              the conference included various sessions, viz, the inaugural
              program, keynote addresses, oral and poster paper presentations,
              panel discussions, and the valedictory program.
            </p>
            <p>
              The conference was inaugurated in the benign presence of Prof.
              Bhim Singh, IIT Delhi, as the Chief Guest, Mr. Sudhanshu Sekhar
              Barpanda, Director (MO), Grid Controller of India, as the Guest of
              Honour, Mr. Meenu Singhal, RMD, Socomac, as the inaugural keynote,
              and Dr. R. K. Agarwal, Director General, AKGEC.
            </p>
            <p>
              The keynote speakers from India and abroad included Dr. Sanjeet
              Dwivedi, Senior Project Manager from Everfuel, Denmark, Prof.
              Akshay Rathore from SIT Singapore, Ms. Shivi Jindal, RSM from
              Fronius, and Mr. Sumit Tiwari from SNU who shared their insights
              on various topics related to green energy and computing.
            </p>
            <p>
              The conference also included a panel discussion on &quot;Threats
              and Opportunities for the Adoption of Green Energy&quot; under the
              presence of expert panelists: Prof. Prerna Gaur, Director NSUT
              West Campus, Prof. R. P. Maheshwari, IIT Roorkee, Prof. Ashish
              Shrivastava, Shri Vishwakarma Skill University, Mr. A. B.
              Sengupta, Chief Manager and alternate CISO, Grid Controller of
              India, and Mr. Vish Iyer, Global Chief Commercial Officer, Jakson
              Greens.
            </p>
            <p>
              Prof. Santanu Mishra, IIT Delhi, Dr. Vineet Saini from DST, and
              Mr. Kushagra Nandan, MD &amp; CEO of SunSource Energy graced the
              Valedictory Program and provided valuable insights into the field
              of green energy and computing. A strong need for collaborative
              efforts to promote Green Energy for sustainable development was
              emphasized during the valedictory program. The conference
              concluded with a motivational quote: &quot;Investment in Green
              Energy is the investment for the future.&quot;.
            </p>
          </div>
        </div>

        <div id="theme" className="target">
          <div className="container mb-5">
            <h1 className="mb-3 green-heading">Conference Theme</h1>
            <p>
              The international conference on Advancements & Key Challenges in
              Green Energy and Computing (AKGEC-2024) will offer themes in the
              engineering aspects of renewable energy and computing. The main
              aim of this conference will be to provide an international premier
              forum for the presentation of new advances and research results in
              the field of Green Energy, Computing and security, sustainable
              development, Artificial intelligence and Embedded Systems. The
              focus area and tracks of the conference would be:
            </p>
            <p>
              <span className="bold-text">Track 1:</span> Green Energy, Electric
              Drives and Smart Grid
              <br />
              <span className="bold-text">Track 2:</span> Computing and Security
              <br />
              <span className="bold-text">Track 3:</span> Sustainable
              Technologies and Development
              <br />
              <span className="bold-text">Track 4:</span> Artificial
              Intelligence and Embedded Systems
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
