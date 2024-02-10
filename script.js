function calculate() {


    var date = document.getElementById("date")
    var date1 = document.getElementById("date1")

    var result = document.getElementById("result")

    var datevalue = Number(date.value)
    var date1value = Number(date1.value)

    var total = date1value - datevalue

    result.textContent=total

}