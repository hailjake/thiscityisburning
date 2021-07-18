import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
})
export class ArtistsComponent implements OnInit {


  public artists = [
    {
      name: "Emmure",
      record: "The Complete Guide To Needlework",
      release: "2007",
      img: "emmure.jpg",
      cd: "emmurecd.jpg",
      bio: "Emmure is an American metalcore band formed in 2003. Originally based in New Fairfield, Connecticut, before moving to Queens, New York, the group has released eight albums, with their first public release being a 2006 EP entitled The Complete Guide to Needlework."
    },
    {
      name: "Carnifex",
      record: "Dead In My Arms",
      release: "2007",
      img: "carnifex.jpg",
      cd: "carnifexcd.jpg",
      bio: "After their release of Love Lies in Ashes, Carnifex was signed to underground label This City Is Burning Records in March 2007, and they recorded their debut full length Dead in My Arms."
    },
    {
      name: "Stick To Your Guns",
      record: "For What Its Worth",
      release: "2006",
      img: "styg.jpg",
      cd: "stygcd.jpg",
      bio: "Their first studio album For What It's Worth, later released on This City Is Burning Records. The album includes one of their best known songs, This Is More, and its release launched them to wider prominence, while the members were still in high school. Upon graduation, they went on tour throughout the United States."
    },  
    {
      name: "Elysia",
      record: "Masochist (original pressing)",
      release: "2007",
      img: "elysia.jpg",
      cd: "elysiacd.jpg",
      bio: "After releasing two demos under the band name Elysium's Revenge in 2003, the band officially changed their name to Elysia before releasing two demo EPs ('Killing Grounds and 'Tease Her, Please Her, Stick Her In The Freezer and two full-length albums Masochist."
    },        
    {
      name: "Armor For The Broken",
      record: "A Collision In Slow Motion ",
      release: "2007",
      img: "armorforthebroken.jpg",
      cd: "armorforthebrokencd.gif",
      bio: "Armor For The Broken was a post-hardcore band from NH/MA. Earlier this Summer they began working with The Artery Foundation mgmt (The Devil Wears Prada, Attack Attack, Emarosa)."
    }, 
    {
      name: "T. mills",
      record: "Finders Keepers EP",
      release: "2009 (uprising/tcib)",
      img: "tmills.jpg",
      cd: "tmillscd.jpg",
      bio: "At the age of 17, Mills began writing songs in his own bedroom, using music's software such as Apple's Garage Band. At the age of 18, Mills began posting some of his music on his Myspace page. In 2008, Mills signed a deal to the indie record label Uprising /This City Is Burning Records."
    }, 
    {
      name: "Underneath The Gun",
      record: "The Awakening",
      release: "2006",
      img: "underneaththegun.jpg",
      cd: "utgcd.jpg",
      bio: "Underneath the Gun started in 2004 when the members were 12 years old.[1] In 2006, the band released their debut EP, You Prepare The Bodies, I'll Get The Ice, via This City is Burning Records. Months later, the band released The Awakening, their debut album."
    }, 
    {
      name: "Unite & Conquer",
      record: "Self Titled",
      release: "2007",
      img: "uniteandconquer.jpg",
      cd: "unitecd.jpg",
      bio: "Unite & Conquer is a 5 piece Hardcore band from Orange County that brings shear brutality and energy to the stage. They're a mix of xDEATHSTARx and Bury Your Dead with a dash of Hatebreed, serve on the rocks, drink it slow and it always goes down smooth."
    }, 
    {
      name: "Annotations Of An Autopsy",
      record: "Welcome To Sludge City",
      release: "2007",
      img: "annotations.jpg",
      cd: "annotationscd.jpg",
      bio: "In 2007 Annotations released their debut ep ‘Welcome to sludge city’ which instantly made a mark in the online music scene finding its way to peoples ears throughout the world and off the back off it Annotations formed a huge fan base both this side of the Atlantic and across it."
    }, 
    {
      name: "The Final Burden",
      record: "Self Titled",
      release: "2003",
      img: "thefinalburden.jpg",
      cd: "thefinalburdencd.jpg",
      bio: "After a successful EP on this city is burning records and tons of shows and tours with the likes of SCARS OF TOMORROW, CONVERGE, DYING FETUS, PREMONITIONS OF WAR, BURY YOUR DEAD, BETWEEN THE BURIED AND ME, and SINAI BEACH"
    }, 
    {
      name: "Her Demise My Rise",
      record: "The Takeover",
      release: "2009 (uprising/tcib)",
      img: "herdemisemyrise.webp",
      cd: "hdmrcd.jpg",
      bio: "Inland Empire Deathcore / Metalcore band with ex member jake anderson from carnifex her demise released their debut record the takeover through this city is burning records."
    }, 
    {
      name: "Broadway",
      record: "Kingdoms",
      release: "2009 (uprising/tcib)",
      img: "broadway.jpg",
      cd: "broadwaycd.jpg",
      bio: "Broadway released their first full-length studio album. It was entitled Kingdoms through Uprising Records. The album features two high-profiled artists of other post-hardcore bands. Lead vocalist Jonny Craig of Dance Gavin Dance is featured on the track Don't Jump The Shark Before You Save The Whale, The other featured artist, Craig Owens of Chiodos, appears on the track Same Thing We Do Everyday Pinky."
    }, 
  ];

  constructor() { }

  ngOnInit() {
  }

}
