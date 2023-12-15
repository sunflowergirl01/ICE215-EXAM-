  //Data 2
  const data = [1,3,5,6,"hello", "guava", "hello world", 34,56 ,54]
  const numberArry = [453,656,67645,5476,798,5678,989,34545,6465768,79,76545364,75,8789,987,64765,]

  //(i)//
  console.log(data.sort(function(a, b){
    return a-b;
  }))

  console.log(numberArry.sort(function(a, b){
    return a-b;
  }))

  //(ii)//
  data.forEach(element=> 
    {
        console.log(element.item);
    });

    numberArry.forEach(element => 
        {
            console.log(element.item);
        });

 //(iii)//
 let totalnum = numberArry.reduce((element, total) => element + total)
 console.log(totalnum)

 let total = data.reduce((element, total) => element + total)
 console.log(total)

 