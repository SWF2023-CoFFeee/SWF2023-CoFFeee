import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const CustomNoMaxWidthTooltip = styled(
  ({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ),
)({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 'none',
    padding: '12px 16px',
  },
});

export default CustomNoMaxWidthTooltip;
