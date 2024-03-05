class CryptoWatchList {
    constructor() {
      this.watchList = [];
    }
  
    addToWatchList(crypto) {
      if (!this.watchList.includes(crypto)) {
        this.watchList.push(crypto);
        console.log(`${crypto} added to the watch list.`);
      } else {
        console.log(`${crypto} is already in the watch lists.`);
      }
    }
  
    removeFromWatchList(crypto) {
      const index = this.watchList.indexOf(crypto);
      if (index !== -1) {
        this.watchList.splice(index, 1);
        console.log(`${crypto} removed from the watch list.`);
      } else {
        console.log(`${crypto} is not in the watch list.`);
      }
    }
  
    displayWatchList() {
      console.log('Crypto Watch List:');
      if (this.watchList.length === 0) {
        console.log('The watch list is empty.');
      } else {
        this.watchList.forEach((crypto, index) => {
          console.log(`${index + 1}. ${crypto}`);
        });
      }
    }
  }
  
  // Example usage
  const cryptoWatchList = new CryptoWatchList();
  
  cryptoWatchList.addToWatchList('Bitcoin');
  cryptoWatchList.addToWatchList('Ethereum');
  cryptoWatchList.addToWatchList('Ripple');
  
  cryptoWatchList.displayWatchList();
  
  cryptoWatchList.removeFromWatchList('Ethereum');
  
  cryptoWatchList.displayWatchList();
  