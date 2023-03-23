import { Button, Modal, Progress } from "antd";
import { useState } from "react";
import { Wrapper, Title, Description, Listing } from "./style";

const Market = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <Wrapper className="neo">
      <h1>Listings</h1>
      <hr />
      <Listing className="neo2">
        <img src="https://media.istockphoto.com/id/147205632/photo/modern-home-with-swimming-pool.jpg?s=612x612&w=0&k=20&c=sxRQ398SxAjC4FrRombjl46oDGJVdy23T7i3RXO-mww=" />
        <div>
          <Title>house one</Title>
          <Progress percent={65} status="active" />
          <Description>
            Lorem ipsum dolor sit amet. Id voluptatem rerum non eaque quia et
            dolor tempore aut animi deleniti ad delectus tempore et tempora
            tempora id autem quia. Eum natus laboriosam non quia laborum et
            consequatur dignissimos est dolorem possimus ut odit nostrum ut
            provident nihil ut voluptas officia.
          </Description>
          <Button onClick={showModal}>Buy</Button>
        </div>
      </Listing>

      <Listing className="neo2">
        <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80" />
        <div>
          <Title>Great property</Title>
          <Progress percent={30} status="active" />
          <Description>
            Lorem ipsum dolor sit amet. Id voluptatem rerum non eaque quia et
            dolor tempore aut animi deleniti ad delectus tempore et tempora
            tempora id autem quia. Eum natus laboriosam non quia laborum et
            consequatur dignissimos est dolorem possimus ut odit nostrum ut
            provident nihil ut voluptas officia.
          </Description>
          <Button onClick={showModal}>Buy</Button>
        </div>
      </Listing>

      <Listing className="neo2">
        <img src="https://cdn.vox-cdn.com/thumbor/FrnLQTpuAoAmp0GZRZctSSdkC04=/0x0:3000x2000/1200x0/filters:focal(0x0:3000x2000):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21905363/iStock_185930591.jpg" />
        <div>
          <Title>Superbe location</Title>
          <Progress percent={80} status="active" />
          <Description>
            Lorem ipsum dolor sit amet. Id voluptatem rerum non eaque quia et
            dolor tempore aut animi deleniti ad delectus tempore et tempora
            tempora id autem quia. Eum natus laboriosam non quia laborum et
            consequatur dignissimos est dolorem possimus ut odit nostrum ut
            provident nihil ut voluptas officia.
          </Description>
          <Button onClick={showModal}>Buy</Button>
        </div>
      </Listing>

      <Listing className="neo2">
        <img src="https://cdn.onekindesign.com/wp-content/uploads/2019/10/Traditional-English-Manor-House-Jauregui-Architect-01-1-Kindesign.jpg" />
        <div>
          <Title>Another Awesome house</Title>
          <Progress percent={10} status="active" />
          <Description>
            Lorem ipsum dolor sit amet. Id voluptatem rerum non eaque quia et
            dolor tempore aut animi deleniti ad delectus tempore et tempora
            tempora id autem quia. Eum natus laboriosam non quia laborum et
            consequatur dignissimos est dolorem possimus ut odit nostrum ut
            provident nihil ut voluptas officia.
          </Description>
          <Button onClick={showModal}>Buy</Button>
        </div>
      </Listing>

      <Modal
        open={modalVisible}
        title="Buy some"
        onCancel={closeModal}
        onOk={closeModal}
        centered
      >
        there will be a slider here to set the amount to invest in this property
      </Modal>
    </Wrapper>
  );
};

export default Market;
