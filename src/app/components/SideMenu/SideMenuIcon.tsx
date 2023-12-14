interface Props {
  children: React.ReactNode;
}

export function SideMenuIcon(props: Props) {
  return <div className="h-4 w-4 text-slate-400">{props.children}</div>;
}
