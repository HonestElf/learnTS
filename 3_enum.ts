enum Membership {
  Simple,
  Standart,
  Premium,
}

const membership = Membership.Standart;
console.log(membership);

const membershipReverse = Membership[2];
console.log(membershipReverse);

enum SocialMedia {
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM',
}

const social = SocialMedia.INSTAGRAM;
console.log(social);
