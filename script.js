$(document).ready(function () {
    $('input[type = radio]').attr('checked', false);

    let typed = new Typed('#typed', {
        strings: ['Hello, and welcome to Starbucks!', 'We\'re currently serving seasonal drinks.', 'I can help you narrow down a few options, if you\'d like!', 'Just press the start button and we can get the coffee grinding while we narrow down your options.'],
        backSpeed: 20,
        typeSpeed: 20


    })
});

// 



//array of seasonal drinks objects
const seasonalDrinks = [{
        name: 'Caramel Brulé Latté',
        flavourProfile: 'earthy',
        coffeeBase: true,
        season: 'winter',
        temperature: 'hot',
        type: 'latté'
    },
    {
        name: 'Caramel Brulé Frappuccino',
        flavourProfile: 'earthy',
        coffeeBase: true,
        season: 'winter',
        temperature: 'cold',
        type: 'frappuccino'
    },
    {
        name: 'Chestnut Praline Latté',
        flavourProfile: 'nutty',
        coffeeBase: true,
        season: 'winter',
        temperature: 'hot',
        type: 'latté'
    },
    {
        name: 'Chestnut Praline Frappuccino',
        flavourProfile: 'earthy',
        coffeeBase: true,
        season: 'winter',
        temperature: 'cold',
        type: 'frappuccino'
    },
    {
        name: 'Fudge Hot Chocolate',
        flavourProfile: 'nutty',
        coffeeBase: false,
        season: 'winter',
        temperature: 'hot',
        type: 'hot chocolate'
    },
    {
        name: 'Pumpkin Spice Latté',
        flavourProfile: 'earthy',
        coffeeBase: true,
        season: 'fall',
        temperature: 'hot',
        type: 'latté'

    },
    {
        name: 'Pumpkin Spice Frappuccino',
        flavourProfile: 'earthy',
        coffeeBase: true,
        season: 'fall',
        temperature: 'cold',
        type: 'frappuccino'
    },
    {
        name: 'Maple Pecan Latté',
        flavourProfile: 'nutty',
        coffeeBase: true,
        season: 'fall',
        temperature: 'hot',
        type: 'latté'
    },
    {
        name: 'Caramel Apple Spice',
        flavourProfile: 'fruity',
        coffeeBase: false,
        season: 'fall',
        temperature: 'hot',
        type: 'juice'
    },
    {
        name: 'Cinammon Dolcé Latte',
        flavourProfile: 'earthy',
        coffeeBase: true,
        season: 'fall',
        temperature: 'hot',
        type: 'latté'
    },
    {
        name: 'Cinammon Dolce Frappuccino',
        flavourProfile: 'earthy',
        coffeeBase: true,
        season: 'fall',
        temperature: 'cold',
        type: 'frappuccino'
    },
    {
        name: 'Chai Tea Latté',
        flavourProfile: 'nutty',
        coffeeBase: false,
        season: 'fall',
        temperature: 'hot',
        type: 'latté'
    },
    {
        name: 'Tie Dye Frappuccino',
        flavourProfile: 'fruity',
        coffeeBase: false,
        season: 'summer',
        temperature: 'cold',
        type: 'smoothie'
    },
    {
        name: 'Dragon Drink',
        flavourProfile: 'fruity',
        coffeeBase: false,
        season: 'summer',
        temperature: 'cold',
        type: 'juice'
    },
    {
        name: 'Strawberry Frappuccino',
        flavourProfile: 'fruity',
        coffeeBase: false,
        season: 'summer',
        temperature: 'smoothie'
    },
    {
        name: 'Sweet Dream Cold Brew',
        flavourProfile: 'nutty',
        coffeeBase: true,
        season: 'summer',
        temperature: 'cold',
        type: 'cold brew'
    },
    {
        name: 'Cold Brew with Salted Cream Cold Foam',
        flavourProfile: 'earthy',
        coffeeBase: true,
        season: 'summer',
        temperature: 'cold',
        type: 'cold brew'
    },
    {
        name: 'S\'mores Frappuccino',
        flavourProfile: 'earthy',
        coffeeBase: true,
        season: 'summer',
        temperature: 'cold',
        type: 'frappuccino'
    },
    {
        name: 'Matcha Green Tea Latté',
        flavourProfile: 'earthy',
        coffeeBase: false,
        season: 'spring',
        temperature: 'hot',
        type: 'latte'
    },
    {
        name: 'Matcha Green Tea Frappuccino',
        flavourProfile: 'earthy',
        coffeeBase: false,
        season: 'spring',
        temperature: 'cold',
        type: 'frappuccino'
    },
    {
        name: 'Matcha Green Tea Iced Latté',
        flavourProfile: 'earthy',
        coffeeBase: false,
        season: 'spring',
        temperature: 'cold',
        type: 'latte'
    },
    {
        name: 'Hazelnut Mocha Macchiato',
        flavourProfile: 'nutty',
        coffeeBase: true,
        season: 'spring',
        temperature: 'hot',
        type: 'latte'
    },
    {
        name: 'Cinammon Macchiato',
        flavourProfile: 'earthy',
        coffeeBase: true,
        season: 'spring',
        temperature: 'hot',
        type: 'latte'
    },
    {
        name: 'Ice Blond Café Americano',
        flavourProfile: 'earthy',
        coffeeBase: true,
        season: 'spring',
        temperature: 'cold',
        type: 'americano'
    },
    {
        name: 'Cold Brew with Casara Cold Foam',
        flavourProfile: 'nutty',
        coffeeBase: true,
        season: 'spring',
        temperature: 'cold',
        type: 'cold brew'
    }
]

console.log(seasonalDrinks)
//document ready
$(function () { //results function

    //choosing season
    let filteredSeason = [];
    //season filter
    $('.seasonChosen').on('change', function () {
        filteredSeason = seasonalDrinks.filter(function (iSeason) {
            if ($("input[type=radio][name=answerOne]:checked").val() == iSeason.season) {
                return true;
            }
        })
        console.log("this is the filtered season array", filteredSeason)

    })

    //choosing coffee base
    $('.caffeineChosen').on('change', function () {
        filteredCaffeine = filteredSeason.filter(function (iCaffeine) {

            const trueCoffee = $("input[type=radio][name=answerTwo][value=true]:checked").val() == 'true';

            const falseCoffee = $("input[type=radio][name=answerTwo][value=false]:checked").val() == 'false';

            console.log("this is the TRUE COFFEE", trueCoffee)

            if (trueCoffee === iCaffeine.coffeeBase) {

                return true;
            }

            console.log('this is caffeine-choice array', iCaffeine);
        })
        console.log("this is the filtered array with season and coffee", filteredCaffeine)
    })

    $('.tempChosen').on('click', function () {
        filteredTemp = filteredCaffeine.filter(function (iTemp) {

            const hotDrink = $("input[type=radio][name=answerThree][value=hot]:checked").val();
            const coldDrink = $("input[type=radio][name=answerThree][value=cold]:checked").val();

            if (hotDrink == iTemp.temperature || coldDrink == iTemp.temperature) {

                // console.log('')
                return true;
            }
            console.log('temperature array', iTemp)


        })

        console.log('FINAL RESULT!!! Just need to randomize it first', filteredTemp);


        //error message if you choose a hot drink within the summer season
        if ($("input[type=radio][name=answerThree][value=hot]:checked").val() && $("input[type=radio][name=answerOne][value=summer]:checked").val()) {
            Swal.fire({
                title: 'Sorry! There are no hot seasonal drinks for the summer.',
                text: 'How about you choose something else?',
                icon: 'error',
                confirmButtonText: 'Try again!'
            })
            // $('input[type=radio][name=answerThree][value=hot]').attr('checked', false)
            $('input[type=radio]').attr('checked', false)



        }

        //randomizer function
        $("input[type=submit]").on('click', function (event) {
            let randomDrink = filteredTemp[Math.floor(Math.random() * filteredTemp.length)]
            console.log("this is the random drink", randomDrink);
            event.preventDefault();


            //appending to html function
            $('.userResult').html(`<p>You should have the ${randomDrink.name}!</p>`);
        })

    })

});