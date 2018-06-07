$(document).ready(() => {
	
	$( "#bt1" ).click(function() {
		$( "#msg1" ).slideToggle( "slow");
		$("#msg2").slideUp("slow");
		$("#msg3").slideUp("slow");
	});
	
	
	$( "#bt2" ).click(function() {
		$( "#msg2" ).slideToggle( "slow");
		$("#msg1").slideUp("slow");
		$("#msg3").slideUp("slow");
	});
	
	
	$( "#bt3" ).click(function() {
		$( "#msg3" ).slideToggle( "slow");
		$("#msg2").slideUp("slow");
		$("#msg1").slideUp("slow");
	});
})