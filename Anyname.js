/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
 const NFTs = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_myname, _myColor, _dressType, _bling) {
const NFT = {
"name" : _myname ,
"myColor" : _myColor,
"dressType" : _dressType,
"bling" : _bling
}
NFTs.push(NFT);
console.log("Minted : " + _myname);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for(let i=0; i<NFTs.length ; i+=1){
console.log("\n ID : \t\t" + (i+1));
console.log("\n MyName : \t\t " + NFTs[i].myname);
console.log("\n Mycolor : \t" + NFTs[i].myColor);
console.log("\n DressType : " + NFTs[i].dressType);
console.log("\n Bling : \t\t" + NFTs[i].bling);

}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("\n" + NFTs.length);

}

// call your functions below this line
mintNFT("Mani" , "White" , "Shirt" , " SilverChain");
mintNFT("Mohith" , "Red" , "Short" , " GoldChain");
mintNFT("Manoj" , "Black" , "T-Shirt" , " BronzChain");
mintNFT("Manas" , "Brown" , "TrackPant" , " SilverChain");

listNFTs();
getTotalSupply();
