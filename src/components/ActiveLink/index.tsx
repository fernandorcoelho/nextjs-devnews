import { ReactElement, cloneElement } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export const ActiveLink = ({
  children,
  activeClassName,
  ...otherProps
}: ActiveLinkProps) => {
  const { asPath } = useRouter();

  const className = asPath === otherProps.href ? activeClassName : '';

  return <Link {...otherProps}>{cloneElement(children, { className })}</Link>;
};
