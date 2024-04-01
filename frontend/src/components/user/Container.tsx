type ContainerProps = {
  children: React.ReactNode;
};

export function Container(props: ContainerProps): JSX.Element {
  return (
    <div className="dark:selection:bg-stone-700 selection:bg-stone-400 container md:py-10 py-5">
      {props.children}
    </div>
  );
}
