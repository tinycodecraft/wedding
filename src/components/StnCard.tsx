import { Card, CardProps, Group,Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import ImagePcs from "./Elements/Pieces/ImagePcs";
import { PersonProps } from "./Gob";

export default function StnCard({name,description,link,alt,children}:PersonProps & CardProps) {
    
    const desktop = useMediaQuery(`(min-width: ${
        768 / 16
    }em`);      
  return (
    <Card p="lg" radius="lg" sx={(theme)=>({
        backgroundColor: theme.colors.grape[0],
        marginBottom: '60px',
        minHeight:'500px'
    })}>
      <Card.Section mt='lg' pt='lg'>
        <ImagePcs src={link} alt={alt}></ImagePcs>
      </Card.Section>
      <Group position="center">
        <Text component='h1' weight={600} color={desktop ? "blue.9": "indigo.9"} size='xl'>{name}</Text>

      </Group>
      <Text component='span' color={desktop ? "voilet.7": "voilet.3"}>{description}</Text>
    {children}
    </Card>
  );
}
