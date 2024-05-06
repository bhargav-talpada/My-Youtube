
const useViewsCount = (viewCount) => {

    const views = viewCount;

    return views >= 1000000
    ? (views / 1000000).toFixed(1) + 'm'
    : views >= 1000
    ? (views / 1000).toFixed(1) + 'k'
    : views.toString();
      
}

export default useViewsCount;