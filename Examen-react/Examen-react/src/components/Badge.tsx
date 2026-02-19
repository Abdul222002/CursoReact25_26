

interface Props {
  text: string;
  variant?: string; // e.g. 'alta' | 'media' | 'baja' | 'abierta' | 'resuelta'
  className?: string;
}

const Badge = ({ text, variant, className }: Props) => {
  const classes = [
    'badge',
    variant ? `badge-${variant}` : '',
    className || '',
  ]
    .filter(Boolean)
    .join(' ')

  return <div className={classes}>{text}</div>
}

export default Badge