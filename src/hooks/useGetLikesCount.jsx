const useGetLikesCount = (likeCount) => {
    const likes = likeCount;

    return likes >= 1000000
    ? (likes / 1000000).toFixed(1) + 'm'
    : likes >= 1000
    ? (likes / 1000).toFixed(1) + 'k'
    : likes.toString();
}

export default useGetLikesCount;