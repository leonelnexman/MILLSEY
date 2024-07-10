function doLiveSearch( ev, keywords, el ) {

  if( ev.keyCode == 38 || ev.keyCode == 40 ) {
      return false;
  }
  
  updown = -1;
  
  if( keywords == '' || keywords.length < 3 ) {
    return false;
  }
  keywords = encodeURI(keywords);
  
  $.ajax({
    url: $('base').attr('href') + 'index.php?route=product/search/ajax&keyword=' + keywords,
    dataType: 'json',
    content: this,
    success: function(result) {


    if (result.products.length || result.categories.length) $('.serach__form-result__wrap').show();
  
    $('.js-search-product_avail').html('');
    $('.js-search-product_noavail').html('');
    
    if( result.products.length > 0 ) {
      $('.js-search-product_avail').parent().show();
      
      for( var i in result.products ) {
  
        $('.js-search-product_avail').append(
                                            '<div class="js-search-product__item">'+
                                                '<div class="img">'+
                                                    '<a href="'+result.products[i].href+'">'+
                                                        '<img src="'+result.products[i].image+'" alt="">'+
                                                    '</a>'+
                                                '</div>'+
                                                '<div class="texts">'+result.products[i].labels+
                                                '<div class="product__title"><a href="'+result.products[i].href+'">'+result.products[i].name+'</a></div>'+
                                                '<div class="product__price">'+result.products[i].price+'</div>'+
                                                '<div class="product__attributes">'+result.products[i].attributes+'</div></div>'+
                                            '</div>'
        );
  
      }
  
    } else $('.js-search-product_avail').parent().hide();

    if( result.products_noavail.length > 0 ) {
      $('.js-search-product_noavail').parent().show();
      
      for( var i in result.products_noavail ) {
  
        $('.js-search-product_noavail').append(
                                            '<div class="js-search-product__item">'+
                                                '<div class="img">'+
                                                    '<a href="'+result.products_noavail[i].href+'">'+
                                                        '<img src="'+result.products_noavail[i].image+'" alt="">'+
                                                    '</a>'+
                                                '</div>'+
                                                '<div class="texts">'+result.products_noavail[i].labels+
                                                '<div class="product__title"><a href="'+result.products_noavail[i].href+'">'+result.products_noavail[i].name+'</a></div>'+
                                                '<div class="product__price">'+result.products_noavail[i].price+'</div>'+
                                                '<div class="product__attributes">'+result.products_noavail[i].attributes+'</div></div>'+
                                            '</div>'
        );
  
      }
  
    } else $('.js-search-product_noavail').parent().hide();
  
  
    $('.js-search-categories').html('');

    if( result.categories.length > 0 ) {
      $('.js-search-categories').parent().show();
      
      for( var i in result.categories ) {
  
        $('.js-search-categories').append('<li><a href="'+result.categories[i].href+'">'+result.categories[i].name+'</a></li>');

      }
  
    } else $('.js-search-categories').parent().hide();
  }});
  
  return true;
  }
  
  function upDownEvent( ev, el ) {
  var elem = document.getElementById('livesearch_search_results');
  var fkey = $(el).find('[name=filter_name]').first();
  
  if( elem ) {
    var length = elem.childNodes.length - 1;
  
    if( updown != -1 && typeof(elem.childNodes[updown]) != 'undefined' ) {
      $(elem.childNodes[updown]).removeClass('highlighted');
    }
  
    // Up
    if( ev.keyCode == 38 ) {
      updown = ( updown > 0 ) ? --updown : updown;
    }
    else if( ev.keyCode == 40 ) {
      updown = ( updown < length ) ? ++updown : updown;
    }
  
    if( updown >= 0 && updown <= length ) {
      $(elem.childNodes[updown]).addClass('highlighted');
  
      var text = elem.childNodes[updown].childNodes[0].text;
      if( typeof(text) == 'undefined' ) {
        text = elem.childNodes[updown].childNodes[0].innerText;
      }
  
      $(el).find('[name=search]').val( new String(text).replace(/(\s\(.*?\))$/, '') );
    }
  }
  
  return false;
  }
  
  var updown = -1;
  
  $(document).ready(function(){
  
    $('#header-search-input').keyup(function(ev){
      if (this.value.length) $('.clear__search').show(); else $('.clear__search').hide();

      doLiveSearch(ev, this.value, $(this).parents('form') );
    }).focus(function(ev){
      doLiveSearch(ev, this.value);
    }).keydown(function(ev){
      upDownEvent( ev, $(this).parents('form') );
    }).blur(function(){
      //window.setTimeout("$('#livesearch_search_results').remove();updown=0;", 1500);
    });


  
    $(document).bind('keydown', function(ev) {
      try {
        if( ev.keyCode == 13 && $('#livesearch_search_results .highlighted').length > 0 ) {
          //alert($('.highlighted').find('a').first().attr('href'));
          //document.location.href = $('.highlighted').find('a').first().attr('href');
          window.location = $('.highlighted').find('a').first().attr('href');
        }
      }
      catch(e) {}
    });


    $('.clear__search').click(function(){
      $('#header-search-input').val('');
      $(this).hide();
    });
  
  });


