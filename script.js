$(document).ready(function () {
    $('input[type=radio]').attr('checked', false);
    $('input[type=text').val('');

    //landing page to show and hide everything else
    $('.landing').show();
    $('.mainPage').hide();
    $('.userResult').hide();
    $('footer').hide();

    //on button click, landing page disappears and the rest of the content shows
    $('.enter').on('click', function () {
        $('.landing').hide(1000);
        $('.mainPage').show();



        let typed = new Typed('#typed', {
            strings: ['Hello, and welcome to Starbucks!^1000', 'We specialize in seasonal drinks.^1000', 'I can help you narrow down a few options. Press the start button!'],
            backSpeed: 5,
            typeSpeed: 20,
            startDelay: 2000
        })
    })

    $('.getCoffee').on('click', function () {
        $('.userResult').show();
        $('footer').show();
    })

    $('#start').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $('.questions').offset().top
        }, 1000)
    })

    $('#getCoffee').on('click', function () {
        $('html, body').animate({
            scrollTop: $('.userResult').offset().top
        }, 1000)
    })
});

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
        name: 'Decaf Caramel Brulé Latté',
        flavourProfile: 'earthy',
        coffeeBase: false,
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
        name: 'Decaf Caramel Brulé Frappuccino',
        flavourProfile: 'earthy',
        coffeeBase: false,
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
        name: 'Decaf Chestnut Praline Latté',
        flavourProfile: 'nutty',
        coffeeBase: false,
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
        name: 'Decaf Chestnut Praline Frappuccino',
        flavourProfile: 'earthy',
        coffeeBase: false,
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
        type: 'latté'
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
        name: 'Decaf Pumpkin Spice Latté',
        flavourProfile: 'earthy',
        coffeeBase: false,
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
        name: 'Decaf Pumpkin Spice Frappuccino',
        flavourProfile: 'earthy',
        coffeeBase: false,
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
        name: 'Decaf Maple Pecan Latté',
        flavourProfile: 'nutty',
        coffeeBase: false,
        season: 'fall',
        temperature: 'hot',
        type: 'latté'
    },
    {
        name: 'Cinammon Dolcé latté',
        flavourProfile: 'earthy',
        coffeeBase: true,
        season: 'fall',
        temperature: 'hot',
        type: 'latté'
    },
    {
        name: 'Decaf Cinammon Dolcé latté',
        flavourProfile: 'earthy',
        coffeeBase: false,
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
        name: 'Decaf Cinammon Dolce Frappuccino',
        flavourProfile: 'earthy',
        coffeeBase: false,
        season: 'fall',
        temperature: 'cold',
        type: 'frappuccino'
    },
    {
        name: 'Chai Tea Latté',
        flavourProfile: 'nutty',
        coffeeBase: true,
        season: 'fall',
        temperature: 'hot',
        type: 'latté'
    },
    {
        name: 'Iced Chai Tea Latté',
        flavourProfile: 'nutty',
        coffeeBase: true,
        season: 'fall',
        temperature: 'cold',
        type: 'iced latté'
    },
    {
        name: 'Tie Dye Frappuccino',
        flavourProfile: 'fruity',
        coffeeBase: false,
        season: 'summer',
        temperature: 'cold',
        type: 'tie dye'
    },
    {
        name: 'Dragon Drink',
        flavourProfile: 'fruity',
        coffeeBase: false,
        season: 'summer',
        temperature: 'cold',
        type: 'dragon drink'
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
        name: 'Decaf Sweet Dream Cold Brew',
        flavourProfile: 'nutty',
        coffeeBase: false,
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
        name: 'Decaf Cold Brew with Salted Cream Cold Foam',
        flavourProfile: 'earthy',
        coffeeBase: false,
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
        name: 'Decaf S\'mores Frappuccino',
        flavourProfile: 'earthy',
        coffeeBase: false,
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
        type: 'latté'
    },
    {
        name: 'Matcha Green Tea Frappuccino',
        flavourProfile: 'earthy',
        coffeeBase: false,
        season: 'spring',
        temperature: 'cold',
        type: 'matcha frappuccino'
    },
    {
        name: 'Hazelnut Mocha Macchiato',
        flavourProfile: 'nutty',
        coffeeBase: true,
        season: 'spring',
        temperature: 'hot',
        type: 'latté'
    },
    {
        name: 'Iced Hazelnut Mocha Macchiato',
        flavourProfile: 'nutty',
        coffeeBase: true,
        season: 'spring',
        temperature: 'cold',
        type: 'iced latté'
    },
    {
        name: 'Decaf Hazelnut Mocha Macchiato',
        flavourProfile: 'nutty',
        coffeeBase: false,
        season: 'spring',
        temperature: 'hot',
        type: 'latté'
    },
    {
        name: 'Decaf Iced Hazelnut Mocha Macchiato',
        flavourProfile: 'nutty',
        coffeeBase: false,
        season: 'spring',
        temperature: 'cold',
        type: 'iced latté'
    },
    {
        name: 'Cinammon Macchiato',
        flavourProfile: 'earthy',
        coffeeBase: true,
        season: 'spring',
        temperature: 'hot',
        type: 'latté'
    },
    {
        name: 'Iced Cinammon Macchiato',
        flavourProfile: 'earthy',
        coffeeBase: true,
        season: 'spring',
        temperature: 'cold',
        type: 'iced latté'
    },
    {
        name: 'Decaf Cinammon Macchiato',
        flavourProfile: 'earthy',
        coffeeBase: false,
        season: 'spring',
        temperature: 'hot',
        type: 'latté'
    },
    {
        name: 'Iced Decaf Cinammon Macchiato',
        flavourProfile: 'earthy',
        coffeeBase: false,
        season: 'spring',
        temperature: 'cold',
        type: 'iced latté'
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
    },
    {
        name: 'Decaf Cold Brew with Casara Cold Foam',
        flavourProfile: 'nutty',
        coffeeBase: false,
        season: 'spring',
        temperature: 'cold',
        type: 'cold brew'
    }
]


//results function
$(function () { //results function

    //choosing season
    let filteredSeason = [];
    //season filter
    $('.seasonChosen').on('change', function () {
        filteredSeason = seasonalDrinks.filter(function (iSeason) {
            if ($('input[type=radio][name=answerOne]:checked').val() == iSeason.season) {
                return true;
            }
        })
        $('html, body').animate({
            scrollTop: $('.coffeeBases').offset().top
        })
    })

    //choosing coffee base
    $('.caffeineChosen').on('change', function () {
        filteredCaffeine = filteredSeason.filter(function (iCaffeine) {

            const trueCoffee = $('input[type=radio][name=answerTwo][value=true]:checked').val() == 'true';

            const falseCoffee = $('input[type=radio][name=answerTwo][value=false]:checked').val() == 'false';

            if (trueCoffee === iCaffeine.coffeeBase) {

                return true;
            }


        })

        $('html, body').animate({
            scrollTop: $('.tempChoices').offset().top
        });

    })
    //choosing temperature of drink
    $('.tempChosen').on('click', function () {
        filteredTemp = filteredCaffeine.filter(function (iTemp) {

            const hotDrink = $('input[type=radio][name=answerThree][value=hot]:checked').val();
            const coldDrink = $('input[type=radio][name=answerThree][value=cold]:checked').val();

            if (hotDrink == iTemp.temperature || coldDrink == iTemp.temperature) {


                return true;
            }

        })

        $('html, body').animate({
            scrollTop: $('.name').offset().top
        });


        //error message if you choose a hot drink within the summer season
        if ($('input[type=radio][name=answerThree][value=hot]:checked').val() && $('input[type=radio][name=answerOne][value=summer]:checked').val()) {

            Swal.fire({
                title: 'Sorry! There are no hot seasonal drinks for the summer.',
                icon: 'error',
                confirmButtonText: 'Try again!',
                customClass: 'swalBox',
            })

            $('input[type=radio][name=answerThree][value=hot]').attr('checked', false)
        }

        //randomizer function
        $('input[type=submit]').on('click', function (event) {

            let randomDrink = filteredTemp[Math.floor(Math.random() * filteredTemp.length)];
            event.preventDefault();

            //appends image of drink to results page
            const imagePath = 'images/' + randomDrink.type + '.png';
            $('.drinkImage').attr('src', imagePath);

            const userName = $('input[type=text][name=answerFour]').val();
            const userNameCap = userName.charAt(0).toUpperCase() + userName.slice(1);

            $('.resultContent').html(`<h4>${userName} I think you should have 
            the ${randomDrink.name}</h4>`);



            // found an error. will fix this after project submission
            if ($('input[type=text]').val(" ")) {
                $('.resultContent').html(`<h4> Well${" "+ userNameCap + ","} I think you should have 
            the ${randomDrink.name}</h4>`);
            }


        })
        //if user wishes to restart quiz
        $('.restart').on('click', function () {
            $('input[type=radio]').attr('checked', false)
            $('html, body').animate({
                scrollTop: $('.drinkQuestions').offset().top
            }, 800);
            setTimeout(function () {
                $('.userResult ').hide()
            }, 1000)
        })
        // $('.restart').on('click', setTimeout(function () {
        //     ;
        // },1000))
    })
});