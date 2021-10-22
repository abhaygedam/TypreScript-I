var nam = "abhay";
var age = 22;
var isFetching = false;
var ar = [1, 2, 3, 4, 5];
var ar2 = ["a", "b", "c", "d", "e", "f"];
var tulip = ["abhay", true];
var data;
(function (data) {
    data[data["user"] = 0] = "user";
    data[data["SuperUser"] = 1] = "SuperUser";
    data[data["Admin"] = 2] = "Admin";
    data[data["SuperAdmin"] = 3] = "SuperAdmin";
})(data || (data = {}));
function Product(x, y) {
    return x * y;
}
function Divide(x, y) {
    return x / y;
}
function Print(name) {
    console.log(name);
}
