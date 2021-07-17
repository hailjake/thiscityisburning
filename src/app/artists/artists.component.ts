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
      bio: "Emmure is an American metalcore band formed in 2003. Originally based in New Fairfield, Connecticut, before moving to Queens, New York, the group has released eight albums, with their first public release being a 2006 EP entitled The Complete Guide to Needlework."
    },
    {
      name: "Carnifex",
      record: "Dead In My Arms",
      release: "2007",
      img: "carnifex.jpg",
      bio: "Emmure is an American metalcore band formed in 2003. Originally based in New Fairfield, Connecticut, before moving to Queens, New York, the group has released eight albums, with their first public release being a 2006 EP entitled The Complete Guide to Needlework."
    },
    {
      name: "Stick To Your Guns",
      record: "For What Its Worth",
      release: "2006",
      img: "styg.jpg",
      bio: "Emmure is an American metalcore band formed in 2003. Originally based in New Fairfield, Connecticut, before moving to Queens, New York, the group has released eight albums, with their first public release being a 2006 EP entitled The Complete Guide to Needlework."
    },     
    {
      name: "Armor For The Broken",
      record: "A Collision In Slow Motion ",
      release: "2007",
      img: "armorforthebroken.jpg",
      bio: "Emmure is an American metalcore band formed in 2003. Originally based in New Fairfield, Connecticut, before moving to Queens, New York, the group has released eight albums, with their first public release being a 2006 EP entitled The Complete Guide to Needlework."
    }, 
    {
      name: "T. mills",
      record: "Finders Keepers EP ",
      release: "2009",
      img: "tmills.jpg",
      bio: "Emmure is an American metalcore band formed in 2003. Originally based in New Fairfield, Connecticut, before moving to Queens, New York, the group has released eight albums, with their first public release being a 2006 EP entitled The Complete Guide to Needlework."
    }, 
    {
      name: "Underneath The Gun",
      record: "The Awakening",
      release: "2006",
      img: "underneaththegun.jpg",
      bio: "Emmure is an American metalcore band formed in 2003. Originally based in New Fairfield, Connecticut, before moving to Queens, New York, the group has released eight albums, with their first public release being a 2006 EP entitled The Complete Guide to Needlework."
    }, 
    {
      name: "Unite & Conquer",
      record: "Self Titled",
      release: "2007",
      img: "uniteandconquer.jpg",
      bio: "Emmure is an American metalcore band formed in 2003. Originally based in New Fairfield, Connecticut, before moving to Queens, New York, the group has released eight albums, with their first public release being a 2006 EP entitled The Complete Guide to Needlework."
    }, 
    {
      name: "Annotations Of An Autopsy",
      record: "Welcome To Sludge City",
      release: "2007",
      img: "annotations.jpg",
      bio: "Emmure is an American metalcore band formed in 2003. Originally based in New Fairfield, Connecticut, before moving to Queens, New York, the group has released eight albums, with their first public release being a 2006 EP entitled The Complete Guide to Needlework."
    }, 
    {
      name: "The Final Burden",
      record: "Self Titled",
      release: "2003",
      img: "thefinalburden.jpg",
      bio: "Emmure is an American metalcore band formed in 2003. Originally based in New Fairfield, Connecticut, before moving to Queens, New York, the group has released eight albums, with their first public release being a 2006 EP entitled The Complete Guide to Needlework."
    }, 
    {
      name: "Her Demise My Rise",
      record: "The Takeover",
      release: "2009",
      img: "herdemisemyrise.webp",
      bio: "Emmure is an American metalcore band formed in 2003. Originally based in New Fairfield, Connecticut, before moving to Queens, New York, the group has released eight albums, with their first public release being a 2006 EP entitled The Complete Guide to Needlework."
    }, 
    {
      name: "Broadway",
      record: "Kingdoms",
      release: "2009",
      img: "broadway.jpg",
      bio: "Emmure is an American metalcore band formed in 2003. Originally based in New Fairfield, Connecticut, before moving to Queens, New York, the group has released eight albums, with their first public release being a 2006 EP entitled The Complete Guide to Needlework."
    }, 
  ];

  constructor() { }

  ngOnInit() {
  }

}
