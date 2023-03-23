import { Button, Form, Input, Modal, Progress, Select, Spin } from "antd";
import { useState } from "react";
import { Wrapper, Title, Description, Listing } from "./style";

const Trading = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({});
  const handleSubmit = (values) => {
    setLoading(true);
    fetch(
      `http://127.0.0.1:8000/investment?ticker=${values.ticker}&period=${values.period}&amount=${values.amount}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setResponse({
          ...values,
          today: +data,
        });
      });
  };

  const handleSubmit2 = (values) => {
    console.log({ values });
  };

  const openModal = () => {};

  return (
    <Wrapper className="neo">
      <h3>Find out what a hypothetical investment would be worth today</h3>
      <br />
      <div className="inv">
        <Form onFinish={handleSubmit} className="neo">
          <Form.Item name="ticker" label="Ticker">
            <Input placeholder="Ticker" />
          </Form.Item>
          <Form.Item name="amount" label="Amount">
            <Input placeholder="Amount" />
          </Form.Item>
          <Form.Item name="period" label="Period">
            <Select>
              <Select.Option value="1">1 year</Select.Option>
              <Select.Option value="2">2 year</Select.Option>
              <Select.Option value="3">5 year</Select.Option>
              <Select.Option value="4">10 year</Select.Option>
            </Select>
          </Form.Item>

          <Button htmlType="submit">Calculate</Button>
        </Form>
        <div className="result neo">
          <Spin spinning={loading} />
          {loading || !response.today ? null : (
            <span>
              If you had invested <b>${response.amount}</b> in{" "}
              <b>{response.ticker}</b> {response.period} years ago, today the
              investment would be worth:
              <b>${response?.today?.toFixed(2)}</b>
            </span>
          )}
        </div>
      </div>
      <br />
      <hr />
      <h3>Indicators ( Future )</h3>
      <div className="inv">
        <Form onFinish={handleSubmit2} className="neo">
          <Form.Item name="ticker" label="Ticker">
            <Input placeholder="Ticker" />
          </Form.Item>
          <Form.Item name="amount" label="Amount">
            <Input placeholder="Amount" />
          </Form.Item>
          <Form.Item name="period" label="Period">
            <Select>
              <Select.Option value="1">1 year</Select.Option>
              <Select.Option value="2">2 year</Select.Option>
              <Select.Option value="3">5 year</Select.Option>
              <Select.Option value="4">10 year</Select.Option>
            </Select>
          </Form.Item>

          <Button htmlType="submit">Calculate</Button>
        </Form>
        <div className="result neo">
          Now is a good idea to buy/sell{" "}
          <Button onClick={() => setModalOpen(true)}>Details</Button>
        </div>
      </div>

      <Modal
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        onOk={() => setModalOpen(false)}
      >
        Indicators details
      </Modal>
    </Wrapper>
  );
};

export default Trading;
