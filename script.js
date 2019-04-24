let profile = {
  firstName: 'Danny',
  surname: 'Smith',
  image:
    'https://pbs.twimg.com/profile_images/840169375449636864/mopQtUrj_400x400.jpg',
  bucketList: [
    'Rride a motorbike accross the US',
    'Do an AFF course',
    'Spend a year sailing the med',
  ],
  friends: [
    {
      firstName: 'Vicki',
      surname: 'Craik',
      image:
        'http://c.danny.is/4bfebb6012a2/942834_10201397415122949_1073140600_n.jpg',
      bucketList: [],
    },
    {
      firstName: 'Laurence',
      surname: 'Senter',
      image:
        'http://c.danny.is/085acee2efff/44933489_10157045150520663_7617314405729959936_n.jpg',
      bucketList: [],
    },
    {
      firstName: 'Ben',
      surname: 'Hepburn',
      image:
        'http://c.danny.is/365a59df0d0c/20245484_10155895085564415_5907463541955826835_n.jpg',
      bucketList: [],
    },
  ],
}

// Generic function to create a list item node
function createListItem(thing) {
  let liNode = document.createElement('li')
  liNode.innerText = thing
  return liNode
}

// Set Title
document.querySelector('.page-header h1').innerText =
  profile.firstName + ' ' + profile.surname

// Set profile image SRC
document.querySelector('.profile-image').setAttribute('src', profile.image)

// Render bucket list
profile.bucketList.forEach((item) =>
  document.querySelector('.bucket-list').appendChild(createListItem(item))
)

// Function to Create HTML-rendered friends
function createFriendNode(friendObject) {
  let { firstName, surname, image, bucketList } = friendObject

  let div = document.createElement('div')
  div.classList.add('friend-box')

  let img = document.createElement('img')
  img.setAttribute('src', image)

  let h2 = document.createElement('h2')
  h2.innerText = firstName + ' ' + surname

  let ul = document.createElement('ul')
  bucketList.forEach((item) => ul.appendChild(createListItem(item)))

  div.appendChild(h2)
  div.appendChild(img)
  div.appendChild(ul)

  return div
}

// Create Friend Nodes
profile.friends.forEach((friend) => {
  document
    .querySelector('.friends-container')
    .appendChild(createFriendNode(friend))
})
