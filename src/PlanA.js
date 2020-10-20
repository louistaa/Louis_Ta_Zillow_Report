import React, { Component } from "react";
import "../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
} from "react-vis";

export default class PlanA extends Component {
  render() {
    function tickFormatter(t, i) {
      return (
        <tspan>
          <tspan x="0" dy="1em"></tspan>
          <tspan x="0" dy="1em">
            {t}
          </tspan>
        </tspan>
      );
    }

    const graph1 = [
      { x: 2017, y: 6174 },
      { x: 2018, y: 11605 },
      { x: 2019, y: 17741 },
      { x: 2020, y: 21976 },
    ];

    const graph2 = [
      { x: 2017, y: 2469600 },
      { x: 2018, y: 4642000 },
      { x: 2019, y: 7096400 },
      { x: 2020, y: 8790400 },
    ];

    return (
      <div class="container-fluid">
        <div class="row">
          <span class="col-12 text-center date">
            Plan A: Charge customers $400 per community per month
          </span>
        </div>

        <div class="row">
          <span class="col-12 text-center caption">
            a community is a collection of homes owned by a builder
          </span>
        </div>

        <div class="row">
          <div class="col-12 header-section text-left">
            Alignment to Business Objectives
          </div>
        </div>

        <div class="row">
          <div className="card col-5">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>Revenue Impact</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="objective-stat">
                    At the end of 2020, we can expect to make a projected{" "}
                    <span class="bold">$8,790,400 </span>
                    per month by charging new construction builders $400 a month
                    per community advertised.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card col-5">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>Number of Listings</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="objective-stat">
                    Attracts and retains bigger and established home builders, increasing their listings on Zillow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION */}
        <div class="row">
          <div class="col-12 header-section text-left">Projected Growth</div>
        </div>

        {/* Graph One */}
        <div class="row justify-content-center">
          <div className="card col-9">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>
                  Projected Number of Advertised Communities Per Month on Zillow
                </div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12-sm col-7-md col-6-lg">
                  <div className="stakeholder-stat">
                    <div className="App">
                      <XYPlot height={300} width={300}>
                        <LineSeries data={graph1} />
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <XAxis
                          hideLine
                          tickValues={[2017, 2018, 2019, 2020]}
                          title="Year"
                          tickFormat={tickFormatter}
                        />
                        <YAxis
                          tickSizeOuter={-2}
                          title="Advertised Communities"
                        />
                      </XYPlot>
                    </div>
                  </div>
                </div>
                <div className="col-6-lg col-5-md">
                  <div className="objective-stat">
                    <ul className="graph-ul">
                      <li>
                        <span class="bold">End of 2017: </span>6,174
                      </li>
                      <li>
                        <span class="bold">End of 2018: </span>11,605
                      </li>
                      <li>
                        <span class="bold">End of 2019: </span>17,741
                      </li>
                      <li>
                        <span class="bold">End of 2020: </span>21,976
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Graph Two */}
        <div class="row justify-content-center">
          <div className="card col-9">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>Projected Total Revenue Per Month For Plan A</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12-sm col-7-md col-6-lg">
                  <div className="stakeholder-stat">
                    <div className="App">
                      <XYPlot height={300} width={300}>
                        <LineSeries data={graph2} />
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <XAxis
                          hideLine
                          tickValues={[2017, 2018, 2019, 2020]}
                          title="Year"
                          tickFormat={tickFormatter}
                        />
                        <YAxis tickSizeOuter={-20} title="Revenue" />
                      </XYPlot>
                    </div>
                  </div>
                </div>
                <div className="col-6-lg col-5-md">
                  <div className="objective-stat">
                    <ul class="graph-ul">
                      <li>
                        <span class="bold">End of 2017: </span>$2,469,600
                      </li>
                      <li>
                        <span class="bold">End of 2018: </span>$4,642,000
                      </li>
                      <li>
                        <span class="bold">End of 2019: </span>$7,096,400
                      </li>
                      <li>
                        <span class="bold">End of 2020: </span>$8,790,400
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 header-section text-left">Advantages</div>
        </div>

        <div class="row justify-content-center">
          <div className="card col-9">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>One Simple Fee</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="stakeholder-stat">
                    Builders just pay and manage one simple fee of $400 a month
                    to advertise any of their communities. Instead of having
                    multiple transactions for a community every month, it makes
                    a our job easier if we can just manage one transaction every
                    month.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card col-9">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>Big Builders Win</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="stakeholder-stat">
                    With a flat rate, it is beneficial for bigger builders who
                    attract a high number of leads per community. If they have
                    to pay per lead this puts them at a disadvantage. Attracting
                    more big builders will result in more listings.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card col-9">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>As Many As You Want</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="stakeholder-stat">
                    Builders are free to put as many listings on Zillow as they
                    wish because they only pay one flat price. Compared to Plan
                    B, a builder may only just put one listing as they want to
                    generate less leads but still advertise. As a result, there
                    could be more listings on Zillow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 header-section text-left">Disadvantages</div>
        </div>

        <div class="row justify-content-center">
          <div className="card col-9">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>Less Control</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="stakeholder-stat">
                    If we go with Plan A, we are no longer in control of
                    monetization. We can figure out ways to increase leads
                    through new features such as a reworked UI. However, we do
                    not have a way to increase supply of communities.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card col-9">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>Not One Size Fits All</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="stakeholder-stat">
                    What if a community has a large amount of housing units?
                    Should a home builder of 5 homes pay the same price of a
                    home builder of 200?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Calculated */}
        <div class="row">
          <div class="col-12 header-section text-left">
            How Were These Numbers Calculated?
          </div>
        </div>

        <div class="row">
          <div className="card col-11">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>
                  Projected Number of Advertised Communities and Revenue Per
                  Month
                </div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="objective-stat">
                    The Financial Planning and Analysis team believes that the
                    Community Month-Over-Month growth rate will be only 90% the
                    rate of Price per Lead model as they expect a higher
                    cancellation rate. (For Example: 6%*0.9; 4%*0.9; and 2%*0.9)
                    <div>&nbsp;</div>
                    <ul>
                      <li>
                        <span class="bold">End of 2017:</span>
                        <ul>
                          <li>6,174 communities</li>
                          <li>
                            $400/month * 6,174 communities = $2,469,600/month
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span class="bold">End of 2018: </span>
                        <ul>
                          <li>5.4% MoM results in 11,605 communities</li>
                          <li>
                            $400/month * 11,605 communities = $4,642,000/month
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span class="bold">End of 2019: </span>
                        <ul>
                          <li>3.6% MoM results in 17,741 communities</li>
                          <li>
                            $400/month * 17,741 communities = $7,096,400/month
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span class="bold">End of 2020: </span>
                        <ul>
                          <li>1.8% MoM results in 21,976 communities</li>
                          <li>
                            $400/month * 21,976 communities = $8,790,400/month
                          </li>
                        </ul>
                      </li>
                    </ul>
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
