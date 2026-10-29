import { useState } from "react";
import { animated } from "@react-spring/web";
import { useBasicLoading, ExperienceSection, Layout } from "../components";

const Experiences = () => {
  const [status, loading] = useState(false);

  const loadingProps = useBasicLoading(status, loading);

  return (
    <>
      {!!status && (
        <Layout>
          <animated.div style={loadingProps}>
            <ExperienceSection />
          </animated.div>
        </Layout>
      )}
    </>
  );
};

export default Experiences;
