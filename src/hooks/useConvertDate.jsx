const useConvertDate = (publishedAt) => {

    const date = new Date(publishedAt);
    const today = new Date();
    const dateDifference = date.getDate() - today.getDate();
    const monthsDifference = date.getMonth() - today.getMonth();
    const yearDifference = date.getFullYear() - today.getFullYear();

    

}

export default useConvertDate;