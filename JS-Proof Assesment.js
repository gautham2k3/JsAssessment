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
const arr = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name,_power,_health,_ability,) {
    const metaData = {
        name: _name,
        power: _power,
        health: _health,
        ability: _ability
    };
    arr.push(metaData);
    console.log("Minted : "+_name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<arr.length;i++)
    {
        console.log("\nName    : "+arr[i].name);
        console.log("Power   : "+arr[i].power);
        console.log("Health  : "+arr[i].health);
        console.log("Ability : "+arr[i].ability);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal Minted NFTs : "+arr.length);
}

// call your functions below this line
mintNFT("PowerHouse",400,30,"BUFF");
mintNFT("SuperGenius",300,40,"REPAIR");
mintNFT("PSYCHIC",200,40,"MIND READ");
mintNFT("ELEMENTAL",400,30,"FIREBALL");

listNFTs();

getTotalSupply();
