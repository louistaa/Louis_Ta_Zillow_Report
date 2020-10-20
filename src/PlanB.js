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

export default class PlanB extends Component {
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
      { x: 2017, y: 4.0 },
      { x: 2018, y: 7.183 },
      { x: 2019, y: 11.5 },
      { x: 2020, y: 12.958 },
    ];

    const graph2 = [
      { x: 2017, y: 160 },
      { x: 2018, y: 288 },
      { x: 2019, y: 460 },
      { x: 2020, y: 518 },
    ];

    const graph3 = [
      { x: 2017, y: 987840 },
      { x: 2018, y: 3334348 },
      { x: 2019, y: 8160860 },
      { x: 2020, y: 11390600 },
    ];

    return (
      <div class="container-fluid">
        <div class="row">
          <span class="col-12 text-center date">
            Plan B: Charge customers $40 per lead
          </span>
        </div>

        <div class="row">
          <span class="col-12 text-center caption">
            a lead when is a consumer on Zillow chooses to contact the builder
            about a specific community
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
                    <span class="bold">$11,390,600 </span>
                    per month by charging new construction builders $40 per
                    lead.
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
                    Attracts smaller and less established home builders,
                    increasing their listings on Zillow.
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
                <div>Projected Number of Leads Per Community Per Month</div>
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
                          title="Leads Per Community Per Month"
                        />
                      </XYPlot>
                    </div>
                  </div>
                </div>
                <div className="col-6-lg col-5-md">
                  <div className="objective-stat">
                    <ul className="graph-ul">
                      <li>
                        <span class="bold">End of 2017: </span>4.00
                      </li>
                      <li>
                        <span class="bold">End of 2018: </span>7.183
                      </li>
                      <li>
                        <span class="bold">End of 2019: </span>11.500
                      </li>
                      <li>
                        <span class="bold">End of 2020: </span>12.958
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
                <div>Projected Revenue Per Community Per Month </div>
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
                        <YAxis
                          tickSizeOuter={-5}
                          title="Revenue Per Community"
                        />
                      </XYPlot>
                    </div>
                  </div>
                </div>
                <div className="col-6-lg col-5-md">
                  <div className="objective-stat">
                    <ul class="graph-ul">
                      <li>
                        <span class="bold">End of 2017: </span>$160
                      </li>
                      <li>
                        <span class="bold">End of 2018: </span>$287.32
                      </li>
                      <li>
                        <span class="bold">End of 2019: </span>$460
                      </li>
                      <li>
                        <span class="bold">End of 2020: </span>$518.32
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Graph Three */}
        <div class="row justify-content-center">
          <div className="card col-9">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>Projected Total Revenue Per Month For Plan B</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12-sm col-7-md col-6-lg">
                  <div className="stakeholder-stat">
                    <div className="App">
                      <XYPlot height={300} width={300}>
                        <LineSeries data={graph3} />
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <XAxis
                          hideLine
                          tickValues={[2017, 2018, 2019, 2020]}
                          title="Year"
                          tickFormat={tickFormatter}
                        />
                        <YAxis tickSizeOuter={-22} title="Revenue" />
                      </XYPlot>
                    </div>
                  </div>
                </div>
                <div className="col-6-lg col-5-md">
                  <div className="objective-stat">
                    <ul class="graph-ul">
                      <li>
                        <span class="bold">End of 2017: </span>$987,840
                      </li>
                      <li>
                        <span class="bold">End of 2018: </span>$3,334,348
                      </li>
                      <li>
                        <span class="bold">End of 2019: </span>$8,160,860
                      </li>
                      <li>
                        <span class="bold">End of 2020: </span>$11,390,600
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
                <div>Fairness With Small Subdivisions</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="stakeholder-stat">
                    New construction builders who build below the 2016 national
                    median of 45 homes are on the same level as home builders
                    who build above this median. It is common for home builders
                    to buy a piece of land that is segmented into 4 or 5 plots.
                    Plan A creates a disparity that home builders of a 100+
                    subdivision pay the same flat price as a subdivision of 5
                    homes. Doesn't matter where you are in relation to the
                    median.
                    <div>&nbsp;</div>
                    As a result, Plan B suits new construction with fewer plots
                    of land very well. Because any community (regardless of
                    size) can have the same amount of leads, this might entice
                    builders of smaller subdivisions (less than 45 homes) to
                    advertise. This will result in more listings on Zillow
                    (Objective 2).
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card col-9">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>Rich Don’t Get Richer</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="stakeholder-stat">
                    Plan B favors home builders with large capital to play with.
                    Plan A is able to make sure that having money doesn’t create
                    a positive feedback loop with advertising. As a result, we
                    can attract smaller home builders with less capital if they
                    know that they are paying the same price as the top three
                    homebuilders in the US (D.R. Horton, Lennar, Pulte).
                    <div>&nbsp;</div>
                    Enticing smaller home builders with less capital means there
                    will be more listings on Zillow (Objective 2)
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card col-9">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>More Control</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="stakeholder-stat">
                    We have control to figure out ways to increase leads
                    through new features such as a reworked UI.
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
                <div>Start at Zillow, Finish off Zillow</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="stakeholder-stat">
                    Some consumers will use Zillow to find new construction
                    communities, but not use Zillow to contact. For example,
                    they will contact the builder through their official
                    websites. These consumers are essentially ‘free’ as home
                    builders do not have to pay for leads that were not from
                    Zillow.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card col-9">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>Not Exhaustive</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="stakeholder-stat">
                    Not every home builder will list every home available for
                    sale. For example, a builder might list a single floor plan
                    that captures multiple homes in their community. This leads
                    to less contacts as there are less homes available to
                    inquire about.
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
                  Projected Number of Leads, Revenue Per Community Per Month and
                  Total Revenue Per Month{" "}
                </div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="objective-stat">
                    <ul>
                      <li>
                        <span class="bold">End of 2017:</span>
                        <ul>
                          <li>4.00 Leads</li>
                          <li>$40 * 4 leads = $160/community/month</li>
                          <li>
                            6,174 communities * $160/community/month =
                            $987,840/month (projected)
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span class="bold">End of 2018: </span>
                        <ul>
                          <li>5% MoM results in 7.183 Leads</li>
                          <li>$40 * 7.183 leads = $287.32/community/month</li>
                          <li>
                            11,605 communities * $287.32/community/month =
                            $3,334,348/month (projected)
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span class="bold">End of 2019: </span>
                        <ul>
                          <li>4% MoM results in 11.500 Leads</li>
                          <li>$40 * 11.500 leads = $460/community/month</li>
                          <li>
                            17,741 communities * $460/community/month =
                            $8,160,860/month (projected)
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span class="bold">End of 2020: </span>
                        <ul>
                          <li>1% MoM results in 12.958 Leads</li>
                          <li>$40 * 12.958 leads = $518.32/community/month</li>
                          <li>
                            21,976 communities * $518.32/community/month =
                            $11,390,600/month (projected)
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
