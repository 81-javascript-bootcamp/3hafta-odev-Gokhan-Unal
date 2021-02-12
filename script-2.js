const petsModule = (function () {
  const _data = [
    {
      image: 'https://pet-uploads.adoptapet.com/1/6/b/406528149.jpg',
      name: 'Sam',
      type: 'Golden Retriever/St. Bernard Mix',
      sound: 'bark',
      soundText: 'Bark - type b',
    },
    {
      image: 'https://pet-uploads.adoptapet.com/0/f/3/462356648.jpg',
      name: 'Mellie',
      type: 'Domestic Shorthair',
      sound: 'meow',
      soundText: 'Meow - type m',
    },
  ]
  const $tbodyEl = document.querySelector('tbody')
  //   const $buttons = document.querySelectorAll('button')
  const $soundElements = document.querySelectorAll('audio')
  const $mainImage = document.querySelector('.main-image')

  const getButtons = function () {
    return document.querySelectorAll('button')
  }

  const getTableRows = function () {
    return document.querySelectorAll('tbody tr')
  }

  const createPetElement = function (pet) {
    return (
      "<tr><td><img class='pet-image' src='" +
      pet.image +
      "' /></td><td>" +
      pet.name +
      '</td><td>' +
      pet.type +
      "</td><td><button data-sound='" +
      pet.sound +
      "'>" +
      pet.soundText +
      '</button></td></tr>'
    )
  }

  const addToTable = function (content) {
    $tbodyEl.innerHTML += content
  }

  const putPetsInHtml = function () {
    for (let i = 0; i < _data.length; i++) {
      addToTable(createPetElement(_data[i]))
    }
  }

  const bindEvents = function () {
    const buttons = getButtons()
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function (event) {
        const soundId = this.dataset.sound
        const soundElement = document.getElementById(soundId)
        if (soundElement) {
          soundElement.play()
        }
      })
    }
  }

  const bindTables = function () {
    const tableRows = getTableRows()
    for (let i = 0; i < tableRows.length; i++) {
      tableRows[i].addEventListener('click', function (event) {
        tableRows[i].style.backgroundColor = 'skyblue'
      })
    }
  }

  const removeHandler = function () {
    const tableRows = getTableRows()
    for (let i = 0; i < tableRows.length; i++) {
      tableRows[i].removeEventListener('mouseleave', function (event) {
        console.log(event.type)
      })
    }
  }

  document.addEventListener('keydown', function (event) {
    if (event.key === 'b') {
      $soundElements[0].play()
    } else if (event.key === 'm') {
      $soundElements[1].play()
    }
  })

  $tbodyEl.addEventListener('click', function (event) {
    if (event.target.tagName.toLowerCase() === 'img') {
      $mainImage.src = event.target.src
    }
  })

  const init = function () {
    putPetsInHtml()
    bindEvents()
    bindTables()
    removeHandler()
  }

  return {
    init: init,
  }
})()
