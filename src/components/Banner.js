export const Banner = ({ title, subTitle }) => {
  return (
    <div className="text-center py-4">
      <h1 className="my-2 p-2">{title}</h1>
      <h2 className="fs-5 my-2 p-2">{subTitle}</h2>
    </div>
  );
};
