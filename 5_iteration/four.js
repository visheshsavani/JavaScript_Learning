const myarr = [1,2,5,3,6,8,9,10]

const arr2 = myarr.filter((item) => item < 0)


// console.log(arr2);

// .filter() method is use we want some specific values from our datastructure like array,objects etc

// foreach method is not commpatible for this task as it is does not return the item we want
// so filter method

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBooks = books.filter((bk) => {
    if(bk.genre == "Fiction"){
        return bk.genre
    }
  })

//   console.log(userBooks);


// .map method works in a similar way as filter but it apply condition to each and every elemnt

// important differnce in filter method use in comparison while .map is used for some arithmetic operation
const muNumbers = [ 2,4,1,1,4,2,5,6]

const newarr = muNumbers.map((num) => {
    return num+10
})
// console.log(newarr);
