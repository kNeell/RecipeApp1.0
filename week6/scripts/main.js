


$('#searchRecipeButton').click(function(){

	$('#recipeContent').html('');

	var url = "https://api.edamam.com/search?&app_id=bae1584e&app_key=0d4ea7ee7b57306125ced6ebca2f483c&q=" +  $('#recipeSearch').val();+ "";

	var params = "";

	params += "&from=" + $("#from").val();
	params += "&to=" + $("#to").val();

	if( $('#healthOptions').val() =="vegetarian" ){
		params += "&health=vegetarian";
	} else if( $('#healthOptions').val() == "vegan"){
		params += "&health=vegan";
	} else if( $('#healthOptions').val() == "paleo"){
		params += "&health=paleo";
	} else if( $('#healthOptions').val() == "kosher"){
		params += "&health=kosher";
	}

	if($('#alergenFilter').val()  == "Peanut" ){
		params += "&health=peanut";
	} else if( $('#alergenFilter').val() == "low-sugar"){
		params += "&health=low-sugar";
	} else if( $('#alergenFilter').val() == "shellfish-free"){
		params += "&health=shellfish-free";
	} else if( $('#alergenFilter').val() == "dairy-free"){
		params += "&health=dairy-free";
	} else if( $('#alergenFilter').val() == "gluten-free"){
		params += "&health=gluten-free";
	}

	$.getJSON(url + params,function(data){
		//console.log(data.hits[0].recipe.label);
		data.hits.forEach(function(r,i){
			var recipeIngredients = "";

			data.hits[i].recipe.ingredients.forEach(function(recipeIngredient){
				recipeIngredients += '<li>' + recipeIngredient.text + '</li>'
			});
			console.log(recipeIngredients);

			$('#recipeContent').append('<div class="recipeItem"><div class="recipeTitle">' + data.hits[i].recipe.label + '</div><img src=" ' + data.hits[i].recipe.image + ' " alt="" class="recipeImage"><yield>Serves ' + data.hits[i].recipe.yield + ' people</yield><ul>' + recipeIngredients + '</ul></div>');
		});
	});
});

