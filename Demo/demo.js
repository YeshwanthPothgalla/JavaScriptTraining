class MultipleFinder {
    multiplesTill(limit, number) {
      for (let i = number; i <= limit; i += number) {
        console.log(i);
       }
    }
}
    
    M = new MultipleFinder();
    M.multiplesTill(50, 5);