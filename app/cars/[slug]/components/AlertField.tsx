interface Props {
  fieldLabel: string;
  fieldValue: string | number;
}

export const AlertField = ({ fieldValue, fieldLabel }: Props) => {
  return (
    <div className="flex gap-1 items-center">
      <p>{fieldLabel}</p>
      <p className="text-black">{fieldValue}</p>
    </div>
  );
};
