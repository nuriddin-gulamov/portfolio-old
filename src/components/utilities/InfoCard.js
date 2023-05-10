function InfoCard({ index, data }) {
  const Icon = data.icon;

  return (
    <div className={index !== 0 && "mt-[25px]"}>
      <h3 className="text-gray400">{data.subtitle}</h3>
      <div className="flex items-center my-[10px]">
        <Icon />
        <h2 className="ml-[10px] text-[18px] font-semibold leading-tight">{data.title}</h2>
      </div>
      <p className="text-gray400">{data.description}</p>
    </div>
  );
}

export default InfoCard;
