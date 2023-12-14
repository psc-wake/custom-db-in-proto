interface Props {
  children: React.ReactNode;
}

export function SideMenuTitle(props: Props) {
  return (
    <h2 className="flex items-center gap-2 font-bold text-sm mt-6 first:mt-0 text-slate-700">
      {props.children}
    </h2>
  );
}
