import { Rarity } from "./rarity.enum";
import { Trait } from "./trait.enum";
import { ITrait } from "./trait.interface";

/**
 * Background imports
 */
import background1 from "./background/Background Airforce Blue.png";
import background2 from "./background/Background Bubblegum Pink.png";
import background3 from "./background/Background Dusk Blue.png";
import background4 from "./background/Background Ginger Orange.png";
import background5 from "./background/Background Grape Purple.png";
import background6 from "./background/Background Ice Grey.png";
import background7 from "./background/Background Moss Green.png";
import background8 from "./background/Background Mustard Yellow.png";
import background9 from "./background/Background Olive Green.png";
import background10 from "./background/Background Peppermint Green.png";
import background11 from "./background/Background Steel Blue.png";
import background12 from "./background/Background Tea Green.png";
import background13 from "./background/Background Wine Red.png";

/**
 * Body imports
 */
import body1 from "./body/Body Black.png";
import body2 from "./body/Body Blue.png";
import body3 from "./body/Body Camouflage.png";
import body4 from "./body/Body Diamond.png";
import body5 from "./body/Body Dirty Black.png";
import body6 from "./body/Body Dirty Gold.png";
import body7 from "./body/Body Dirty Grey.png";
import body8 from "./body/Body Dirty White.png";
import body9 from "./body/Body Green.png";
import body10 from "./body/Body Grey.png";
import body11 from "./body/Body Invisible.png";
import body12 from "./body/Body Oak.png";
import body13 from "./body/Body Purple.png";
import body14 from "./body/Body Rainbow.png";
import body15 from "./body/Body Red.png";
import body16 from "./body/Body Rusty.png";
import body17 from "./body/Body Shiny Green.png";
import body18 from "./body/Body Solid Gold.png";
import body19 from "./body/Body Solid Silver.png";
import body20 from "./body/Body White.png";

/**
 * Eyes imports
 */
import eyes1 from "./eyes/Eyes 3d Glasses.png";
import eyes2 from "./eyes/Eyes Angry.png";
import eyes3 from "./eyes/Eyes Aviator Glasses.png";
import eyes4 from "./eyes/Eyes Basic Black.png";
import eyes5 from "./eyes/Eyes Basic Black Lights.png";
import eyes6 from "./eyes/Eyes Basic Green.png";
import eyes7 from "./eyes/Eyes Basic Red.png";
import eyes8 from "./eyes/Eyes Bendy.png";
import eyes9 from "./eyes/Eyes Black Visor.png";
import eyes10 from "./eyes/Eyes Black Visor Lights.png";
import eyes11 from "./eyes/Eyes Broken.png";
import eyes12 from "./eyes/Eyes Dazed.png";
import eyes13 from "./eyes/Eyes Dead.png";
import eyes14 from "./eyes/Eyes Diamonds.png";
import eyes15 from "./eyes/Eyes Futuristic Cop.png";
import eyes16 from "./eyes/Eyes Glass Visor.png";
import eyes17 from "./eyes/Eyes Gold Coin.png";
import eyes18 from "./eyes/Eyes Hollow Green.png";
import eyes19 from "./eyes/Eyes Hollow Red.png";
import eyes20 from "./eyes/Eyes Killer Red.png";
import eyes21 from "./eyes/Eyes Laser.png";
import eyes22 from "./eyes/Eyes P30C.png";
import eyes23 from "./eyes/Eyes Screws.png";
import eyes24 from "./eyes/Eyes Wonky Green.png";
import eyes25 from "./eyes/Eyes Wonky Red.png";
import eyes26 from "./eyes/Eyes Invisible Dead.png";

/**
 * Mouth imports
 */
import mouth1 from "./mouth/Mouth Basic.png";
import mouth2 from "./mouth/Mouth Big Smile.png";
import mouth3 from "./mouth/Mouth Big Teeth.png";
import mouth4 from "./mouth/Mouth Bubblegum.png";
import mouth5 from "./mouth/Mouth Cigar.png";
import mouth6 from "./mouth/Mouth Drool.png";
import mouth7 from "./mouth/Mouth Four Holes.png";
import mouth8 from "./mouth/Mouth Giant Jaw.png";
import mouth9 from "./mouth/Mouth Gold Broken Jaw.png";
import mouth10 from "./mouth/Mouth Gold Teeth.png";
import mouth11 from "./mouth/Mouth Grill.png";
import mouth12 from "./mouth/Mouth Grimace.png";
import mouth13 from "./mouth/Mouth Loudspeaker.png";
import mouth14 from "./mouth/Mouth Metal Plate.png";
import mouth15 from "./mouth/Mouth Pipe.png";
import mouth16 from "./mouth/Mouth Rainbow.png";
import mouth17 from "./mouth/Mouth Rusty Basic.png";
import mouth18 from "./mouth/Mouth Rusty Broken Jaw.png";
import mouth19 from "./mouth/Mouth Rusty Grill.png";
import mouth20 from "./mouth/Mouth Sad.png";
import mouth21 from "./mouth/Mouth Simple.png";
import mouth22 from "./mouth/Mouth Soundwave.png";
import mouth23 from "./mouth/Mouth Zip.png";

/**
 * Antennae imports
 */
import antennae1 from "./antennae/Antennae Broken.png";
import antennae2 from "./antennae/Antennae Dork Funnel.png";
import antennae3 from "./antennae/Antennae Golden Futuristic.png";
import antennae4 from "./antennae/Antennae Golden Smooth.png";
import antennae5 from "./antennae/Antennae Green Button.png";
import antennae6 from "./antennae/Antennae Green Light.png";
import antennae7 from "./antennae/Antennae Horizontal.png";
import antennae8 from "./antennae/Antennae Mini.png";
import antennae9 from "./antennae/Antennae Old-School Radio.png";
import antennae10 from "./antennae/Antennae Red Button.png";
import antennae11 from "./antennae/Antennae Red Hole.png";
import antennae12 from "./antennae/Antennae Red Light.png";
import antennae13 from "./antennae/Antennae Robo Ears.png";
import antennae14 from "./antennae/Antennae Satellite Dish.png";
import antennae15 from "./antennae/Antennae Sporty.png";
import antennae16 from "./antennae/Antennae Sporty Futuristic.png";
import antennae17 from "./antennae/Antennae Worms.png";
import antennae18 from "./antennae/Antennae Construction.png";
/**
 *  Outfit imports
 */
import outfit1 from "./outfit/Outfit Astronaut Spacesuit.png";
import outfit2 from "./outfit/Outfit Black and White Stripy Tee.png";
import outfit3 from "./outfit/Outfit Black Tank Top.png";
import outfit4 from "./outfit/Outfit Blue and White Bikini.png";
import outfit5 from "./outfit/Outfit Business Suit Blue Tie.png";
import outfit6 from "./outfit/Outfit Business Suit Red Tie.png";
import outfit7 from "./outfit/Outfit Captains Jacket.png";
import outfit8 from "./outfit/Outfit Dirty Tank Top.png";
import outfit9 from "./outfit/Outfit Hawaiian Shirt.png";
import outfit10 from "./outfit/Outfit Leather Jacket.png";
import outfit11 from "./outfit/Outfit Lumberjack Shirt Green.png";
import outfit12 from "./outfit/Outfit Lumberjack Shirt Mustard.png";
import outfit13 from "./outfit/Outfit Lumberjack Shirt Red.png";
import outfit14 from "./outfit/Outfit Orange and Blue Stripy Shirt.png";
import outfit15 from "./outfit/Outfit Pink and White Bikini.png";
import outfit16 from "./outfit/Outfit Redneck Dungarees.png";
import outfit17 from "./outfit/Outfit Safari Shirt Brown.png";
import outfit18 from "./outfit/Outfit Safari Shirt Khaki.png";
import outfit19 from "./outfit/Outfit White Tank Top.png";

/**
 * Headgear imports
 */
import headgear1 from "./headgear/Headegear Arrow.png";
import headgear2 from "./headgear/Headegear Astronaut Helmet.png";
import headgear3 from "./headgear/Headegear Bandage.png";
import headgear4 from "./headgear/Headegear Basic Head Fin.png";
import headgear5 from "./headgear/Headegear Beanie Grape.png";
import headgear6 from "./headgear/Headegear Beanie Green.png";
import headgear7 from "./headgear/Headegear Bird Nest.png";
import headgear8 from "./headgear/Headegear Black Cap.png";
import headgear9 from "./headgear/Headegear Captains Hat.png";
import headgear10 from "./headgear/Headegear Cloud.png";
import headgear11 from "./headgear/Headegear Cowboy Hat.png";
import headgear12 from "./headgear/Headegear Cowboy Hat Black.png";
import headgear13 from "./headgear/Headegear Farmers Hat.png";
import headgear14 from "./headgear/Headegear Gold Crown.png";
import headgear15 from "./headgear/Headegear Gold Head Fin.png";
import headgear16 from "./headgear/Headegear Halo.png";
import headgear17 from "./headgear/Headegear Red Cap.png";
import headgear18 from "./headgear/Headegear RRCC Cap.png";
import headgear19 from "./headgear/Headegear Rusty Astronaut Helmet.png";
import headgear20 from "./headgear/Headegear Safari Hat.png";
import headgear21 from "./headgear/Headegear Silver Head Fin.png";
import headgear22 from "./headgear/Headegear Unicorn Horn.png";
import headgear23 from "./headgear/Headegear Viking Helm.png";

/**
 * Accessories imports
 */
import accessorie1 from "./accessories/Accessories Beer.png";
import accessorie2 from "./accessories/Accessories Bow & Arrow.png";
import accessorie3 from "./accessories/Accessories Fishing Net.png";
import accessorie4 from "./accessories/Accessories Hobo Stick.png";
import accessorie5 from "./accessories/Accessories Laser Hand.png";
import accessorie6 from "./accessories/Accessories Toasted Marshmallow.png";
import accessorie8 from "./accessories/Accessories Sputnik.png";
import accessorie7 from "./accessories/Accessories Invisible Hobo Stick.png";

/**
 * Buttons imports
 */
import button1 from "./buttons/Buttons Arm Strips Ice.png";
import button2 from "./buttons/Buttons Arm Strips.png";
import button3 from "./buttons/Buttons Body and Arms.png";
import button4 from "./buttons/Buttons Body Basic.png";
import button5 from "./buttons/Buttons Full Body.png";

/**
 * Face imports
 */
import face1 from "./face/Face Oil Leak.png";
import face2 from "./face/Face Plaster.png";
import face3 from "./face/Face Rainbow Oil Leak.png";
import face4 from "./face/Face Tattoo.png";

/**
 * Special imports
 */

import special1 from "./special/Special Bullet Belt.png";
import special2 from "./special/Special Rainbow Braces.png";

/**
 * Bonus imports
 */
import bonus1 from "./bonus/Microwave Burger.png";
import bonus2 from "./bonus/NFT-L.png";
export const backgroundsConstant: ITrait[] = [
  {
    imageUrl: background1,
    trait: Trait.background,
    rarity: Rarity.common,
    label: "Airforce Blue",
  },
  {
    imageUrl: background3,
    trait: Trait.background,
    rarity: Rarity.common,
    label: "Dusk Blue",
  },
  {
    imageUrl: background4,
    trait: Trait.background,
    rarity: Rarity.common,
    label: "Ginger Orange",
  },
  {
    imageUrl: background5,
    trait: Trait.background,
    rarity: Rarity.common,
    label: "Grape Purple",
  },
  {
    imageUrl: background6,
    trait: Trait.background,
    rarity: Rarity.common,
    label: "Ice Grey",
  },
  {
    imageUrl: background7,
    trait: Trait.background,
    rarity: Rarity.common,
    label: "Moss Green",
  },
  {
    imageUrl: background8,
    trait: Trait.background,
    rarity: Rarity.common,
    label: "Mustard Yellow",
  },
  {
    imageUrl: background9,
    trait: Trait.background,
    rarity: Rarity.common,
    label: "Olive Green",
  },
  {
    imageUrl: background10,
    trait: Trait.background,
    rarity: Rarity.common,
    label: "Peppermint Green",
  },
  {
    imageUrl: background11,
    trait: Trait.background,
    rarity: Rarity.common,
    label: "Steel Blue",
  },
  {
    imageUrl: background12,
    trait: Trait.background,
    rarity: Rarity.common,
    label: "Tea Green",
  },
  {
    imageUrl: background13,
    trait: Trait.background,
    rarity: Rarity.common,
    label: "Wine Red",
  },
  {
    imageUrl: background2,
    trait: Trait.background,
    rarity: Rarity.legendary,
    label: "Bubblegum Pink",
  },
];

export const bodyConstants: ITrait[] = [
  {
    imageUrl: body1,
    trait: Trait.bodyColor,
    rarity: Rarity.common,
    label: "Black",
  },
  {
    imageUrl: body2,
    trait: Trait.bodyColor,
    rarity: Rarity.common,
    label: "Blue",
  },
  {
    imageUrl: body5,
    trait: Trait.bodyColor,
    rarity: Rarity.common,
    label: "Dirty Black",
  },
  {
    imageUrl: body6,
    trait: Trait.bodyColor,
    rarity: Rarity.common,
    label: "Dirty Gold",
  },
  {
    imageUrl: body7,
    trait: Trait.bodyColor,
    rarity: Rarity.common,
    label: "Dirty Gray",
  },
  {
    imageUrl: body8,
    trait: Trait.bodyColor,
    rarity: Rarity.common,
    label: "Dirty White",
  },
  {
    imageUrl: body9,
    trait: Trait.bodyColor,
    rarity: Rarity.common,
    label: "Green",
  },
  {
    imageUrl: body10,
    trait: Trait.bodyColor,
    rarity: Rarity.common,
    label: "Gray",
  },
  {
    imageUrl: body20,
    trait: Trait.bodyColor,
    rarity: Rarity.common,
    label: "White",
  },
  {
    imageUrl: body13,
    trait: Trait.bodyColor,
    rarity: Rarity.common,
    label: "Purple",
  },
  {
    imageUrl: body15,
    trait: Trait.bodyColor,
    rarity: Rarity.common,
    label: "Red",
  },
  {
    imageUrl: body12,
    trait: Trait.bodyColor,
    rarity: Rarity.uncommon,
    label: "Oak",
  },
  {
    imageUrl: body16,
    trait: Trait.bodyColor,
    rarity: Rarity.uncommon,
    label: "Rusty",
  },
  {
    imageUrl: body17,
    trait: Trait.bodyColor,
    rarity: Rarity.uncommon,
    label: "Shiny Green",
  },
  {
    imageUrl: body19,
    trait: Trait.bodyColor,
    rarity: Rarity.uncommon,
    label: "Solid Silver",
  },
  {
    imageUrl: body3,
    trait: Trait.bodyColor,
    rarity: Rarity.rare,
    label: "Camouflage",
  },
  {
    imageUrl: body4,
    trait: Trait.bodyColor,
    rarity: Rarity.rare,
    label: "Diamond",
  },

  {
    imageUrl: body14,
    trait: Trait.bodyColor,
    rarity: Rarity.epic,
    label: "Rainbow",
  },

  {
    imageUrl: body18,
    trait: Trait.bodyColor,
    rarity: Rarity.epic,
    label: "Solid Gold",
  },
  {
    imageUrl: body11,
    trait: Trait.bodyColor,
    rarity: Rarity.legendary,
    label: "Invisible",
  },
];
export const eyesConstants: ITrait[] = [
  {
    imageUrl: eyes10,
    trait: Trait.eyes,
    rarity: Rarity.common,
    label: "Black Visor Lights",
  },
  {
    imageUrl: eyes13,
    trait: Trait.eyes,
    rarity: Rarity.common,
    label: "Dead",
  },
  {
    imageUrl: eyes18,
    trait: Trait.eyes,
    rarity: Rarity.common,
    label: "Hollow Green",
  },
  {
    imageUrl: eyes19,
    trait: Trait.eyes,
    rarity: Rarity.common,
    label: "Hollow Red",
  },
  {
    imageUrl: eyes4,
    trait: Trait.eyes,
    rarity: Rarity.common,
    label: "Basic Black",
  },
  {
    imageUrl: eyes24,
    trait: Trait.eyes,
    rarity: Rarity.common,
    label: "Wonky Green",
  },
  {
    imageUrl: eyes25,
    trait: Trait.eyes,
    rarity: Rarity.common,
    label: "Wonky Red",
  },
  {
    imageUrl: eyes26,
    trait: Trait.eyes,
    rarity: Rarity.common,
    label: "Invisible Dead",
  },
  {
    imageUrl: eyes5,
    trait: Trait.eyes,
    rarity: Rarity.common,
    label: "Basic Black Lights",
  },
  {
    imageUrl: eyes6,
    trait: Trait.eyes,
    rarity: Rarity.common,
    label: "Basic Green",
  },
  {
    imageUrl: eyes7,
    trait: Trait.eyes,
    rarity: Rarity.common,
    label: "Basic Red",
  },

  {
    imageUrl: eyes2,
    trait: Trait.eyes,
    rarity: Rarity.uncommon,
    label: "Angry",
  },
  {
    imageUrl: eyes3,
    trait: Trait.eyes,
    rarity: Rarity.uncommon,
    label: "Aviator Glasses",
  },

  {
    imageUrl: eyes9,
    trait: Trait.eyes,
    rarity: Rarity.uncommon,
    label: "Black Visor",
  },

  {
    imageUrl: eyes11,
    trait: Trait.eyes,
    rarity: Rarity.uncommon,
    label: "Broken",
  },
  {
    imageUrl: eyes12,
    trait: Trait.eyes,
    rarity: Rarity.uncommon,
    label: "Dazed",
  },

  {
    imageUrl: eyes15,
    trait: Trait.eyes,
    rarity: Rarity.uncommon,
    label: "Futuristic Cop",
  },
  {
    imageUrl: eyes22,
    trait: Trait.eyes,
    rarity: Rarity.uncommon,
    label: "P30C",
  },
  {
    imageUrl: eyes23,
    trait: Trait.eyes,
    rarity: Rarity.uncommon,
    label: "Screws",
  },
  {
    imageUrl: eyes20,
    trait: Trait.eyes,
    rarity: Rarity.uncommon,
    label: "Killer Red",
  },
  {
    imageUrl: eyes16,
    trait: Trait.eyes,
    rarity: Rarity.rare,
    label: "Glass Visor",
  },
  {
    imageUrl: eyes8,
    trait: Trait.eyes,
    rarity: Rarity.rare,
    label: "Bendy",
  },
  {
    imageUrl: eyes1,
    trait: Trait.eyes,
    rarity: Rarity.rare,
    label: "3D Glasses",
  },
  {
    imageUrl: eyes17,
    trait: Trait.eyes,
    rarity: Rarity.epic,
    label: "Gold Coin",
  },
  {
    imageUrl: eyes14,
    trait: Trait.eyes,
    rarity: Rarity.epic,
    label: "Diamonds",
  },

  {
    imageUrl: eyes21,
    trait: Trait.eyes,
    rarity: Rarity.epic,
    label: "Laser",
  },
];
export const mouthConstants: ITrait[] = [
  {
    imageUrl: mouth1,
    trait: Trait.mouth,
    rarity: Rarity.common,
    label: "Basic",
  },
  {
    imageUrl: mouth7,
    trait: Trait.mouth,
    rarity: Rarity.common,
    label: "Four Holes",
  },
  {
    imageUrl: mouth8,
    trait: Trait.mouth,
    rarity: Rarity.common,
    label: "Giant Jaw",
  },
  {
    imageUrl: mouth2,
    trait: Trait.mouth,
    rarity: Rarity.common,
    label: "Big Smile",
  },
  {
    imageUrl: mouth3,
    trait: Trait.mouth,
    rarity: Rarity.common,
    label: "Big Teeth",
  },
  {
    imageUrl: mouth11,
    trait: Trait.mouth,
    rarity: Rarity.common,
    label: "Grill",
  },
  {
    imageUrl: mouth21,
    trait: Trait.mouth,
    rarity: Rarity.common,
    label: "Simple",
  },
  {
    imageUrl: mouth22,
    trait: Trait.mouth,
    rarity: Rarity.common,
    label: "Soundwave",
  },
  {
    imageUrl: mouth12,
    trait: Trait.mouth,
    rarity: Rarity.common,
    label: "Grimace",
  },
  {
    imageUrl: mouth13,
    trait: Trait.mouth,
    rarity: Rarity.common,
    label: "Loudspeaker",
  },

  {
    imageUrl: mouth5,
    trait: Trait.mouth,
    rarity: Rarity.uncommon,
    label: "Cigar",
  },
  {
    imageUrl: mouth17,
    trait: Trait.mouth,
    rarity: Rarity.uncommon,
    label: "Rusty Basic",
  },
  {
    imageUrl: mouth18,
    trait: Trait.mouth,
    rarity: Rarity.uncommon,
    label: "Rusty Broken Jaw",
  },
  {
    imageUrl: mouth19,
    trait: Trait.mouth,
    rarity: Rarity.uncommon,
    label: "Rusty Grill",
  },
  {
    imageUrl: mouth20,
    trait: Trait.mouth,
    rarity: Rarity.uncommon,
    label: "Sad",
  },
  {
    imageUrl: mouth14,
    trait: Trait.mouth,
    rarity: Rarity.uncommon,
    label: "Metal Plate",
  },
  {
    imageUrl: mouth23,
    trait: Trait.mouth,
    rarity: Rarity.uncommon,
    label: "Zip",
  },
  {
    imageUrl: mouth6,
    trait: Trait.mouth,
    rarity: Rarity.uncommon,
    label: "Drool",
  },

  {
    imageUrl: mouth9,
    trait: Trait.mouth,
    rarity: Rarity.rare,
    label: "Gold Broken Jaw",
  },
  {
    imageUrl: mouth4,
    trait: Trait.mouth,
    rarity: Rarity.rare,
    label: "Bubblegum",
  },
  {
    imageUrl: mouth10,
    trait: Trait.mouth,
    rarity: Rarity.rare,
    label: "Gold Teeth",
  },

  {
    imageUrl: mouth15,
    trait: Trait.mouth,
    rarity: Rarity.rare,
    label: "Pipe",
  },
  {
    imageUrl: mouth16,
    trait: Trait.mouth,
    rarity: Rarity.epic,
    label: "Rainbow Puke",
  },
];

export const antennaeConstants: ITrait[] = [
  {
    imageUrl: antennae5,
    trait: Trait.antenna,
    rarity: Rarity.common,
    label: "Green Button",
  },
  {
    imageUrl: antennae6,
    trait: Trait.antenna,
    rarity: Rarity.common,
    label: "Green Light",
  },
  {
    imageUrl: antennae7,
    trait: Trait.antenna,
    rarity: Rarity.common,
    label: "Horizontal",
  },
  {
    imageUrl: antennae2,
    trait: Trait.antenna,
    rarity: Rarity.common,
    label: "Dork Funnel",
  },
  {
    imageUrl: antennae10,
    trait: Trait.antenna,
    rarity: Rarity.common,
    label: "Red Button",
  },
  {
    imageUrl: antennae11,
    trait: Trait.antenna,
    rarity: Rarity.common,
    label: "Red Hole",
  },
  {
    imageUrl: antennae12,
    trait: Trait.antenna,
    rarity: Rarity.common,
    label: "Red Light",
  },
  {
    imageUrl: antennae13,
    trait: Trait.antenna,
    rarity: Rarity.common,
    label: "Robo Ears",
  },
  {
    imageUrl: antennae8,
    trait: Trait.antenna,
    rarity: Rarity.uncommon,
    label: "Mini",
  },
  {
    imageUrl: antennae1,
    trait: Trait.antenna,
    rarity: Rarity.uncommon,
    label: "Broken",
  },
  {
    imageUrl: antennae9,
    trait: Trait.antenna,
    rarity: Rarity.uncommon,
    label: "Old-School Radio",
  },
  {
    imageUrl: antennae15,
    trait: Trait.antenna,
    rarity: Rarity.uncommon,
    label: "Sporty",
  },
  {
    imageUrl: antennae16,
    trait: Trait.antenna,
    rarity: Rarity.uncommon,
    label: "Sporty Futuristic",
  },
  {
    imageUrl: antennae18,
    trait: Trait.antenna,
    rarity: Rarity.uncommon,
    label: "Construction",
  },

  {
    imageUrl: antennae4,
    trait: Trait.antenna,
    rarity: Rarity.rare,
    label: "Golden Smooth",
  },
  {
    imageUrl: antennae14,
    trait: Trait.antenna,
    rarity: Rarity.rare,
    label: "Satellite Dish",
  },

  {
    imageUrl: antennae17,
    trait: Trait.antenna,
    rarity: Rarity.rare,
    label: "Worms",
  },
  {
    imageUrl: antennae3,
    trait: Trait.antenna,
    rarity: Rarity.epic,
    label: "Golden Futuristic",
  },
];

export const outfitsConstants: ITrait[] = [
  {
    imageUrl: outfit2,
    trait: Trait.outfit,
    rarity: Rarity.common,
    label: "Balck and White Stripy Tee",
  },
  {
    imageUrl: outfit17,
    trait: Trait.outfit,
    rarity: Rarity.common,
    label: "Safari Shirt Brown",
  },
  {
    imageUrl: outfit18,
    trait: Trait.outfit,
    rarity: Rarity.common,
    label: "Safari Shirt Khaki",
  },
  {
    imageUrl: outfit19,
    trait: Trait.outfit,
    rarity: Rarity.common,
    label: "White Tank Top",
  },
  {
    imageUrl: outfit3,
    trait: Trait.outfit,
    rarity: Rarity.common,
    label: "Black Tank Top",
  },

  {
    imageUrl: outfit8,
    trait: Trait.outfit,
    rarity: Rarity.common,
    label: "Dirty Tank Top",
  },
  {
    imageUrl: outfit14,
    trait: Trait.outfit,
    rarity: Rarity.common,
    label: "Orange and Blue Stripy Shirt",
  },
  {
    imageUrl: outfit9,
    trait: Trait.outfit,
    rarity: Rarity.uncommon,
    label: "Hawaiian Shirt",
  },

  {
    imageUrl: outfit11,
    trait: Trait.outfit,
    rarity: Rarity.uncommon,
    label: "Lumberjack Shirt Green",
  },
  {
    imageUrl: outfit12,
    trait: Trait.outfit,
    rarity: Rarity.uncommon,
    label: "Lumberjack Shirt Mustard",
  },
  {
    imageUrl: outfit13,
    trait: Trait.outfit,
    rarity: Rarity.uncommon,
    label: "Lumberjack Shirt Red",
  },
  {
    imageUrl: outfit16,
    trait: Trait.outfit,
    rarity: Rarity.uncommon,
    label: "Redneck Dungarees",
  },
  {
    imageUrl: outfit15,
    trait: Trait.outfit,
    rarity: Rarity.rare,
    label: "Pink and White Bikini",
  },
  {
    imageUrl: outfit4,
    trait: Trait.outfit,
    rarity: Rarity.rare,
    label: "Blue and White Bikini",
  },
  {
    imageUrl: outfit10,
    trait: Trait.outfit,
    rarity: Rarity.rare,
    label: "Leather Jacket",
  },
  {
    imageUrl: outfit5,
    trait: Trait.outfit,
    rarity: Rarity.rare,
    label: "Business Suit Blue Tie",
  },
  {
    imageUrl: outfit6,
    trait: Trait.outfit,
    rarity: Rarity.rare,
    label: "Business Suit Red Tie",
  },
  {
    imageUrl: outfit7,
    trait: Trait.outfit,
    rarity: Rarity.rare,
    label: "Captains Jacket",
  },

  {
    imageUrl: outfit1,
    trait: Trait.outfit,
    rarity: Rarity.epic,
    label: "Astronaut Spacesuit",
  },
];

export const headgearConstants: ITrait[] = [
  {
    imageUrl: headgear4,
    trait: Trait.headgear,
    rarity: Rarity.common,
    label: "Basic Head Fin",
  },
  {
    imageUrl: headgear5,
    trait: Trait.headgear,
    rarity: Rarity.common,
    label: "Beanie Grape",
  },
  {
    imageUrl: headgear6,
    trait: Trait.headgear,
    rarity: Rarity.common,
    label: "Beanie Green",
  },
  {
    imageUrl: headgear8,
    trait: Trait.headgear,
    rarity: Rarity.common,
    label: "Black Cap",
  },
  {
    imageUrl: headgear11,
    trait: Trait.headgear,
    rarity: Rarity.common,
    label: "Cowboy Hat",
  },
  {
    imageUrl: headgear17,
    trait: Trait.headgear,
    rarity: Rarity.common,
    label: "Red Cap",
  },
  {
    imageUrl: headgear19,
    trait: Trait.headgear,
    rarity: Rarity.common,
    label: "Rusty Astronaut Helmet",
  },
  {
    imageUrl: headgear12,
    trait: Trait.headgear,
    rarity: Rarity.uncommon,
    label: "Cowboy Hat Black",
  },
  {
    imageUrl: headgear13,
    trait: Trait.headgear,
    rarity: Rarity.uncommon,
    label: "Farmers Hat",
  },
  {
    imageUrl: headgear20,
    trait: Trait.headgear,
    rarity: Rarity.uncommon,
    label: "Safari Hat",
  },
  {
    imageUrl: headgear2,
    trait: Trait.headgear,
    rarity: Rarity.rare,
    label: "Astronaut Helmet",
  },
  {
    imageUrl: headgear3,
    trait: Trait.headgear,
    rarity: Rarity.rare,
    label: "Bandage",
  },

  {
    imageUrl: headgear7,
    trait: Trait.headgear,
    rarity: Rarity.rare,
    label: "Bird Nest",
  },
  {
    imageUrl: headgear10,
    trait: Trait.headgear,
    rarity: Rarity.rare,
    label: "Cloud",
  },

  {
    imageUrl: headgear18,
    trait: Trait.headgear,
    rarity: Rarity.rare,
    label: "RRCC Cap",
  },

  {
    imageUrl: headgear21,
    trait: Trait.headgear,
    rarity: Rarity.rare,
    label: "Silver Head Fin",
  },
  {
    imageUrl: headgear22,
    trait: Trait.headgear,
    rarity: Rarity.rare,
    label: "Unicorn Horn",
  },
  {
    imageUrl: headgear23,
    trait: Trait.headgear,
    rarity: Rarity.epic,
    label: "Viking Helm",
  },
  {
    imageUrl: headgear1,
    trait: Trait.headgear,
    rarity: Rarity.epic,
    label: "Arrow",
  },
  {
    imageUrl: headgear14,
    trait: Trait.headgear,
    rarity: Rarity.epic,
    label: "Gold Crown",
  },
  {
    imageUrl: headgear15,
    trait: Trait.headgear,
    rarity: Rarity.epic,
    label: "Gold Head Fin",
  },
  {
    imageUrl: headgear9,
    trait: Trait.headgear,
    rarity: Rarity.epic,
    label: "Captains Hat",
  },
  {
    imageUrl: headgear16,
    trait: Trait.headgear,
    rarity: Rarity.epic,
    label: "Halo",
  },
];

export const accesoriesConstants: ITrait[] = [
  {
    imageUrl: accessorie3,
    trait: Trait.accessories,
    rarity: Rarity.uncommon,
    label: "Fishing Net",
  },
  {
    imageUrl: accessorie1,
    trait: Trait.accessories,
    rarity: Rarity.rare,
    label: "Beer",
  },
  {
    imageUrl: accessorie4,
    trait: Trait.accessories,
    rarity: Rarity.rare,
    label: "Hobo Stick",
  },
  {
    imageUrl: accessorie6,
    trait: Trait.accessories,
    rarity: Rarity.rare,
    label: "Toasted Marshmallow",
  },
  {
    imageUrl: accessorie8,
    trait: Trait.accessories,
    rarity: Rarity.rare,
    label: "Sputnik",
  },
  {
    imageUrl: accessorie5,
    trait: Trait.accessories,
    rarity: Rarity.epic,
    label: "Laser Hand",
  },
  {
    imageUrl: accessorie2,
    trait: Trait.accessories,
    rarity: Rarity.epic,
    label: "Bow & Arrow",
  },

  {
    imageUrl: accessorie7,
    trait: Trait.accessories,
    rarity: Rarity.legendary,
    label: "Invisible Hobo Stick",
  },
];

export const buttonConstants: ITrait[] = [
  {
    imageUrl: button2,
    trait: Trait.button,
    rarity: Rarity.common,
    label: "Arm Strips",
  },

  {
    imageUrl: button4,
    trait: Trait.button,
    rarity: Rarity.uncommon,
    label: "Body Basic",
  },
  {
    imageUrl: button3,
    trait: Trait.button,
    rarity: Rarity.rare,
    label: "Body and Arms",
  },
  {
    imageUrl: button5,
    trait: Trait.button,
    rarity: Rarity.rare,
    label: "Full Body",
  },
  {
    imageUrl: button1,
    trait: Trait.button,
    rarity: Rarity.epic,
    label: "Arm Strips Ice",
  },
];

export const faceConstants: ITrait[] = [
  {
    imageUrl: face1,
    trait: Trait.face,
    rarity: Rarity.rare,
    label: "Oil Leak",
  },
  {
    imageUrl: face4,
    trait: Trait.face,
    rarity: Rarity.rare,
    label: "Tattoo",
  },
  {
    imageUrl: face2,
    trait: Trait.face,
    rarity: Rarity.epic,
    label: "Plaster",
  },
  {
    imageUrl: face3,
    trait: Trait.face,
    rarity: Rarity.legendary,
    label: "Rainbow Oil Leak",
  },
];

export const specialConstants: ITrait[] = [
  {
    imageUrl: special1,
    trait: Trait.special,
    rarity: Rarity.rare,
    label: "Bullet Belt",
  },
  {
    imageUrl: special2,
    trait: Trait.special,
    rarity: Rarity.rare,
    label: "Rainbow Braces",
  },
];

export const bonusConstants: ITrait[] = [
  {
    imageUrl: bonus2,
    trait: Trait.bonus,
    rarity: Rarity.epic,
    label: "NFT-L",
  },
  {
    imageUrl: bonus1,
    trait: Trait.bonus,
    rarity: Rarity.legendary,
    label: "Microwave Burger",
  },
];
