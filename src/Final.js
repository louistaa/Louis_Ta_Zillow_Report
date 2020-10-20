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

export default class Final extends Component {
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
            Suggested Plan: B: Charge customers $40 per lead
          </span>
        </div>

        <div class="row">
          <span class="col-12 text-center caption">
            Reason: Plan B aligns with business objectives the best and has
            better potential for control
          </span>
        </div>

        <div class="row">
          <div class="col-12 header-section text-left">
            Revenue Impact: Plan B Wins
          </div>
          <div className="card col-5">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>Plan A</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="objective-stat">
                    Projected profit at end of 2020:
                    <span class="red"> $8,790,400 </span>
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
                    Projected profit at end of 2020:
                    <span class="green"> $11,390,600 </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 header-section text-left">
            Number of Listings: Need More Data to Determine Winner
          </div>
        </div>

        <div class="row">
          <div className="card col-5">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>Plan A</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="objective-stat">
                    Attracts bigger and more established home builders,{" "}
                    <span class="green">increasing</span> their listings on
                    Zillow. High upfront paywall might repel smaller home
                    builders, leading to <span class="red">less</span> number of
                    their listings on Zillow.
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
                    Attracts smaller and less established home builders,{" "}
                    <span class="green">increasing</span> their listings on
                    Zillow. Disadvantages bigger and more established home
                    builders, <span class="red">discouraging</span> their
                    listings on Zillow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION */}
        <div class="row">
          <div class="col-12 header-section text-left">
            Projected Revenue Growth: Plan B Wins Long Term
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
                        <span class="bold">End of 2017: </span>
                        <span class="green">$2,469,600</span>
                      </li>
                      <li>
                        <span class="bold">End of 2018: </span>
                        <span class="green">$4,642,000</span>
                      </li>
                      <li>
                        <span class="bold">End of 2019: </span>
                        <span class="red">$7,096,400</span>
                      </li>
                      <li>
                        <span class="bold">End of 2020: </span>
                        <span class="red">$8,790,400</span>
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
                        <span class="bold">End of 2017: </span>
                        <span class="red">$987,840</span>
                      </li>
                      <li>
                        <span class="bold">End of 2018: </span>
                        <span class="red">$3,334,348</span>
                      </li>
                      <li>
                        <span class="bold">End of 2019: </span>
                        <span class="green">$8,160,860</span>
                      </li>
                      <li>
                        <span class="bold">End of 2020: </span>
                        <span class="green">$11,390,600</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Adv / DisAdv */}
        <div class="row">
          <div class="col-12 header-section text-left">
            Advantages and Disadvantages{" "}
          </div>
        </div>

        <div class="row justify-content-center">
          <div className="card col-9">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>Weighing the Trade-Offs</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="stakeholder-stat">
                    In summary, Plan B is the optimal pricing model to go
                    forward with. Although Plan B has smaller short-term
                    revenue, it’s long-term revenue greatly surpasses Plan A by
                    the end of 2020. This goes hand-in-hand with one of our key
                    priorities, which is to prioritize long-term revenue over
                    short-term.
                    <div>&nbsp;</div>
                    It is hard to say which Plan will result in providing our
                    consumer with the best experience (more listings). To figure
                    this out, I would like to launch an A/B test in two similar
                    geographical locations: one for Plan A and one for Plan B. I
                    would measure how each Plan fluctuates the number of
                    listings from both customer segments: small and big home
                    builders (see how I would define 'big' or 'small' below). If
                    the total combined number of listings is greater for Plan B,
                    then I would roll out Plan B to the whole Zillow platform
                    (as Plan B has won on both business objectives). If the
                    total combined number of listings is greater for Plan A,
                    therefore conflicting with Plan B’s win on revenue, I would
                    investigate with the data on who is advertising on Plan A
                    that is not advertising on Plan B. Then pass on my research
                    with the team so we can strategize.
                    <div>&nbsp;</div>
                    From a strategic standpoint, Plan B better allows us to
                    monetize based on our current business goal. Phase I of
                    Zillow’s mission statement was to help people start their
                    search on a new home. Phase II, and the current phase, is to
                    help people finish their search on a new home. This means
                    that as we develop more tools for our consumers to finish
                    their home searches, the more inclined a consumer will be to
                    use Zillow to contact a builder or create leads.
                    <div>&nbsp;</div>
                    Plan B allows us to control monetization, unlike plan A.
                    With Plan B we can figure out ways to increase leads through
                    new features such as a reworked UI. With Plan B, we do not
                    control the builder. We cannot tell them to build more
                    communities to help us generate more revenue.
                    <div>&nbsp;</div>I hypothesize that Plan A attracts bigger
                    and more established home builders as their number of leads
                    will surpass the cost of the flat community charge. However,
                    Plan A’s high upfront cost may create a paywall that might
                    repel smaller home builders. On the inverse, I hypothesize
                    that Plan B attracts smaller home builders because it is the
                    cheaper alternative. However, Plan B disadvantages bigger
                    and more established home builders with a large number of
                    leads that surpass the breakeven point of Plan B (10
                    leads/month). Using the A/B test above, I would add these
                    metrics:
                    <div>&nbsp;</div>
                    <ol>
                      <li>
                        Number of builders advertising (per month/per year)
                      </li>
                      <li>
                        Drop off rate of advertising (builders are no longer
                        interested in advertising with us)
                      </li>
                      <li>
                        Newly acquired advertisements (builders who haven’t
                        advertised with us before)
                      </li>
                    </ol>
                    This would gauge whether or not builders like our model, and
                    if they prefer other models over the others. I hypothesize
                    that Plan B will still result in more revenue and more
                    listings because bigger home builders have more capital to
                    play with - therefore able to afford the higher cost per
                    lead instead of per community. To add, I also hypothesize
                    that Plan B will be able to capture more smaller home
                    builders, as Plan B is a more affordable option than Plan A.
                    Using the A/B test laid out above and metrics I have set, I
                    will be able to determine if my hypothesis is correct or
                    not.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* C/O */}
        <div class="row">
          <div class="col-12 header-section text-left">
            Concerns and Opportunities{" "}
          </div>
        </div>

        <div class="row justify-content-center">
          <div className="card col-9">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>Looking Back</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="stakeholder-stat">
                    <div className="row row-no-gutter">
                      <div className="col-12">
                        <div className="objective-stat">
                          <ul>
                            <li>
                              <span class="bold">Assumptions</span>
                              <ul>
                                <li>
                                  For my suggestion, I assumed that the total
                                  number of smaller home builders are
                                  advertising less than the total number of
                                  bigger home builders (because of capital
                                  reasons). I also assumed that bigger
                                  homebuilders (who are winners of Plan A) that
                                  receive above average leads per community,
                                  will be willing to adopt to this model.
                                </li>
                                <li>
                                  There will be no competitor(s) in the upcoming
                                  years that captures some of our customers and
                                  consumers
                                </li>
                                <li>
                                  Our customers (new construction home-builders)
                                  will continue to advertise with us after
                                  launching new pricing model
                                </li>
                              </ul>
                            </li>
                            <li>
                              <span class="bold">Opportunities </span>
                              <ul>
                                <li>
                                  We can A/B test new contact features or
                                  implementations to see if we can increase the
                                  number of leads
                                </li>
                                <li>
                                  We can classify certain new construction homes
                                  as ‘hot’ homes and charge more per lead on
                                  these homes
                                </li>
                                <li>
                                  We can adjust lead prices to better meet a
                                  home builder’s needs, creating a more personal
                                  relationship with our customers
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
          </div>
        </div>

        {/* More Time */}
        <div class="row">
          <div class="col-12 header-section text-left">
            If I Had More Time...
          </div>
        </div>

        <div class="row">
          <div className="card col-11">
            <div className="card-body container-fluid">
              <div className="row card-header">
                <div>Other Datasets I Would Like</div>
              </div>
              <div className="row row-no-gutter">
                <div className="col-12">
                  <div className="objective-stat">
                    Firstly, I would like to see the data on how many big
                    builders and smaller builders we are currently capturing
                    with advertising. I would first come up with a definition of
                    what it means to be either a ‘big’ or ‘small’ builder first:
                    by number of homes built per year or number of unique
                    communities (for example). From this, I would query data
                    based on definitions and see which segments are advertising
                    with Zillow, and which segments are not.
                    <div>&nbsp;</div>
                    Secondly, I would like to see the ratio of the number of
                    total new construction communities in relation to the number
                    that is currently on Zillow. What percent of new
                    construction communities are being advertised across all
                    communities in the US? This would give us our North Star:
                    what our profits could look like if we captured more new
                    construction communities. This data would also help us
                    understand segments we aren’t hitting - so we can strategize
                    accordingly. To find this data, I would aggregate the total
                    amount of unique new construction communities currently
                    listed on Zillow. Then, I would find government census data
                    that tells me the total amount of permits issued and
                    aggregate that data to figure out how many communities a
                    builder has built.
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
