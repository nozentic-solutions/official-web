import type { SVGProps } from 'react';

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function WebDesignIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4.5" width="18" height="15" rx="1.2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <circle cx="6" cy="6.75" r="0.55" fill="currentColor" stroke="none" />
      <circle cx="8.4" cy="6.75" r="0.55" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CustomSoftwareIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <polyline points="8.5 6 3 12 8.5 18" />
      <polyline points="15.5 6 21 12 15.5 18" />
    </svg>
  );
}

export function AppDevelopmentIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="7" y="2.5" width="10" height="19" rx="2" />
      <line x1="11" y1="18.3" x2="13" y2="18.3" />
    </svg>
  );
}

export function ManagedItIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="6" rx="1.2" />
      <rect x="3" y="14" width="18" height="6" rx="1.2" />
      <circle cx="7" cy="7" r="0.55" fill="currentColor" stroke="none" />
      <circle cx="7" cy="17" r="0.55" fill="currentColor" stroke="none" />
    </svg>
  );
}
