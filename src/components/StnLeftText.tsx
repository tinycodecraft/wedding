import {Text,   useMantineTheme} from '@mantine/core';
import {useMediaQuery} from '@mantine/hooks';
import {graphql, useStaticQuery} from 'gatsby';
import React, {Fragment} from 'react'
import HeadingPcs from './Elements/Pieces/HeadingPcs';
import TextPcs from './Elements/Pieces/TextPcs';
import NewHeart from './NewHeart';

import StnHeart from './StnHeart';

// Query Part
const qyEvent = graphql `
  query {
    event {
      profiles {
        name
      }
      events {
        title
        occasion {
          place {
            name
          }
        }
      }
    }
  }
`;
// Fragment



// Function Part
export default function StnLeftText() {
    const desktop = useMediaQuery(`(min-width: ${
        768 / 16
    }em`);
    const {event} = useStaticQuery(qyEvent);
    const theme = useMantineTheme();
    const mode = desktop ? 'desktop': 'phone';
    return (
        <Fragment>
            <HeadingPcs mode={mode}
                size='h1'>
                <NewHeart></NewHeart>
                <TextPcs cp='span' toBig={true} mode={mode}>
                    {
                    event.profiles[0].name
                }</TextPcs>
                <TextPcs cp='span' toBig={true}>&</TextPcs>
                <TextPcs cp='span' toBig={true}  mode={mode}>
                    {
                    event.profiles[1].name
                }</TextPcs>
            </HeadingPcs>
            <TextPcs cp='p'>Join us on</TextPcs>

            <Text color={theme.colors.violet[2]}
                weight={desktop ? 600 : 400} size={desktop ? 'lg': 'xl'}>
                {event.events[0].title}</Text>
                <TextPcs cp='span' toBig={true}>at</TextPcs>
            <Text color={theme.colors.violet[2]}
                weight={desktop ? 600 : 400} size={desktop ? 'lg': 'xl'}>
                {event.events[0].occasion.place.name}</Text>
        </Fragment>

    )
}
