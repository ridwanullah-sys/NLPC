const ErnAndDed = ({ Obj }) => {
  return (
    <div>
      {Obj && (
        <div className="flex flex-col gap-2">
          {Object.keys(Obj).map((value) => {
            return (
              <div className="grid grid-cols-7 border-2 border-emerald-900 rounded-lg gap-1 items-center px-2 py-1">
                <div className="col-span-5">{value}</div>

                <div className="col-span-2">{Obj[value]}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ErnAndDed;
