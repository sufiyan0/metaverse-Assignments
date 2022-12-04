function val(car,make, model,color,arguments){
    return obj =  {
        make: car,
        color : color,
        Model : model,
        ...arguments
    }
}
console.log(val('Fortuner','Toyota',2022,'Black',  ['double AC', 'Power Staring']));