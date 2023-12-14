interface Props {
  children: React.ReactNode;
}

export function Main(props: Props) {
  return <main className="lg:pl-60 pt-6">{props.children}</main>;
}
