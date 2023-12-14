interface Props {
  children: React.ReactNode;
}
export function SideMenuItem(props: Props) {
  return (
    <li className="mt-3 first:mt-0 font-bold text-slate-700">
      {props.children}
    </li>
  );
}
