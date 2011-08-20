// A global that we can attach things to
var _cptGen = {};

$(document).ready(function(){

  // scroll spy logic
  // ================

  var activeTarget,
      $window = $(window),
      position = {},
      nav = $('body > .topbar li a'),
      targets = nav.map(function () {
        return $(this).attr('href');
      }),
      offsets = $.map(targets, function (id) {
        return $(id).offset().top;
      });


  function setButton(id) {
    nav.parent("li").removeClass('active');
    $(nav[$.inArray(id, targets)]).parent("li").addClass('active');
  }

  function processScroll(e) {
    var scrollTop = $window.scrollTop() + 10, i;
    for (i = offsets.length; i--;) {
      if (activeTarget != targets[i] && scrollTop >= offsets[i] && (!offsets[i + 1] || scrollTop <= offsets[i + 1])) {
        activeTarget = targets[i];
        setButton(activeTarget);
      }
    }
  }

  nav.click(function () {
    processScroll();
  });

  processScroll();

  $window.scroll(processScroll);


        
    _cptGen.fields = {};


    /*  update the fields  */
    _cptGen.updateFields = function(){
        var fields;

        _cptGen.fields = fields;
    };

    _cptGen.changeHash = function(){
        // use bbq
    };

    _cptGen.updateCode = function(){
        var newCode;
        newCode = 'This is new Code';
        $('#genCode').html( newCode );
    };

    $('#cptGeneratorForm').submit( function(e){
        e.preventDefault();
        _cptGen.updateFields();
        _cptGen.changeHash();
        _cptGen.updateCode();
    });

});
