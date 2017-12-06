//________________________/yandex map/______________________//

(function () {

  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("map", {
      center: [56.864137567836366,60.62005799999992],
      zoom: 15,
      controls: ["zoomControl"]
    });
    myPlacemark = new ymaps.Placemark([56.864137567836366,60.62005799999992], {
      hintContent: 'Айтекс',
      balloonContent: 'г. Екатеринбург, улица Маяковского, 25А'
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'assets/img/itex_icon.png',
      iconImageSize: [42, 59],
      iconImageOffset: [-20, -60]
    });

    myMap.behaviors.disable(['scrollZoom']);

    myMap.geoObjects.add(myPlacemark);
  }
})();
