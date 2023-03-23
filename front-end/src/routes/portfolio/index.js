import { Button, Modal, Progress } from "antd";
import { useState } from "react";
import { Wrapper, Title, Description, Listing } from "./style";

const Portfolio = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <Wrapper className="neo">
      <h1>Portfolio</h1>
      <hr />
      <h3>Pending</h3>
      <Listing className="neo2">
        <img src="https://media.istockphoto.com/id/147205632/photo/modern-home-with-swimming-pool.jpg?s=612x612&w=0&k=20&c=sxRQ398SxAjC4FrRombjl46oDGJVdy23T7i3RXO-mww=" />
        <div>
          <Title>house Two</Title>
          <Progress percent={65} status="active" />
          <Description>
            Lorem ipsum dolor sit amet. Id voluptatem rerum non eaque quia et
            dolor tempore aut animi deleniti ad delectus tempore et tempora
            tempora id autem quia. Eum natus laboriosam non quia laborum et
            consequatur dignissimos est dolorem possimus ut odit nostrum ut
            provident nihil ut voluptas officia.
          </Description>
          <Button onClick={showModal}>Details</Button>
        </div>
      </Listing>

      <Listing className="neo2">
        <img src="https://cdn.onekindesign.com/wp-content/uploads/2019/10/Traditional-English-Manor-House-Jauregui-Architect-01-1-Kindesign.jpg" />
        <div>
          <Title>Another  house</Title>
          <Progress percent={10} status="active" />
          <Description>
            Lorem ipsum dolor sit amet. Id voluptatem rerum non eaque quia et
            dolor tempore aut animi deleniti ad delectus tempore et tempora
            tempora id autem quia. Eum natus laboriosam non quia laborum et
            consequatur dignissimos est dolorem possimus ut odit nostrum ut
            provident nihil ut voluptas officia.
          </Description>
          <Button onClick={showModal}>Details</Button>
        </div>
      </Listing>
      <br />
      <h3>Vested</h3>
      <Listing className="neo2">
        <img src="https://cdn.onekindesign.com/wp-content/uploads/2019/10/Traditional-English-Manor-House-Jauregui-Architect-01-1-Kindesign.jpg" />
        <div>
          <Title>House Three</Title>
          <Progress percent={100} status="success" />
          <Description>
            Lorem ipsum dolor sit amet. Id voluptatem rerum non eaque quia et
            dolor tempore aut animi deleniti ad delectus tempore et tempora
            tempora id autem quia. Eum natus laboriosam non quia laborum et
            consequatur dignissimos est dolorem possimus ut odit nostrum ut
            provident nihil ut voluptas officia.
          </Description>
          <Button onClick={showModal}>Details</Button>
        </div>
      </Listing>
      <Modal
        open={modalVisible}
        title="Investment Details"
        onCancel={closeModal}
        onOk={closeModal}
        centered
      >
        there will be a slider here to set the amount to invest in this property
      </Modal>
    </Wrapper>
  );
};

export default Portfolio;
