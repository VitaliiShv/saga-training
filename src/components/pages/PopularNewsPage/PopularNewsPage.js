import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import News from "../../News/News";

const PopularNewsPage = () => {
  const { popularNews } = useSelector((store) => store?.news || {});
  const { popularNewsError } = useSelector((store) => store?.errors || {});
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={handleNews}>Get News</button>
      <News news={popularNews} error={popularNewsError} title="Popular News" />
    </div>
  );
};

export default PopularNewsPage;
