// $(document).ready(function () {

// })

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
        season: 'winter',
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
        name: 'Pumpkin Spice Frappuccino',
        flavourProfile: 'nutty',
        coffeeBase: true,
        season: 'fall',
        temperature: 'hot',
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
        name: 'S-mores Frappuccino',
        flavourProfile: 'earthy',
        coffeeBase: true,
        season: 'summer',
        temperature: 'cold',
        type: 'frappuccino'
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
        console.log("this is the NEW filtered season array", filteredSeason)

    })
    //choosing coffee base
    $('.caffeineChosen').on('change', function () {
        filteredCaffeine = filteredSeason.filter(function (iCaffeine) {

            console.log("is the coffee true or false? :",iCaffeine.coffeeBase)
            
            console.log('show me the money!', $("input[type=radio][name=answerTwo][value=true]:checked").val())
            
            if ($("input[type=radio][name=answerTwo][value=true]:checked").val() == iCaffeine.coffeeBase) {
                console.log('work dAMMIT!!')
                return true;
            }
            
        })
        console.log("this is the filtered array with season and coffee", filteredCaffeine)
    })
    // console.log("this is filtered 2222",filteredSeason);

});