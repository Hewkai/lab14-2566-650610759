export const Footer = (props) => {
  return (
    <div className="mt-3">
      <hr />
      <p className="text-secondary text-center">
        Copyright © {props.year} {props.name} {props.id}
      </p>
    </div>
  );
};
