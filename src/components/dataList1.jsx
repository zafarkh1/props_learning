import Props from "./props1";

const DataList = () => {
  return (
    <div>
      <Props name="John" age={34} job="doctor" />
      <Props name="Frank" age={29} job="engineer" />
      <Props name="Phil" age={22} job="Web developer" />
    </div>
  );
};

export default DataList;
