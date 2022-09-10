import React from "react";
import { Grid } from "@mantine/core";
import StnCard from "./StnCard";
import bride from "../images/bride10.png";
import groom from "../images/groom10.png";
import SimpleLink from "./Layout/SimpleLink";
import IconImgur from "./IconImgur";
import { graphql, useStaticQuery } from "gatsby";
import { linkStyles } from "./Layout/generalStyles";
import { useMediaQuery } from "@mantine/hooks";

const QUERY = graphql`
  query fetchProfiles {
    event {
      profiles {
        description
        name
        links {
          imgur
          twitter
        }
      }
    }
  }
`;

export default function StnProfile() {
  const {
    event: { profiles },
  } = useStaticQuery(QUERY);

  const desktop = useMediaQuery(`(min-width: ${768 / 16}em`);

  return (
    <Grid columns={desktop ? 2: 1} mb={30}>
      <Grid.Col span={1}>
        <StnCard
          name={profiles[1].name}
          link={bride}
          description={profiles[1].description}
          alt="bride"
        >
          <SimpleLink link={profiles[1].links.imgur}>
            <IconImgur />
          </SimpleLink>
        </StnCard>
      </Grid.Col>
      <Grid.Col span={1}>
        <StnCard
          name={profiles[0].name}
          link={groom}
          description={profiles[0].description}
          alt="groom"
        >
          <SimpleLink link={profiles[0].links.imgur} sx={linkStyles}>
            <IconImgur />
          </SimpleLink>
        </StnCard>
      </Grid.Col>
    </Grid>
  );
}
