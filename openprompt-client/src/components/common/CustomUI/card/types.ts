import { ContainerProps, SxProps } from '@mui/material';
import { Theme } from '@mui/system';

export interface IContainerOmitted extends Omit<ContainerProps, 'sx'> {
  sx?: SxProps<Theme>;
}
