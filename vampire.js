class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberFromOriginal = 0;
    let currentVampire = this;
    while(currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberFromOriginal++;
    }
    return numberFromOriginal;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    const thisFromOriginal = this.numberOfVampiresFromOriginal;
    const vampireFromOriginal = vampire.numberOfVampiresFromOriginal;
    return (thisFromOriginal < vampireFromOriginal);
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

    // get an array containing path to root fo thisVampire
    let currentVampire = this;
    let thisVampirePath = [];
    while(currentVampire.creator) {
      thisVampirePath.push(currentVampire);
      currentVampire = currentVampire.creator;
    }
    thisVampirePath.push(currentVampire); // final push to add last vampire

    // get an array containing path to roo for vampire
    currentVampire = vampire;
    let vampireVampirePath = [];
    while(currentVampire.creator) {
      vampireVampirePath.push(currentVampire);
      currentVampire = currentVampire.creator;
    }
    vampireVampirePath.push(currentVampire); // final push to add last vampire

    // nested for loops to determine when along the path the names are the same
    // this is the closestCommonAncestor, and the function returns that vampire
    for (let mainVampire of thisVampirePath) {
      for (let testVampire of vampireVampirePath) {
        if (mainVampire.name === testVampire.name) {
          return mainVampire;
        }
      }
    }

  }
}

module.exports = Vampire;

