const useConvertDate = (publishedAt) => {

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
      ];
  
      const date = new Date(publishedAt);
      const publishDate = date.getDate();
      const publishMonth = monthNames[date.getMonth()];
      const publishYear = date.getFullYear();
      const fullDate = publishDate + " " + publishMonth + ", " + publishYear;
      

    return fullDate;

}

export default useConvertDate;