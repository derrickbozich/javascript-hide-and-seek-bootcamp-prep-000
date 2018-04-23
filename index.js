 getFirstSelector(selector) {
   return document.querySelector(selector);
 }

 nestedTarget(){
      return document.querySelector('#nested .target');
 }

 increaseRankBy(n){
    let list = document.querySelectorAll('.ranked-list')[0];
    
    for (let i = 0; i < list.length; i++) {
      list[i].innerHTML = parseInt(list[i].innerHTML) + n;
      
    }
 }

deepestChild(){
  let nest = document.querySelectorAll("div#grand-node")[0];

    while (nest){
      if (nest.querySelector('*')){
        nest = nest.querySelector('*');
      } else {
        return nest;
      }
    }
}




