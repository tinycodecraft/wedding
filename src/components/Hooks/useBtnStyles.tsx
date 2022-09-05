import { createStyles } from '@mantine/core';
import { StnButtonProps } from '../Gob';

const useBtnStyles = createStyles((theme, { color, radius }: StnButtonProps,getRef) => ({
  button: {
    color: theme.white,
    backgroundColor: theme.colors[color][6],
    borderRadius: radius,
    padding: theme.spacing.md,
    margin: theme.spacing.md,
    border: 0,
    cursor: 'pointer',
  },
}));


export default useBtnStyles