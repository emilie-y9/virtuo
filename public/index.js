'use strict';

//list of cars
//useful for ALL 5 steps
//could be an array of objects that you fetched from api or database
const cars = [{
  'id': 'a9c1b91b-5e3d-4cec-a3cb-ef7eebb4892e',
  'name': 'fiat-500-x',
  'pricePerDay': 36,
  'pricePerKm': 0.10
}, {
  'id': '697a943f-89f5-4a81-914d-ecefaa7784ed',
  'name': 'mercedes-class-a',
  'pricePerDay': 44,
  'pricePerKm': 0.30
}, {
  'id': '4afcc3a2-bbf4-44e8-b739-0179a6cd8b7d',
  'name': 'bmw-x1',
  'pricePerDay': 52,
  'pricePerKm': 0.45
}];

//list of current rentals
//useful for ALL steps
//the time is hour
//The `price` is updated from step 1 and 2
//The `commission` is updated from step 3
//The `options` is useful for step 4
const rentals = [{
  'id': '893a04a3-e447-41fe-beec-9a6bfff6fdb4',
  'driver': {
    'firstName': 'Roman',
    'lastName': 'Frayssinet'
  },
  'carId': 'a9c1b91b-5e3d-4cec-a3cb-ef7eebb4892e',
  'pickupDate': '2020-01-02',
  'returnDate': '2020-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury': 0,
    'virtuo': 0
  }
}, {
  'id': 'bc16add4-9b1d-416c-b6e8-2d5103cade80',
  'driver': {
    'firstName': 'Redouane',
    'lastName': 'Bougheraba'
  },
  'carId': '697a943f-89f5-4a81-914d-ecefaa7784ed',
  'pickupDate': '2020-01-05',
  'returnDate': '2020-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury': 0,
    'virtuo': 0
  }
}, {
  'id': '8c1789c0-8e6a-48e3-8ee5-a6d4da682f2a',
  'driver': {
    'firstName': 'Fadily',
    'lastName': 'Camara'
  },
  'carId': '4afcc3a2-bbf4-44e8-b739-0179a6cd8b7d',
  'pickupDate': '2019-12-01',
  'returnDate': '2019-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury': 0,
    'virtuo': 0
  }
}];

//list of actors for payment
//useful from step 5
const actors = [{
  'rentalId': '893a04a3-e447-41fe-beec-9a6bfff6fdb4',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'partner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'virtuo',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': 'bc16add4-9b1d-416c-b6e8-2d5103cade80',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'partner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'virtuo',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '8c1789c0-8e6a-48e3-8ee5-a6d4da682f2a',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'partner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'virtuo',
    'type': 'credit',
    'amount': 0
  }]
}];

function Step1() {
  console.log("Step1");
for (var rental of rentals)
{
  for (var car of cars)
  {
    
    if (car.id.localeCompare(rental.carId)===0)
    {
      console.log("Driver id : ");
      console.log(rental.id);
      const date1 = new Date(rental.pickupDate);
      const date2 = new Date(rental.returnDate);

      /* console.log("Difference in days : ");
      console.log( (date2-date1)/(24*60*60*1000));
      console.log("Price per Day : ");
      console.log(car.pricePerDay); */

      var price_time = (date2 - date1)*car.pricePerDay/(24*60*60*1000);

      // console.log("Price (time) :");
      // console.log(price_time);
     /*  console.log("Distance (km): ");
      console.log(rental.distance);
      console.log("Price per km");
      console.log(car.pricePerKm); */

      var price_distance = rental.distance * car.pricePerKm;
  
      // console.log("Price (distance) :");
      // console.log(price_distance);

      var rental_price = price_time + price_distance;
      console.log("Rental Price : ");
      console.log(rental_price);
      break;
    }
  }
  
}
}

//Step1();


function Step2() {
  console.log("Step2");
  for (var rental of rentals)
  {
    for (var car of cars)
    {
      
      if (car.id.localeCompare(rental.carId)===0)
      {
        console.log("Driver id : ");
        console.log(rental.id);
        const date1 = new Date(rental.pickupDate);
        const date2 = new Date(rental.returnDate);
  
        /* console.log("Difference in days : ");
        console.log( (date2-date1)/(24*60*60*1000));
        console.log("Price per Day : ");
        console.log(car.pricePerDay); */
        var difference = (date2 - date1)/(24*60*60*1000)

        var price_time = difference*car.pricePerDay;
  
        // console.log("Price (time) :");
        // console.log(price_time);
       /*  console.log("Distance (km): ");
        console.log(rental.distance);
        console.log("Price per km");
        console.log(car.pricePerKm); */
  
        var price_distance = rental.distance * car.pricePerKm;
    
        // console.log("Price (distance) :");
        // console.log(price_distance);
  
        var rental_price = price_time + price_distance;

        if (difference>1 && difference <4)
        {
          rental_price = 0.9 * rental_price;
        }
        else if (difference >4 && difference <10 )
        {
          rental_price = 0.7* rental_price;
        } 
        else if (difference > 10)
        {
          rental_price = 0.5 * rental_price;
        }

        console.log("Rental Price : ");
        console.log(rental_price);
        break;
      }
    }
    
  }
  }
 // Step2();

  function Step3() {
  console.log("Step3");
    for (var rental of rentals)
    {
      for (var car of cars)
      {
        
        if (car.id.localeCompare(rental.carId)===0)
        {
          console.log("Driver id : ");
          console.log(rental.id);
          const date1 = new Date(rental.pickupDate);
          const date2 = new Date(rental.returnDate);
    
          /* console.log("Difference in days : ");
          console.log( (date2-date1)/(24*60*60*1000));
          console.log("Price per Day : ");
          console.log(car.pricePerDay); */
          var difference = (date2 - date1)/(24*60*60*1000)
  
          var price_time = difference*car.pricePerDay;
    
          // console.log("Price (time) :");
          // console.log(price_time);
         /*  console.log("Distance (km): ");
          console.log(rental.distance);
          console.log("Price per km");
          console.log(car.pricePerKm); */
    
          var price_distance = rental.distance * car.pricePerKm;
      
          // console.log("Price (distance) :");
          // console.log(price_distance);
    
          var rental_price = price_time + price_distance;
  
          if (difference>1 && difference <4)
          {
            rental_price = 0.9 * rental_price;
          }
          else if (difference >4 && difference <10 )
          {
            rental_price = 0.7* rental_price;
          } 
          else if (difference > 10)
          {
            rental_price = 0.5 * rental_price;
          }
  
          console.log("Rental Price : ");
          console.log(rental_price);
          var insurance = 0.15* rental_price;
          var Treasury = 1* difference;
          var Virtuo = 0.3*rental_price - insurance - Treasury;
          console.log("Insurance : ");
          console.log(insurance);
          console.log("Treasury : ");
          console.log(Treasury);
          console.log("Virtuo : ");
          console.log(Virtuo);
          break;
        }


      }
      
    }
    }

   // Step3();

    function Step4() {
      console.log("Step4");
      for (var rental of rentals)
      {
        for (var car of cars)
        {
          
          if (car.id.localeCompare(rental.carId)===0)
          {
            console.log("Driver id : ");
            console.log(rental.id);
            const date1 = new Date(rental.pickupDate);
            const date2 = new Date(rental.returnDate);
      
            /* console.log("Difference in days : ");
            console.log( (date2-date1)/(24*60*60*1000));
            console.log("Price per Day : ");
            console.log(car.pricePerDay); */
            var difference = (date2 - date1)/(24*60*60*1000)
    
            var price_time = difference*car.pricePerDay;
      
            // console.log("Price (time) :");
            // console.log(price_time);
           /*  console.log("Distance (km): ");
            console.log(rental.distance);
            console.log("Price per km");
            console.log(car.pricePerKm); */
      
            var price_distance = rental.distance * car.pricePerKm;
        
            // console.log("Price (distance) :");
            // console.log(price_distance);
      
            var rental_price = price_time + price_distance;
    
            if (difference>1 && difference <4)
            {
              rental_price = 0.9 * rental_price;
            }
            else if (difference >4 && difference <10 )
            {
              rental_price = 0.7* rental_price;
            } 
            else if (difference > 10)
            {
              rental_price = 0.5 * rental_price;
            }
    
            
            var insurance = 0.15* rental_price;
            var Treasury = 1* difference;
            var Virtuo = 0.3*rental_price - insurance - Treasury;
            if (rental.options.deductibleReduction==true)
            {
              
              Virtuo = 4*difference;
            }
            rental_price +=4*difference;
            console.log("Rental Price : ");
            console.log(rental_price);
            console.log("Insurance : ");
            console.log(insurance);
            console.log("Treasury : ");
            console.log(Treasury);
            console.log("Virtuo : ");
            console.log(Virtuo);
            break;
          }
  
  
        }
        
      }
      }
  
      //Step4();

      function addToActors(rentalId,actors,rental_price,insurance,Treasury,Virtuo)
      {
        for (var actor of actors)
        {
          if (rentalId.localeCompare(actor.rentalId)===0)
          {
            actor.payment[0].amount=rental_price;
            actor.payment[1].amount=0.3*rental_price;
            actor.payment[2].amount=insurance;
            actor.payment[3].amount=Treasury;
            actor.payment[4].amount=Virtuo;
            break;

          }
        }
      }

      function Step5() {
        console.log("Step5");
        var ac = [{
          'rentalId': '893a04a3-e447-41fe-beec-9a6bfff6fdb4',
          'payment': [{
            'who': 'driver',
            'type': 'debit',
            'amount': 0
          }, {
            'who': 'partner',
            'type': 'credit',
            'amount': 0
          }, {
            'who': 'insurance',
            'type': 'credit',
            'amount': 0
          }, {
            'who': 'treasury',
            'type': 'credit',
            'amount': 0
          }, {
            'who': 'virtuo',
            'type': 'credit',
            'amount': 0
          }]
        }, {
          'rentalId': 'bc16add4-9b1d-416c-b6e8-2d5103cade80',
          'payment': [{
            'who': 'driver',
            'type': 'debit',
            'amount': 0
          }, {
            'who': 'partner',
            'type': 'credit',
            'amount': 0
          }, {
            'who': 'insurance',
            'type': 'credit',
            'amount': 0
          }, {
            'who': 'treasury',
            'type': 'credit',
            'amount': 0
          }, {
            'who': 'virtuo',
            'type': 'credit',
            'amount': 0
          }]
        }, {
          'rentalId': '8c1789c0-8e6a-48e3-8ee5-a6d4da682f2a',
          'payment': [{
            'who': 'driver',
            'type': 'debit',
            'amount': 0
          }, {
            'who': 'partner',
            'type': 'credit',
            'amount': 0
          }, {
            'who': 'insurance',
            'type': 'credit',
            'amount': 0
          }, {
            'who': 'treasury',
            'type': 'credit',
            'amount': 0
          }, {
            'who': 'virtuo',
            'type': 'credit',
            'amount': 0
          }]
        }];
        for (var rental of rentals)
        {
          for (var car of cars)
          {
            
            if (car.id.localeCompare(rental.carId)===0)
            {
           /*    console.log("Driver id : ");
              console.log(rental.id); */
              const date1 = new Date(rental.pickupDate);
              const date2 = new Date(rental.returnDate);
        
              /* console.log("Difference in days : ");
              console.log( (date2-date1)/(24*60*60*1000));
              console.log("Price per Day : ");
              console.log(car.pricePerDay); */
              var difference = (date2 - date1)/(24*60*60*1000)
      
              var price_time = difference*car.pricePerDay;
        
              // console.log("Price (time) :");
              // console.log(price_time);
             /*  console.log("Distance (km): ");
              console.log(rental.distance);
              console.log("Price per km");
              console.log(car.pricePerKm); */
        
              var price_distance = rental.distance * car.pricePerKm;
          
              // console.log("Price (distance) :");
              // console.log(price_distance);
        
              var rental_price = price_time + price_distance;
      
              if (difference>1 && difference <4)
              {
                rental_price = 0.9 * rental_price;
              }
              else if (difference >4 && difference <10 )
              {
                rental_price = 0.7* rental_price;
              } 
              else if (difference > 10)
              {
                rental_price = 0.5 * rental_price;
              }
      
              
              var insurance = 0.15* rental_price;
              var Treasury = 1* difference;
              var Virtuo = 0.3*rental_price - insurance - Treasury;
              if (rental.options.deductibleReduction==true)
              {
                
                Virtuo = 4*difference;
              }
              rental_price +=4*difference;
            /*   console.log("Rental Price : ");
              console.log(rental_price);
              console.log("Insurance : ");
              console.log(insurance);
              console.log("Treasury : ");
              console.log(Treasury);
              console.log("Virtuo : ");
              console.log(Virtuo); */
              addToActors(rental.id,ac,rental_price,insurance,Treasury,Virtuo);
              break;
            }
    
    
          }
          
        }

        for (var a of ac)
              {
                console.log(a.rentalId);
                for (var p of a.payment)
                {
                  console.log(p.who);
                  console.log(p.type);
                  console.log(p.amount);
                }
              }
        }
          Step5();


console.log(cars);
console.log(rentals);
console.log(actors);

