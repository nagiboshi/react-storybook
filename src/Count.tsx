type CountProps = {
  countValue: number;
  color: string;
};

export const Count = ({ countValue, color }: CountProps) => (
  <h1 style={{ color }}>{countValue}</h1>
);
