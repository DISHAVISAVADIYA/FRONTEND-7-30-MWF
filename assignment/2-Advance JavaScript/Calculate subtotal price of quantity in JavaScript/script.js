$(function() {

  $("form div.qty").append('<div class="outer-button"><div class="inc button"><i class="fa fa-plus"></i></div><div class="dec button"><i class="fa fa-minus"></i></div></div>');

  calculate();
  
  $(".button").on("click", function() {

    var $button = $(this);
    var oldQty = $button.parent().parent().find("input").val();

    if ($button.html() == '<i class="fa fa-plus"></i>') {
      var newQty = parseFloat(oldQty) + 1;
    } else {
      // Don't allow decrementing less than zero
      if (oldQty > 0) {
        var newQty = parseFloat(oldQty) - 1;
      } else {
        newQty = 0;
      }
    }

    $button.parent().parent().find("input").val(newQty);
    calculate();
  });
      
  function calculate() {
      $(".basket-tbl tr").each(function() {
        var priceVal = $(this).find('input.price').val();
        var qtyVal = $(this).find("input.qty").val();
        var costVal = (priceVal * qtyVal);
        $(this).find('input.cost').val((costVal).toFixed(2));
      });

      var subtotalVal = 0;
      $('.cost').each(function() {
        subtotalVal += parseFloat($(this).val());
      });
      $('.subtotal').val((subtotalVal).toFixed(2));

      $(".vat").val(((subtotalVal / 100) * 20).toFixed(2));

      var vatVal = ((subtotalVal / 100) * 20).toFixed(2);
      var total = parseFloat(subtotalVal) + parseFloat(vatVal);
      $(".total").val((total).toFixed(2));
  }


  $(".fa-trash-o").click(function() {
    $(this).parent().parent().remove();
    calculate();
  });


    // $("#subtotal-form").submit(function(e) {

    //     var url = "";

    //     $.ajax({
    //            type: "POST",
    //            url: url,
    //            data: $("#subtotal-form").serializeArray(),
    //            success: function(data)
    //            {
    //                alert("All done!");
    //            }
    //          });

    //     e.preventDefault();
    // });

	var cart = new Cart();

	$("#subtotal-form").submit(function (e) {
		e.preventDefault();
		cart.recalculate();
		$.ajax({
			type: $(e.currentTarget).attr('method'),
			url: $(e.currentTarget).attr('action'),
			dataType: 'json',
			data: JSON.stringify(cart.data),
			success: function () {
				alert(JSON.stringify(cart.data));
				console.log(cart.data);
			},
			error: function () {
				alert(JSON.stringify(cart.data));
				console.log(cart.data);
			}
		});
	});

});