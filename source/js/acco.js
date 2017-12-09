
$(function () {
  $(".acco-title").on('click', function (e) {
    e.preventDefault();
    var $this = $(this),
        container = $this.closest('.acco__container'),
        title = container.find('.acco-title'),
        content = container.find('.acco__content'),
        duration = 600;

    if (container.hasClass('active')) {
      content.stop(true).slideUp(duration, function () {
        container.removeClass('active');
      });
    }else {
      content.stop(true).slideDown(duration,function () {
        container.addClass('active');
      });
    }
  })
});
$(function () {
  var
      checkbox = $('.check__input');

  checkbox.on('change', calcPrice);
  // console.log(checkbox)
  function calcPrice () {
    var
        price = 0,
        spanPrice = $(".product__price-num"),
        checked = checkbox.filter(":checked"),
        cont = $(".product__price");

      if (!checked.length) {
        cont.stop(true,true).fadeOut();
      }else {
        checked.each(function () {
          price += parseInt($(this).data('price'));
        });

        cont.stop(true,true).fadeIn();
        //преобразуем число к строке
        var priceString = String(price);
        //добавляем точку после каждого третьего символа справа
        var priceDot = priceString.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1.');

        spanPrice.html(priceDot);
      }
  }
  calcPrice();

});