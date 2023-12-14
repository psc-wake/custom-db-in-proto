interface Props {
  children: React.ReactNode;
}
export function SideMenuItemGroup(props: Props) {
  return <ul className="mt-2 pl-6 text-xs">{props.children}</ul>;
}
