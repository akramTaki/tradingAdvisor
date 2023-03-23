import { Button, Modal } from "antd";
import { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import { Wrapper, DashboardItem } from "./style";

const plotLayout = {
  width: 350,
  height: 300,
  showlegend: false,
  margin: {
    l: 20,
    r: 20,
    b: 20,
    t: 20,
  },
  title: false,
};


const Dashboard = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [ontario_avg_comp, setOntario_avg_comp] = useState({});
  const [ontario_avg_comp_modal, setOntario_avg_comp_modal] = useState(false);

  const [rolling_ontario_avg_comp, setRolling_ontario_avg_comp] = useState({});
  const [rolling_ontario_avg_comp_modal, setRolling_ontario_avg_comp_modal] =
    useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/ontario_avg_comp")
      .then((res) => res.json())
      .then((data) => {
        setOntario_avg_comp(data);
      });

    fetch("http://127.0.0.1:8000/rolling_ontario_avg_comp")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRolling_ontario_avg_comp(data);
      });
  }, []);

  return (
    <Wrapper className="neo">
      <Modal
        open={ontario_avg_comp_modal}
        onCancel={() => setOntario_avg_comp_modal(false)}
        centered
        width={1200}
        height={800}
      >
        <Plot
          data={[
            {
              x: Object.values(ontario_avg_comp.Name || {}),
              y: Object.values(
                ontario_avg_comp["Avg_Comp_Benchmark 2005-2022"] || {}
              ),
              type: "scatter",
            },
          ]}
          layout={plotLayout}
        />
        <h1>Hello world</h1>
        <p>hello</p>
      </Modal>
      <Modal
        open={rolling_ontario_avg_comp_modal}
        onCancel={() => setRolling_ontario_avg_comp_modal(false)}
        centered
        width={1200}
        height={800}
      >
        <Plot
          data={[
            {
              x: Object.values(rolling_ontario_avg_comp["Date"] || {}),
              y: Object.values(
                rolling_ontario_avg_comp["Apartment_Benchmark"] || {}
              ),
              type: "scatter",
            },
            {
              x: Object.values(rolling_ontario_avg_comp["Date"] || {}),
              y: Object.values(
                rolling_ontario_avg_comp["Comp_Benchmark"] || {}
              ),
              type: "scatter",
            },
            {
              x: Object.values(rolling_ontario_avg_comp["Date"] || {}),
              y: Object.values(
                rolling_ontario_avg_comp["One_Storey_Benchmark"] || {}
              ),
              type: "scatter",
            },
            {
              x: Object.values(rolling_ontario_avg_comp["Date"] || {}),
              y: Object.values(
                rolling_ontario_avg_comp["Single_Family_Benchmark"] || {}
              ),
              type: "scatter",
            },
            {
              x: Object.values(rolling_ontario_avg_comp["Date"] || {}),
              y: Object.values(
                rolling_ontario_avg_comp["Townhouse_Benchmark"] || {}
              ),
              type: "scatter",
            },
            {
              x: Object.values(rolling_ontario_avg_comp["Date"] || {}),
              y: Object.values(
                rolling_ontario_avg_comp["Two_Storey_Benchmark"] || {}
              ),
              type: "scatter",
            },
          ]}
          layout={plotLayout}
        />
        <h1>Hello world</h1>
        <p>hello</p>
      </Modal>
      <h1>Dashboard</h1>
      <hr />
      <DashboardItem className="neo">
        <h3>
          Investments - 23500${" "}
          <Button onClick={() => setModalVisible(true)}>Details</Button>
        </h3>

        <Plot
          data={[
            {
              values: [19, 26, 55],
              labels: ["house 1", "house 2", "house 3"],
              type: "pie",
            },
          ]}
          layout={plotLayout}
        />
      </DashboardItem>
      <DashboardItem className="neo">
        <h3>
          Ontario Average Composite
          <Button onClick={() => setOntario_avg_comp_modal(true)}>
            Details
          </Button>
        </h3>
        {ontario_avg_comp.Name ? (
          <Plot
            data={[
              {
                x: Object.values(ontario_avg_comp.Name || {}),
                y: Object.values(
                  ontario_avg_comp["Avg_Comp_Benchmark 2005-2022"] || {}
                ),
                type: "scatter",
              },
            ]}
            layout={plotLayout}
          />
        ) : null}
      </DashboardItem>
      <DashboardItem className="neo">
        <h3>
          Rolling Ontario Average Composite
          <Button onClick={() => setRolling_ontario_avg_comp_modal(true)}>
            Details
          </Button>
        </h3>

        <Plot
          data={[
            {
              x: Object.values(rolling_ontario_avg_comp["Date"] || {}),
              y: Object.values(
                rolling_ontario_avg_comp["Apartment_Benchmark"] || {}
              ),
              type: "scatter",
            },
            {
              x: Object.values(rolling_ontario_avg_comp["Date"] || {}),
              y: Object.values(
                rolling_ontario_avg_comp["Comp_Benchmark"] || {}
              ),
              type: "scatter",
            },
            {
              x: Object.values(rolling_ontario_avg_comp["Date"] || {}),
              y: Object.values(
                rolling_ontario_avg_comp["One_Storey_Benchmark"] || {}
              ),
              type: "scatter",
            },
            {
              x: Object.values(rolling_ontario_avg_comp["Date"] || {}),
              y: Object.values(
                rolling_ontario_avg_comp["Single_Family_Benchmark"] || {}
              ),
              type: "scatter",
            },
            {
              x: Object.values(rolling_ontario_avg_comp["Date"] || {}),
              y: Object.values(
                rolling_ontario_avg_comp["Townhouse_Benchmark"] || {}
              ),
              type: "scatter",
            },
            {
              x: Object.values(rolling_ontario_avg_comp["Date"] || {}),
              y: Object.values(
                rolling_ontario_avg_comp["Two_Storey_Benchmark"] || {}
              ),
              type: "scatter",
            },
          ]}
          layout={plotLayout}
        />
      </DashboardItem>
      <DashboardItem className="neo">
        <h3>
          Income growth{" "}
          <Button onClick={() => setModalVisible(true)}>Details</Button>
        </h3>

        <Plot
          data={[
            {
              y: [0, 1, 1, 2, 3, 5, 8, 13, 21],
              boxpoints: "all",
              jitter: 0.3,
              pointpos: -1.8,
              type: "box",
            },
          ]}
          layout={plotLayout}
        />
      </DashboardItem>
      <DashboardItem className="neo">
        <h3>
          Eiusmod tempor{" "}
          <Button onClick={() => setModalVisible(true)}>Details</Button>
        </h3>

        <Plot
          data={[
            {
              x: [1, 2, 3, 4],
              y: [10, 11, 12, 13],
              mode: "markers",
              marker: {
                size: [40, 60, 80, 100],
              },
            },
          ]}
          layout={{
            title: "Marker Size",
            showlegend: false,
            height: 600,
            width: 600,
            ...plotLayout,
          }}
        />
      </DashboardItem>
      <DashboardItem className="neo">
        <h3>
          Magna aliqua{" "}
          <Button onClick={() => setModalVisible(true)}>Details</Button>
        </h3>

        <Plot
          data={[
            {
              x: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              y: [20, 14, 25, 16, 18, 22, 19, 15, 12, 16, 14, 17],
              type: "bar",
              name: "Primary Product",
              marker: {
                color: "rgb(49,130,189)",
                opacity: 0.7,
              },
            },
            {
              x: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              y: [19, 14, 22, 14, 16, 19, 15, 14, 10, 12, 12, 16],
              type: "bar",
              name: "Secondary Product",
              marker: {
                color: "rgb(204,204,204)",
                opacity: 0.5,
              },
            },
          ]}
          layout={plotLayout}
        />
      </DashboardItem>
    </Wrapper>
  );
};

export default Dashboard;
