function solve(input) {
    var s = parseInt(input[0]),
        count = 0,
        weelCount = 0,
        trickesWeels = 0,
        carsWeels = 0,
        trucksWeels = 0;

    for (var trikes = 0; ; trikes++) {
        trickesWeels = trikes * 3;
        if (trickesWeels > s) {
            break;
        }
        else if (trickesWeels === s) {
            count++;
            break;
        }

        for (var cars = 0; ; cars++) {
            carsWeels = trickesWeels + (cars * 4);
            if (carsWeels > s) {
                break;
            }
            else if (carsWeels === s) {
                count++;
                break;
            }

            for (var trucks = 0; ; trucks++) {
                trucksWeels = carsWeels + (trucks * 10);
                if (trucksWeels > s) {
                    break;
                }
                else if (trucksWeels === s) {
                    count++;
                    break;
                }
            }
        }
    }

    console.log(count);
}(function () {
    var array = ['40'];    solve(array);}());