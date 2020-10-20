import React, { Component } from "react";

export default class Main extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <span class="col-12 text-center date">January 2018 Overview</span>
        </div>

        <div class="row">
          <div class="col-12 header-section text-left">
            Current Business Objectives
          </div>
        </div>

        <div class="row">
          <div className="card col-5">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>Objective 1</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="objective-stat">
                    Prioritizing <span class="bold">long-term revenue </span>
                    opportunity over short-term
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card col-5">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>Objective 2</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="objective-stat">
                    Providing the best experience for the consumer possible:{" "}
                    <span class="bold">More listings is better</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 header-section text-left">The Problem</div>
        </div>

        <div className="card col-11">
          <div className="card-body container-fluid">
            <div className="row card-header">
              <div>An Internal Debate</div>
            </div>
            <div className="row row-no-gutter">
              <div className="col-12">
                <div className="objective-stat">
                  Our New Construction sales team needs to settle if want they to charge their customers
                  per <span className="bold">Community</span> or per <span className="bold">Lead</span>
                  <div>&nbsp;</div>
                  <span className="caption">
                  (A Community
                  is a collection of homes owned by a builder. A Lead when is a
                  consumer on Zillow chooses to contact the builder about a
                  specific community)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 header-section text-left">Two Solutions</div>

        <div className="card col-5">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>Plan A</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="objective-stat">
                    Charge customers a flat price per Community
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="card col-5">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>Plan B</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="objective-stat">
                    Charge customers per Lead Received
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>

        <div class="row">
          <div class="col-12 header-section text-left">Definitions</div>
        </div>

        <div class="row">
          <div className="card col-5">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>Customer</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="stakeholder-stat">
                    New Construction Home Builders
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card col-5">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>Consumer</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="stakeholder-stat">
                    Prospective New Construction Homebuyers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 header-section text-left">Key Customers</div>
        </div>

        <div class="row justify-content-center">
          <div className="card trio col-3">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>D.R. Horton</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="stakeholder-stat">
                    <span class="bold"> 2017 Total Closings</span>: 47,135
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card col-3">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>Lennar Corporation</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="stakeholder-stat">
                    <span class="bold"> 2017 Total Closings</span>: 29,394
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card col-3">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>PulteGroup</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="stakeholder-stat">
                    <span class="bold"> 2017 Total Closings</span>: 21,052
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div className="card trio col-3">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>Home Creations</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="stakeholder-stat">
                    <span class="bold"> 2017 Total Closings</span>: 445
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card col-3">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>Minto Communities</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="stakeholder-stat">
                    <span class="bold"> 2017 Total Closings</span>: 441
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card col-3">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>Homes by Westbay</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="stakeholder-stat">
                    <span class="bold"> 2017 Total Closings</span>: 440
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 stakeholder text-center">
            Our customers range from tens of thousands of homes built to a few hundred
          </div>
        </div>

        <div class="row">
          <div class="col-12 in-card caption text-left">
            Source: BuilderOnline Builder 100
          </div>
        </div>

        <div class="row">
          <div class="col-12 header-section text-left">Current Metrics</div>
        </div>

        <div class="row justify-content-center">
          <div className="card trio col-6">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>Total new construction commnunities advertised</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-4">
                  <div className="stat">6,174</div>
                </div>

                <div className="col-8">
                  <div className="stakeholder-stat"><span className="bold">Expected Growth Rate</span></div>
                  <ul>
                    <li>
                    ​2018: 6% MoM growth every month
                    </li>
                    <li>
                    ​2019: 4% MoM growth every month
                    </li>
                    <li>
                    ​2020: 2% MoM growth every month
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>

          <div className="card col-5">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>Average Leads per Community per Month</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-3">
                  <div className="stat">4.00</div>
                </div>

                <div className="col-9">
                  <div className="stakeholder-stat"><span className="bold">Expected Growth Rate</span></div>
                  <ul>
                    <li>
                    ​2018: 5% MoM growth every month
                    </li>
                    <li>
                    ​2019: 4% MoM growth every month
                    </li>
                    <li>
                    ​2020: 1% MoM growth every month
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 header-section text-left">New Market Research</div>
        </div>

        <div class="row justify-content-center">
          <div className="card trio col-3">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>Total Active New Construction​ Communities (US)</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="stat">38,000</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card col-3">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>Median New Construction Home Sale Price</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="stat">$350,000</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card col-3">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>Profit vs. Marketing Costs For Industry</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="stakeholder-stat">
                    Averages of Final Sale Price: <br></br>
                    <span class="bold"> Profit</span>: 5%<br></br>
                    <span class="bold"> Marketing Expenditures</span>: 1%
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card card trio col-3">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>Median Number of Homes per Subdivision (2016)</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="stakeholder-stat">
                    <span class="bold">Single-Family Detatched:</span> 45
                  </div>
                  <div className="stakeholder-stat">
                    <span class="bold">Attached:</span> 65
                  </div>
                  <div className="caption in-card">
                    Source: National Association of Home Builders
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
