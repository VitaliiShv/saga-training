import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import News from "../../News/News";

const LatestNewsPage = () => {
  const { latestNews } = useSelector((store) => store?.news || {});
  const { latestNewsError } = useSelector((store) => store?.errors || {});
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={handleNews}>Get News</button>
      <News news={latestNews} error={latestNewsError} title="Latest News" />
    </div>
  );
};

export default LatestNewsPage;
